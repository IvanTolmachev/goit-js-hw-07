import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

/* создание елемента галереи*/

const renderListGallery = (makeImageItems) =>
  makeImageItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<div class="gallery__item"><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</div>`,
    ""
  );

galleryEl.insertAdjacentHTML("afterbegin", renderListGallery(galleryItems));

/*событие*/

galleryEl.addEventListener("click", onAllGalleryClick);

function onAllGalleryClick(e) {
  const imageLink = e.target.dataset.source;

  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const makeImage = `<img
      src="${imageLink}"
      width="800"
      height="600"
      >`;

  const instance = basicLightbox.create(makeImage, {
    onShow: () => {
      window.addEventListener("keydown", onEscKeyClick);
    },
    onClose: () => {
      window.removeEventListener("keydown", onEscKeyClick);
    },
  });
  instance.show();

  function onEscKeyClick(e) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = e.code === ESC_KEY_CODE;
    if (isEscKey) {
      instance.close();
    }
  }
}
