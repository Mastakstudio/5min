$(document).ready(function(){
    $($('.opacity')[0]).addClass('o-active');
    $($('.opacity')[1]).addClass('o-active');
    setTimeout(function(){
        $($('.opacity')[2]).addClass('o-active');
    },200);
    
    setTimeout(function(){
        $($('.opacity')[4]).addClass('o-active');
    },400);
    setTimeout(function(){
        $($('.opacity')[3]).addClass('o-active');
    },800);
    setTimeout(function(){
        $($('.opacity')[5]).addClass('o-active');
    },800);

    $('.sub-window-exit').click(function(){
        $(this).parents('.sub-window').hide();
    });

    if($(window).width()>768){
        var scrollPos = 0;
        $(window).scroll(function() {
            var target = $(this).scrollTop();

            if(target > 170) {
                var st = $(this).scrollTop();
                if (st > scrollPos){
                    $('.header-fixed-cont').slideDown(100);
                    $('.header').slideUp(200);
                    $('.header-bottom-mob').slideUp(200);
                    $('.mob-drop-menu').addClass('fixed');
                    $('.mob-drop-menu').removeClass('fixed2');
                } else {
                    $('.header-fixed-cont').slideUp(100);
                    $('.header').slideDown(200);
                    $('.header-bottom-mob').slideDown(200);
                    $('.mob-drop-menu').removeClass('fixed');
                    $('.mob-drop-menu').addClass('fixed2');
                }
                scrollPos = st;
                
            }else{
                
            }
            if(target > 39 && target < 170) {
                $('.mob-drop-menu').addClass('fixed2');
            }else{
                // $('.mob-drop-menu').removeClass('fixed2');
            }
            if(target > 39) {
                $('header').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
                $('.mob-drop-menu').removeClass('fixed2');
            }
        });
    }else{
        $(window).scroll(function() {
            var target = $(this).scrollTop();
            if(target > 39) {
                $('header').addClass('fixed');
                $('.mob-drop-menu').addClass('fixed');
            } else {
                $('header').removeClass('fixed');
                $('.mob-drop-menu').removeClass('fixed');
            }
        });
        var target = $(window).scrollTop();
        if(target > 39) {
            $('header').addClass('fixed');
            $('.mob-drop-menu').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
            $('.mob-drop-menu').removeClass('fixed');
        }
    }
    
    $('.quick-content-right-color').click(function(){
        var parent = $(this).parents('.quick-content-right-colors');
        $(parent).find('.quick-content-right-color').removeClass('active');
        $(this).addClass('active');
    });

    $('.quick-content-right-button-plus').click(function(){
        var parent = $(this).parents('.quick-content-right-counter');
        $(parent).find('.quick-content-right-count').val(Number($(parent).find('.quick-content-right-count').val())+Number(1));
    });
    $('.quick-content-right-button-minus').click(function(){
        var parent = $(this).parents('.quick-content-right-counter');
        $(parent).find('.quick-content-right-count').val(Number($(parent).find('.quick-content-right-count').val())-Number(1));
    });

    $('.home-main-slider').slick({
        infinite: true,
        dots:true,
        nextArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right.svg"></div></div>',
        prevArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left.svg"></div></div>',
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.podborka-slider').slick({
        infinite: true,
        dots:false,
        nextArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right-black.svg"></div></div>',
        prevArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left-black.svg"></div></div>',
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    variableWidth: true,
                    arrows:false,
                    dots:true
                }
            }
        ]
    });

    $('.stock-block-slider').slick({
        infinite: true,
        dots:false,
        nextArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left-black.svg"></div></div>',
        prevArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right-black.svg"></div></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    variableWidth: true,
                    arrows:false,
                    dots:true,
                    infinite:true,
                    // swipe:false
                }
            }
        ]
    });
    $('.product-couple-slider.cartpage').slick({
        infinite: true,
        dots:false,
        nextArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left-black.svg"></div></div>',
        prevArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right-black.svg"></div></div>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    variableWidth: true,
                    arrows:false,
                    dots:true,
                    infinite:true,
                    // swipe:false
                }
            }
        ]
    });

    $('.product-couple-slider.cartright').slick({
        variableWidth: true,
        arrows:true,
        dots:true,
        infinite:true,
        nextArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left-black.svg"></div></div>',
        prevArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right-black.svg"></div></div>',
        slidesToShow: 3,
        slidesToScroll: 1,
        
    });

    $('.stock-block-product-img-slider').on('mouseover', function(){
        console.log('false');
        $('.stock-block-slider').slick('slickSetOption', 'swipe', false);
    })
    $('.stock-block-product-img-slider').on('vmousedown', function(){
        console.log('false');
        $('.stock-block-slider').slick('slickSetOption', 'swipe', false);
    })

    $('.stock-block-product-img-slider').slick({
        infinite: true,
        dots:true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // swipeToSlide:true
    }).on('afterChange', function(event, slick){
        console.log('true');
        $('.stock-block-slider').slick('slickSetOption', 'swipe', true);
    });

    $('.top-block-slider').slick({
        infinite: true,
        dots:false,
        nextArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left-black.svg"></div></div>',
        prevArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right-black.svg"></div></div>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    // variableWidth: true,
                    // arrows:false,
                    dots:true,
                    infinite:true
                    
                }
            }
        ]
    });

    $('.home-contact-photos-slider').slick({
        infinite: true,
        dots:true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.quick-content-slider-top').slick({
        infinite: false,
        dots:false,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: $(this).find('.quick-content-slider-bottom'),
    });
    $('.quick-content-slider-bottom').slick({
        infinite: false,
        dots:false,
        nextArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right-black.svg"></div></div>',
        prevArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left-black.svg"></div></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: $(this).find('.quick-content-slider-top'),
    });
    

    setTimeout(function(){
        $('.podborka-slider').hide();
        $('.podborka-slider.active').show();
    },1000);
    
    $('.reviews-tab').slick({
        infinite: true,
        dots:false,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right-black.svg"></div></div>',
        prevArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left-black.svg"></div></div>',
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    variableWidth: true,
                    arrows:false,
                    dots:false,
                    slidesToShow: 1,
                    
                }
            }
        ]
    });

    //

    $('.quick-content-info-slider').slick({
        infinite: false,
        dots:false,
        arrows:true,
        nextArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right-black.svg"></div></div>',
        prevArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left-black.svg"></div></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    //

    setTimeout(function(){
        $('.reviews-tab').hide();
        $('.reviews-tab.active').show();
    },1500);


    // $('.home-faq-title').click(function(){
    //     var parent = $(this).parents('.home-faq-item');
    //     $(this).toggleClass('active');
    //     $(parent).find('.home-faq-text').slideToggle();
    // });
    // $('.home-faq-title').click(function(){
    //     var parent = $(this).parents('.home-faq-item');
    //     $(this).toggleClass('active');
    //     $(parent).find('.home-faq-text').slideToggle();
    // });


    $('.header-menu-catalog').click(function(){
        $('.header-menu-catalog').toggleClass('active');
        $('.main').toggleClass('active');
        $('body').toggleClass('hid');
        $('.mob-drop-menu').slideToggle();
    });
    $('.main-shadow').click(function(){
        $('.header-menu-catalog').removeClass('active');
        $('.main').removeClass('active');
        $('body').removeClass('hid');
        $('.mob-drop-menu').slideUp();
        console.log('asds');
    });

    $('.podborka-top-button').click(function(){
        var cont = $(this).parents('.podborka');
        var id = $(this).data('slideid');
        // console.log($(cont).find('.podborka-slider-'));
        $(cont).find('.podborka-slider').fadeOut(200); 
        setTimeout(function(){
            $(cont).find('.podborka-slider-'+id).fadeIn();
        },200)
        

        $(cont).find('.podborka-top-button').removeClass('active');
        $(this).addClass('active');
    });
    $('.reviews-tab-button').click(function(){
        var cont = $(this).parents('.reviews');
        var id = $(this).data('tabid');
        
        $(cont).find('.reviews-tab').fadeOut(200); 
        setTimeout(function(){
            $(cont).find('.reviews-tab-'+id).fadeIn();
        },200)
        
        $(cont).find('.reviews-tab-button').removeClass('active');
        $(this).addClass('active');
        
        // $('.reviews-tab-2').slick('reinit');
    });

    if($(window).width()<768){
        $('.reviews-tab').addClass('dots-line');
    }
    
    $('.stock-block-product-img-view').click(function(){
        console.log('asdasd');
        $('.popup-quick').addClass('active');
        setTimeout(function(){
            $('.quick').addClass('active');
        },100);
        $(".quick-content-info-slider").slick('reinit');
        $(".quick-content-slider-top").slick('reinit');
        $(".quick-content-slider-bottom").slick('reinit');

        
        
    });

    $('.quick-top-exit').click(function(){
        $('.quick').removeClass('active');
        
        setTimeout(function(){
            $('.popup-quick').removeClass('active');
        },100);
    });

});

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });


