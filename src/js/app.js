import gsap, {TimelineMax, Power3, Expo} from 'gsap';
gsap.registerPlugin(TimelineMax, Power3, Expo);

document.body.addEventListener('touchmove', (e)=> e.preventDefault());

const tl = new TimelineMax();

const title = document.querySelector('.title');
const navigation = document.querySelector('nav');
const subtitle = document.querySelector('.sub-title');
const botNav = document.querySelector('.bottom-nav');
const home = document.querySelector('#home');

const bg = document.querySelector('.bg-image');
const grid = document.querySelector('.grid');
const img1 = document.querySelector('.imgs');
const img2 = document.querySelector('.imgs-2');
const img3 = document.querySelector('.imgs-3');
const img4 = document.querySelector('.imgs-4');

const imgs = [img1, img2, img3, img4];

document.addEventListener('DOMContentLoaded', ()=>{
    tl.from(title, 1.5, {y:200, ease: Power3.easeInOut});
    tl.from(navigation, 1, {y:30, autoAlpha:0, ease:Power3.easeInOut}, '-=1');
    tl.from(subtitle, 1, {y:30, autoAlpha:0, ease:Power3.easeInOut});
    tl.from(botNav, 2, {width:'0%', autoAlpha:0, ease:Power3.easeInOut}, '-=2');
});

botNav.addEventListener('click', ()=> {
  const tl2 = new TimelineMax();

  tl2.set(grid, {display: 'grid'});
  tl2.to('.forest img', 3, {y: -400, scale:1.2, ease:Expo.easeInOut});
  tl2.to(bg, 3, {y: -600, ease:Expo.easeInOut},'-=3');
  tl2.to(subtitle, 3, {autoAlpha:0, y:-100, ease:Expo.easeInOut},'-=3');
  tl2.to(botNav, 3, {width: '0%', ease:Expo.easeInOut},'-=4');

  imgs.forEach(img => tl2.to(img, 2, {height: '100%', ease:Expo.easeInOut}, '-=1.5'));

  tl2.to('.destionation', 2, {opacity:1, y:-20, ease:Expo.easeOut}, '-=1.5');

  home.addEventListener('click', ()=> tl2.reverse());
})
