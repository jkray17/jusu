// @@inc lude('alert.js') убрать пробел для подключения внешнего js


// ВВерх к началу страницы 
let toTopButton = document.querySelector('#toTop');
toTopButton.addEventListener("click", function(e) {
	window.scrollTo({top:0, left:0, behavior:'smooth'});	
});


// ******** Toggle dark mode
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
// ********  End Toggle dark mode


// ******** Добавить скрит бургера в меню
// переключение бургера с выпадением меню
var topBurger = document.querySelector('.menu-btn-flip');

if (topBurger) {
  topBurger.addEventListener("click", function (e) {
    // topBurger.parentElement.parentElement.classList.toggle('menu-open');
    document.querySelector('.menu__body').classList.toggle('open-menu');
    topBurger.classList.toggle('_active');
  });
};

// var menuBlockBlogBurger = document.querySelector('.page__menu .aside-menu__burger');
// console.log(menuBlockBlogBurger);
// var menuPageBody = document.querySelector('.page__menu .aside-menu__body');

// if (menuBlockBlogBurger) {
//   menuBlockBlogBurger.addEventListener("click", function (e) {
//     menuBlockBlogBurger.classList.toggle('_active');
//     menuPageBody.classList.toggle('_active');
//   });
// };
//


// Custom select *********************

const selectBoxes = document.querySelectorAll('.custom-select');

selectBoxes.forEach((selectBox) => {
    const selectedOption = selectBox.querySelector('.selected-option');
    const optionsList = selectBox.querySelector('.options');
    const showOptionsList = selectBox.querySelector('.select-box');

    showOptionsList.addEventListener('click', () => {
        optionsList.classList.toggle('show');
    });

    optionsList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const selectedValue = e.target.getAttribute('data-value');
            selectedOption.textContent = e.target.textContent;
            optionsList.classList.remove('show');

            // You can perform actions based on the selected value here.
            // For example:  console.log(selectedValue + selectBox.classList);
        }
    });

    // Close the options list when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!selectBox.contains(e.target)) {
            optionsList.classList.remove('show');
        }
    });
});

// End Custom select ****************

// Swiper init *******************

function initSliders() {
    if (document.querySelector('.slider__body')) {
        new Swiper('.slider__body', {
        //    modules: [Navigation, Pagination],
           observer: true,
           oberveParents: true,
           slidesPerView: 1,
           spaceBetween: 56,
           autoHeight: true,
           speed: 800,
           loop: false,
           navigation: {
               nextEl: '.slider__arrow_right',
               prevEl: '.slider__arrow_left',
           },
            pagination: {
                el: '.slider__pagination',
                // type: 'fraction',
                clickable: true
            }
        });
        // const swiper = new Swiper('.slider__body', {
        //     loop: true,
        //     navigation: {
        //         nextEl: '.slider__arrow_left',
        //         prevEl: '.slider__arrow_right',
        //     },
        //     pagination: {
        //         el: '.slider__pagination',
        //         // type: 'fraction',
        //         clickable: true
        //     }
        // })
    }
};
initSliders();

// End Swiper init *******************


// Tabs switcher *******************

document.addEventListener('DOMContentLoaded', function () {
  const tabTitles = document.querySelectorAll('[data-tabs-titles] .navigation-career__title');
  const tabContents = document.querySelectorAll('[data-tabs-body] .content-career__body');

  // Функция для переключения табов
  function switchTab(index) {
    tabContents.forEach((tab) => tab.classList.remove('_tab-active'));
    tabTitles.forEach((tabTitle) => tabTitle.classList.remove('_tab-active'));

    tabContents[index].classList.add('_tab-active');
    tabTitles[index].classList.add('_tab-active');
  }

  // Обработчики событий для каждого заголовка таба
  tabTitles.forEach((tabTitle, index) => {
    tabTitle.addEventListener('click', () => {
      switchTab(index);
    });
  });

  // По умолчанию активируем первый таб
  switchTab(0);
});

// End Tabs switcher *******************
// document.addEventListener('DOMContentLoaded', function () {});
    const menu = document.querySelector('.menu__list');
    
    menu.addEventListener('click', function (event) {
      event.preventDefault();
      // menu.classList.add('menu_active');
      const targetMenuItem = event.target;
      const activeSubMenu = menu.querySelectorAll('.active');
      let targetParent = targetMenuItem.closest('.has-submenu');
       
      
      if (targetMenuItem.closest(".menu__list li")) {
        const targetIsActive = targetParent.classList.contains("active");
        activeSubMenu.forEach((activeSubMenuItem) => {
          activeSubMenuItem.classList.remove("active");
        });
        if (!targetIsActive) {
          targetParent.classList.toggle("active");
        }
        targetParent = targetParent.parentNode.closest(".has-submenu");

        while (targetParent) {
          targetParent.classList.add("active");
          targetParent = targetParent.parentNode.closest(".has-submenu");
        }
      } else {
        activeSubMenu.forEach((activeSubMenuItem) => {
          activeSubMenuItem.classList.remove("active");
        });
        // menu.classList.remove('menu_active');
      }
      
    });

      
  //  selecting language option in dropdown element
  
  
  // написано амазоном для теста
// Selecting language option in dropdown element

// const dropdown = document.querySelector('.dropdown');
// const options = dropdown.querySelectorAll('.option');
// const selectedOption = dropdown.querySelector('.selected-option');

// dropdown.addEventListener('click', function() {
//   dropdown.classList.toggle('open');
// });

// options.forEach(function(option) {
//   option.addEventListener('click', function() {
//     const selectedValue = option.getAttribute('data-value');
//     selectedOption.textContent = option.textContent;
//     dropdown.classList.remove('open');

//     // Perform actions based on the selected value here
//     // For example: console.log(selectedValue);
//   });
// });

// End Selecting language option in dropdown element

// тестове мобильное меню от ChatGPT ************
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");
  const closeMenu = document.getElementById("close-menu");

  menuIcon.addEventListener("click", function () {
    menu.style.left = "0";
  });

  closeMenu.addEventListener("click", function () {
    menu.style.left = "-100%";
    resetMenu();
  });

  const menuLevels = document.querySelectorAll(".menu-level");

  menuLevels.forEach(function (menuLevel) {
    const menuItems = menuLevel.querySelectorAll("li");
    menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const submenu = this.querySelector(".menu-level");
        if (submenu) {
          submenu.classList.add("active");
          submenu.parentElement.classList.remove("active");
        }
      });
    });

    const backButtons = menuLevel.querySelectorAll(".back-button");
    backButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        const currentMenu = this.closest(".menu-level");
        currentMenu.classList.remove("active");
        currentMenu.parentElement.closest(".menu-level").classList.add("active");
      });
    });
  });

  function resetMenu() {
    menuLevels.forEach(function (menuLevel) {
      menuLevel.classList.remove("active");
    });
    document.querySelector(".menu-level").classList.add("active");
  }
});


// End тестове мобильное меню от ChatGPT ************

// *******  Accordion  ************

document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      const accordionItem = this.closest('.accordion-item');
      const accordionContent = accordionItem.querySelector('.accordion-content');

      accordionItem.classList.toggle('active');
      accordionContent.style.maxHeight = accordionContent.style.maxHeight ? null : accordionContent.scrollHeight + 'px';
    });
  });
});