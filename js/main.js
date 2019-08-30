
// window.onload = function() {
//  */
//     let i = 1;
//     for (let li of document.querySelectorAll(".carousel-item")) {
//         li.style.position = 'relative';
//         li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//         i++;
//     }
//
//     /* конфигурация */
//     let width = 130; // ширина картинки
//     let count = 3; // видимое количество изображений
//
//     let list = document.querySelector('.carousel');
//     let listElems = document.querySelectorAll('.carousel-item');
//
//     let position = 0; // положение ленты прокрутки
//
//     document.querySelector('.left').onclick = function () {
//         // сдвиг влево
//         position += width * count;
//         // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//         position = Math.min(position, 0)
//         list.style.marginLeft = position + 'px';
//     };
//
//     document.querySelector('.right').onclick = function rightBtn () {
//         // сдвиг вправо
//         position -= width * count;
//         // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//         position = Math.max(position, -width * (listElems.length - count));
//         list.style.marginLeft = position + 'px';
//     };
// }
window.onload=function (){


let itemsArr = document.querySelectorAll(".carousel-item-img"), i=0;
let leftBtn=document.querySelector("#left");
let rightBtn=document.getElementById("right");
    console.log(itemsArr);
    console.log(leftBtn);
console.log(rightBtn);

rightBtn.addEventListener('click', function () {
    itemsArr[i].classList.remove("active");
    itemsArr[i+1].classList.add("active");
    i++;
    // i>itemsArr.length? i=0:i;
});


leftBtn.addEventListener('click', function () {
    itemsArr[i].classList.remove("active");
    itemsArr[i-1].classList.add("active");
    i--;
    // i<0? i=itemsArr.length-1:i;
});
}