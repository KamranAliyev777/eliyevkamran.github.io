                          
						  
						  
						  // Open and Close
						  
function open_chat_icon() {
    $('.chat').css('bottom', 0);
}
function close_me() {
    $('.chat').css('bottom', -($('.chat').height()));
}
$(document).ready(function () {
    //navigation
    $('.nav_resp button').click(function(){
        if($(this).hasClass('resp_btn')){
        $(this).removeClass('resp_btn');
        }
        else{
        $(this).addClass('resp_btn');
        }
        $('.header_in nav').slideToggle();
    })



	$('.shop_close').click(function(){
    $(this).parents('.shop_list').css('display','none')
})
	
    $('.header_in nav ul li').click(function(){
        if($(window).width() < 850){
       $('.nav_resp').find('button').trigger('click');
        }
    })


    //services faq

    $('.services_list').click(function(){
        about=$(this).parent().find('.services_about');
        $(this).parent().siblings().find('.services_about').fadeOut(0)
        about.fadeToggle(                                  1000);
    })

    //card open







                          // SHOP
						  
 $('.shop_in ul > li div').mouseover(function () {
        $(this).find('a').stop().slideDown();
    })
    $('.shop_in ul > li div').mouseleave(function () {
        $(this).find('a').stop().slideUp();
    })
    $('.shop_in ul >li div a').click(function (e) {
        e.preventDefault();
        $('.shop_list_in span').click(function () {
            $(this).parents('.shop_list').css('display', 'none');
        })
        var image_src = $(this).parent().find('img').attr('src');
        $('.shop_list').css('display', 'block');
        $('.shop_list .shop_list_left img').remove();
        $('.shop_list .shop_list_left').append('<img src="">');
        $('.shop_list .shop_list_left img').attr('src', image_src);
        $('.shop_list .shop_list_right h2').text($(this).parents('li').find('h3').text());
        $('.shop_list .shop_list_right .sku span').text($(this).parents('li').index());
        $('.shop_list .shop_list_right > span').text($(this).parents('li').find('.mark').text())
        $('.shop_list_left img').addClass('shop_imgs');
    })
    $('.shop_bag').click(function () {
        $('.card').animate({
            right: 10
        }, 400);
        $('.title i').click(function () {
            $('.card').animate({
                right: -($('.card').width()) + 'px'
            }, 400);
        })
    })

    $('.shop_list_right form button').click(function () {
        $(this).parents('.shop_list_in').find('span').trigger('click');
        $('.shop_bag').trigger('click');
    })
})

                      //ZOOM

