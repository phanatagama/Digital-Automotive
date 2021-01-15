// animate on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  // animasi product
    if (document.documentElement.scrollTop > $('#PRODUCT').offset().top-300){
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
    if (document.documentElement.scrollTop > $('#TESTIMONIAL').offset().top-400){
        $('.testimonials').each(function(i){
            setTimeout(function(){
                $('.testimonials').eq(i).addClass('show');
            },300*(i+1))
        })
    } else {
        $('.testimonials').each(function(i){
            setTimeout(function(){
                $('.testimonials').eq(i).removeClass('show');
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

// data json product
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
// data json service
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
    let resi = $('input[name="resi"]').val();
    $.getJSON('js/dataresi.json', products => {
        let DataResi = products.DataResi;
        $.each(DataResi, (i,products) => {
            if (resi == products.Resi){
                $('.modal-body').html(`<div class="modal-img">
                                <img src="img/${products.Image}" lazy="load" alt="order image">
                            </div>
                            <div class="modal-desc center">
                                <table border="1" width="100%">
                                    <tr>
                                        <th><h3>Resi </h3></th>
                                        <td><b>${products.Resi}</b></td>
                                    </tr>
                                    <tr>
                                        <th><h3>Product </h3></th>
                                        <td><b>${products.Product}</b></td>
                                    </tr>
                                    <tr>
                                        <th><h3>Pengirim </h3></th>
                                        <td><b>${products.Pengirim}</b></td>
                                    </tr>
                                    <tr>
                                        <th><h3>Penerima </h3></th>
                                        <td><b>${products.Penerima}</b></td>
                                    </tr>
                                    <tr>
                                        <th><h3>Kurir </h3></th>
                                        <td><b>${products.Kurir}</b></td>
                                    </tr>
                                    <tr>
                                        <th><h3>Harga </h3></th>
                                        <td><b>Rp ${products.Harga}</b></td>
                                    </tr>
                                    <tr>
                                        <th><h3>Estimasi </h3></th>
                                        <td><b>${products.Estimasi}</b></td>
                                    </tr>
                                    <tr>
                                        <th><h3>Status</h3></th>
                                        <td><b>Surabaya (Transit)<br>
                                         Jember (Gateway)<br>
                                         Banyuwangi (Sub Gateway)
                                        </b></td>
                                    </tr>
                                    <tr>
                                        <th><h3>Deskripsi</h3></th>
                                        <td><b>${products.Describe}</b></td>
                                    </tr>
                                </table> 
                            </div>`
                );
                return false;
            }else{
                $('.modal-body').html(`<div class="modal-img">
                                <img src="img/product1.png" alt="order image">
                            </div>
                            <div class="modal-desc center">
                            <h1>Nomer Resi Yang Anda Masukkan Salah/Tidak Terdaftar!</h1></div>`);
            }
        })
    });
    $('.modal').css({"display": "block"});
})
$('.close').click(function(){
    $('.modal').css({"display": "none"});
})

// colour
$('.btn.mx-5:first-child').hover(function(){
    $('body').get(0).style.setProperty("--primary-color","linear-gradient(to right, #290000 1%,#550010 24%,#b50022 67%,#d9004d 100%)");
});
$('.btn.mx-5:nth-child(2)').hover(function(){
    $('body').get(0).style.setProperty("--primary-color","linear-gradient(to right, #000529 1%,#002055 24%,#005db5 67%,#0074d9 100%)");
});
$('.btn.mx-5:last-child').hover(function(){
    $('body').get(0).style.setProperty("--primary-color","linear-gradient(to right, #002903 1%,#1c5500 24%,#44b500 67%,#75d900 100%)");
});