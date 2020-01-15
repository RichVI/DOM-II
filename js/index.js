// Your code goes here

//1 - Mouseover - Fun Bus
const headingWarp = document.querySelector('.logo-heading');

headingWarp.addEventListener('mouseover', () =>{
    headingWarp.textContent = 'Bus Fun';
    
});

headingWarp.addEventListener('mouseout', () => {
    headingWarp.textContent = 'Fun Bus'
})

//2 Mouse enter/leave - img
const switchPic = document.querySelectorAll('.img-content img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.src = 'https://st2.depositphotos.com/1526816/7315/v/450/depositphotos_73157335-stock-illustration-roadtrip.jpg';
    })
    img.addEventListener('mouseleave', () => {
        img.src = 'https://image.freepik.com/free-vector/creative-hand-lettering-quote-welcome_67074-358.jpg';
    })
})

//3 Click on any p
const html = document.querySelector('html');
const beeswax = document.querySelectorAll('p').forEach((p) => {
    html.addEventListener('dblclick', () => {
        p.textContent = "Here we go!";
    })
})

//4 - Resize
const ohNo = document.querySelector('.intro img');
window.addEventListener('resize', () =>{
    ohNo.src = 'https://static.vecteezy.com/system/resources/previews/000/209/171/non_2x/road-trip-scene-vector.jpg'
})

//5 fun in the sun Button - dodgerblue
const redBtn = document.querySelector('.btn1');
const body = document.querySelector('body');
redBtn.addEventListener('mousedown', () => {
    body.style.backgroundColor = 'dodgerblue'
})
redBtn.addEventListener('mouseup', () => {
    body.style.backgroundColor = 'purple'
})

//6 - Mountain Button - click red
const greenBtn = document.querySelector('.btn2');
greenBtn.addEventListener('click', () => {
    body.style.color = 'red'
})

//7 - Mountain Button - dboule click black
greenBtn.addEventListener('dblclick', () => {
    body.style.color = 'black'
})

//8 - Island Button click blue
const blueBtn = document.querySelector('.btn3');
blueBtn.addEventListener('click', () => {
    body.style.color = 'blue'
})

// Island Button double-click white
blueBtn.addEventListener('dblclick', () => {
    body.style.backgroundColor = 'white'
})

//9 - mousemove - all p
const lawn = document.querySelectorAll('p').forEach((p) => {
    p.addEventListener('mousemove', () => {
        p.textContent = "Are you ready?";
    })
})

//10 click - body
body.addEventListener('click', () => {
    body.style.backgroundColor = 'lightgreen'
})

// click lets go
const bodyText = document.querySelector('.text-content1');

bodyText.addEventListener('click', () => {
    bodyText.style.backgroundColor = 'cyan';
    event.stopPropagation();
})

//prevent default
const stopNav = document.querySelector('.nav-link');
stopNav.addEventListener('click', (event) => {
    event.preventDefault();
})

//Stretch shaky shaky
document.querySelectorAll('div').forEach(el => {
    el.addEventListener('mouseenter', () => {
        TweenMax.to(el, 0.1, {x:"+=20", yoyo:true, repeat:10});
        TweenMax.to(el, 0.1, {x:"-=20", yoyo:true, repeat:10});
    })
})