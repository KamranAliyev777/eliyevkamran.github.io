$(document).ready(function () {
    var like=[];
    var push_list;
    var check_color;
    var gallery=[{src:'barber_grid1'},{src:'barber_grid2'},{src:'barber_grid3'},{src:'barber_grid4'},{src:'barber_grid5'},{src:'barber_grid6'},];    
    var l_storage=window.localStorage;
    if(l_storage.getItem('like') !=null){
        like=[];
      var img_likes=JSON.parse(l_storage.getItem('like'));
      for( key in img_likes){
          like.push({like:img_likes[key].like,color:img_likes[key].color});
      }
    }
    for(let i=0;i<gallery.length;i++){
        if(l_storage.getItem('like') == null){
        var default_list={
            like:0,color:false
        };
       like.push(default_list)
    }
    $('.gallery_bottom').append('<div class="image"><ul class="share_image"><li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fbarbershop%2Fdemone2%2Fbarbershop%3Fpgid%3Dj6an1d6o-842374c0-5eb9-11ea-8c85-12879e2400f0&t=I’m%20an%20image%20title"><i class="fa fa-facebook "></i></a></li> <li><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fbarbershop%2Fdemone2%2Fbarbershop%3Fpgid%3Dj6an1d6o-842374c0-5eb9-11ea-8c85-12879e2400f0&amp;text=I’m%20an%20image%20title&amp;hashtags=gallery%2Cphotos%2Cphotographer%2Cprofessional"><i class="fa fa-twitter"></i></a></li><li><a href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fbarbershop%2Fdemone2%2Fbarbershop%3Fpgid%3Dj6an1d6o-842374c0-5eb9-11ea-8c85-12879e2400f0&media=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2Fb47b0e3204d54a93b13108b60de2f04a.jpg%2Fv1%2Ffill%2Fw_500%2Ch_329%2Cal_c%2Cq_90%2Fb47b0e3204d54a93b13108b60de2f04a.jpg&description=I’m%20an%20image%20title"><i class="fa fa-pinterest-square"></i></a></li><li><a href="http://www.tumblr.com/share/link?url=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fbarbershop%2Fdemone2%2Fbarbershop%3Fpgid%3Dj6an1d6o-842374c0-5eb9-11ea-8c85-12879e2400f0"><i class="fa fa-tumblr"></i></a></li><li><a href="mailTo:mymail@gmail.com?subject=The%20subject%20of%20the%20mail"><i class="fa fa-envelope-o"></i></a></li></ul><button type="button" class="button_click"><i class="fa fa-heart"></i><span class="click_span"></span></button><button type="button" class="button_share"><i class="fa fa-share"></i></button><img title="I’m an image title"description="Describe your image here."></div>')
    $('.image img').eq(i).attr('src','css/images/'+gallery[i].src+'.jpg');
    $('.click_span').eq(i).append(like[i].like);
    if(like[i].color==false ){
        $('.image').eq(i).find('.button_click i').removeClass('like_red')
    }
    else{
        $('.image').eq(i).find('.button_click i').addClass('like_red')
    }
}
l_storage.setItem('like',JSON.stringify(like));
    $('.image .button_click').click(function like_calc(e) {
        var index = $(this).parent().index();
        var gallery_like=l_storage.getItem('like');
        var heart=JSON.parse(gallery_like)[index].like;
        var clas = $(this).find('span').attr('class');
        if ($(this).find('i').hasClass('like_red')==true) {
            heart--;
            check_color=false;
            $(this).find('i').removeClass('like_red');
        }
        else {
            heart++;
            check_color=true;
            $(this).find('i').addClass('like_red');
        }
        like[index].like=heart;
        like[index].color=check_color;
        $('.click_span').eq(index).text(heart)
        l_storage.setItem('like',JSON.stringify(like));
    })
    $('.image').on("dblclick",function(e){
        var index = $(this).index();
        if(like[index].color==true){
            e.preventDefault()
        }
        else{
            like[index].color=true;
            like[index].like+=1;
            $('.click_span').eq(index).text(like[index].like)
            $(this).find('.button_click i').addClass('like_red')
            l_storage.setItem('like',JSON.stringify(like));
        }
    })
    $('.image .button_share').click(function () {
        $(this).parent().find('ul').css({
            opacity: 1,
            display: 'block'
        });
        $(this).parent().find('button').css('display', 'none');
    });
    $(".image").contextmenu(function (e) {
        e.preventDefault();
    }
    );
    $('.image').mouseleave(function () {
        $(this).parent().find('ul').css({
            opacity: 0,
            display: 'none'
        });
        $(this).find('button').css('display', 'block');
    })
    $('.image').click(function (event) {
        if (event.target.parentElement.parentElement.nodeName != 'LI' && event.target.className != 'fa fa-share' && event.target.parentNode.className != 'button_share') {
            $(this).parent().find('ul').css({
                opacity: 0,
                display: 'none'
            });
        }
    })
});