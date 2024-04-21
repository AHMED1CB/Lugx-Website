let menu = document.querySelectorAll('.menu')[0]
let icon = document.querySelectorAll('.icon')[0];
let allFilters = document.querySelectorAll('.filters button')
let allCards = document.querySelectorAll('.treanding .card')
allFilters.forEach(function (e) {
e.addEventListener('click' , function () {
allFilters.forEach(function (el) {
el.classList.remove('active')
})



e.classList.add('active')
allCards.forEach(function (e) {
e.style.cssText = 
`
transition:0.5s;
scale:0.5
`;
setTimeout(function() {
e.style.cssText =
`
transition:0.5s;
scale:1;

`;
}, 300);

})

})
})



function all() {
allCards.forEach(function (e) {

setTimeout(function() {
e.style.display = 'block'
}, 350);

})
}

allFilters[0].addEventListener('click' , function () {
all()
})



function adv() {
allCards.forEach(function (e) {
if(e.getAttribute('type') !== 'ADVENTURE'){
setTimeout(function() {
e.style.display = 'none'
}, 550);
}
})
}


allFilters[1].addEventListener('click' , function () {
adv()
})


function str() {
allCards.forEach(function (e) {
if(e.getAttribute('type') !== 'strategy'){
setTimeout(function() {
e.style.display = 'none'
}, 550);
}
})
}

allFilters[2].addEventListener('click' , function () {
str()
})


function ranc() {
	allCards.forEach(function (e) {
if(e.getAttribute('type') !== 'Rancing'){
setTimeout(function() {
e.style.display = 'none'
}, 550);
}
})
}


allFilters[3].addEventListener('click' , function () {
ranc()
})

let header = document.querySelectorAll('header')[0]

// <i class="fa-solid fa-xmark"></i>




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



// <i class="fa-solid fa-xmark"></i>



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