// animate on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  // animasi product
    if (document.documentElement.scrollTop > $('#PRODUCT').offset().top-200){
        $('.single-product').each(function(i){
            setTimeout(function(){
                $('.single-product').eq(i).addClass('show');
            },300*(i+1))
        })
    } else {
        $('.single-product').each(function(i){
            setTimeout(function(){
                $('.single-product').eq(i).removeClass('show');
            },300*(i+1))
        })
    }
  // animasi service
   if (document.documentElement.scrollTop > $('#SERVICE').offset().top-200){
    $('.service-desc-1').addClass('show');
    $('.service-desc-2').addClass('show');
    } else{
        $('.service-desc-1').removeClass('show');
        $('.service-desc-2').removeClass('show');
    }
} 
// toggle mobile
$('.toggle').click(function(){
	$('nav ul').toggleClass('mobile');
});

// data json
$.getJSON('js/product.json', products => {
    let product = products.product;
    $.each(product, (i,products) => {
        $('.product-body.grid').append(`
            <div class="single-product grid">
                        <div class="product-img"></div>
                        <div class="product-btn center my-10">
                            <h3><a class="product-click my-5 text-white" href="${products.url}"><b>${products.name}</b></a></h3>
                            <hr>
                        </div>
                        <div class="product-describe px-10 text-justify">
                            ${products.describe}
                        </div>
                    </div>
                    `);
    })
});
$.getJSON('js/service.json', services =>{
    let service1 = services.service1;
    let service2 = services.service2;
    $.each(service1, (i,services) => {
        $('.service-desc-1 ul').append(`
            <li class="flex mb-20">
                                <div class="service-item">
                                    <h2><b>${services.title}</b></h2>
                                    <p>${services.describe}</p>
                                </div>
                                <div class="service-icon flex">
                                    <b class="icon center flex">✔</b>
                                </div>
                            </li>
                    `);
    });
    $.each(service2, function(i,services){
        $('.service-desc-2 ul').append(`
            <li class="flex mb-20">
                                <div class="service-icon flex">
                                    <b class="icon center flex">✔</b>
                                </div>
                                <div class="service-item">
                                    <h2><b>${services.title}</b></h2>
                                    <p>${services.describe}</p>
                                </div>                
                            </li>
                    `);
    })
});


// modal dan pesan
$('button[name="lacak"]').click(function(){
    $('.modal').css({"display": "block"});
})
$('.close').click(function(){
    $('.modal').css({"display": "none"});
})
// document.addEventListener('DOMContentLoaded', function() {
//     var parent = document.querySelector('#OWNER .container'),
//         topPanel = parent.querySelector('.top'),
//         handle = parent.querySelector('.handle'),
//         delta = 0;
//     parent.addEventListener('mousemove', function(event) {
//         delta = (event.clientX - window.innerWidth / 2) * 0.5;
//         handle.style.left = event.clientX + delta + 'px';
//         topPanel.style.width = event.clientX + delta + 'px';
//     });
// });