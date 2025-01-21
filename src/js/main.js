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

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.js-purpose-swiper', {
        modules: [Navigation], 
        loop: false, 
        
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        on: {
            slideChange: function () {
                const prevButton = document.querySelector('.slider-prev');
                const nextButton = document.querySelector('.slider-next');
                const sendButton = document.querySelector('.send-button');
                const currentSlide = document.querySelector('.current-slide');
                const totalSlides = document.querySelector('.total-slides');

                currentSlide.textContent = this.realIndex + 1; // Поточний слайд
                totalSlides.textContent = this.slides.length; // Загальна кількість слайдів (без врахування слайдів для навігації)

                if (this.isBeginning) {
                    prevButton.style.display = 'none';
                } else {
                    prevButton.style.display = 'block';
                }
                
                if (this.isEnd) {
                    nextButton.style.display = 'none';
                    sendButton.style.display = 'block'
                } else {
                    nextButton.style.display = 'block';
                    sendButton.style.display = 'none'
                }
            },
        },
    });
});

import slidesData from './helpers/slides-content';

const selectedValues = {};

function renderSlides(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) {
        console.error(`Container ${containerSelector} not found!`);
        return;
    }

    slidesData.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'purpose__swiper-slide swiper-slide';
        slideDiv.style.backgroundColor = slide.bgColor;

        const title = document.createElement('h3');
        title.className = 'purpose__swiper-item-title';
        title.textContent = slide.title;

        const labelsBox = document.createElement('div');
        labelsBox.className = 'purpose__swiper-box';

        if (slide.content) {
            slideDiv.innerHTML += slide.content;
        } else {
            slide.labels.forEach((labelText, labelIndex) => {
                const label = document.createElement('label');
                label.className = 'purpose__swiper-item-label';
                label.setAttribute('for', `radio${index}-${labelIndex + 1}`);

                const input = document.createElement('input');
                input.type = 'radio';
                input.id = `radio${index}-${labelIndex + 1}`;
                input.name = `quiz-group-${index}`;
                input.className = 'label-radio';
                input.value = labelText;

                input.addEventListener('change', () => {
                    console.log(input.value);
                    selectedValues[`slide-${index}`] = input.value;
                    console.log('Selected values:', selectedValues);

                    const labels = labelsBox.querySelectorAll('.purpose__swiper-item-label');
                    labels.forEach((lbl) => lbl.classList.remove('active-label'));
                    label.classList.add('active-label');
                });

                label.appendChild(input);
                label.appendChild(document.createTextNode(labelText));
                labelsBox.appendChild(label);
            });
            slideDiv.appendChild(title);
            slideDiv.appendChild(labelsBox);
        }
        
        container.appendChild(slideDiv);
    });
}

renderSlides('.purpose__swiper-wrapper');



const YOUR_SERVICE_ID = 'service_nf3duct'
const YOUR_TEMPLATE_ID = 'NRbTukRmATT-SxuhU'
const YOUR_USER_ID = 'FCxwI9uRYiKRbqCz5ow1S'


import emailjs from 'emailjs-com';

document.querySelector('.send-button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('send')
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-textarea').value;

    if (name && email) {
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Використовуємо EmailJS для відправки
        emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
            .then((response) => {
                console.log('SUCCESS!', response);
                alert('Повідомлення надіслано!');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Сталася помилка при відправці.');
            });
    } else {
        alert('Будь ласка, заповніть всі поля.');
    }
});