$('.shop_in ul li div a').click(function (){
              if($('.shop_list_left > .img_glass')){
                $('.img_glass').remove();
              }
            function magnify(imgID, zoom) {
                var img, glass, w, h, bw;
                img = document.getElementsByClassName(imgID)[0];
                /*create magnifier glass:*/
                glass = document.createElement("DIV");
                glass.setAttribute("class", "img_glass");
                /*insert magnifier glass:*/
                img.parentElement.insertBefore(glass, img);
                /*set background properties for the magnifier glass:*/
                glass.style.backgroundImage = "url('" + img.src + "')";
                glass.style.backgroundRepeat = "no-repeat";
                glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
                bw = 3;
                w = glass.offsetWidth / 2;
                h = glass.offsetHeight / 2;
                /*execute a function when someone moves the magnifier glass over the image:*/
                glass.addEventListener("mousemove", moveMagnifier);
                img.addEventListener("mousemove", moveMagnifier);
                /*and also for touch screens:*/
                glass.addEventListener("touchmove", moveMagnifier);
                img.addEventListener("touchmove", moveMagnifier);
                function moveMagnifier(e) {
                  var pos, x, y;
                  /*prevent any other actions that may occur when moving over the image*/
                  e.preventDefault();
                  /*get the cursor's x and y positions:*/
                  pos = getCursorPos(e);
                  x = pos.x;
                  y = pos.y;
                  /*prevent the magnifier glass from being positioned outside the image:*/
                  if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
                  if (x < w / zoom) {x = w / zoom;}
                  if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
                  if (y < h / zoom) {y = h / zoom;}
                  /*set the position of the magnifier glass:*/
                  glass.style.left = (x - w) + "px";
                  glass.style.top = (y - h) + "px";
                  /*display what the magnifier glass "sees":*/
                  glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
                }
                function getCursorPos(e) {
                  var a, x = 0, y = 0;
                  e = e || window.event;
                  /*get the x and y positions of the image:*/
                  a = img.getBoundingClientRect();
                  /*calculate the cursor's x and y coordinates, relative to the image:*/
                  x = e.pageX - a.left;
                  y = e.pageY - a.top;
                  /*consider any page scrolling:*/
                  x = x - window.pageXOffset;
                  y = y - window.pageYOffset;
                  return {x : x, y : y};
                }
              }
            magnify("shop_imgs", 2);
          })
		  
					   	 //Textarea
						 
 var hour = new Date().getHours();
    var minute = new Date().getMinutes();
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    document.getElementsByClassName('chat_clock')[0].innerHTML = hour + ':' + minute;

    function zero_bottom() {
        $('.chat_send span').css('display', 'none');
        $('.chat_send label').css('display', 'block');
    }
    function zero_top() {
        $('.chat_send label').css('display', 'none');
        $('.chat_send span').css('display', 'block');
    }
    var area_h = $('.chat_write_in').find('textarea').height(),
        parent_h = $(".chat_messages").height();
    $('.chat_write_in').find('textarea').on('input keydown', function myfunc(e) {
        var h,
            padding_val = $(".chat_messages").outerHeight() - $(".chat_messages").height();
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
        if (this.scrollHeight >= 20 && this.scrollHeight <= 100) {
            $(this).css('overflow', 'hidden');
            h = parent_h - (this.scrollHeight + area_h);
        }
        else {
            $(this).css('overflow', 'auto');
        }
        h += padding_val;
        $('.chat_messages').height(h)
        //send icon hissesi asagidadir.
        if ($(this).val().length > 0) {
            zero_top()
        }
        else {
            zero_bottom();
        }
        if (e.which == 13 && !e.shiftKey) {
            if($(this).val().search(/[^\n\s]/)!=-1){
                $('.chat_send span').trigger('click');
                e.preventDefault();
            }
        }
    });
    //button open



    // chat
    var chat=[];
    $('.chat_send').find('span').click(function () {
        var msg = $('.chat_write').find('textarea').val();
        if(msg.search(/[^\n\s]/)!=-1){
        var time=hour+':'+minute;
        var list={
            message:msg,
            timer:time,
        }
        chat.push(list);
        localStorage.setItem('chat',JSON.stringify(chat));
        $('.chat_messages').append("<div class='send_main'><div class='send_msg'><span class='msg_text'></span></div><span class='msg_timer'></span></div>");
        $('.chat_messages .send_msg').last().find('.msg_text').append(msg);
        $('.chat_messages .send_main').last().find('.msg_timer').append('send '+time);
        $('.chat_write').find('textarea').val('');
        $('.chat_messages').scrollTop($('.chat_messages .send_msg').last().offset().top- $('.chat').offset().top)
        $('.chat_write_in textarea').css('height', 'auto');
        if ($('.smiles_div').css('display') == 'block') {
            $('.smile').trigger('click');
        }
        zero_bottom();
    }
    })
    if(localStorage.getItem('chat') != null){
    var local_msg=localStorage.getItem('chat');
    local_msg=JSON.parse(local_msg);
    for(let k=0;k<local_msg.length;k++){
        $('.chat_messages').append("<div class='send_main'><div class='send_msg'><span class='msg_text'></span></div><span class='msg_timer'></span></div>");
        $('.chat_messages .send_msg').last().find('.msg_text').append(local_msg[k].message);
        $('.chat_messages .send_main').last().find('.msg_timer').append('send '+local_msg[k].timer);  
}
chat=local_msg;
    }
    //smiles
    var click = 0
    $('.smile').click(function () {
        click++;
        $('.smiles_div').slideToggle();
        $(this).find('i').toggleClass('fa-arrow-circle-o-down').removeClass('fa-smile-o');
        if (click == 2) {
            $(this).find('i').addClass('fa-smile-o');
            click = 0;
        }
    })
    var smiles = {
        people: ['1f600', '1f603', '1f604', '1f601', '1f606', '1f605', '1f602', '1f60a', '1f607', '1f609', '1f60c', '1f60d', '1f60e', '1f60f', '1f612', '1f61e', '1f61f', '1f615', '1f623', '1f616', '1f62b', '1f629', '1f624', '1f620', '1f621', '1f636', '1f610', '1f611', '1f62f', '1f626', '1f627', '1f62e', '1f632', '1f635', '1f633', '1f621', '1f628', '1f630', '1f622', '1f625', '1f62d', '1f613', '1f62a', '1f634', '1f62c', '1f637'],
        nature: ['1f430', '1f433', '1f434', '1f431', '1f436', '1f435', '1f432', '1f43a', '1f437', '1f439', '1f43c', '1f43d'],
        food: ['1f340', '1f343', '1f344', '1f341', '1f346', '1f345', '1f342', '1f34a', '1f347', '1f349', '1f34c', '1f34d'],
        activity: ['1f3c0', '1f3c3', '1f3c4', '1f3c1', '1f3c6', '1f3c5', '1f3c2', '1f3ca', '1f3c7', '1f3c9', '1f3cc', '1f3cd'],
        travel: ['1f690', '1f693', '1f694', '1f691', '1f696', '1f695', '1f692', '1f69a', '1f697', '1f699', '1f69c', '1f69d'],
        object: ['1f4f0', '1f4f3', '1f4f4', '1f4f1', '1f4f6', '1f4f5', '1f4f2', '1f4fa', '1f4f7', '1f4f9', '1f4fc', '1f4fd'],
        symbol: ['FE50', 'FE51', 'FE52', 'FE53', '1f496', '1f495', '1f492', '1f49a', '1f497', '1f499', '1f49c', '1f49d'],
    }
    for (let i = 0; i < smiles.people.length; i++) {
        $('.smiles').append('<button class="smile_btn" type="button">' + "&#x" + smiles.people[i] + '</button>');
    }
    $('.smiles button').click(function () {
        $('.chat_write_in textarea').val($('.chat_write_in textarea').val() + $(this).text());
        zero_top();
    })                                    //ilk gorunus ucun smaylik olan hisse bos qalmasin
    $('.categories button').click(function () {
        var name = $(this).attr('class');
        $('.smiles').empty();
        for (let i = 0; i < smiles[name].length; i++) {
            $('.smiles').append('<button class="smile_btn" type="button">' + "&#x" + smiles[name][i] + '</button>');
        }
        $(this).addClass('border_pointer').siblings().removeClass('border_pointer');
        $('.smiles button').click(function () {
            $('.chat_write_in textarea').val($('.chat_write_in textarea').val() + $(this).text());
            zero_top();
        });
    });

    //chat css invalid valid
    if(window.sessionStorage.getItem('chat_user')){
        $('.chat_welcome').css('display','none');
            $('.chat_start').css('display','block');
    }
    else{
    var inputs=$('.chat_welcome_in label input');
    var check_val=false;
    inputs.on('focus input',function(){
        if($(this).is(':invalid') || $(this).val().length < 1){
            $(this).css('background-color','rgb(247, 104, 104)')
        }
        else{
            $(this).css('background-color','rgb(232, 240, 254')
        }
    })
    //chat entered
    $('.start_btn').click(function(e){
        e.preventDefault();
        inputs.each(function(){
            if($(this).val().length < 1){
                $(this).css('background-color','rgb(247, 104, 104)');
                check_val=true;
            }
        })
        if(!check_val && inputs.css('background-color')!='rgb(247, 104, 104)'){
            $('.chat_welcome').css('display','none');
            $('.chat_start').css('display','block');
            var chat_user=$('.name').val();
            window.sessionStorage.setItem('chat_user',chat_user);
            window.localStorage.removeItem('chat')
        }
    })
}

                         //SCROLLING

