 // scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	// parallax desc
	$('.section-1 .box-content .box-element .element:first-child').css({
		'transform':`translate(0,${document.documentElement.scrollTop/20}%)`
	});
	// navbar
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  	$('nav').css({"background":"linear-gradient(to right, #000529 1%,#002055 24%,#005db5 67%,#0074d9 100%)","position":"fixed"});
  	$('.section-1').css({"margin-top": 0});
  } else {
  	$('nav').css({"background":"transparent","position":"relative"});
  	$('.section-1').css({"margin-top": "-50px"});
  }
  // animasi product
  if (document.documentElement.scrollTop > $('#product').offset().top-200){
  	$('.single-product').each(function(i){
  		setTimeout(function(){
  			$('.single-product').eq(i).addClass('show');
  		},300*(i+1))
  	})
  }
  // animasi service
  if (document.documentElement.scrollTop > $('#service').offset().top-200){
  	$('.desc').addClass('showDesc');
  }
} 

// navbar smoot-scroll
$('.nav').click(function(event){
	const dest = $(this).attr('href');
	const elemen = $(dest);
	$('html, body').animate({
		scrollTop: elemen.offset().top-50
	},1000);
	event.preventDefault();
});

// navbar mobile
$('.toggle').click(function(){
	$('nav ul').toggleClass('slide');
})


// product json
$.getJSON('js/product.json', function(products){
	let product = products.product;
	$.each(product, function(i,products){
		$('#product .box-content .box-element:last-child').append(`
			<div class="element">
						<div class="single-product">
							<div class="product-img">
								<img src="img/${products.image}" lazy="load" alt="product image">
							</div>
							<div class="product-info">
								<h3><a class="product-btn" href="/"><b>${products.name}</b></a></h3>
								<hr>
								<p>${products.describe}
								</p>
							</div>
						</div>
					</div>
					`);
	})
})