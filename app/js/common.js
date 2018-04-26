$('.mySlick').slick({
    dots: true,
    slidesToShow: 1,
    appendArrows: $('.my-arrows'),
    prevArrow: '.prev',
    nextArrow: '.next'
});


//============================================================================

var elemWichClick = document.getElementsByClassName('search_for_tablet'),
    elemWichShow = document.getElementsByClassName('searchField'),
    elemWichClick2 = document.getElementsByClassName('top_search'),
    elemWichShow2 = document.getElementsByClassName('top_search_field'),
    elemWichClick3 = document.getElementsByClassName('basket'),
    elemWichShow3 = document.getElementsByClassName('basket_body');

function toogleClass(ce, se, cl) {
    document.onclick = function (e) {
        var targ = e.target;
        if(targ == ce[0] || targ.parentNode == ce[0]) {
            se[0].classList.toggle(cl);
            return;
        } else if (targ.className == se[0].className) {
            return;
        }
        se[0].classList.remove(cl);
    }
}

elemWichClick.onclick = function () {
    toogleClass(elemWichClick, elemWichShow, 'activeSearch');
}

elemWichClick2[0].onclick = function () {
    toogleClass(elemWichClick2, elemWichShow2, 'top_active');
}

elemWichClick3[0].onclick = function () {
    toogleClass(elemWichClick3, elemWichShow3, 'basket_body_active');
}
//=============================================================================

var menuIcon = elemWichClick = document.getElementsByClassName('tablet_menu'),
    elemWichShow4 = document.getElementsByClassName('menu_body');

menuIcon[0].onclick = function () {
    document.onclick = function (e) {
        var targ = e.target;
        if(targ == menuIcon[0] || targ.parentNode == menuIcon[0]) {
            menuIcon[0].classList.toggle('active_menu');
            elemWichShow4[0].classList.toggle('menu_body_active');
            return;
        }
        menuIcon[0].classList.remove('active_menu');
        elemWichShow4[0].classList.remove('menu_body_active');
    }
}
//============================================================================

// var appendedElements = document.getElementsByClassName("appended_to_mh");
// var elementInWhichAppend = document.getElementById('for_append');
//
// for (i = 0; i < appendedElements.length; i++) {
//     var cln = appendedElements[i].cloneNode(true);
//     elementInWhichAppend.appendChild(cln);
// };

//===========================================================================

$(document).ready(function() {
    //прикрепляем клик по заголовкам acc-head
    $('#filter_accordeon .accordeon_head').on('click', showBottom);
    $('#filter_accordeon .accordeon_top_head').on('click', showTop);
});

function showBottom(){
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().toggleClass("accordeon_body_active");
}
function showTop(){
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).prev().toggleClass("accordeon_body_active");
}