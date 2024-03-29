
const menuItems2 = document.querySelectorAll('.cabecalho-menu a[href^="index.html"]');
function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
 // Caso queira o nativo apenas
	 //window.scroll({
//	top: to - 80,
	//behavior: "smooth",
	// })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems2.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
// /**
//  * Smooth scroll animation
//  * @param {int} endX: destination x coordinate
//  * @param {int) endY: destination y coordinate
//  * @param {int} duration: animation duration in ms
//  */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  //Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); 60 ;
};

$( document ).ready(function() {
       var urlHash = window.location.href.split("href")[1];
      // console.log(urlHash)
      // console.log("asdsada");
      var urlHash = window.location.href.split("href")[1];
      // alert(urlHash)
      $('html,body').animate({
          scrollTop: $('#' + urlHash +',[name='+urlHash+']').first().offsetTop().top -100
      }, 1000);
      
});