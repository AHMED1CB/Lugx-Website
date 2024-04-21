let header = document.querySelector('.header')

let menu = document.querySelectorAll('.menu')[0]
let icon = document.querySelectorAll('.icon')[0];


icon.onclick = function () {
if(this.innerHTML.trim() === `<i class="fa-solid fa-bars fa-4x toggle"></i>`){
this.innerHTML = `<i class="fa-solid fa-xmark fa-3x toggle"></i>`;
menu.classList.add('hero')
}else{
this.innerHTML = `<i class="fa-solid fa-bars fa-4x toggle">`
menu.classList.remove('hero')
}
}

window.onscroll = function() {
if(this.scrollY >= 200){
header.style.cssText=`
position:sticky;
background:#007aff;
z-index:98654;
top:0;
border-radius:0 0 50px 50px;
`;


}else{
header.style.cssText=`
position:static;
top:0;
background:#007aff;
z-index:98654
`
}

}



let swappers = document.querySelectorAll('.titles button')

swappers.forEach(function (e) {
e.addEventListener('click' , function () {
swappers.forEach(function (el) {
el.classList.remove('active')
})



e.classList.add('active')
})})

let swapperButton = document.querySelector('.titles button')
swapping2.addEventListener('click' , function () {
swapper2.style.cssText = `
transition:0.5s;
scale:0.5
`;

setTimeout(function() {
swapper2.innerHTML = `
Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen.

`
swapper2.style.cssText = `
transition:0.5s;
scale:1;
`;


}, 300);
})




swapping2.addEventListener('click' , function () {
swapper1.style.cssText = `
transition:0.5s;
scale:0.5
`;

setTimeout(function() {
swapper1.innerHTML = `
Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.


`
swapper1.style.cssText = `
transition:0.5s;
scale:1;
`;


}, 300);
})


swapping2.addEventListener('click' , function () {
swapper2.style.cssText = `
transition:0.5s;
scale:0.5
`;

setTimeout(function() {
swapper2.innerHTML = `
Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen.

`
swapper2.style.cssText = `
transition:0.5s;
scale:1;
`;


}, 300);
})




swapping1.addEventListener('click' , function () {
swapper1.style.cssText = `
transition:0.5s;
scale:0.5
`;

setTimeout(function() {
swapper1.innerHTML = `
You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.


`
swapper1.style.cssText = `
transition:0.5s;
scale:1;
`;


}, 300);
})


swapping1.addEventListener('click' , function () {
swapper2.style.cssText = `
transition:0.5s;
scale:0.5
`;

setTimeout(function() {
swapper2.innerHTML = `
Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.



`
swapper2.style.cssText = `
transition:0.5s;
scale:1;
`;


}, 300);
})
