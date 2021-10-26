// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGalleryItem = createGalleryMakeup(galleryItems);

function createGalleryMakeup(gallery) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>`,
    )
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', createGalleryItem);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250ms',
});
