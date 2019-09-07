
document.querySelector(".services-submenu").addEventListener("click", function ({target}) {
    let serviceBtns=[...document.querySelectorAll(".services-submenu-item")];
    const activeElementIndex = serviceBtns.indexOf(target);
    let infoSections=[...document.querySelectorAll(".services-wrap")];
    cleanActiveClass(serviceBtns);
    cleanActiveClass(infoSections);
    target.classList.add("active");
    infoSections[activeElementIndex].classList.add("active")
});


let amountImgToShow = 12;
document.querySelector(".work-exaples-submenu").addEventListener("click", function ({target}) {
    let filterBtn=document.querySelector(".work-exaples-submenu").children;
    let img=[...document.querySelector(".work-examples-gallery").children];
    addGalleryImeges();
    let filteredActiveImg=[...document.querySelector(".work-examples-gallery").children].filter(img=>img.dataset.type === target.dataset.type);
    console.log(filteredActiveImg);
    cleanActiveClass(filterBtn);
    cleanActiveClass(img);
    target.classList.add("active");//постапить курсор поинтер
    if(filteredActiveImg.length===0){
        addGalleryImeges()
    }else {
        document.querySelector(".load-more").classList.remove("active")
        for (let img of filteredActiveImg) {
            img.classList.add("active");
        }

    }
});

document.querySelector(".load-more").addEventListener("click", function () {
    amountImgToShow+=12;
    addGalleryImeges();
    console.log(amountImgToShow);
    if(amountImgToShow>30){
        document.querySelector(".load-more").style.display="none";

    }
});
addGalleryImeges();
function addGalleryImeges() {
    let imgToShow = [...document.querySelector(".work-examples-gallery").children].slice(0, amountImgToShow);
    document.querySelector(".load-more").classList.add("active");
    for (let image of imgToShow) {
            image.classList.add("active");
        }
}



// carousel section respond

let leftBtn=document.querySelector("#left");
let rightBtn=document.getElementById("right");
let carouselItemsWrapper=document.querySelector(".carousel");

carouselItemsWrapper.addEventListener("click",function ({target}) {
    let { descrArr, itemsArr } = getSliderItems();
    console.log(itemsArr);
    let activeElem = itemsArr.findIndex(item => item===target.parentNode)
    cleanActiveClass(itemsArr)
    cleanActiveClass(descrArr)
    target.parentNode.classList.add("active");
    descrArr[activeElem].classList.add("active")
});


rightBtn.addEventListener('click', function () {
    let { descrArr, itemsArr } = getSliderItems();
    let activeElem = itemsArr.findIndex(item => item.classList.contains('active'));
    cleanActiveClass(itemsArr);
    cleanActiveClass(descrArr);
    let nextActiveElem = activeElem===(itemsArr.length-1)? 0: activeElem+1;
    itemsArr[nextActiveElem].classList.add("active");
    descrArr[nextActiveElem].classList.add("active")
});

leftBtn.addEventListener('click', function () {
   let { descrArr, itemsArr } = getSliderItems();
   let activeElem = itemsArr.findIndex(item => item.classList.contains('active'));
    console.log(activeElem);
    cleanActiveClass(itemsArr);
    cleanActiveClass(descrArr);
   let nextActiveElem = activeElem===0? (itemsArr.length-1): activeElem-1;
    itemsArr[nextActiveElem].classList.add("active")
    descrArr[nextActiveElem].classList.add("active")
   //  activeIndex=activeIndex-1;



    // activeIndex<0? activeIndex=itemsArr.length-1:activeIndex;
});
function cleanActiveClass(elementsArr){
    for(let item of elementsArr){
        item.classList.remove("active");

    }
}

function getSliderItems(){
    return {
        descrArr: Array.from(document.querySelectorAll(".respond-list-item")),
        itemsArr: Array.from(document.querySelectorAll(".carousel-item"))
    };
}

