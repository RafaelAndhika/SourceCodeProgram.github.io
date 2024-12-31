function startCelebration() {
    const nameInput = document.getElementById('partner-name').value;

    if (nameInput.trim() === "") {
        alert("Please enter a name!");
        return;
    }

    // Menampilkan pesan romantis untuk pasangan
    document.getElementById('to-partner').innerText = `Dari Mas untuk Dede, ${nameInput} 🤍`;
    document.getElementById('message-display').innerText = "HAPPY NEW YEAR CINTAKUU DEDEE SAYANGG, Timakasii yaa dedee sudaa mauu menemanii mass di tahun 2024 ini, I just to say that thank you for coming to my life and thank you for always there for me, I hope you know how much I appreciate you a lot. Timakasii sudaa menjadi bagian hidup mass, mass harap di tahun yang baru banyak hal hal baik yang datang untuk kita berdua, tentunya untuk hubungan kita semoga senantiasa tuhan memberkati hubungan kita di tahun yang baru, kita lewati tahun ini dengan bersama sama yaa dedee walaupun nanti mungkin banyak cobaan dan godaan, permasalah permasalahan, semogaa kitaa bisa menyelesaikan bisa melawan masalah cobaan itu bersama yaa, mass sangat sangat cintaa sama dedee, mas harap dedee jugaa cintaa sekali sama mass, Thankyouu for all my babyyy my lovee!!!!🤍🤍🤍🤍🤍";
    document.getElementById('romantic-quote').innerText = "I love you endlessly 🤍";

    // Menyembunyikan input overlay dan menampilkan konten utama
    document.getElementById('input-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    // Memulai musik latar
    const music = document.getElementById('bg-music');
    music.play();

    // Memulai efek kembang api dan hati
    setInterval(createFirework, 300);
    setInterval(createHeart, 300);
}


function createFirework() {
    const fireworks = document.getElementById('fireworks');
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;
    firework.style.animationDelay = `${Math.random() * 0.5}s`;
    firework.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    fireworks.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 1500);
}

function createHeart() {
    const hearts = document.getElementById('hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.bottom = `-20px`;
    heart.style.animationDelay = `${Math.random() * 5}s`;

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
function typeEffect(element, text, speed) {
    let i = 0;
    const interval = setInterval(() => {
        element.innerHTML += text.charAt(i);
        i++;
        if (i > text.length - 1) {
            clearInterval(interval);
        }
    }, speed);
}

// Menampilkan pesan Happy New Year dengan efek ketikan
setTimeout(() => {
    const happyNewYearMessage = "";
    typeEffect(document.getElementById('happy-new-year'), happyNewYearMessage, 100);
}, 3000);