//   catalog

    $('.catalog-filter-row-item-title').click(function(){
        $(this).toggleClass('active');
        $(this).parents('.catalog-filter-row').find('.catalog-filter-row-items').slideToggle();
        if($(this).parents('.catalog-filter-row').find('.catalog-filter-row-items').hasClass('active')==false){
            $(this).parents('.catalog-filter-row').find('.catalog-filter-row-item-all').slideToggle();   
        }
    })
    $('.catalog-filter-row-item-all').click(function(){
        $(this).hide();
        $(this).parents('.catalog-filter-row').find('.catalog-filter-row-items').addClass('active');
    });


//   product

    $('.product-top-left-slider').slick({
        infinite: false,
        dots:false,
        nextArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right-black.svg"></div></div>',
        prevArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left-black.svg"></div></div>',
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        asNavFor: $('.product-top-left-img'),
    });
    $('.product-top-left-img').slick({
        infinite: false,
        dots:false,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        asNavFor: $('.product-top-left-slider'),
    });
    
    $('.product-top-right-variations').slick({
        infinite: false,
        dots:false,
        nextArrow:'<div class="slick-next slick-arrow"><div><img src="../img/arrow-right-black.svg"></div></div>',
        prevArrow:'<div class="slick-prev slick-arrow"><div><img src="../img/arrow-left-black.svg"></div></div>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    arrows:false,
                    dots:false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    
                }
            }
        ]
        // focusOnSelect: true,
    });

    
    // 


    $('.product-tabs-tab-desc-button').click(function(){
        $('.product-tabs-tab-desc-text').addClass('active');
        $(this).remove();
    });

    // 

    $('.catalog-filter-mob-button').click(function(){
        $('.catalog-filter-popup').addClass('active');
    });
    $('.catalog-filter-popup-title').click(function(){
        $('.catalog-filter-popup').removeClass('active');
    });

    $('.product-mob-tab').click(function(){
        $(this).find('.product-mob-tab-title').toggleClass('active');
        $(this).find('.product-mob-tab-content').slideToggle();
    });

    // 

    $('.product-tabs-button').click(function(){
        var slideId = $(this).data('cont');

        $('.product-tabs-tab').removeClass('active');
        $('.product-tabs-button').removeClass('active');

        $(this).addClass('active');
        $('.product-tabs-tab-'+slideId).addClass('active');
    });

     // це соло
     $('.love-slider').slick({
        infinite: true,
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows : false,
        dotsClass: 'dots-style',
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    variableWidth: true,
                    arrows:false,
                    dots:true
                }
            }
        ]
    });
    $('.love-slider-ad').slick({
        infinite: true,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows : false,
        dotsClass: 'dots-style',
        responsive: [
            {
                breakpoint: 1000,
                settings:{
                    slidesToShow:3
                }
               
            }, 
            {
                breakpoint: 760,
                settings:{
                    slidesToShow:2
                }
               
            }
            
        ]
    });
    $('.select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 350; // длительность анимации 

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });


    var mh = 0;
    $(".way-blc-mid").each(function () {
        var h_block = parseInt($(this).height());
        if(h_block > mh) {
        mh = h_block;
        };
    });
    $(".way-blc-mid").height(mh);

