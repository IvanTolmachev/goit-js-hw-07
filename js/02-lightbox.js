import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const makeListImgs = renderListGallery(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", makeListImgs);

function renderListGallery(makeImageItems) {
  return makeImageItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`,
    ""
  );
}
new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 25,
});
