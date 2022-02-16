// NAVBAR

$(".nav_btn").click(function(){
    $(".header_inner nav").slideToggle();
})


// TYPEIT
let write_span=$(".writer");
let words=["Developer","Designer"];
        function writer(i,k) {
            let text=""+words[k];
        if (i < text.length) {
            $(".writer").append(text[i]);
          i++;
          setTimeout(writer, 200,i,k);
        }
        else{
            let j=0;
            setTimeout(delete_text,120)
            function delete_text(){
                if(j<text.length){
                    $(".writer").text("").append(text.slice(0,text.length-j-1));
                    j++;
                    setTimeout(delete_text,120)
                }
            }
        }
        k++;
        }

       setTimeout(writer,300,0,0)

        let click=1;
        $(".startType").click(function(){
            if(click==words.length){
              click=0;
            }
             writer(0,click); 
            click++;
        });
        setInterval(function(){
            $(".startType").click();
        },3400)

        

        // NAVIGATION ANIMATION
        var scroll_element = $('.header_inner nav ul li a'),
    parent=$(this).parent();
    scroll_element.on('click', function (e) {
        e.preventDefault();
        scroll_element.parent().removeClass('current');
        parent.addClass('current');
        var scroll_id = $(this).attr('href');
        var scroll_top = $(scroll_id).offset().top-$('header').height();
        $('html,body').stop().animate({
            scrollTop: scroll_top
        }, 2000)
    })

$(window).on('scroll load',function(){
    var web_scroll=$('html,body').scrollTop();
    var links=$('.header_inner nav ul li a');
       for(let i=0;i<links.length;i++){
        var src=links.eq(i).attr('href');
        if($(src).offset()!=undefined){
         if(parseInt($(src).offset().top  ,10)-$('header').height() <= web_scroll){
            links.parent().removeClass('current');
            links.eq(i).parent().addClass('current');
         }
        }
       }
})
        