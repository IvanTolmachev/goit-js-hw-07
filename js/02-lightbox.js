import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const renderListGallery = (makeImageItems) =>
  makeImageItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`,
    ""
  );

galleryEl.insertAdjacentHTML("afterbegin", renderListGallery(galleryItems));
galleryEl.addEventListener("click", onAllGalleryClick);

function onAllGalleryClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  new SimpleLightbox(".gallery a", {
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
