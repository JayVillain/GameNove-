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
    // Scene 0: Narasi - Hujan deras, Zan di perjalanan
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "",
        name: "Narator",
        text: "Malam itu, hujan turun dengan sangat lebat. Jalanan licin dan gelap, hanya diterangi sesekali oleh lampu jalan yang buram. Zan melaju di atas motornya, menembus derasnya air hujan.",
        next: 1
    },
    // Scene 1: Narasi - Zan berhenti di halte
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Narator",
        text: "Guyuran air yang tak henti membuatnya memutuskan untuk menepi sejenak. Ia melihat sebuah halte bus di kejauhan dan menghentikan motornya di sana, berharap hujan segera reda.",
        next: 2
    },
    // Scene 2: Narasi - Zan melihat Ramalia di halte
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Narator",
        text: "Saat ia menatap ke dalam halte, Zan menyadari ia tidak sendirian. Siluet seorang gadis terlihat meringkuk di bangku halte. Semakin dekat, ia menyadari itu adalah Ramalia, teman sekelasnya yang terkenal cerdas dan populer.",
        next: 3
    },
    // Scene 3: Narator - Zan berpikir dalam hati
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "",
        name: "Narator",
        text: "Meskipun mereka satu kampus, Zan tidak pernah menyangka akan bertemu Ramalia di situasi seperti ini. Gadis yang selalu terlihat sempurna di kelas, kini tampak... rentan.",
        next: 4
    },
    // Scene 4: Zan memulai basa-basi
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Hujannya awet juga, ya.",
        next: 5
    },
    // Scene 5: Ramalia merespon dengan hati-hati
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Iya... sudah hampir satu jam aku di sini. Angkutan tidak ada yang lewat.",
        next: 6
    },
    // --- DIALOG BARU DAN LEBIH PANJANG UNTUK BASA-BASI ---
    // Scene 6: Zan bertanya lebih jauh
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Sampai jam segini? Kamu... habis ada kegiatan di kampus?",
        next: 7
    },
    // Scene 7: Ramalia menjelaskan
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Iya, ada rapat klub sains. Kupikir akan selesai lebih cepat, jadi tidak sempat memesan taksi online.",
        next: 8
    },
    // Scene 8: Zan menggodanya sedikit
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Klub sains? Pantas saja. Kutu buku sejati memang selalu punya jadwal padat.",
        next: 9
    },
    // Scene 9: Ramalia sedikit membela diri
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Bukan kutu buku. Hanya serius dengan studi. Kenapa kamu ada di sini jam segini, Zan? Tidak biasanya.",
        next: 10
    },
    // Scene 10: Zan menjelaskan sedikit, dan mulai serius
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Melewati jalur ini. Hujan deras begini, memang lebih baik menepi. Tapi ini sudah terlalu malam, Ramalia. Bahaya kalau sendirian di sini.",
        next: 11
    },
    // --- DIALOG PENAWARAN (Original Scene 6, kini lebih halus) ---
    // Scene 11: Zan menawarkan tumpangan
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Jadi gimana? Masih mau nunggu angkutan yang nggak bakal lewat? Udah jam segini, nggak ada lagi. Biar nggak kedinginan sampai sakit.",
        next: 12 // Lanjut ke Ramalia dilemma
    },
    // --- KELANJUTAN CERITA DENGAN INDEKS YANG SUDAH DISESUAIKAN ---
    // Scene 12: Ramalia ragu, Zan mendesak (original Scene 7, kini Scene 12)
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "",
        name: "Narator",
        text: "Ramalia merasa dilema. Di satu sisi, reputasi Zan dan keraguannya akan 'niat' Zan membuatnya enggan. Di sisi lain, dia benar-benar tidak punya pilihan lain. Dia juga tidak ingin Zan menganggapnya sok jual mahal atau meremehkan bantuannya.",
        next: 13 // Lanjut ke scene pilihan
    },
    // Scene 13: Pilihan Ramalia (original Scene 8, kini Scene 13)
    {
        type: "choice",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png", // Zan tetap terlihat menunggu
        text: "Apa yang akan Ramalia lakukan?",
        choices: [
            { text: "Baiklah, terima kasih, Zan.", next: 14 }, // Mengiyakan, lanjut ke cerita
            { text: "Tidak, terima kasih. Aku akan menunggu.", next: 15 } // Menolak, Bad Ending Bab 1
        ]
    },
    // Rute Pilihan 1: Ramalia Menerima (Lanjut Cerita)
    // Scene 14: Zan Melesat Pergi (Jika Ramalia setuju) (original Scene 9, kini Scene 14)
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Oke, naik.",
        next: 16 // Lanjut ke perjalanan pulang
    },
    // Rute Pilihan 2: Ramalia Menolak (Bad Ending Bab 1)
    // Scene 15: Ramalia Menolak Zan & Game Over (original Scene 10, kini Scene 15)
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "",
        name: "Ramalia",
        text: "Tidak, terima kasih, Zan. Aku... aku akan menunggu saja.",
        next: 500 // Indeks khusus untuk Bad Ending atau Game Over
    },
    // Scene 16: Perjalanan Pulang yang Canggung (Jika Ramalia Menerima) (original Scene 11, kini Scene 16)
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png", // Masih hujan
        character: "", // Mungkin tidak ada karakter yang jelas terlihat di perjalanan
        name: "Narator",
        text: "Ramalia akhirnya naik ke motor Zan. Sepanjang perjalanan, tidak ada dialog berarti. Hanya suara motor Zan yang membelah hujan. Ramalia berpegangan erat karena dingin dan takut terpeleset, menciptakan kedekatan fisik yang tidak terduga.",
        next: 17
    },
    // Scene 17: Tiba di Rumah Ramalia (original Scene 12, kini Scene 17)
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png",
        character: "../images/characters/zan.png",
        name: "Ramalia",
        text: "Terima kasih banyak, Zan. Aku... aku tidak tahu harus bagaimana kalau tidak ada kamu.",
        next: 18
    },
    // Scene 18: Zan diam, Ramalia menawarkan minuman (original Scene 13, kini Scene 18)
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png",
        character: "../images/characters/zan.png",
        name: "Narator",
        text: "Zan hanya mengangguk pelan, tidak langsung pergi. Ramalia, melihatnya masih terdiam dan mungkin kedinginan, menawarkan sesuatu.",
        next: 19
    },
    // Scene 19: Ramalia menawarkan minuman (original Scene 14, kini Scene 19)
    {
        type: "dialogue", // Ini akan kita simulasikan sebagai 'pilihan' internal game
        background: "../images/backgrounds/rumah.png",
        character: "../images/characters/zan.png",
        name: "Ramalia",
        text: "Zan, apa kamu mau... masuk sebentar? Aku bisa buatkan teh hangat atau kopi. Kamu pasti kedinginan.",
        next: 20 // Lanjut ke adegan Zan menerima dan masuk rumah
    },
    // Scene 20: Zan Menerima Tawaran (awal Bab 2 secara konsep) (original Scene 15, kini Scene 20)
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Boleh juga.",
        next: 999 // Indeks khusus untuk menandakan Akhir Bab 1 dan Transisi ke Bab 2
    },

    // --- Special Endings / Transitions (indeksnya tetap) ---
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

// Fungsi loadScene (kode fungsi ini tidak berubah)
function loadScene(sceneIndex) {
    // Sembunyikan tombol "Lanjutkan" dan "Pilihan" secara default
    nextButton.style.display = 'block';
    choicesContainer.style.display = 'none';
    choicesContainer.innerHTML = ''; // Kosongkan pilihan sebelumnya

    const scene = storyChapter1[sceneIndex];

    // --- Penanganan Akhir Bab / Ending ---
    if (sceneIndex === 500) { // Bad Ending Bab 1
        backgroundElement.src = "../images/backgrounds/jalan.png";
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