//  right popup  
    $('.right-popup-exit').click(function(){
        $(this).parents('.right-popup-cont').removeClass('show');
    });
    $('.show-cart').click(function(){
        $('.right-popup-cont.cart').addClass('show');
    });
// 
     
});



//js for my-order-page//
let closeBtnPopup = document.querySelector('.my-order-popup')
let openInfoPopup =document.querySelector('.openPopup')
let mainPopup = document.querySelector('.main')
let headerBg = document.querySelector('.test')
let bgForPopup = document.querySelector('.bg-popup')

function openPopup(){
    closeBtnPopup.style.display = 'block';
    mainPopup.style.pointerEvents = 'none'
    document.body.style.overflow = 'hidden'
    bgForPopup.style.display = 'block';
}

function closePopup(){
    closeBtnPopup.style.display = 'none'
    document.body.style.backgroundColor = '#fff'
    mainPopup.style.pointerEvents = 'auto'
    document.body.style.overflow = 'auto'
    bgForPopup.style.display = 'none';
}
//js for popup exit//    



let exitBtn = document.querySelector('.exit-btn')
let exitPopup = document.querySelector('.exit-popup-wrapp')


function openExitPopup(){
    bgForPopup.style.display = 'block';
    mainPopup.style.pointerEvents = 'none'
    exitPopup.style.display = 'block';
    document.body.style.overflow = 'hidden'
}

function closeExitPopup(){
    bgForPopup.style.display = 'none';
    exitPopup.style.display = 'none'
    mainPopup.style.pointerEvents = 'auto'
    document.body.style.overflow = 'auto'
}


// popup order tgiven

let openTgivenPopup = document.querySelector('.popup-tgiven-wrapp')
let youOrderBtn = document.querySelector('.you-order-btn')

