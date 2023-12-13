const contenedor = document.querySelector('.contenedor');
const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const message = document.querySelector('#message');

let heartsInterval;

yesBtn.addEventListener('click', function () {
    alert('Sabía que ibas a decir que sí uwu');
    createHearts('https://c0.klipartz.com/pngpicture/878/647/gratis-png-iphone-x-apple-color-emoji-ios-corazon-emoji.png', contenedor);
    createHearts('https://www.adslzone.net/app/uploads/2018/04/emoticono-whatsapp-83.png?x=480&quality=40', contenedor);
    hideNoButton();
});

function createHearts(imageUrl, container) {
    heartsInterval = setInterval(() => {
        const heart = document.createElement('img');
        heart.src = imageUrl;
        heart.classList.add('heart', 'animate__animated', 'animate__heartBeat');

        const randomX = Math.random() * (container.clientWidth - 60);
        const randomY = Math.random() * (container.clientHeight - 50);
        const randomSize = Math.random() * 80 + 20;

        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY}px`;
        heart.style.width = `${randomSize}px`;
        heart.style.height = `${randomSize}px`;

        container.appendChild(heart);

        setTimeout(() => {
            container.removeChild(heart);
        }, 3000);
    }, 500); // Ajusta el tiempo según tus preferencias
}

function hideNoButton() {
    noBtn.style.display = 'none';
}

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});

// Agrega un evento al botón "No" para detener la lluvia de corazones
noBtn.addEventListener('click', function () {
    clearInterval(heartsInterval);
});
