// Mengambil referensi elemen HTML yang dibutuhkan
const backgroundElement = document.getElementById('background');
const characterElement = document.getElementById('character');
const characterNameElement = document.getElementById('character-name');
const dialogueTextElement = document.getElementById('dialogue-text');
const nextButton = document.getElementById('next-button');
const choicesContainer = document.getElementById('choices-container');

// --- Data Cerita Bab 1 ---
// Setiap objek dalam array ini adalah satu "scene" atau "state" dalam cerita
const storyChapter1 = [
    // Scene 0: Hujan Deras di Halte - Zan bicara
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        character: "../images/characters/zan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        name: "Zan",
        text: "Gimana? Masih mau nunggu angkutan yang nggak bakal lewat? Udah jam segini, nggak ada lagi. Atau lo mau tidur di sini sampai pagi?",
        next: 1 // Lanjut ke scene berikutnya
    },
    // Scene 1: Ramalia ragu, Zan mendesak
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        character: "", // Mungkin Ramalia tidak langsung terlihat jelas, atau hanya siluet
        name: "Narator", // Atau nama karakter lain jika dia berbicara dalam hati
        text: "Ramalia merasa dilema. Di satu sisi, reputasi Zan dan keraguannya akan 'niat' Zan membuatnya enggan. Di sisi lain, dia benar-benar tidak punya pilihan lain. Dia juga tidak ingin Zan menganggapnya sok jual mahal atau meremehkan bantuannya.",
        next: 2 // Lanjut ke scene pilihan
    },
    // Scene 2: Pilihan Ramalia
    {
        type: "choice",
        background: "../images/backgrounds/jalan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        character: "../images/characters/zan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        text: "Apa yang akan Ramalia lakukan?",
        choices: [
            { text: "Baiklah, terima kasih, Zan.", next: 3 }, // Mengiyakan, lanjut ke cerita
            { text: "Tidak, terima kasih. Aku akan menunggu.", next: 4 } // Menolak, Bad Ending Bab 1
        ]
    },
    // Rute Pilihan 1: Ramalia Menerima (Lanjut Cerita)
    // Scene 3: Zan Melesat Pergi (Jika Ramalia setuju)
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        character: "../images/characters/zan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        name: "Zan",
        text: "Oke, naik.",
        next: 5 // Lanjut ke perjalanan pulang
    },
    // Rute Pilihan 2: Ramalia Menolak (Bad Ending Bab 1)
    // Scene 4: Ramalia Menolak Zan & Game Over
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        character: "",
        name: "Ramalia",
        text: "Tidak, terima kasih, Zan. Aku... aku akan menunggu saja.",
        next: 500 // Indeks khusus untuk Bad Ending atau Game Over
    },
    // Scene 5: Perjalanan Pulang yang Canggung (Jika Ramalia Menerima)
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        character: "", // Mungkin tidak ada karakter yang jelas terlihat di perjalanan
        name: "Narator",
        text: "Ramalia akhirnya naik ke motor Zan. Sepanjang perjalanan, tidak ada dialog berarti. Hanya suara motor Zan yang membelah hujan. Ramalia berpegangan erat karena dingin dan takut terpeleset, menciptakan kedekatan fisik yang tidak terduga.",
        next: 6
    },
    // Scene 6: Tiba di Rumah Ramalia
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png", // <--- PERUBAHAN NAMA FILE DI SINI
        character: "../images/characters/zan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        name: "Ramalia",
        text: "Terima kasih banyak, Zan. Aku... aku tidak tahu harus bagaimana kalau tidak ada kamu.",
        next: 7
    },
    // Scene 7: Zan diam, Ramalia menawarkan minuman
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png", // <--- PERUBAHAN NAMA FILE DI SINI
        character: "../images/characters/zan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        name: "Narator",
        text: "Zan hanya mengangguk pelan, tidak langsung pergi. Ramalia, melihatnya masih terdiam dan mungkin kedinginan, menawarkan sesuatu.",
        next: 8
    },
    // Scene 8: Pilihan Zan (diputuskan oleh alur kita, yaitu Menerima)
    {
        type: "dialogue", // Ini akan kita simulasikan sebagai 'pilihan' internal game
        background: "../images/backgrounds/rumah.png", // <--- PERUBAHAN NAMA FILE DI SINI
        character: "../images/characters/zan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        name: "Ramalia",
        text: "Zan, apa kamu mau... masuk sebentar? Aku bisa buatkan teh hangat atau kopi. Kamu pasti kedinginan.",
        next: 9 // Lanjut ke adegan Zan menerima dan masuk rumah
    },
    // Scene 9: Zan Menerima Tawaran (awal Bab 2 secara konsep)
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png", // <--- PERUBAHAN NAMA FILE DI SINI
        character: "../images/characters/zan.png", // <--- PERUBAHAN NAMA FILE DI SINI
        name: "Zan",
        text: "Boleh juga.",
        next: 999 // Indeks khusus untuk menandakan Akhir Bab 1 dan Transisi ke Bab 2
    },

    // --- Special Endings / Transitions ---
    // Indeks untuk Bad Ending Bab 1
    {
        type: "ending",
        text: "Ramalia akhirnya tertidur di halte, kedinginan dan kehujanan. Keesokan paginya, ia ditemukan oleh patroli keamanan kampus dalam keadaan demam. Dia melewatkan ujian penting dan harus mengulang semester. Hubungannya dengan Zan tidak pernah berkembang, dan mereka kembali menjadi dua orang asing yang kebetulan satu kampus. Sebuah keputusan kecil di malam hujan mengubah segalanya.",
        label: "BAD_ENDING_BAB1"
    },
    // Indeks untuk Transisi ke Bab 2
    {
        type: "ending",
        text: "Malam itu telah menciptakan ikatan yang tak terduga. Sebuah pintu baru telah terbuka.",
        label: "TRANSITION_TO_BAB2"
    }
];

