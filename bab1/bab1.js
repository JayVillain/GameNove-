// Mengambil referensi elemen HTML yang dibutuhkan
const backgroundElement = document.getElementById('background');
const characterElement = document.getElementById('character');
const characterNameElement = document.getElementById('character-name');
const dialogueTextElement = document.getElementById('dialogue-text');
const nextButton = document.getElementById('next-button');
const choicesContainer = document.getElementById('choices-container');

// --- Data Cerita Bab 1 (Versi Final) ---
const storyChapter1 = [
    // Scene 0: Narasi - Hujan Deras di Perjalanan
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "", // Tidak ada karakter di layar, fokus pada narasi
        name: "Narator",
        text: "Malam itu, hujan turun tanpa ampun. Setiap tetesnya seolah jarum yang menusuk kulit, menampar wajah Zan yang melesat membelah tirai air. Jaket kulitnya yang biasanya gagah kini terasa memberat, basah kuyup. Mesin motornya meraung, menantang keganasan malam, namun dingin yang menusuk tulang mulai mengirim sinyal ke jari-jemarinya yang kaku. Visibilitas menurun drastis, hanya sesekali diterangi lampu jalan yang buram.",
        next: 1
    },
    // Scene 1: Narasi - Zan Berhenti di Halte
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png", // Zan terlihat berhenti
        name: "Narator",
        text: "Guyuran air yang tak henti membuatnya akhirnya menyerah. Di kejauhan, sebuah halte bus buram samar di balik kegelapan. Sebuah tempat berlindung yang sederhana, tapi saat ini terasa seperti oase. Zan menghentikan motornya, ban depan berdecit pelan di atas aspal licin. Mesin dimatikan, meninggalkan keheningan yang hanya diisi suara rintik hujan yang menghantam atap halte. Zan menurunkan standar motornya, sedikit mengusap wajahnya yang basah.",
        next: 2
    },
    // Scene 2: Narasi - Zan Melihat Ramalia di Halte
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png", // Ramalia terlihat meringkuk
        name: "Narator",
        text: "Saat ia menatap ke dalam halte, Zan menyadari ia tidak sendirian. Di sudut, meringkuk di bangku, ada siluet seorang gadis. Ia memeluk tasnya erat, berusaha mencari kehangatan. Samar-samar, Zan melihat rambut yang tergerai rapi, kontras dengan kemeja kuliah yang kini sedikit kusut. Semakin dekat Zan mengamati, jantungnya sedikit tersentak. Di balik siluet itu, Zan mengenali sosok yang tak asing: Ramalia, mahasiswi teladan di jurusannya, yang terkenal rapi, perfeksionis, dan selalu tampak sempurna di kampus. Namun kini, di bawah cahaya buram lampu halte, Ramalia tampak... mungil dan rapuh, memeluk tasnya yang sedikit basah. Zan melihat buku tebal di pangkuannya yang ikut lembap. Pandangan itu, entah mengapa, mengusik sesuatu di dada Zan.",
        next: 3
    },
    // Scene 3: Narasi - Zan Berpikir dalam Hati
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "", // Fokus pada Zan's internal thought
        name: "Narator",
        text: "Zan mencoba mengingat kapan terakhir kali ia melihat Ramalia. Mungkin di aula besar, saat Ramalia memimpin diskusi panel. Atau di perpustakaan, dengan tumpukan buku di depannya. Mereka satu angkatan, bahkan beberapa mata kuliah pun sama. Tapi dunia mereka bagai kutub utara dan selatan. Ramalia yang teratur, Zan yang… berantakan. Pertemuan di tengah hujan seperti ini terasa sangat sureal. Ia menggeleng samar, mengusir pikiran itu. Tapi rasa penasaran tak bisa ditahannya.",
        next: 4
    },
    // Scene 4: Zan Memulai Sapaan Awal
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Lia?", // Suara Zan agak serak, sedikit terkejut
        next: 5
    },
    // Scene 5: Ramalia Terkejut dan Merespons
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Eh, Zan? Kamu… kok di sini?", // Kaget dan gugup
        next: 6
    },
    // Scene 6: Zan Menjelaskan Keberadaannya
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Hujan. Jadi, numpang neduh sebentar. Kamu sendiri, ngapain di sini malam-malam begini?", // Mengedikkan dagu ke motor
        next: 7
    },
    // Scene 7: Ramalia Menjelaskan Situasi
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Aku... aku sedang menunggu bus. Dari tadi tidak ada yang lewat. Sudah lebih dari satu jam.", // Menghela napas, menatap hujan
        next: 8
    },
    // Scene 8: Narator - Zan Mengamati Kondisi Ramalia
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "", // Fokus pada Zan's observation of Ramalia
        name: "Narator",
        text: "Zan memperhatikan Ramalia. Meskipun gadis itu mencoba bersikap tenang, bahunya sedikit bergetar. Tangannya memeluk tasnya erat, seolah mencari kehangatan dari sana. Rambutnya yang biasanya rapi kini sedikit lepek karena uap lembap. Bibirnya tampak sedikit pucat. Zan tahu dinginnya hujan bisa menembus hingga tulang.",
        next: 9
    },
    // Scene 9: Zan Memecah Keheningan dengan Observasi
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Hujannya awet juga, ya. Nggak ada tanda-tanda mau reda.", // Nada sedikit lebih santai
        next: 10
    },
    // Scene 10: Ramalia Merespons Keluhan Hujan
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Iya... Padahal tadi sore cerah. Tidak menyangka akan seperti ini.", // Sedikit kedinginan dan lelah
        next: 11
    },
    // Scene 11: Zan Mengomentari Pakaian Ramalia
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Kedinginan sekali, ya. Jaketmu... tidak cukup tebal untuk hujan seperti ini. Kenapa nggak pakai jaket tebal?", // Nada prihatin
        next: 12
    },
    // Scene 12: Ramalia Memberi Alasan Singkat
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Terburu-buru tadi. Jadi... pakai seadanya.", // Terbatuk kecil
        next: 13
    },
    // Scene 13: Narasi - Pemikiran Internal Ramalia
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "",
        name: "Narator",
        text: "(Dalam hati Ramalia: Zan... dia menyadari aku kedinginan? Dia tidak sedingin yang terlihat? Aku kira dia hanya peduli pada motornya.) Sebuah perasaan aneh merayap di benak Ramalia. Zan, si ketua klub motor yang sering jadi bahan gosip, kini menunjukkan perhatian.",
        next: 14
    },
    // Scene 14: Narator - Zan Mengamati Lebih Lanjut & Memecah Kebuntuan
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png", // Zan melihat buku Ramalia
        name: "Narator",
        text: "Zan mengamati buku di pangkuan Ramalia. Sampulnya terlihat familier.",
        next: 15
    },
    // Scene 15: Ramalia Menjelaskan Buku
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Oh, ini... buku referensi Kalkulus Tingkat Lanjut. Ada proyek besar yang harus diselesaikan besok pagi. Kelompokku harus merevisi total. Jadi... ya, lembur di kampus sampai larut.",
        next: 16
    },
    // Scene 16: Zan Mengakui Pemahaman Kalkulus
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Kalkulus? Aku lumayan paham itu.",
        next: 17
    },
    // Scene 17: Ramalia Terkejut dengan Zan
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Kamu? Paham Kalkulus? Tapi... kamu jarang masuk kelas itu, kan?",
        next: 18
    },
    // Scene 18: Zan Menjelaskan Cara Belajarnya
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Cara belajarku beda. Lebih suka otodidak. Kelas kadang... terlalu lambat buatku.", // Senyum misterius
        next: 19
    },
    // Scene 19: Narator - Penjelasan Zan membuat Ramalia semakin penasaran
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "",
        name: "Narator",
        text: "Penjelasan Zan membuat Ramalia semakin penasaran. Zan tidak hanya misterius, tapi juga memiliki cara belajarnya sendiri yang tak terduga, jauh di luar kebiasaan anak kampus pada umumnya.",
        next: 20
    },
    // Scene 20: Ramalia Merespons dengan Rasa Kagum Terselubung
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia", // Atau Narator jika ini monolog internal murni
        text: "(Dalam hati Ramalia: Dia otodidak? Dan bisa menguasai Kalkulus? Ini... tidak masuk akal. Dia benar-benar pintar.) Sebuah rasa kagum yang tak disangka-sangka mulai tumbuh di benaknya.",
        next: 21
    },
    // Scene 21: Narator - Keheningan yang Berbeda
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "",
        name: "Narator",
        text: "Keheningan kembali melingkupi mereka, namun kali ini terasa berbeda. Tidak lagi canggung, melainkan lebih... nyaman. Aroma hujan yang dingin memenuhi udara, namun entah mengapa, Zan mulai merasa hangat, dan Ramalia merasa Zan tidak seseram yang ia bayangkan. Sebuah jembatan kecil seolah mulai terbentuk di antara dua dunia yang sebelumnya terpisah jauh.",
        next: 22
    },
    // Scene 22: Narator - Zan Melirik Jam & Situasi (Build-up to the offer)
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Narator",
        text: "Zan melirik jam tangannya. Sudah sangat larut. Jalanan semakin gelap dan sepi, hanya ada mereka berdua. Hujan belum menunjukkan tanda-tanda akan berhenti. Ini bukan situasi yang aman untuk seorang gadis sendirian. Zan tahu betul reputasi klubnya tidak selalu baik, tapi ada batas toleransinya. Di malam seperti ini, seorang gadis tidak boleh sendirian.",
        next: 23
    },
    // Scene 23: Zan Langsung Menawarkan Bantuan
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Sekarang sudah semakin larut, sepertinya nggak bakal ada angkutan lagi. Hujan begini, makin bahaya kalau nunggu terus. Gimana kalau kamu aku antar pulang saja?", // Nada lebih lembut dan peduli
        next: 24
    },
    // Scene 24: Narator - Dilema Ramalia yang Mendalam
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Narator", // Atau Ramalia jika ini monolog internal murni
        text: "Ramalia terdiam, matanya menatap Zan, lalu ke motor besar yang basah di samping halte. Dilema besar melandanya. Di satu sisi, Zan adalah ketua 'Badai Malam', anak motor yang dingin dan misterius, penuh gosip yang tidak selalu baik. Dia adalah sosok yang selalu ia hindari. Namun, tawarannya barusan terasa tulus, ada nada kepedulian di sana yang tak bisa ia abaikan. Rasa dingin yang menusuk tulang semakin menjadi, dan dia tahu dia tidak punya pilihan lain. Dia juga tidak ingin Zan menganggapnya sok jual mahal atau meremehkan bantuannya, terutama setelah percakapan singkat mereka tadi. Dia melihat kilatan kejujuran di mata Zan.",
        next: 25 // Lanjut ke pilihan
    },
    // Scene 25: Pilihan Pemain - Ramalia Memutuskan
    {
        type: "choice",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png", // Zan tetap terlihat menunggu
        text: "Apa yang akan Ramalia lakukan?",
        choices: [
            { text: "Baiklah, terima kasih, Zan.", next: 26 }, // Mengiyakan, lanjut ke cerita
            { text: "Tidak, terima kasih. Aku akan menunggu.", next: 27 } // Menolak, Bad Ending Bab 1
        ]
    },
    // Rute Pilihan A: Ramalia Menerima Tawaran
    // Scene 26: Zan Membalas Persetujuan Ramalia
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Oke, naik.", // Pandangan sedikit terkejut namun lega, lalu menyalakan mesin motornya
        next: 28 // Lanjut ke perjalanan pulang
    },
    // Rute Pilihan B: Ramalia Menolak Tawaran
    // Scene 27: Ramalia Menolak Zan
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Tidak, terima kasih, Zan. Aku... aku akan menunggu saja. Lagipula, aku tidak ingin merepotkanmu.", // Nada tegas tapi ada getaran
        next: 500 // Indeks khusus untuk Bad Ending Bab 1
    },
    // Scene 28: Narator - Perjalanan Pulang yang Canggung Namun Intim
    {
        type: "dialogue",
        background: "../images/backgrounds/jalan.png", // Masih hujan, atau mulai reda sedikit
        character: "",
        name: "Narator",
        text: "Ramalia perlahan mendekati motor Zan, sedikit canggung menaiki jok belakang. Dia berusaha menjaga jarak, namun setiap goncangan kecil motor membuatnya tanpa sadar berpegangan lebih erat pada jaket Zan. Kehangatan punggung Zan yang basah merambati tangannya, samar berpadu dengan aroma hujan, bensin, dan wangi maskulin Zan yang anehnya menenangkan. Di balik deru motor yang membelah hujan, detak jantung Ramalia terasa berpacu. Sepanjang perjalanan, tidak ada dialog berarti. Hanya suara mesin motor dan keheningan di antara mereka, menciptakan kedekatan yang tak terduga.",
        next: 29
    },
    // Scene 29: Narator - Tiba di Rumah Ramalia
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png", // Latar belakang rumah Ramalia
        character: "",
        name: "Narator",
        text: "Tak lama kemudian, motor Zan berhenti di depan gerbang rumah Ramalia. Hujan sudah sedikit mereda, menyisakan rintik-rintik kecil dan bau tanah basah yang segar. Mereka berdua terdiam sejenak.",
        next: 30
    },
    // Scene 30: Ramalia Berterima Kasih
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Terima kasih banyak, Zan. Aku... aku tidak tahu harus bagaimana kalau tidak ada kamu.", // Suara pelan dan tulus
        next: 31
    },
    // Scene 31: Narator - Zan Diam, Ramalia Menawarkan Minuman
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png",
        character: "../images/characters/zan.png",
        name: "Narator",
        text: "Zan hanya mengangguk pelan, tidak langsung pergi. Ia masih duduk di atas motornya, pandangannya lurus ke depan, jaketnya meneteskan air. Ramalia, melihatnya masih terdiam dan jelas kedinginan, merasa harus menawarkan sesuatu.",
        next: 32
    },
    // Scene 32: Ramalia Menawarkan Minuman
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png",
        character: "../images/characters/ramalia.png",
        name: "Ramalia",
        text: "Zan, apa kamu mau... masuk sebentar? Aku bisa buatkan teh hangat atau kopi. Kamu pasti kedinginan.", // Sedikit ragu, namun tulus
        next: 33
    },
    // Scene 33: Zan Menerima Tawaran (Akhir Bab 1 yang Mengarah ke Bab 2)
    {
        type: "dialogue",
        background: "../images/backgrounds/rumah.png",
        character: "../images/characters/zan.png",
        name: "Zan",
        text: "Boleh juga.", // Terkejut sejenak, senyum tipis terukir
        next: 999 // Indeks khusus untuk menandakan Akhir Bab 1 dan Transisi ke Bab 2
    },

    // --- Special Endings / Transitions ---
    // Scene 500: Bad Ending Bab 1
    {
        type: "ending",
        text: "Ramalia akhirnya tertidur di halte, kedinginan dan kehujanan parah. Keesokan paginya, ia ditemukan oleh patroli keamanan kampus dalam keadaan demam tinggi dan harus dilarikan ke klinik. Dia melewatkan ujian penting dan harus mengulang semester. Hubungannya dengan Zan tidak pernah berkembang, dan mereka kembali menjadi dua orang asing yang kebetulan satu kampus. Sebuah keputusan kecil di malam hujan telah mengubah segalanya.",
        label: "BAD_ENDING_BAB1"
    },
    // Scene 999: Transisi ke Bab 2
    {
        type: "ending",
        text: "Malam itu, hujan telah menciptakan ikatan yang tak terduga di antara dua dunia yang berbeda. Sebuah pintu baru telah terbuka. Kisah Zan dan Ramalia baru saja dimulai.",
        label: "TRANSITION_TO_BAB2"
    }
];