var element = $('.header_in nav ul li, .section_nav ul li, .footer_in button');
    var length = element.length;
    element.find('a').click(function (e) {
        e.preventDefault();
        var src = $(this).data('src');
        var off_top = $(src).offset().top - $('.header').height();
        $('html , body').stop().animate({
            scrollTop: off_top + 'px'
        }, 2000);
    })
    $(window).scroll(function () {
        var scroll = $('html, body').scrollTop() + $('.header').height();
        if (scroll >= $('section').eq(5).offset().top) {
            ind = 5
        }
        else if (scroll >= $('section').eq(4).offset().top) {
            ind = 4
        }
        else if (scroll >= $('section').eq(3).offset().top) {
            ind = 3
        }
        else if (scroll >= $('section').eq(2).offset().top) {
            ind = 2
        }
        else if (scroll >= $('section').eq(1).offset().top) {
            ind = 1
        }
        else {
            ind = 0
        }
        $('.header_in nav ul li').eq(ind).find('a').addClass('nav_top_color').parent().siblings().find('a').removeClass('nav_top_color');
        $('.section_nav ul li').eq(ind).find('a span').addClass('nav_right_color').parents('li').siblings().find('span').removeClass('nav_right_color');
    
        //bg image
        var scroll_Y = $(window).scrollTop();
        if(scroll_Y >= $('.barber_image').height()-$('.header').height()){
        $('.barber_image video').trigger('pause');
        }
		else{
			$('.barber_image video').trigger('play')
		}
    });

                         //IMAGES INSTEAD DATABASE

