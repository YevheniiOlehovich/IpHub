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

                currentSlide.textContent = this.realIndex + 1; 
                totalSlides.textContent = this.slides.length; 

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
                    selectedValues[`slide-${index}`] = input.value;

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



function sendEmail(){

    let params = {
        from_name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        message: document.getElementById('contact-textarea').value,
    }
    emailjs.send("service_nf3duct","template_uilbwd1", params)
    .then(function(){
        alert('Succsesfully send')
    })
}

const sendButton = document.querySelector('.send-button');

sendButton.onclick = () => {
    sendEmail();
}