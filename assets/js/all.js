"use strict";

// AOS套件
AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: true,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point，建議120-150
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 800,
  // values from 0 to 3000, with step 50ms，建議400-800
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

}); // 1.先取DOM元素

var boxShadow = document.querySelector('.js-box-shadow');
var scrolled = document.querySelector('.js-scrolled'); // 2. nav往下滑加上box-shadow

var addBoxShadow = function addBoxShadow(entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      boxShadow.classList.add('scrolled');
    } else {
      boxShadow.classList.remove('scrolled');
    }
  });
};

var observer = new IntersectionObserver(addBoxShadow);
observer.observe(scrolled); // 留言表單傳送

var submitForm = document.querySelector(".submitForm");
var submitBtn = document.querySelector(".submitBtn"); // const addOrderInput = document.querySelectorAll(".orderInfo-inputWrap");
// const error = document.querySelectorAll(".text-danger");

var name = document.querySelector("#name");
var tel = document.querySelector("#tel");
var email = document.querySelector("#email");
var opinion = document.querySelector("#opinion");
var corsURL = 'https://cors-anywhere.herokuapp.com/'; // use cors-anywhere to fetch api data

var apiURL = 'https://quiet-stream-10215.herokuapp.com/api/product'; // origin api url

axios.get("".concat(corsURL).concat(apiURL), {}).then(function (response) {
  console.log(response);
}) // 把结果集传到info这个数组
["catch"](function (error) {
  console.warn(error);
}); // submitBtn.addEventListener("click",(e)=>{
//   e.preventDefault;
//   // console.log(e.target);
//   let obj = {
//     name : name.value,
//     tel : tel.value,
//     email : email.value,
//     opinion : opinion.value
//   }
//   // console.log(obj);
//   sendMsg(obj,url);
// });
// function init(){
//   getInf(url);
// };
// init();
// function sendMsg(obj,url) {
//   axios.post(url, {
//     "messageBoard": obj
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// };
//# sourceMappingURL=all.js.map
