/* -------------------------------------------------------------------------- */
/*                                    todo                                    */
/* -------------------------------------------------------------------------- */
//todo Please, make the modal match the design (mobile and desktop). The design can be found here https://www.figma.com/file/EO5AaNCuzzFL7X5gSY7HwQ/Sprint-4_-Around-The-U.S.-_-desktop-%2B-mobile?t=3hvVWRz9LUFsxyNn-6 . Pay attention, that there are 2 designs: mobile and desktop. They have different font sizes, margins, paddings, close icon positions and so on
/* -------------------------------------------------------------------------- */
/*                                    todo                                    */
/* -------------------------------------------------------------------------- */
//todo Please, make the modal match the design on 320px (mobile) screens. See how it looks in Figma https://snipboard.io/NU865i.jpg . The title font size should be 18px, and the save button font size is 14px

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileCloseButton = document.querySelector(".modal__close-button");
const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const profileTitleInput = document.querySelector("[name='title']");
const profileDescriptionInput = document.querySelector("[name='description']");
const profileForm = document.querySelector("#profile-form");
const cardListEl = document.querySelector(".card__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;
  return cardElement;
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});
profileCloseButton.addEventListener("click", closePopup);

profileForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardListEl.prepend(cardElement);
});
