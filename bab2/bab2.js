// Mengambil referensi elemen HTML yang dibutuhkan
const backgroundElement = document.getElementById('background');
const characterElement = document.getElementById('character');
const characterNameElement = document.getElementById('character-name');
const dialogueTextElement = document.getElementById('dialogue-text');
const nextButton = document.getElementById('next-button');
const choicesContainer = document.getElementById('choices-container');

// --- Data Cerita Bab 2 ---
// Melanjutkan dari Zan menerima tawaran untuk masuk rumah Ramalia
const storyChapter2 = [
    // Scene 0: Di Dalam Rumah Ramalia - Zan & Ramalia di ruang tamu
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-ramalia-normal.png",
        name: "Ramalia",
        text: "Duduk saja, Zan. Maaf kalau berantakan. Aku siapkan minum sebentar.",
        next: 1
    },
    // Scene 1: Observasi Zan
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-zan-normal.png", // Fokus pada Zan yang mengamati
        name: "Zan",
        text: "Rapi kok.", // Zan mungkin hanya gumam, tapi pandangannya berkeliling
        next: 2
    },
    // Scene 2: Narasi observasi rumah
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "", // Tidak ada karakter yang bicara
        name: "Narator",
        text: "Zan melihat sekeliling. Tumpukan buku pelajaran di meja, beberapa piagam penghargaan di dinding, dan sebuah gitar akustik di sudut ruangan. Ini adalah sisi Ramalia yang belum pernah Zan lihat di kampus.",
        next: 3
    },
    // Scene 3: Ramalia kembali dengan minuman
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-ramalia-normal.png",
        name: "Ramalia",
        text: "Ini teh hangatnya. Semoga bisa menghangatkan badan.",
        next: 4
    },
    // Scene 4: Percakapan canggung awal
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-zan-normal.png",
        name: "Zan",
        text: "Makasih.",
        next: 5
    },
    // Scene 5: Ramalia berinisiatif memulai percakapan
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-ramalia-normal.png",
        name: "Ramalia",
        text: "Aku tidak menyangka kamu mau menolongku tadi. Terima kasih banyak, Zan.",
        next: 6
    },
    // Scene 6: Respon Zan yang sedikit melunak
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-zan-normal.png",
        name: "Zan",
        text: "Bukan masalah. Lain kali hati-hati aja kalau pulang malam.",
        next: 7
    },
    // Scene 7: Momen Pencerahan untuk Ramalia
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-ramalia-normal.png",
        name: "Narator",
        text: "Ramalia terkejut. Nada bicara Zan tidak sedatar yang ia kira. Ada sedikit perhatian di baliknya. Ia mulai melihat Zan dari sudut pandang yang berbeda.",
        next: 8
    },
    // Scene 8: Percakapan tentang kampus/The Fist (awal dari rasa penasaran)
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-ramalia-normal.png",
        name: "Ramalia",
        text: "Ngomong-ngomong, aku dengar banyak hal tentang gengmu... The Fist, kan? Kalian sering balapan?",
        next: 9
    },
    // Scene 9: Zan merespon, mungkin sedikit terbuka
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-zan-normal.png",
        name: "Zan",
        text: "Kadang. Itu cuma hobi. Kami punya aturan sendiri, bukan cuma asal balap liar.",
        next: 10
    },
    // Scene 10: Perpisahan di rumah Ramalia
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-zan-normal.png",
        name: "Zan",
        text: "Aku harus pulang sekarang. Udah larut.",
        next: 11
    },
    // Scene 11: Ramalia mengantar
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "../images/characters/char-ramalia-normal.png",
        name: "Ramalia",
        text: "Hati-hati di jalan, Zan. Dan sekali lagi, terima kasih banyak.",
        next: 12
    },
    // Scene 12: Momen kontak mata lebih lama
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-ramalia-house-interior.jpg",
        character: "",
        name: "Narator",
        text: "Ada kontak mata yang lebih lama, senyuman tipis dari Ramalia, dan anggukan Zan yang terasa lebih berarti. Malam itu telah menanam benih sesuatu yang baru di antara mereka. Pagi selanjutnya di kampus...",
        next: 13 // Lanjut ke adegan kampus
    },
    // Scene 13: Kampus - Ramalia & Teman
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-campus-yard.jpg", // Latar belakang kampus
        character: "../images/characters/char-ramalia-normal.png",
        name: "Teman Ramalia", // Kamu bisa ganti dengan nama teman karakter
        text: "Ramalia! Aku dengar kamu pulang sama Zan 'The Fist' semalam?! Seriusan? Kamu baik-baik aja kan?",
        next: 14
    },
    // Scene 14: Reaksi Ramalia terhadap gosip
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-campus-yard.jpg",
        character: "../images/characters/char-ramalia-normal.png",
        name: "Ramalia",
        text: "Dia cuma menolongku karena hujan. Nggak ada apa-apa kok.",
        next: 15
    },
    // Scene 15: Narasi internal Ramalia tentang Zan
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-campus-yard.jpg",
        character: "",
        name: "Narator",
        text: "Ramalia berusaha meyakinkan temannya, tapi dalam hati, pikirannya masih dipenuhi oleh Zan. Siapa sebenarnya anak motor itu di balik reputasinya?",
        next: 16
    },
    // Scene 16: Zan melintas di kampus
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-campus-yard.jpg",
        character: "../images/characters/char-zan-normal.png",
        name: "Narator",
        text: "Beberapa hari kemudian, Ramalia berpapasan dengan Zan di koridor kampus. Zan seperti biasa, dengan tatapan dinginnya. Tapi kali ini, ia merasa ada sesuatu yang berbeda di tatapan Zan.",
        next: 17
    },
    // Scene 17: Pilihan Ramalia (Apakah akan menyapa Zan?)
    {
        type: "choice",
        background: "../images/backgrounds/bg-campus-yard.jpg",
        character: "../images/characters/char-zan-normal.png",
        text: "Apa yang akan Ramalia lakukan?",
        choices: [
            { text: "Berani menyapa Zan.", next: 18 },
            { text: "Mengabaikannya dan lewat begitu saja.", next: 19 }
        ]
    },
    // Scene 18: Ramalia menyapa Zan (Rute Interaksi Lanjut)
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-campus-yard.jpg",
        character: "../images/characters/char-ramalia-normal.png",
        name: "Ramalia",
        text: "Zan... Pagi!",
        next: 20
    },
    // Scene 19: Ramalia mengabaikan Zan (Rute Interaksi Terhambat)
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-campus-yard.jpg",
        character: "",
        name: "Narator",
        text: "Ramalia menunduk, mencoba terlihat sibuk, dan berjalan cepat melewati Zan. Ia merasa sedikit menyesal.",
        next: 21
    },
    // Scene 20: Zan membalas sapaan (jika Ramalia menyapa)
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-campus-yard.jpg",
        character: "../images/characters/char-zan-normal.png",
        name: "Zan",
        text: "Pagi. Belajar terus?",
        next: 22
    },
    // Scene 21: Zan melihat Ramalia lewat (jika Ramalia mengabaikan)
    {
        type: "dialogue",
        background: "../images/backgrounds/bg-campus-yard.jpg",
        character: "../images/characters/char-zan-normal.png",
        name: "Zan",
        text: "(Dalam hati Zan: Dasar cewek, sok cuek.)", // Ekspresi Zan mungkin sedikit kesal atau geli
        next: 22
    },
    // Scene 22: Akhir Bab 2 - Pemicu ke cerita selanjutnya
    {
        type: "ending",
        text: "Pertemuan di malam hujan itu dan kejadian di kampus telah menempatkan Zan dan Ramalia pada jalur yang tidak terduga. Sebuah benih rasa penasaran telah tertanam, siap tumbuh dalam babak selanjutnya dari kisah mereka.",
        label: "END_BAB2_CONTINUE"
    }
];

