import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import * as cardsLists from './postcards-list';

let gallery = new SimpleLightbox('.post-gallery a');

const gallerySelectorRef = document.querySelector('.post-nav__list');
const galleryRef = document.querySelector('.post-gallery');

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
        `<div class="post-gallery__item">
           <a href="./cards/${original}" class="post-gallery__link">
             <img src="./cards/${preview}"
               alt="${description}" class="post-gallery__image" />
           </a>
         </div>`
    )
    .join('');
}
