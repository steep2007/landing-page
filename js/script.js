function showModal(id) {
    var element = document.getElementById(id);
    element.classList.add("show-modal");
}

function closeModal(id) {
    var element = document.getElementById(id);
    element.classList.remove("show-modal");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

///////////////////////////////////////////////////////////////////
// function myFunction() {
  // document.getElementById("menu").value = window.history.back().value;
 // window.history.back = window.location.href = "#ifmaker-pag";
//}


//$('section.awSlider .carousel').carousel({
//	pause: "hover",
  //interval: 2000
//});

//var startImage = $('section.awSlider .item.active > img').attr('src');
//$('section.awSlider').append('<img src="' + startImage + '">');

//$('section.awSlider .carousel').on('slid.bs.carousel', function () {
// var bscn = $(this).find('.item.active > img').attr('src');
//	$('section.awSlider > img').attr('src',bscn);
//});


/* 
Philips ambilight tv
Üzerine gleince duruyor slide
*/
