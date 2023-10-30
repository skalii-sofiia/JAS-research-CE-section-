// var preload = document.createElement('div');

// preload.className = "preloader";
// preload.innerHTML = '<div class="b-ico-preloader"></div><div class="spinner"></div>';
// document.body.appendChild(preload);

// window.addEventListener('load', function() {
//   //Uncomment to fade preloader after document load
//   preload.className +=  ' fade';
//   setTimeout(function(){
//     preload.style.display = 'none';
//   },600);
// })

//for victory-h2
var textWrapper = document.querySelector('.victory-h2 .victory-letters');
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
    });
