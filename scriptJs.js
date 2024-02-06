(function () { //код запускається при відкритті сторінки
  const header = document.querySelector('.header');
  window.onscroll = () => {
      if (window.pageYOffset > 50){
          header.classList.add('header-active');   
      }
      else{
          header.classList.remove('header-active');
      }
  };
}());

//header menu
const menu = document.querySelector('.hidden'); 
const menuButton = document.querySelector('.header-burger'); 
 
function handleMenuButton(){ 
    menu.classList.toggle('hidden'); 
} 
 
menuButton.addEventListener('click', handleMenuButton);

//Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
      // видалити перемінну headerElHeight якщо хедер не їздить по сторінці, а прикріплений зверху
      const headerElHeight = document.querySelector('.header').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;

      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());

//for victory-h2
/*var textWrapper = document.querySelector('.victory-h2 .victory-letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='victory-letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.victory-h2 .victory-letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.victory-h2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//for amount-h2
var textWrapper1 = document.querySelector('.amount-h2 .amount-letters');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='amount-letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.amount-h2 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.amount-h2 .line',
      translateX: [0, document.querySelector('.amount-h2 .amount-letters').getBoundingClientRect().width + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.amount-h2 .amount-letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    }).add({
      targets: '.amount-h2',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    }); */


// for a1-beginner

var textWrapper = document.querySelector('.a1-animated .letters-a1-animated');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter-a1-animated'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.a1-animated .letter-a1-animated',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.a1-animated',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


//for a2

var textWrapper1 = document.querySelector('.a2-animated .letters-a2-animated');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter-a2-animated'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.a2-animated .letter-a2-animated',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.a2-animated',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  
//for b1

var textWrapper2 = document.querySelector('.b1-animated .letters-b1-animated');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter-b1-animated'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.b1-animated .letter-b1-animated',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.b1-animated',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  //for b2

  var textWrapper3 = document.querySelector('.b2-animated .letters-b2-animated');
  textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter-b2-animated'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.b2-animated .letter-b2-animated',
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i+1)
    }).add({
      targets: '.b2-animated',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });