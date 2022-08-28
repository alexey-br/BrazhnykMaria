import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import * as cardsLists from './postcards-list';

let gallery = new SimpleLightbox('.gallery a');

const gallerySelectorRef = document.querySelector('.post-nav__list');
const galleryRef = document.querySelector('.gallery');

gallerySelectorRef.addEventListener('click', onGallerySelect);

function onGallerySelect(e) {
  const galleryNumber = e.target.dataset.cards;

  const galleryMarkup = createGalleryMarkup(cardsLists[galleryNumber]);
  galleryRef.classList.add('hidden');
  setTimeout(randerGallery, 250, galleryMarkup);
}

function randerGallery(galleryMarkup) {
  galleryRef.innerHTML = galleryMarkup;
  galleryRef.classList.remove('hidden');
  gallery.refresh();
}

function createGalleryMarkup(cardsList) {
  return cardsList
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
           <a href="./cards/${original}" class="gallery__link">
             <img src="./cards/${preview}"
               alt="${description}" class="gallery__image" />
           </a>
         </div>`
    )
    .join('');
}