function openGivenPopup(){
    bgForPopup.style.display = 'block';
    openTgivenPopup.style.display = 'block';
    mainPopup.style.pointerEvents = 'none'
    document.body.style.overflow = 'hidden'
  
}
function closeGivenPopup(){
    bgForPopup.style.display = 'none';
    openTgivenPopup.style.display = 'none';
    mainPopup.style.pointerEvents = 'auto'
    document.body.style.overflow = 'auto'
  
}

// if(window.innerWidth>400){
//     $(document).mouseup(function (e) {
//         var container = $("body");
//         if (container.has(e.target).length === 1){
//             closeGivenPopup()
//         }
//     });
// }



// маска номера для страницы  гарантий

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

// для попапа входаи регистрации
let authWrapp =document.querySelector('.popup-auth-blc')
let regWrapp = document.querySelector('.popup-reg-blc')

function openPopapEnter(){
    authWrapp.style.display = 'block'
}
function closeEn(){
    authWrapp.style.display = 'none';
    regWrapp.style.display = 'none';
}
function showReg(){
    authWrapp.style.display = 'none';
    regWrapp.style.display = "block";
}
function showAuth(){
    authWrapp.style.display = 'block'
    regWrapp.style.display = 'none';
}

let aDelBtn = document.querySelector('.home-faq-title');

let contFormFqa =document.querySelector('.home-faq')
let key= 1;
aDelBtn.addEventListener('click',function(event)  {
   
   

    let arrForm = document.querySelectorAll('.form-del');

    let idElem = "el"+key;

    

    contFormFqa.insertAdjacentHTML('beforebegin', '<div class="form-del" id="'+idElem+'" data-adress-id="'+key+'"  action=""> <div class="close-form-del"></div><div class="user-form-data-adress"><div class="user-data-input-container user-data-input-20"><label for="us-dt-pS" aria-label="lb-t" class="forScroll'+key+'">Населенный пункт*</label><input id="us-dt-pS" name="city-'+key+'"  type="text" placeholder="Самара"> </div><div class="user-data-input-container "><label for="us-dt-str">Улица*</label><input id="us-dt-str"  name="street-'+key+'"  type="text" placeholder="Ленина"></div></div><div class="user-form-adres-place"> <div class="left-user-form-agress"><div class="user-data-input-container-adress adr-150"><label for="us-dt-home">Дом*</label><input id="us-dt-home" name="home-'+key+'"   type="text" placeholder="23"></div><div class="user-data-input-container-adress adr-150"><label for="us-dt-ad-home">Корпус</label><input id="us-dt-ad-home" name="cor-'+key+'"   type="text" placeholder="1"></div></div>  <div class="right-user-form-agress"><div class="user-data-input-container-adress adr-109"><label for="us-dt-num-flat">Квартира</label><input id="us-dt-num-flat" name="flat-'+key+'"  type="text" placeholder="53"></div><div class="user-data-input-container-adress adr-109"><label for="us-dt-pod">Подъезд</label><input id="us-dt-pod" name="pod-'+key+'"  placeholder="2"></div><div class="user-data-input-container-adress adr-109"><label for="us-dt-etj">Этаж</label><input id="us-dt-etj" name="etj-'+key+'"  type="text" placeholder="9"></div></div></div> <div class="make-adress-default"><div class="home-bottom-form-checkbox home-bottom-form-checkbox-adress"><input type="checkbox" name="city-'+key+'"  id="adress-default"><div><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5L5 9L9.42731 1.12923L9.5 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"./></svg></div></div><label for="adress-default">Сделать адресом по умолчанию</label></div></div>    ');

    let arrCloseForm = document.querySelectorAll(".close-form-del");
    arrCloseForm.forEach(function(item){
        item.addEventListener("click",function(event){
            let idName = item.parentNode.id;
            
            let test = document.getElementById(idName)
            test.remove();
        })
    })
    key++;
})



// function handleButtonClick() {
//     window.scrollBy({
//         top: 390,
//         left: 0,
//         behavior: "smooth",
//       });

// }

// btn.addEventListener("click", handleButtonClick);


var hiddenElement = document.querySelector(".home-faq");
var btn = document.querySelector(".faq-for-adrees");

let lastOfArr = document.querySelectorAll(".form-del")
let elArr = lastOfArr[lastOfArr.length -1 ]

console.log(elArr)

function handleButtonClick() {
    // window.scrollBy({
    //     top: 390,
    //     left: 0,
    //     behavior: "smooth",
    //   });
//   hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
let arrLbArr =document.querySelectorAll('[aria-label="lb-t"]');

let elemLbArr = arrLbArr[arrLbArr.length-1];

let boundItem = elemLbArr.getBoundingClientRect();
window.scrollBy({
        top: boundItem.top- 150 ,
        left: 0,
        behavior: "smooth",
      });

}
btn.addEventListener("click", handleButtonClick);




