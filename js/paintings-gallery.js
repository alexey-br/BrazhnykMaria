const paintingsGalleryData = [
  { 
    original: './images/portfolio/painting-1.jpg',
    original2x: './images/portfolio/painting-1.jpg',
    description: 'картина',
  },
  { 
    original: './images/portfolio/painting-2.jpg',
    original2x: './images/portfolio/painting-2.jpg',
    description: 'картина',
  },
  { 
    original: './images/portfolio/painting-3.jpg',
    original2x: './images/portfolio/painting-3.jpg',
    description: 'картина',
  },
  { 
    original: './images/portfolio/painting-4.jpg',
    original2x: './images/portfolio/painting-4.jpg',
    description: 'картина',
  },
  { 
    original: './images/portfolio/painting-5.jpg',
    original2x: './images/portfolio/painting-5.jpg',
    description: 'картина',
  },
  { 
    original: './images/portfolio/painting-6.jpg',
    original2x: './images/portfolio/painting-6.jpg',
    description: 'картина',
  },
  { 
    original: './images/portfolio/painting-7.jpg',
    original2x: './images/portfolio/painting-7.jpg',
    description: 'картина',
  },
  { 
    original: './images/portfolio/painting-8.jpg',
    original2x: './images/portfolio/painting-8.jpg',
    description: 'картина',
  },
  { 
    original: './images/portfolio/painting-9.jpg',
    original2x: './images/portfolio/painting-9.jpg',
    description: 'картина',
  },
  { 
    original: './images/portfolio/painting-10.jpg',
    original2x: './images/portfolio/painting-10.jpg',
    description: 'картина',
  }
]


// -----------------------------------------------------------------------

const paintingsGalleryRef = document.querySelector('.js-paintings-gallery');

const paintingsGalleryMarkup = paintingsGalleryData.map( ({original, original2x, description}) => {
  return `<li class="paintings__item" data-aos="fade-up">
              <img
                srcset="${original} 1x, ${original2x} 2x"
                src="${original}"
                alt="${description}"
                loading="lazy"
              />
            </li>`
}).join('');

paintingsGalleryRef.innerHTML = paintingsGalleryMarkup;
	