function showModal(id) {
    var element = document.getElementById(id);
    element.classList.add("show-modal");
}

function closeModal(id) {
    var element = document.getElementById(id);
    element.classList.remove("show-modal");
}