let currentSceneIndex = 0;

// Fungsi loadScene (tetap sama)
function loadScene(sceneIndex) {
    // Sembunyikan tombol "Lanjutkan" dan "Pilihan" secara default
    nextButton.style.display = 'block';
    choicesContainer.style.display = 'none';
    choicesContainer.innerHTML = ''; // Kosongkan pilihan sebelumnya

    const scene = storyChapter1[sceneIndex];

    // --- Penanganan Akhir Bab / Ending ---
    if (sceneIndex === 500) { // Bad Ending Bab 1
        backgroundElement.src = "../images/backgrounds/jalan.png";
        characterElement.style.opacity = 0;
        characterNameElement.textContent = "";
        dialogueTextElement.textContent = scene.text;
        nextButton.style.display = 'none';
        const restartButton = document.createElement('button');
        restartButton.classList.add('choice-button');
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
        nextButton.style.display = 'none';

        setTimeout(() => {
             window.location.href = '../bab2/bab2.html';
        }, 3000); // Tunggu 3 detik sebelum redirect
        return;
    }

    // --- Loading Scene Normal ---
    if (scene.background) {
        backgroundElement.src = scene.background;
        backgroundElement.style.opacity = 1;
    } else {
        backgroundElement.style.opacity = 0;
    }

    if (scene.character) {
        characterElement.src = scene.character;
        characterElement.style.opacity = 1;
    } else {
        characterElement.style.opacity = 0;
    }

    characterNameElement.textContent = scene.name || "";
    dialogueTextElement.textContent = scene.text;

    if (scene.type === "dialogue") {
        nextButton.onclick = () => loadScene(scene.next);
    } else if (scene.type === "choice") {
        nextButton.style.display = 'none';
        choicesContainer.style.display = 'flex';

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