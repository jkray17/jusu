// @@include('alert.js')

// Выезд подменю
// let menuParents = document.querySelectorAll('.menu-page__parent');

// for (let index = 0; index < menuParents.length; index++) {
// 	// const menuParent = [].map.call(menuParents[index]);
// 	const menuParent = menuParents[index];
// 	menuParent.addEventListener("mouseenter", function(e) { 
// 		menuParent.classList.add('_active');
// 	});
// 	menuParent.addEventListener("mouseleave", function(e) {
// 		menuParent.classList.remove('_active');
// 	});
// };

// let blockMenu = document.querySelector('.menu-page__list');
// 		// menuParentsClick = blockMenu.querySelectorAll('.menu-page__parent');
// 		// menuParentsClick = blockMenu.querySelectorAll('a[data-item]');
// 		blockMenu.addEventListener("click", function(e, el) {
// 			e.preventDefault();
// 			console.log(e.target);
// 			if ((blockMenu.querySelector('._active') !== null) && (e.target.parentElement.classList.contains('_active') == false) && (e.target.classList.contains('menu-page__submenu') == false)) {
// 				blockMenu.querySelector('._active').classList.toggle('_active');
// 				e.target.parentElement.classList.toggle('_active');
// 			}
// 			// else if (e.target.parentElement.classList.contains('menu-page__parent'))	{
// 				else if (e.target.classList.contains('menu-page__submenu') == false) {
// 					e.target.parentElement.classList.toggle('_active');
// 			};
// 		});

	

// переключение бургера с выпадением меню 
// let menuPageBurger = document.querySelector('.menu-page__burger');
// let menuPageBody = document.querySelector('.menu-page__body');
// menuPageBurger.addEventListener("click", function(e) {
// 	menuPageBurger.classList.toggle('_active');
// 	menuPageBody.classList.toggle('_active');
// });


// // Фикс меню вверху при прокрутке 
// // убрать джиквери
// $(document).ready(function(){
// 	var nav = document.getElementsByClassName('.header');
// 	window.scrollTop(function(){
// 			if ($(this).scrollTop() > 70) {
// 					nav.addClass('fix-top');
// 			} else {
// 					nav.removeClass('fix-top');
// 			}
// 	});
// });


// Даун списка по клику и сворачивание по клику вне баттона

let dropdownBtn = document.getElementById('dropdownBtn');
let dropdownContent = document.getElementById('dropdownContent');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('hidden');
});


// ВВерх к началу страницы
// убрать джиквери window.scrollTo({top:0, left:1100, behavior:'smooth'})
let toTopButton = document.querySelector('#toTop');
toTopButton.addEventListener("click", function(e) {
	window.scrollTo({top:0, left:0, behavior:'smooth'});	
});

// Toggle dark mode
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
// End Toggle dark mode
