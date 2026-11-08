// Data Store for GEArts Activities
const geartsData = [
    {
        id: 'ge1',
        category: 'prelim',
        termTag: 'Prelim',
        title: 'Nature Art',
        subtitle: 'Yin-Yang Floral Mandala Composition',
        description: 'A temporary environmental installation crafted using dry campus leaves, twigs, and fresh plumeria petals.',
        fullDesc: 'Gathering fallen organic matter around campus, our team constructed a temporary Yin-Yang mandala to explore balance and impermanence. The contrast between weathered dry foliage and delicate white plumeria highlights the delicate balance between life and natural decay.',
        image: 'Images/Gearts Act/Prelim.jpg',
        meta: '👥 Group Work',
        course: 'GEArts'
    },
    {
        id: 'ge2',
        category: 'midterm',
        termTag: 'Midterm',
        title: 'Meme-ology',
        subtitle: 'Humorous Commentary on my suffering as a small person',
        description: 'A contemporary digital meme exploring visual humor, pop cultural reference, and student self-expression.',
        fullDesc: 'Using popular digital format conventions, this piece turns a personal running joke into visual storytelling. It captures my absolute refusal to accept being labeled 4\'10" when I am proudly 4\'11"—proving that an extra inch makes all the difference when defending your height!',
        image: 'Images/Gearts Act/Midterm_Meme.png',
        meta: '👤 Individual Work',
        course: 'GEArts'
    },
    {
        id: 'ge3',
        category: 'finals',
        termTag: 'Finals',
        title: 'Dream Escape',
        subtitle: 'Art Appropriation of Western Art using AI',
        description: 'Reimagining classical Impressionism through modern AI tools to envision a perfect, tranquil Sunday afternoon.',
        fullDesc: 'For this appropriation assignment, I used AI generative tools to reinterpret Claude Monet’s iconic Impressionist technique. By channeling her mastery of soft sunlight and shimmering outdoor hues, I translated my personal vision of an ideal, peaceful Sunday into a luminous digital canvas.',
        image: 'Images/Gearts Act/Finals_Western Art.png',
        meta: '👤 Individual Work',
        course: 'GEArts'
    },
    {
        id: 'ge4',
        category: 'finals',
        termTag: 'Finals',
        title: 'Deadline',
        subtitle: 'Reimagining Artworks',
        description: 'A hand-painted study applying a personalized color scheme to a classical outlined artwork template.',
        fullDesc: 'Taking an established artwork template, I experimented with color harmony, shading, and paint application to make the piece distinctly my own. This activity allowed me to focus purely on stroke texture and pigment choices to express my artistic mood.',
        image: 'Images/Gearts Act/Finals_Painting.jpg',
        meta: '👤 Individual Work',
        course: 'GEArts'
    },
    {
        id: 'ge5',
        category: 'finals',
        termTag: 'Finals',
        title: 'Echoes of Hope',
        subtitle: 'One Space, Many Stories',
        description: 'A visual photo carousel capturing fleeting glimpses of light, quiet spaces, and optimistic horizons.',
        fullDesc: 'Created for our final synthesis project, this video carousel documents a shared space through dynamic photo transitions. Each frame centers on the theme of hope—using natural light, open perspectives, and warm atmosphere to evoke forward momentum and resilience.',
        type: 'video',
        video: 'Images/Gearts Act/Finals_Photography.mp4',
        thumbnail: "Images/Gearts Act/Screenshot 2026-10-24 234016.png",
        meta: '👥 Group Work',
        course: 'GEArts'
    }
];

