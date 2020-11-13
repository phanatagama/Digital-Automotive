window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	// parallax description
	const description = document.querySelector('.section-1 .box-content .box-element .element:first-child');
	description.style.transform = `translate(0,${document.documentElement.scrollTop/20}%)`;
	
	// navbar show/hide
	const nav = document.querySelector('nav');
	const section1 = document.querySelector('.section-1');
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {	
		nav.style.position = 'fixed';
		nav.style.background = "linear-gradient(to right, #000529 1%,#002055 24%,#005db5 67%,#0074d9 100%)";
  		section1.style.marginTop = '0';
 	} else {
	  	nav.style.position = 'relative';
		nav.style.background = "transparent";
	  	section1.style.marginTop = "-50px";
  	}

  	// animasi product
  	const product = document.getElementById('product').offsetTop-200;
  	const singleProduct = Array.from(document.getElementsByClassName('single-product'));
  	if (document.documentElement.scrollTop > product){
  		singleProduct.forEach(function(i) {
  			setTimeout(function(){
  				i.classList.add('show');},500);
  		})
  	}

  	// animasi service
  	const service = document.getElementById('service').offsetTop-200;
  	const desc = Array.from(document.getElementsByClassName('desc'));
  	if (document.documentElement.scrollTop > service){
  		desc.forEach(function(i){i.classList.add('showDesc');})
  	}
}

// navbar smoot-scroll
const nav = Array.from(document.getElementsByClassName('nav'));
nav.forEach(function(i){
	const dest = i.getAttribute("href");
	const elemen = document.querySelector(dest).offsetTop;
	i.onclick = function(e){
		e.preventDefault();
		scroll({
			top: elemen,
			behavior: "smooth"
		});
	}
})
// $('.nav').click(function(event){
// 	const dest = $(this).attr('href');
// 	const elemen = $(dest);
// 	$('html, body').animate({
// 		scrollTop: elemen.offset().top-50
// 	},1000);
// 	event.preventDefault();
// });