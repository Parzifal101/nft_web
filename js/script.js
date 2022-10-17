"use strict";
// import anime from '../node_modules/animejs/lib/anime.es.js';
window.addEventListener('DOMContentLoaded', () => {
    const flyHead = document.querySelector('.wellcome-container__head-img'),
        wellcomeContainer = document.querySelector('.wellcome-container__partners'),
        upLogoString = document.querySelector('.wellcome-container__up-partners'),
        stepItem = document.querySelectorAll('.steps-item'),
        mainButton = document.querySelector('button'),
        mainButtonDownLayer = document.querySelector('.btn-downlayer'),
        menuPoints = document.querySelectorAll('li'),
        underLines = document.querySelectorAll('.underline'),
        scrollUp = document.querySelector('.scroll-up'),
        rotatingCirlce = document.querySelector('.wellcome-container__img-wrapper');



    function screenTest() {
        if (screen.width < 430) {
            stepItem.forEach(item => {
                item.setAttribute('id', 'choose');
            });
        }
    }

    screenTest();
    let counterDeg = 360;
    const animInterval = setInterval(() => {

        flyHead.style.backgroundPositionY = "10%";
        rotatingCirlce.style.transform = `rotate(${counterDeg}deg)`;
        setTimeout(() => {
            setInterval(() => {
                flyHead.style.backgroundPositionY = "center";

                rotatingCirlce.style.transform = `rotate(${0}deg)`;
            }, 5000);

        }, 1000);
    }, 5000);
    // let scrollStep = 100;
    // const upLogoDouble = document.createElement('div');
    // upLogoDouble.classList.add('wellcome-container__up-partners');
    // wellcomeContainer.append(upLogoDouble);



    console.log(stepItem);
    stepItem.forEach(item => {
        item.addEventListener('mouseenter', () => {
            stepItem[0].setAttribute('id', 'not-choose');
            item.setAttribute('id', 'choose');

        });
        item.addEventListener('mouseleave', () => {
            item.setAttribute('id', 'not-choose');

        });
    });

    mainButton.addEventListener('mouseenter', () => {
        mainButton.style.width = "12%";
        mainButton.style.height = "72px";
        mainButtonDownLayer.style.width = "8%";
    });
    mainButton.addEventListener('mouseleave', () => {
        mainButton.style.width = "10%";
        mainButton.style.height = "64px";
        mainButtonDownLayer.style.width = "4%";
    });

    menuPoints.forEach((point, n) => {
        point.addEventListener('mouseenter', () => {
            underLines[n].style.opacity = "100%";
        });
        point.addEventListener('mouseleave', () => {
            underLines[n].style.opacity = "0%";
        });
    });


    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1800) {
            scrollUp.style.display = 'block';
            console.log(window.pageYOffset)
        } else {
            scrollUp.style.display = 'none';
        }
    });

    scrollUp.addEventListener('click', () => {
        window.scrollTo(0, 0);

    });

    const root = document.documentElement;


    const marqueeContent = document.querySelector('.wellcome-container__up-partners');
    const marqueeContentDown = document.querySelector('.wellcome-container__down-partners');


    root.style.setProperty('--marquee-elements', marqueeContent.children.length);


    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed')

    for (let index = 0; index < marqueeElementsDisplayed; index++) {
        marqueeContentDown.appendChild(marqueeContent.children[index].cloneNode(true));
        marqueeContent.appendChild(marqueeContent.children[index].cloneNode(true));

    }


    const button = document.querySelector('#menu-btn'),
        headerMenu = document.querySelector('nav ul');

    const rights = document.createElement('div');

    rights.innerHTML = "";
    button.classList.remove('open');
    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (button.classList.contains('open')) {
            button.classList.remove('open');
            button.classList.add('close');
            headerMenu.style.opacity = "0%";
            headerMenu.style.display = "none";

        } else {
            button.classList.remove('close');
            button.classList.add('open');

            headerMenu.style.display = 'block';
            headerMenu.classList.add('navOpen');

        }
    });

    // const marqueeContentDown = document.querySelector('.wellcome-container__down-partners');


    // root.style.setProperty('--marquee-elements', marqueeContentDown.children.length);


    // const marqueeElementsDisplayedDown = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed');

    // for (let index = 0; index < 4; index++) {
    //     marqueeContentDown.appendChild(marqueeContentDown.children[index].cloneNode(true));
    // }
});