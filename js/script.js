
let burgerBtn = document.getElementById('burger');
let links = document.getElementById('links');
let quitBtn = document.getElementById('quit');

function showLinks() {
    burgerBtn.style.display = 'none';
    links.style.display = 'flex';
    quitBtn.style.display = 'block';
}

function hideLinks() {
    burgerBtn.style.display = 'block';
    burgerBtn.style.padding = '10px';
    links.style.display = 'none';
    quitBtn.style.display = 'none';
}