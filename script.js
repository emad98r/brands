let hidenList=document.querySelector('#hidenList'),
cancelBut=document.querySelector('#cancelBut'),
toNavBut=document.querySelector('#toNavBut');

let topNav=document.querySelector('#topNav .pages'),
cancelButTop =document.querySelector('#cancelButTop');
// let a = window.matchMedia('max-width:767px');
hidenList.addEventListener('click',()=>{
  topNav.style.width ='60%'
})
cancelBut.addEventListener('click',()=>{
  nav.style.width ='0%'
})
toNavBut.addEventListener('click',()=>{
  topNav.style.width ='60%'
})
cancelButTop.addEventListener('click',()=>{
  topNav.style.width ='0%'
})


// =========================

let homePage=document.querySelector('.home-page'),
aboutBut=document.querySelectorAll('#aboutBut'),
homeBut=document.querySelectorAll('#homeBut'),
contactBut=document.querySelectorAll('#contactBut'),
aboutPage=document.querySelector('#aboutPage'),
contactPage=document.querySelector('#contactPage');


aboutBut.forEach((e) => {
  e.addEventListener('click',()=>{
    homePage.style.display='none'
    aboutPage.style.display='block'
    contactPage.style.display='none'
  })
});
contactBut.forEach((e) => {
  e.addEventListener('click',()=>{
    homePage.style.display='none'
    contactPage.style.display='block'
    aboutPage.style.display='none'
  })
});

homeBut.forEach((e)=>{
  e.addEventListener('click',()=>{
    homePage.style.display='block'
    aboutPage.style.display='none'
    contactPage.style.display='none'

  })
})
// =============================
let notAvlbBut=document.querySelectorAll('#notAvlbBut');
notAvlbBut.forEach((e)=>{
  e.addEventListener('click',()=>{
    confirm("Sorry it's NOT Available right now !!!!")
  })
})