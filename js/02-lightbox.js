import { galleryItems } from './gallery-items.js';
// Change code below this line

function galleryItemsMakeUp(galleryItems){
   return galleryItems.map(({preview, original, description}) => {
            return `
            <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"

                src="${preview}"
                alt="${description}"
            />
            </a>
            </li>`;
        }).join('');

};

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMakeUp(galleryItems));
galleryRef.addEventListener('click', onGalleryImageClick);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function onGalleryImageClick(e){

    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')){
        return
    } else {
        lightbox.open(e);
    };
}