let currentSceneIndex = 0;

// Fungsi untuk memuat dan menampilkan scene
function loadScene(sceneIndex) {
    // Sembunyikan tombol "Lanjutkan" dan "Pilihan" secara default
    nextButton.style.display = 'block';
    choicesContainer.style.display = 'none';
    choicesContainer.innerHTML = ''; // Kosongkan pilihan sebelumnya

    const scene = storyChapter2[sceneIndex];

    // --- Penanganan Akhir Bab / Ending ---
    if (!scene || scene.type === "ending") { // Jika scene tidak ditemukan atau tipe "ending"
        backgroundElement.style.opacity = 0; // Fade out background
        characterElement.style.opacity = 0; // Fade out character
        characterNameElement.textContent = "";
        dialogueTextElement.textContent = scene ? scene.text : "End of Chapter 2.";
        nextButton.style.display = 'none'; // Sembunyikan tombol lanjutkan

        // Untuk bab ini, kita akan membuat tombol "Akhiri Demo"
        const endDemoButton = document.createElement('button');
        endDemoButton.classList.add('choice-button');
        endDemoButton.textContent = "Akhiri Demo (Kembali ke Judul)";
        endDemoButton.onclick = () => window.location.href = '../index.html'; // Kembali ke halaman judul
        choicesContainer.appendChild(endDemoButton);
        choicesContainer.style.display = 'flex';

        return; // Hentikan eksekusi lebih lanjut
    }

    // --- Loading Scene Normal ---
    // Update Background
    if (scene.background) {
        backgroundElement.src = scene.background;
        backgroundElement.style.opacity = 1;
    } else {
        backgroundElement.style.opacity = 0; // Sembunyikan jika tidak ada background
    }

    // Update Character
    if (scene.character) {
        characterElement.src = scene.character;
        characterElement.style.opacity = 1;
    } else {
        characterElement.style.opacity = 0; // Sembunyikan jika tidak ada karakter
    }

    // Update Nama Karakter dan Dialog
    characterNameElement.textContent = scene.name || "";
    dialogueTextElement.textContent = scene.text;

    // Handle Tipe Scene (Dialog atau Pilihan)
    if (scene.type === "dialogue") {
        nextButton.onclick = () => loadScene(scene.next);
    } else if (scene.type === "choice") {
        nextButton.style.display = 'none'; // Sembunyikan tombol "Lanjutkan"
        choicesContainer.style.display = 'flex'; // Tampilkan wadah pilihan

        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-button');
            button.textContent = choice.text;
            button.onclick = () => loadScene(choice.next);
            choicesContainer.appendChild(button);
        });
    }

    currentSceneIndex = sceneIndex;
}

// Memulai game Bab 2 saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    loadScene(currentSceneIndex);
});