let currentSceneIndex = 0;

// Fungsi untuk memuat dan menampilkan scene
function loadScene(sceneIndex) {
    // Sembunyikan tombol "Lanjutkan" dan "Pilihan" secara default
    nextButton.style.display = 'block';
    choicesContainer.style.display = 'none';
    choicesContainer.innerHTML = ''; // Kosongkan pilihan sebelumnya

    const scene = storyChapter1[sceneIndex];

    // --- Penanganan Akhir Bab / Ending ---
    if (sceneIndex === 500) { // Bad Ending Bab 1
        backgroundElement.src = "../images/backgrounds/jalan.png"; // <--- PERUBAHAN NAMA FILE DI SINI
        characterElement.style.opacity = 0; // Sembunyikan karakter
        characterNameElement.textContent = "";
        dialogueTextElement.textContent = scene.text;
        nextButton.style.display = 'none'; // Sembunyikan tombol lanjutkan
        // Tampilkan tombol untuk kembali ke menu atau restart
        const restartButton = document.createElement('button');
        restartButton.classList.add('choice-button'); // Bisa reuse gaya button pilihan
        restartButton.textContent = "Kembali ke Layar Judul";
        restartButton.onclick = () => window.location.href = '../index.html';
        choicesContainer.appendChild(restartButton);
        choicesContainer.style.display = 'flex';
        return;
    }

    if (sceneIndex === 999) { // Transisi ke Bab 2
        backgroundElement.src = scene.background || backgroundElement.src;
        characterElement.style.opacity = 0;
        characterNameElement.textContent = "";
        dialogueTextElement.textContent = scene.text;
        nextButton.style.display = 'none'; // Sembunyikan tombol lanjutkan

        // Langsung arahkan ke bab2.html setelah beberapa detik atau dengan tombol
        setTimeout(() => {
             window.location.href = '../bab2/bab2.html';
        }, 3000); // Tunggu 3 detik sebelum redirect
        return;
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

// Memulai game Bab 1 saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    loadScene(currentSceneIndex);
});