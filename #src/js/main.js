// import { AnimationLogo } from './assets/logoAnimation.js';
// AnimationLogo();
import returnToSavedPosition from './modules/return-position.js';
import { anchorsSmoothScrolling } from './modules/anchors-smooth-scrolling.js';
import { buttonShow } from './animations/anime-js.jsx';
import modalOpen from './modules/modalOpen.js';
import { timeLineHeaderItem } from './animations/anime-js.jsx';
import { observerMutation } from './assets/observerMutation.js';
import { videoPlayer } from './assets/video-player.js';
videoPlayer();
//* --------------------------- Animation Foter --------------------------------
import {
	tlFooterHorizontal,
	tlFooterParallel,
	refreshScrollTrigger,
} from './animations/animations.jsx';

document.addEventListener('DOMContentLoaded', () => {
	returnToSavedPosition();
	anchorsSmoothScrolling();
	buttonShow();
	modalOpen();

	const isMobile = /Mobi|Android/i.test(navigator.userAgent);
	const slideServices = document.querySelector('.slide-services');

	if (slideServices) {
		observerMutation();
	}

	//* --------------------------- Animation Header -----------------------------
	const header = document.querySelector('.header');
	const mainContent = document.querySelector('.page__main-content');
	if (header && mainContent) {
		// Именованная функция для обработки скроллинга
		const handleScroll = () => {
			const mainContentTop = mainContent.getBoundingClientRect().top;

			if (mainContentTop < 0) {
				header.classList.add('with-border');
				header.classList.remove('without-border');
			} else {
				header.classList.add('without-border');
				header.classList.remove('with-border');
			}
		};

		// Инициализация логики timeLineHeaderItem (если нужно)
		// const timeLineHeaderItem = () => {
		// 	console.log('timeLineHeaderItem logic executed');
		// 	// Добавьте вашу логику здесь, если она присутствует
		// };

		// Выполнение timeLineHeaderItem при загрузке
		timeLineHeaderItem();

		// Добавление обработчика скроллинга
		window.addEventListener('scroll', handleScroll);

		// Очистка обработчиков при выгрузке страницы
		window.addEventListener('beforeunload', () => {
			window.removeEventListener('scroll', handleScroll);
		});
	}
	if (!isMobile || innerWidth > 1024) {
		tlFooterParallel();
		tlFooterHorizontal();
		refreshScrollTrigger();
	}
});
//* ----------------------------------------------------------------------------
document.querySelector('.burger-button').addEventListener(
	'click', function () {
		this.classList.toggle('_active');
		const menuFloatTop = document.querySelector('.menu-float__top');
		menuFloatTop.classList.toggle('_is-open');
	});


//* ----------------------------------------------------------------------------
console.log('%c РОССИЯ ',
	'background: blue; color: yellow; font-size: x-large; ' +
	'border-left: 5px solid black; border-top: 30px solid white; ' +
	'border-right: 2px solid black; border-bottom: 30px solid red;');
//* ----------------------------------------------------------------------------

// import dynamicAdaptive from './libraries/move-elements.js';
// dynamicAdaptive();