// Data Store for Art Collections
const collectionData = [
    {
        id: 'col1',
        category: 'origami',
        title: 'Ascension of Cranes',
        description: 'Hand-folded paper sculpture featuring white cranes mounted in dynamic, upward flight.',
        fullDesc: 'Folded precisely using textured handmade paper. Origami requires strict mathematical discipline and geometric precision to transform a flat 2D plane into a 3D living form.',
        image: 'Images/Artistic Collections/Origami_Crane.jpg',
        proofImage: 'Images/Artistic Collections/Origami_C.jpg',
        proofDesc: 'Behind-the-scenes snapshot of raw paper sheets and materials.',
        medium: 'Origami Craft'
    },
    {
        id: 'col2',
        category: 'origami',
        title: 'The Lilies',
        description: 'Hand-sculpted pink paper lilies crafted layer by layer with organic warmth and gentle curvature.',
        fullDesc: 'An exploration of crafting a pink blooms of lilies, this is one of my favorite as they are just easy to do and look pretty as well.',
        image: 'Images/Artistic Collections/Origami_Tulipd.jpg',
        proofImage: 'Images/Artistic Collections/Origami_T.jpg',
        proofDesc: 'Behind-the-scenes snapshot of raw paper sheets and materials.',
        medium: 'Origami Craft'
    },
    {
        id: 'col3',
        category: 'coffee',
        title: 'Tree of Reflections',
        description: 'A solitary tree mirrored across still water, painted using warm, concentrated espresso washes.',
        fullDesc: 'Layering rich espresso washes to capture a tree mirrored on still water. Working with paper was tricky one extra drop of liquid could ruin the sheet, but seeing the warm, vibrant tones come to life made every careful brushstroke worth it',
        image: 'Images/Artistic Collections/Coffee Painting_Tree.jpg',
        proofImage: 'Images/Artistic Collections/Coffee Painting - T.jpg',
        proofDesc: 'Work setup showing coffee palette dishes, brushes, and raw espresso extract concentrate.',
        medium: 'Coffee Painting'
    },
    {
        id: 'col4',
        category: 'coffee',
        title: 'Whispers in Sepia',
        description: 'A dreamy, organic portrait blending soft figure lines with delicate coffee splatters and floral vines.',
        fullDesc: 'I tried to evoke a sense of quiet wonder in this portrait. The fluid lines, warm sepia tones, and spontaneous coffee splatters reflect my personal attempt to embrace creative freedom over perfection.',
        image: 'Images/Artistic Collections/Coffee Painting_Woman.jpg',
        proofImage: 'Images/Artistic Collections/Coffee Painting - W.jpg',
        proofDesc: 'Work setup showing coffee palette dishes, brushes, and raw espresso extract concentrate.',
        medium: 'Coffee Painting'
    },
    {
        id: 'col5',
        category: 'photography',
        title: 'Heritage',
        description: 'A dramatic evening portrait highlighting the intricate sun embroidery of a Filipiniana garment.',
        fullDesc: 'Stepping into the garden at dusk, we used directional lighting against the dark greenery to bring out the golden threads of the sun embroidery. This photograph captures quiet pride, cultural roots, and a cinematic play between light and shadow.',
        image: 'Images/Artistic Collections/Photography.jpg',
        proofImage: 'Images/Artistic Collections/Photography_K.jpg',
        proofDesc: 'Camera captured of taking the original photograph and subject placement.',
        medium: 'Photography'
    },
    {
        id: 'col6',
        category: 'photography',
        title: 'Painted SKY',
        description: 'A serene dusk capture showcasing vibrant pink and indigo hues sweeping across the evening sky.',
        fullDesc: 'Captured during twilight, this piece frames nature’s soft gradient palette. The contrast between the glowing violet atmosphere and the sharp dark silhouettes below highlights a quiet, reflective moment at the end of the day.',
        image: 'Images/Artistic Collections/Photography_Sky.jpg',
        proofImage: 'Images/Artistic Collections/Photography_S.jpg',
        proofDesc: 'Camera captured of taking the original photograph and subject placement.',
        medium: 'Photography'
    },
    {
        id: 'col7',
        category: 'singing',
        title: 'Acoustic Cover: Young and Beautiful',
        description: 'Acoustic performance exploring emotional resonance, dynamics, and acoustic vocal expression.',
        fullDesc: 'An audio recording cover of my favorite Lana Del Rey song. In this recording, I aimed to capture the signature soft, cinematic feel of the original while infusing the performance with the natural warmth and richness of my own vocal tone.',
        image: 'Images/Audio cover.webp',
        proofImage: 'Images/Artistic Collections/Audio_S.png',
        proofDesc: 'Behind-the-scenes footage of the recording session.',
        medium: 'Vocal Performance',
        isAudio: true
    }
];

