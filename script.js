const apiKey = '9645f42db4eb429598438ea72409ad9c';

const keywords = 'basketball OR nba';
const apiUrl = `https://newsapi.org/v2/everything?q=${keywords}&apiKey=${apiKey}`;

const fetchButton = document.getElementById('fetchButton');
const newsFeed = document.getElementById('newsFeed');

fetchButton.addEventListener('click', fetchNews);

async function fetchNews() {
    try {
        // Fetch news from NewsAPI
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Clear previous news
        newsFeed.innerHTML = '';

        // Display the latest 10 articles
        for (let i = 0; i < 10; i++) {
            const article = data.articles[i];
            const articleElement = createArticleElement(article);
            newsFeed.appendChild(articleElement);
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function createArticleElement(article) {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article');

    const titleElement = document.createElement('div');
    titleElement.classList.add('title');
    titleElement.innerText = article.title;

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('description');
    descriptionElement.innerText = article.description;

    const linkElement = document.createElement('a');
    linkElement.classList.add('link');
    linkElement.href = article.url;
    linkElement.target = '_blank';
    linkElement.innerText = 'Read more';

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(linkElement);

    return articleElement;
}
