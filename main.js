const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = [
    "https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/930/795/688/anime-tokyo-ghoul-re-enji-koma-hinami-fueguchi-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/444/553/202/digital-art-artwork-anime-anime-boys-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1006/109/158/boku-no-hero-academia-midoriya-izuku-bakug%C5%8D-katsuki-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/106/383/594/anime-slam-dunk-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/326/403/703/1024x768-anime-conan-conan-edogawa-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/365/724/10/hunter-x-hunter-gon-cs-killua-zoldyck-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/886/487/711/dragon-ball-z-sayan-son-goku-son-gohan-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/711/761/110/one-piece-kaido-one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"
];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);