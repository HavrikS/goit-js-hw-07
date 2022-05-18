import { galleryItems } from './gallery-items.js';


const gallery = document.querySelector('.gallery');


gallery.addEventListener('click', (e) => {
    e.preventDefault(); onGallaryClick(e)
});

const galleryEl = createGallery(galleryItems);
gallery.insertAdjacentHTML("afterbegin", galleryEl);

function createGallery(images) {
    return images.map(({ preview, original, description }) =>        
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`).join("");
};

function onGallaryClick(e) {      
    if (!e.target.classList.contains('gallery__image')) {
        return
    }
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}">
    `, {
		onShow: () => document.addEventListener('keydown', onEscapekeydow, false),
		onClose: () => document.removeEventListener('keydown', onEscapekeydow, false)
	})    
    instance.show()
    function onEscapekeydow(event) {
        if (event.key === 'Escape') {
            instance.close();        
        }return
    };
};






