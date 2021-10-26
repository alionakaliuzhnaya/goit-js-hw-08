import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';
const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.setCurrentTime(localStorage.getItem(localStorageKey)).then(function (time) {
  time = localStorage.getItem(localStorageKey);
});
player.on('timeupdate', throttle(onPlay, 1000));
