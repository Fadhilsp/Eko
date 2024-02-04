function openImage(imageSrc, title, artist) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    overlay.innerHTML = `
        <img src="${imageSrc}" alt="${title}">
        <div class="image-info">
            <h3>${title}</h3>
            <p>${artist}</p>
        </div>
    `;

    overlay.addEventListener('click', closeImage);
    document.body.appendChild(overlay);

    document.body.style.overflow = 'hidden';
}

function closeImage() {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.remove();
        document.body.style.overflow = 'auto';
    }
}