// RENDER FUNCTIONS
function renderGEArts(filterCategory = 'all') {
    const container = document.getElementById('gearts-grid');
    if (!container) return;
    container.innerHTML = '';

    const filtered = filterCategory === 'all' 
        ? geartsData 
        : geartsData.filter(item => item.category === filterCategory);

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'w-full sm:w-[340px] bg-white gearts-card cursor-pointer overflow-hidden flex flex-col group';
        card.onclick = () => openGEArtsModal(item.id);

        const mediaContent =
    item.type === 'video'
        ? `
            <div class="relative w-full h-full">
                <img
                    src="${item.thumbnail}"
                    alt="${item.title}"
                    class="w-full h-full object-cover">

                <div class="absolute inset-0 flex items-center justify-center bg-black/20">

                    <div class="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">

                        <i class="fa-solid fa-play text-2xl text-brand-500"></i>

                    </div>

                </div>
            </div>
          `
        : `
            <img
                src="${item.image}"
                alt="${item.title}"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          `;
        
        card.innerHTML = `
            <div class="relative aspect-square overflow-hidden bg-pink-50">
                ${mediaContent}
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                    <h3 class="font-serif text-2xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">${item.title}</h3>
                    <p class="text-xs text-gray-500 font-medium mt-1 mb-2">${item.subtitle}</p>
                    <p class="text-gray-600 text-sm leading-relaxed">${item.description}</p>
                </div>
                <div class="pt-4 border-t border-pink-100 flex items-center justify-between text-xs text-gray-500">
                    <span>${item.meta}</span>
                    <span class="text-brand-600 font-semibold">${item.course}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderCollections(filterCategory = 'origami') {
    const container = document.getElementById('collections-grid');
    if (!container) return;
    container.innerHTML = '';

    const filtered = collectionData.filter(item => item.category === filterCategory);

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'w-full sm:w-[340px] bg-white gearts-card cursor-pointer overflow-hidden flex flex-col group';
        card.onclick = () => openCollectionModal(item.id);

        card.innerHTML = `
            <div class="relative aspect-square overflow-hidden bg-pink-50">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/600x600/faf5f7/db2777?text=${encodeURIComponent(item.title)}'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span class="text-white text-sm font-medium flex items-center gap-1">
                        <i class="fa-solid fa-eye"></i> View Artwork & Appendix
                    </span>
                </div>
            </div>
            <div class="p-6 space-y-2">
                <span class="text-[10px] uppercase font-bold tracking-widest text-brand-600">${item.medium}</span>
                <h3 class="font-serif text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">${item.title}</h3>
                <p class="text-sm text-gray-600 leading-relaxed mt-2">${item.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// FILTER BUTTON CLICK HANDLERS
function filterGEArts(evt, category) {
    document.querySelectorAll('.gearts-tab').forEach(btn => btn.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
    renderGEArts(category);
}

function filterCollection(evt, category) {
    document.querySelectorAll('.collection-tab').forEach(btn => btn.classList.remove('active'));
    if (evt && evt.currentTarget) evt.currentTarget.classList.add('active');
    renderCollections(category);
}

// MODAL INTERACTION LOGIC
let activeCollectionItem = null;

function openGEArtsModal(id) {
    const item = geartsData.find(i => i.id === id);
    if (!item) return;

    const modalContent = document.getElementById('modal-content');
    if (!modalContent) return;

    let mediaHTML = '';
    if (item.type === 'video') {
        mediaHTML = `
            <video controls class="w-full rounded-xl">
                <source src="${item.video}" type="video/mp4">
                Your browser does not support video.
            </video>
        `;
    } else {
        mediaHTML = `
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-contain">
        `;
    }

    modalContent.innerHTML = `
        <div class="space-y-6">
            ${mediaHTML}
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <span class="px-3 py-1 bg-pink-100 text-brand-700 text-xs font-semibold rounded-full">${item.termTag}</span>
                    <span class="text-xs text-gray-400">${item.meta}</span>
                </div>
                <h2 class="font-serif text-3xl font-bold text-gray-900">${item.title}</h2>
                <p class="text-sm text-brand-600 font-medium mb-4">${item.subtitle}</p>
                <p class="text-gray-600 text-base leading-relaxed">${item.fullDesc}</p>
            </div>
        </div>
    `;

    document.getElementById('art-modal')?.classList.remove('hidden');
    document.body.classList.add('modal-active');
}

function openCollectionModal(id) {
    const item = collectionData.find(i => i.id === id);
    if (!item) return;

    activeCollectionItem = item;
    const modalContent = document.getElementById('modal-content');
    if (!modalContent) return;

    let mediaHTML = `
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-contain rounded-lg">
    `;

    if (item.isAudio) {
        mediaHTML += `
            <div class="mt-4 p-4 bg-pink-50 rounded-xl border border-pink-200 flex flex-col items-center gap-2 text-center">
                <p class="text-xs text-brand-700 font-semibold"><i class="fa-solid fa-music mr-1"></i> Young and Beautiful - Lana Del Rey</p>
                <audio controls id="modal-audio-player" class="w-full max-w-md">
                    <source src="Images/Artistic Collections/yza record.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        `;
    }

    modalContent.innerHTML = `
        <div class="space-y-6">
            ${mediaHTML}
            <div>
                <span class="text-xs font-semibold uppercase text-brand-600 tracking-wider block mb-1">${item.medium}</span>
                <h2 class="font-serif text-3xl font-bold text-gray-900 mb-3">${item.title}</h2>
                <p class="text-gray-600 text-sm leading-relaxed mb-6">${item.fullDesc}</p>
                
                <div class="pt-4 border-t border-pink-100 flex justify-end">
                    <button onclick="openAppendixModal()" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold shadow-md transition-all">
                        <i class="fa-solid fa-photo-film"></i>
                        <span>View Appendix / Proof of Creation</span>
                    </button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('art-modal')?.classList.remove('hidden');
    document.body.classList.add('modal-active');
}

function closeModal() {
    const audioPlayer = document.getElementById('modal-audio-player');
    if (audioPlayer) audioPlayer.pause();

    document.getElementById('art-modal')?.classList.add('hidden');
    document.body.classList.remove('modal-active');
}

function openAppendixModal() {
    if (!activeCollectionItem) return;

    const titleEl = document.getElementById('appendix-title');
    const imgEl = document.getElementById('appendix-img');
    const descEl = document.getElementById('appendix-desc');

    if (titleEl) titleEl.textContent = `Proof of Creation: ${activeCollectionItem.title}`;
    if (imgEl) imgEl.src = activeCollectionItem.proofImage;
    if (descEl) descEl.textContent = activeCollectionItem.proofDesc;

    document.getElementById('appendix-modal')?.classList.remove('hidden');
}

function closeAppendixModal() {
    document.getElementById('appendix-modal')?.classList.add('hidden');
}

// DOM INITIALIZATION & EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    // Initial data renders
    renderGEArts('all');
    renderCollections('origami');

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu?.classList.add('hidden');
        });
    });

    // Close Modals on Backdrop Click
    window.addEventListener('click', (event) => {
        const artModal = document.getElementById('art-modal');
        const appendixModal = document.getElementById('appendix-modal');
        
        if (event.target === artModal) closeModal();
        if (event.target === appendixModal) closeAppendixModal();
    });

    // Escape Key Support to Close Modals
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
            closeAppendixModal();
        }
    });
});