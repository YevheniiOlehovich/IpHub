/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import { MousePRLX } from './libs/parallaxMouse'
// import AOS from 'aos'
import Swiper, { Navigation, Pagination } from 'swiper';

import { BaseHelpers } from './helpers/base-helpers';
import { PopupManager } from './modules/popup-manager';
import { BurgerMenu } from './modules/burger-menu';
import { Tabs } from './modules/tabs';
import { Accordion } from './modules/accordion';

BaseHelpers.checkWebpSupport();

BaseHelpers.calcScrollbarWidth();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

const burgerButton = document.querySelector('.js-button')
const dropMenu = document.querySelector('.js-menu')

burgerButton.onclick = () => {
    dropMenu.classList.toggle('menu-show')
}

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.js-solutions-swiper', {
        modules: [Navigation], 
        loop: true, 
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        spaceBetween: 20,  

        breakpoints: {

            360: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 2, 
                spaceBetween: 10, 
            },
            768: {
                slidesPerView: 3, 
                spaceBetween: 15,
            },

            1024: {
                slidesPerView: 3, 
                spaceBetween: 20,
            },
            1440: {
                slidesPerView: 4, 
                spaceBetween: 20,
            }
        },
    });
});