console.log("javascript attached");

const openModal = document.querySelector("#open-modal");
const Dialog = document.querySelector("#dialog");
const closeButton = document.querySelector("#close-button");

openModal.addEventListener("click", openDialogFunction);
closeButton.addEventListener("click", closeDialogFunction);

function openDialogFunction(e) {
    Dialog.showModal();
}

function closeDialogFunction(e) {
    Dialog.close();
}