var like=[];
    var push_list;
    var check_color;
    var l_storage=window.localStorage;
    /*
    $('.image').on("dblclick",function(e){
       
    })
    */
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

                        //CHECKOUT

 x = Math.round(x * 100) / 100;
    x = x.toString();
    x = (x.indexOf('.') == -1) ? x + '.00' : (x[x.length - 1] > 0 && x[x.length - 2] == '.') ? x = x + '0' : x = x;
    return x;
}
$(document).ready(function () {
   var storage_box=window.localStorage.getItem('box');
refresh_checkout = () => {
    var orders = JSON.parse(storage_box);
    var subtotal = 0;
    if (storage_box) {
        for (key in orders) {
            subtotal += Number(orders[key].price_total)
            $('.orders_ul').append('<li><span></span></li>');
            $('.orders_ul li').last().append(orders[key].name);
            $('.orders_ul li').last().find('span').text('$' + orders[key].price_total);
        }
    }
    else {
        $('.orders_ul').empty();
    }
    $('.order_tot span').empty().append('$' + shop_price(subtotal));
}
refresh_checkout();


$('.order_button').click(function() {
    var inputs=$('.checkout_input input');
    var mail_input=$('.mail_input').val();
    var regEx = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i;
      var validEmail = regEx.test(mail_input);
    var check_input_val=true;
    inputs.each(
        function(index){
            if($(this).val().length < 1){
                check_input_val=false
            }
        })
    if(check_input_val && validEmail){
    if (storage_box) {
        window.localStorage.removeItem('box');
        refresh_checkout();
    }
}
else{
    alert('Zəhmət olmasa qırmız ulduz işarəsi olan yerləri düzgün doldurun')
}
});						
                    });