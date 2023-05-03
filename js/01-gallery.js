import { galleryItems } from './gallery-items.js';

// Change code below this line

function galleryItemsMakeUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"

                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
            </li>`;
    })
    .join('');
}

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('beforeend', galleryItemsMakeUp(galleryItems));
galleryRef.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  } else {
    const instance = basicLightbox.create(`
                <img src="${e.target.dataset.source}" width="800" height="600">
            `);

    instance.show();

    const modalRef = document.querySelector('.basicLightbox');

    modalRef.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModal);

    function removerEventListener() {
      document.removeEventListener('keydown', closeModal);
    }

    function closeModal(event) {
      if (event.key === 'Escape' || event.button === 0) {
        instance.close();

        removerEventListener();
      }
    }
  }
}
