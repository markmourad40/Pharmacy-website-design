(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Header slider
    $('.header-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Product Slider 4 Column
    $('.product-slider-4').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Product Slider 3 Column
    $('.product-slider-3').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Product Detail Slider
    $('.product-slider-single').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-slider-single-nav'
    });
    $('.product-slider-single-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.product-slider-single'
    });
    
    
    // Brand Slider
    $('.brand-slider').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Widget slider
    $('.sidebar-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Quantity
    $('.qty button').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    
    
    // Shipping address show hide
    $('.checkout #shipto').change(function () {
        if($(this).is(':checked')) {
            $('.checkout .shipping-address').slideDown();
        } else {
            $('.checkout .shipping-address').slideUp();
        }
    });
    
    
    // Payment methods show hide
    $('.checkout .payment-method .custom-control-input').change(function () {
        if ($(this).prop('checked')) {
            var checkbox_id = $(this).attr('id');
            $('.checkout .payment-method .payment-content').slideUp();
            $('#' + checkbox_id + '-show').slideDown();
        }
    });
})(jQuery);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var products ={
    product_1 :{"name":"DAFLON 500mg", "price":64,"id":"1","src":"img/med1.jpg"},
    product_2 :{"name":"MAXILASE syp", "price":20,"id":"2","src":"img/med2.webp"},
    product_3 :{"name":"BRUFEN 400mg", "price":30,"id":"3","src":"img/med3.png"},
    product_4 :{"name":"TOPLEXIL syp", "price":12,"id":"4","src":"img/med4.jpg"},
    product_5 :{"name":"CATAFLAM 50mg","price":33,"id":"5","src":"img/med5.jpg"},
    product_6 :{"name":"PEDIAKID syp", "price":24,"id":"6","src":"img/med6.jpg"},
    product_7 :{"name":"PROTOZOLE 500mg","price":37,"id":"7","src":"img/med7.jpg"},
    product_8 :{"name":"PECTIPRO syp","price":11,"id":"8","src":"img/med8.jpg"},
    product_9 :{"name":"BIPROFENID 150mg","price":20,"id":"9","src":"img/med9.jpg"} 
};

var globalArr;
var productsArr = [];
//upload json data to local storage
function uploadItems(){
    //save item
    localStorage.setItem("products_key", JSON.stringify(products));
    // Retrieve the object from storage
    var myJSONProduct = localStorage.getItem("products_key");
    //tranform to json
    var myProduct = JSON.parse(myJSONProduct);
    //get specific data
    var itemData = myProduct;
    globalArr = itemData;
    //distribute items to category
    for(var key=0 ;key<Object.keys(globalArr).length;key++){
       productsArr.push(globalArr[key]);
    }
}
uploadItems();

function addCart(){      
    document.getElementById("addItmGORG").innerHTML='(' + ++cnt +')';
}

var cnt = 0; //count of total carts
var res = 0;
var sumAll = 0;
function add(itmID,inpID,resID){      //ADD Cart
    for(item in products){
        if(itmID==products[item].id && inpID==itmID+"N" && resID==itmID+"res"){
            quant  = document.getElementById(inpID);
            result = (parseInt(quant.value)+1)*products[item].price;
            res = document.getElementById(resID).innerHTML=result;
            document.getElementById("addItmGORG").innerHTML='(' + ++cnt +')';
            document.getElementById('subTotal').innerHTML =sumAll+res;
        }
    }
}

function remove(itmID,resID){  //remove 1 item
    for(item in products){
        if(itmID==products[item].id && resID==itmID+"res"){
            if(document.getElementById(resID).innerHTML == 0){
                break;
            }
            var result = document.getElementById(resID).innerHTML-products[item].price;
            res = document.getElementById(resID).innerHTML=result;
            document.getElementById("addItmGORG").innerHTML='(' + --cnt +')';
            document.getElementById('subTotal').innerHTML = sumAll+res;
        }
    }
}

function removeAll(inpID,resID){   //remove all from same product
    cnt = cnt-parseInt(document.getElementById(inpID).value);
    document.getElementById("addItmGORG").innerHTML='(' + cnt +')';
    document.getElementById(inpID).value=0;
    document.getElementById(resID).innerHTML=0;
    document.getElementById('subTotal').innerHTML=0;
}




///////////////////////////////////////////////////////////


$(document).ready(function(){
    //Redirect Pages to Login Page if User Clicked Logout Button
    // if(localStorage.getItem('CurrentUserName') == null){
    //     window.location.assign('login.html');
    // }

    //This function is responsable for save Username in every page in my-account element
    if(localStorage.getItem('CurrentUserName') != null){
        let user = localStorage.getItem('CurrentUserName')
        let account = document.getElementById('my-account');
        account.innerText = user.toString();
    }
});

$('#log-out').click(function(){
   localStorage.removeItem('CurrentUserName'); 
});

