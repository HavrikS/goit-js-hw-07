import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

const galleryEl = createGallery(galleryItems);
galleryBox.insertAdjacentHTML("afterbegin", galleryEl);

function createGallery(images) {
    return images.map(({ preview, original, description }) =>        
    `<li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`).join("");
};

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});


