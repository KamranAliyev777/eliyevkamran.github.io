$(document).ready(function () {
    //responsive menu
    $('.menu_icon').on('click', function (e) {
        e.preventDefault();
        $('.responsive_nav_inner').fadeToggle(700);
    })

    /*Limit text
    var text=$('.news_text'),
    l=text.length;
        alert($('.news').eq(1).find('.news_text p').val())
    */

    //Contact valid
    var contact_inputs = $('.contact_form input')
    contact_inputs.on('input', function () {
        var input_val = $(this).val();
        input_val = input_val.trim();
        if (input_val.length < 1 || $(this).is(':invalid')) {
            $(this).addClass('valid_input');
        }
        else {
            $(this).removeClass('valid_input');
        }
    })
    $('.contact_btn').on('click', function () {
        contact_inputs.each(function () {
            var val = $(this).val().trim();
            len = val.length;
            if (len < 1) {
                $(this).addClass('valid_input');
            }
        })
        return false;
    })


    //Background Image

    //Filter
    function get_letter(let){
        var filter_elem=$('.game'),
        empty_alert;
        filter_text=filter_elem.find('.game_inner h2'),
        elem_count=filter_elem.length;
        for(let i=0;i<elem_count;i++){
            var text=filter_text[i].innerHTML;
            if(text.indexOf(let)==0){
              $('.game').eq(i).css('display','block');  
            }
            else{
                $('.game').eq(i).css('display','none')
            }
        }
        var available_games=$('.game').filter(function(){
            return $(this).css('display')!=='none';
        }).length;
        if(available_games < 1){
         $('.games_block').css('display','none');
         $('.empty_games').css('display','block');
         $('.empty_games span').text(let);
     }
     else{
         $('.games_block').css('display','block');
         $('.empty_games').css('display','none');
     }
    }
    $('.games_filter li a').click(function(e){
        e.preventDefault();
        $(this).parents('ul').find('.active_btn').removeClass('active_btn');
        $(this).addClass('active_btn');
       var letter=$(this).context.innerHTML;
       get_letter(letter);
    })

    //Count Buttons
    var a;
    var count_btn=$('.count_btn div');
    count_btn.click(function(){
        count_btn.removeClass('active_btn');
        $(this).addClass('active_btn');
        a==0;
    })
})







