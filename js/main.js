/*ScrollReveal().reveal('.scroll_opacity', {
    opacity: 0,
    duration:1000
});
ScrollReveal().reveal('.delay_1', {
    delay: 500
});
ScrollReveal().reveal('.delay_2', {
    delay: 1000
});
ScrollReveal().reveal('.left', {
    origin:'left',
    distance:'100px',
    delay: 500
});
ScrollReveal().reveal('.right', {
    origin:'right',
    distance:'100px',
    delay: 500
});
ScrollReveal().reveal('.top', {
    origin:'top',
    distance:'100px',
    duration:1000,
    delay: 500
});
ScrollReveal().reveal('.bottom', {
    origin:'bottom',
    distance:'100px',
    duration:1000,
    delay: 500
});
*/
$(document).ready(function () {
    /*RESPONSIVE NAVIGATION */
    var btn=$('.res_menu');
    btn.on('click',function(){
        $('.navbar').toggleClass('translate_0')
    })
    
    /*SCROLL NAVIGATION */
        var scroll_element = $('.menu_bar li a'),
        parent=$(this).parent();
        scroll_element.on('click', function () {
            scroll_element.parent().removeClass('current');
            parent.addClass('current');
            var scroll_id = $(this).attr('href');
            var scroll_top = $(scroll_id).offset().top-$('header').height();
            $('html,body').stop().animate({
                scrollTop: scroll_top
            }, 2000)
        })
    
    })
    $(window).on('scroll load',function(){
        var web_scroll=$('html,body').scrollTop();
        var links=$('.menu_bar li a');
           for(let i=0;i<links.length;i++){
            var src=links.eq(i).attr('href');
             if($(src).offset().top-$('header').height() <= web_scroll){
                links.parent().removeClass('current');
                links.eq(i).parent().addClass('current');
             }
           }
    })
    
    /*Statistic */
    $('.progress_bar').each(function(){
        var progress = $(this),
        percent=progress.data('width');
        var i=0;
        var interval=setInterval(forer,1);
        function forer(){
            if(i < percent){
                i++;
                progress.css('width', i + '%');
            }
            else{
                clearInterval(interval)
            }
        }
    })
    
    /*LOADER*/
    $(window).on('load',function(){
        $('.loader').css('display','none');
    })
    
    
    /*
    $(window).on('scroll',function(){
        var web_scroll=$('html,body').scrollTop(),
        offset=$('#about').offset().top-$('header').height();
        if(web_scroll==offset){
            alert(1)
            stats()
        }
    })*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*$(document).ready(function () {
        var index=0;
        var all_elements = $('.xidmet'),
            length=all_elements.length;
        slider(index);
        var arrow_left = $('.arrow_left'),
        arrow_right = $('.arrow_right')
        arrow_left.click(() => {
            index = (index == 0) ? length - 1 : index - 1;
            slider(index);
        })
        arrow_right.click(() => {
            index = (index == length-1) ? 0 : index + 1;
            slider(index);
        })
        function slider(index){
        all_elements.css('display', 'none')
        all_elements.eq(index).css('display', 'block');
        }
        slider(index);
    });*/