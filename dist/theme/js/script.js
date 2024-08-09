"use strict";

// @@inc lude('alert.js') убрать пробел для подключения внешнего js
// ВВерх к началу страницы 
var toTopButton = document.querySelector('#toTop');
toTopButton.addEventListener("click", function (e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}); // ******** Toggle dark mode

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon'); // Change the icons inside the button based on previous settings

if (localStorage.getItem('color-theme') === 'dark' || !('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden'); // if set via local storage previously

  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } // if NOT set via local storage previously

  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
}); // ********  End Toggle dark mode
// ******** Добавить скрит бургера в меню
// переключение бургера с выпадением меню

var topBurger = document.querySelector('.menu-btn-flip');

if (topBurger) {
  topBurger.addEventListener("click", function (e) {
    // topBurger.parentElement.parentElement.classList.toggle('menu-open');
    document.querySelector('.menu__body').classList.toggle('open-menu');
    topBurger.classList.toggle('_active');
  });
}

; // var menuBlockBlogBurger = document.querySelector('.page__menu .aside-menu__burger');
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

var selectBoxes = document.querySelectorAll('.custom-select');
selectBoxes.forEach(function (selectBox) {
  var selectedOption = selectBox.querySelector('.selected-option');
  var optionsList = selectBox.querySelector('.options');
  var showOptionsList = selectBox.querySelector('.select-box');
  showOptionsList.addEventListener('click', function () {
    optionsList.classList.toggle('show');
  });
  optionsList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      var selectedValue = e.target.getAttribute('data-value');
      selectedOption.textContent = e.target.textContent;
      optionsList.classList.remove('show'); // You can perform actions based on the selected value here.
      // For example:  console.log(selectedValue + selectBox.classList);
    }
  }); // Close the options list when clicking outside of it

  document.addEventListener('click', function (e) {
    if (!selectBox.contains(e.target)) {
      optionsList.classList.remove('show');
    }
  });
}); // End Custom select ****************
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
        prevEl: '.slider__arrow_left'
      },
      pagination: {
        el: '.slider__pagination',
        // type: 'fraction',
        clickable: true
      }
    }); // const swiper = new Swiper('.slider__body', {
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
}

;
initSliders(); // End Swiper init *******************
// Tabs switcher *******************

document.addEventListener('DOMContentLoaded', function () {
  var tabTitles = document.querySelectorAll('[data-tabs-titles] .navigation-career__title');
  var tabContents = document.querySelectorAll('[data-tabs-body] .content-career__body'); // Функция для переключения табов

  function switchTab(index) {
    tabContents.forEach(function (tab) {
      return tab.classList.remove('_tab-active');
    });
    tabTitles.forEach(function (tabTitle) {
      return tabTitle.classList.remove('_tab-active');
    });
    tabContents[index].classList.add('_tab-active');
    tabTitles[index].classList.add('_tab-active');
  } // Обработчики событий для каждого заголовка таба


  tabTitles.forEach(function (tabTitle, index) {
    tabTitle.addEventListener('click', function () {
      switchTab(index);
    });
  }); // По умолчанию активируем первый таб

  switchTab(0);
}); // End Tabs switcher *******************
// document.addEventListener('DOMContentLoaded', function () {});

var menu = document.querySelector('.menu__list');
menu.addEventListener('click', function (event) {
  event.preventDefault(); // menu.classList.add('menu_active');

  var targetMenuItem = event.target;
  var activeSubMenu = menu.querySelectorAll('.active');
  var targetParent = targetMenuItem.closest('.has-submenu');

  if (targetMenuItem.closest(".menu__list li")) {
    var targetIsActive = targetParent.classList.contains("active");
    activeSubMenu.forEach(function (activeSubMenuItem) {
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
    activeSubMenu.forEach(function (activeSubMenuItem) {
      activeSubMenuItem.classList.remove("active");
    }); // menu.classList.remove('menu_active');
  }
}); //  selecting language option in dropdown element
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
  var menuIcon = document.getElementById("menu-icon");
  var menu = document.getElementById("menu");
  var closeMenu = document.getElementById("close-menu");
  menuIcon.addEventListener("click", function () {
    menu.style.left = "0";
  });
  closeMenu.addEventListener("click", function () {
    menu.style.left = "-100%";
    resetMenu();
  });
  var menuLevels = document.querySelectorAll(".menu-level");
  menuLevels.forEach(function (menuLevel) {
    var menuItems = menuLevel.querySelectorAll("li");
    menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var submenu = this.querySelector(".menu-level");

        if (submenu) {
          submenu.classList.add("active");
          submenu.parentElement.classList.remove("active");
        }
      });
    });
    var backButtons = menuLevel.querySelectorAll(".back-button");
    backButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        var currentMenu = this.closest(".menu-level");
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
}); // End тестове мобильное меню от ChatGPT ************
// *******  Accordion  ************

document.addEventListener('DOMContentLoaded', function () {
  var accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      var accordionItem = this.closest('.accordion-item');
      var accordionContent = accordionItem.querySelector('.accordion-content');
      accordionItem.classList.toggle('active');
      accordionContent.style.maxHeight = accordionContent.style.maxHeight ? null : accordionContent.scrollHeight + 'px';
    });
  });
});