let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.anime-name1', {delay: 200, origin: 'top'});
sr.reveal('.anime-img', {delay: 450, origin: 'top'});
sr.reveal('.icons', {delay: 500, origin: 'left'});

const button = document.querySelector('.ctaa'); // Menggunakan selector untuk tombol
const playerContainer = document.getElementById('youtube-player-container');
const youtubePlayer = document.getElementById('youtube-player');

// URL dari video YouTube yang akan diputar
const videoUrl = "https://www.youtube.com/embed/hle1wSBedkk?autoplay=1"; // Ganti dengan ID video YouTube yang benar

// Event handler untuk tombol Watch Trailer
button.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah aksi default tombol

    // Jika player sedang tersembunyi, tampilkan dan set video
    if (playerContainer.style.display === 'none' || playerContainer.style.display === '') {
        playerContainer.style.display = 'block'; // Tampilkan player YouTube
        youtubePlayer.src = videoUrl; // Set URL video YouTube ke iframe

        // Gulir ke YouTube player
        playerContainer.scrollIntoView({ behavior: 'smooth' }); // Gulir dengan efek halus
    } else {
        // Jika player sedang tampil, sembunyikan dan berhentikan video
        playerContainer.style.display = 'none'; // Sembunyikan player YouTube
        youtubePlayer.src = ''; // Kosongkan src untuk menghentikan video
    }
});

