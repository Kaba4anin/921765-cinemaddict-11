import {createFilmCardTemplate} from "./components/film-card.js";
import {createFilmDetailTemplate} from "./components/film-detail.js";
import {createFilmListTemplate} from "./components/film-list.js";
import {createFilmsTemplate} from "./components/films.js";
import {createFilmsListExtra} from "./components/films-list.js";
import {createMainNavigationTemplate} from "./components/main-navigation.js";
import {createShowMoreButtonTemplate} from "./components/more-button.js";
import {createProfileTemplate} from "./components/profile.js";
import {createSortTemplate} from "./components/sort.js";

const CARD_QUENTITY = 5;
const EXTRA_CARDS_QUENTITY = 2;
const EXTRA_TITLES = [`Top rated`, `Most commented`];

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createProfileTemplate());
render(siteMainElement, createMainNavigationTemplate());
render(siteMainElement, createSortTemplate());
render(siteMainElement, createFilmsTemplate());

const siteFilmsElement = siteMainElement.querySelector(`.films`);

render(siteFilmsElement, createFilmListTemplate());

const filmsListElement = siteFilmsElement.querySelector(`.films-list`);
const siteFilmsListContainerElement = siteFilmsElement.querySelector(`.films-list__container`);

for (let i = 0; i < CARD_QUENTITY; i++) {
  render(siteFilmsListContainerElement, createFilmCardTemplate());
}

render(filmsListElement, createShowMoreButtonTemplate());

// рендер блоков «Top rated» и «Most commented»
EXTRA_TITLES.forEach((title) => {
  render(siteFilmsElement, createFilmsListExtra(title));
});

const siteFilmsExtraElements = siteFilmsElement.querySelectorAll(`.films-list--extra`);

// рендер карточек фильмов в блоки «Top rated» и «Most commented»
siteFilmsExtraElements.forEach((filmsExtraElement) => {
  const filmExtraContainerElement = filmsExtraElement.querySelector(`.films-list__container`);
  for (let i = 0; i < EXTRA_CARDS_QUENTITY; i++) {
    render(filmExtraContainerElement, createFilmCardTemplate());
  }
});

const siteFooterElement = document.querySelector(`.footer`);

render(siteFooterElement, createFilmDetailTemplate(), `afterend`);
