// ----- бургер

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// ---------------------  пошук ---

$(".searchbtn").click(function(){
    $(this).toggleClass("bg-green");
    $(".fas").toggleClass("color-white");
    $(".input").focus().toggleClass("active-width").val('');
});
  
// -----------------  swiper

const newphonesSwiper = document.querySelector('.swiper-newphones');

if (newphonesSwiper) {
  const swiper = new Swiper('.swiper-newphones', {
    // Optional parameters
  
    loop: true,

   // добавляем руку
    grabCursor: true,
   
    // автовисота
    autoHeight: true,

    // скорость переключения слайдов
    speed: 500,
    
    spaceBetween: 10,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      autoHeight: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    
    // Default parameters
  slidesPerView: 1,

  
    // And if we need scrollbar
    //*scrollbar: {
    //  el: '.swiper-scrollbar',
    //},*/
  });
  
}
