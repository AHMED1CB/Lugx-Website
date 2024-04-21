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

