const cards = document.getElementById('cards');
const catalogSection = document.getElementById('catalogSection');
const catalogLink = document.getElementById('catalogLink');


const info = document.getElementById('info');
const aboutSection = document.getElementById('aboutSection');
const aboutLink = document.getElementById('aboutLink');


const surveyLink = document.getElementById('surveyLink');
const surveySection = document.getElementById('surveySection');
const quest = document.getElementById('question');


const homeContent = document.getElementById('homeContent');
const homeLink = document.getElementById('homeLink');
const homeSection = document.getElementById('homeSection');


const searchInput = document.getElementById('searchInput');
const resultList = document.getElementById('resultList');


function renderList(array) {
    resultList.innerHTML = array.length
        ? array.map(item => `<li>${item.name}</li>`).join('')
        : '<li>Ничего не найдено</li>';
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (!query) {
        resultList.innerHTML = '';
        return;
    }

    const filtered = places.filter(item =>
        item.name.toLowerCase().includes(query)
    );

    renderList(filtered);
});


function renderQuestion (array) {
    quest.innerHTML = '';

    array.forEach(item => {
        quest.innerHTML += `
            <div class="quest">
                <h1>${item.title}</h1>
                <img src="${item.image}" alt="${item.title}">
            </div>
        `;
    });
}
renderQuestion(quests);

function renderCards(array) {
    cards.innerHTML = '';

    array.forEach(item => {
        cards.innerHTML += `
            <div class="card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.category}</p>
                <p>${item.description}</p>
            </div>
        `;
    });
}
renderCards(places);

function renderInfo(array) {
    info.innerHTML = '';

    array.forEach(item => {
        info.innerHTML += `
            <div class="info">
                <h1>${item.title}</h1>
                <p>${item.info}</p>
                <p>${item.author}</p>
            </div>
        `;
    });
}
renderInfo(about);

function renderHome(array) {
    homeContent.innerHTML = '';

    array.forEach(item => {
        homeContent.innerHTML += `
            <div class="homeContent">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.category}</p>
            </div>
        `;
    });
}
renderHome(places);

catalogLink.addEventListener('click', function (event) {
    event.preventDefault();
    aboutSection.classList.add('hidden');
    catalogSection.classList.remove('hidden');
    surveySection.classList.add('hidden');
    homeSection.classList.add('hidden');
});

homeLink.addEventListener('click', function (event) {
    event.preventDefault();
    aboutSection.classList.add('hidden');   
    catalogSection.classList.add('hidden');
    surveySection.classList.add('hidden');
    homeSection.classList.remove('hidden');
});

aboutLink.addEventListener('click', function (event) {
    event.preventDefault();
    catalogSection.classList.add('hidden');
    aboutSection.classList.remove('hidden');
    surveySection.classList.add('hidden');
    homeSection.classList.add('hidden');
});

surveyLink.addEventListener('click', function (event) {
    event.preventDefault();
    catalogSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    surveySection.classList.remove('hidden');
    homeSection.classList.add('hidden');
});

resultList.addEventListener('click', (e) => {
    if (e.target.tagName !== 'LI') return;

    searchInput.value = '';
    resultList.innerHTML = '';

    homeSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    surveySection.classList.add('hidden');
    catalogSection.classList.remove('hidden');
});