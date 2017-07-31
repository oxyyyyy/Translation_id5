jQuery(function($) {

	$(".popup1").on('click',function(){
    $(".on-popup1,.overflow").fadeIn(500);
    });
    $(".popup2").on('click',function(){
        $(".on-popup2,.overflow").fadeIn(500);
    });
    $(".popup3").on('click',function(){
        $(".on-popup3,.overflow").fadeIn(500);
    });
    $(".doctor").on('click',function(){
        $(".popup-doctor,.overflow").fadeIn(500);
    });
    $(".bottomline,.overflow").on('click',function(){
        $(".tac,.overflow,.popup-doctor").fadeOut(500);
    });

// Choose product by Item Click in cart-step1.html
    $('.choose-item-wrap').on('click', function(e) {
        $(this).closest('li.choose-item').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });


// Choose product by Item Click in cart-step2.html
    $('.order-summury-item-link').on('click', function(e) {
        $(this).closest('li.order-summury-item').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });


// link to reserved product
    $('#step1-next').on('click', function() {
        var link = $("li.active .choose-item-wrap").attr("href");
        $(this).attr("href" , link );
    });


// link to mobile cart
    $('.btn-buy').on('click', function() {
        if (window.matchMedia('(max-width: 768px)').matches){
            $(this).attr("href" , "page.html" );       
        } 
        else {
            $(this).attr("href" , "cart-step1.html" );
        }
    });

    $('.fn-mfp-close').on('click', function() {
        $.magnificPopup.close();
    });
    
    
 
     
// jQuery Validation Plugin  
    $("#paymentform").validate({
        // rules: {
        //     country: "required",
        //     firstname: "required",
        //     lastname: "required",
        //     address: "required",
        //     city: "required",
        //     region: "required",
        //     postalcode: "required",
        //     phone: "required",
        //     email: "required",
        //     paymentmethod: "required",
        //     cardnumber: "required",
        //     monthselect: "required",
        //     yearselect: "required",
        //     cvv: "required",
        // },
        messages:{
            country: "Country is required",
            firstname: "First Name is required",
            lastname: "Last Name is required",
            address: "Address is required",
            city: "City is required",
            region: "Region is required",
            postalcode: "Postal Code is required",
            phone: "Phone is required",
            email: "Email is required",
            paymentmethod: "Payment Method is required",
            cardnumber: "Card number is required",
            monthselect: "Expiry Month is required",
            yearselect: "Expiry Year is required",
            cvv: "CVv is required",
        },
        errorPlacement: function(error, element) {
            if (element.attr("name") == "country") error.insertAfter($("select[name=country]"));
            if (element.attr("name") == "firstname") error.insertAfter($("input[name=firstname]"));
            if (element.attr("name") == "lastname") error.insertAfter($("input[name=lastname]"));
            if (element.attr("name") == "address") error.insertAfter($("input[name=address]"));
            if (element.attr("name") == "city") error.insertAfter($("input[name=city]"));
            if (element.attr("name") == "region") error.insertAfter($("input[name=region]"));
            if (element.attr("name") == "postalcode") error.insertAfter($("input[name=postalcode]"));
            if (element.attr("name") == "phone") error.insertAfter($("input[name=phone]"));
            if (element.attr("name") == "email") error.insertAfter($("input[name=email]"));
            if (element.attr("name") == "paymentmethod") error.insertAfter($("select[name=paymentmethod]"));
            if (element.attr("name") == "cardnumber") error.insertAfter($("input[name=cardnumber]"));
            if (element.attr("name") == "monthselect") error.insertAfter($("select[name=monthselect]"));
            if (element.attr("name") == "yearselect") error.insertAfter($("select[name=yearselect]"));
            if (element.attr("name") == "cvv") error.insertAfter($("input[name=cvv]"));
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: $(form).attr('action'),
                data: $(form).serialize(),
                timeout: 3000,
                // success: function() {alert('works');},
                // error: function() {alert('failed');}
            });
            // starting magnific popup 
            if($(".step2").hasClass("reserved")){
                $.magnificPopup.open({    
                    items: {
                        src: '#modal-window' 
                    },
                    type: 'inline'
                });
                return false; 
            } 
            else if($(".active").hasClass("prod1")){
                $.magnificPopup.open({    
                    items: {
                        src: '#modal-window5' 
                    },
                    type: 'inline'
                });
                return false;
            }
            else if($(".active").hasClass("prod2")){
                $.magnificPopup.open({    
                    items: {
                        src: '#modal-window6' 
                    },
                    type: 'inline'
                });
                return false;
            }
            else if($(".active").hasClass("prod3")){
                $.magnificPopup.open({    
                    items: {
                        src: '#modal-window7' 
                    },
                    type: 'inline'
                });
                return false;
            } 
            else if($(".cart").hasClass("cart-step4")){
                $.magnificPopup.open({    
                    items: {
                        src: '#modal-window7' 
                    },
                    type: 'inline'
                });
                return false;
            }           
        }      
    });
    

// show hide form field after payment method select
    $('#payment-method').on('change', function() {
      if ( this.value == 'PayPal')
      {
        $("#hiden-formfield").hide();
      }
      else
      {
        $("#hiden-formfield").show();
      }
    });


// change modal window by click
     $('#modal-add-btn').on('click', function(e) {
        e.preventDefault();
        $('#total').text((parseFloat($('#total').text()) + 32.95).toFixed(2));
        $(".add-product").css("display" , "table-row");
        $(".do-not-miss, #modal-add-btn").css("display" , "none");
        $("#pay-btn").addClass("final-pay-btn").text("pay");
    });


    $('.modal-add-btn').on('click', function(e) {
        e.preventDefault();
        $('.total5').text((parseFloat($('.total5').text()) + 32.95).toFixed(2));
        $('.total6').text((parseFloat($('.total6').text()) + 32.95).toFixed(2));
        $('.total7').text((parseFloat($('.total7').text()) + 32.95).toFixed(2));
        $(".add-product").css("display" , "table-row");
        $(".do-not-miss, .modal-add-btn").css("display" , "none");
        $(".pay-btn").addClass("final-pay-btn").text("pay");
    });

// calculator algorithm :)
    $('#calc-form-submit').on('click', function() {
        var random = Math.floor((Math.random() * 100) + 1);
        if( random >= 1 && random <= 85 ){
            $('#calc-result-duration').text("180");
            $('#calc-result-amount').text("6");
        } 
        else if( random >= 86 && random <= 95 ){
            $('#calc-result-duration').text("120");
            $('#calc-result-amount').text("4");
        }
        else {
            $('#calc-result-duration').text("60");
            $('#calc-result-amount').text("2");
        }
        var formInputs = document.querySelectorAll('.calc-form .calc-input-item');
        for (var i = 0; i < formInputs.length; i++) {
            formInputs[i].setAttribute('style', 'opacity: 0.3; pointer-events: none;');
        }
        document.querySelector('#calc-form-submit').disabled = true;
    });

// action close window
    $(window).bind('beforeunload', function() {
        setTimeout(function() {
            setTimeout(function() {
                if($("body").hasClass("index")){
                    $.magnificPopup.open({    
                        items: {
                            src: '#modal-window2' 
                        },
                        type: 'inline'
                    });
                }
                else if($("body").hasClass("cart-step1")) {
                    $.magnificPopup.open({    
                        items: {
                            src: '#modal-window3' 
                        },
                        type: 'inline'
                    });    
                }
                else if($("body").hasClass("cart2")){
                    $.magnificPopup.open({    
                        items: {
                            src: '#modal-window4' 
                        },
                        type: 'inline'
                    });
                }
                else {
                   return false; 
                }            
            return false;
            }, 1000);
        },1);
        return 'are you sure';
    });
    $('.unbind-cliks,.unbind-clik').click(function () {
        $(window).unbind('beforeunload');
});    


// countdown timer
   /* $("#action-timer")
        .countdown("2020/06/03", function(event) {
            $(this).text(event.strftime('%H:%M:%S')
        );
    });

    $(".action-timer")
        .countdown("2020/06/03", function(event) {
            $(this).text(event.strftime('%H:%M:%S')
        );
    });*/


    // function startTimer(duration, display) {
    //     var timer = duration, minutes, seconds;
    //     setInterval(function () {
    //         minutes = parseInt(timer / 60, 10);
    //         seconds = parseInt(timer % 60, 10);

    //         minutes = minutes < 10 ? "0" + minutes : minutes;
    //         seconds = seconds < 10 ? "0" + seconds : seconds;

    //         display.text(minutes + ":" + seconds);

    //         if (--timer < 0) {
    //             timer = duration;
    //         }
    //     }, 1000);
    // }  
    // var Minutes = 1800,
    //     display = $('#pay-timer');
    // startTimer(Minutes, display);

    // var timeoutHandle;
    // function countdown(minutes,stat) {
    //     var seconds = 60;
    //     var mins = minutes;
         
    //     if(getCookie("minutes")&&getCookie("seconds")&&stat)
    //     {
    //          var seconds = getCookie("seconds");
    //          var mins = getCookie("minutes");
    //     }
    //     function tick() {
    //         var counter = document.getElementById("pay-timer");
    //         setCookie("minutes",mins,10)
    //         setCookie("seconds",seconds,10)
    //         var current_minutes = mins-1
    //         seconds--;
    //         counter.innerHTML = 
    //         current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    //         //save the time in cookie
    //         if( seconds > 0 ) {
    //             timeoutHandle=setTimeout(tick, 1000);
    //         } else {
                 
    //             if(mins > 1){
    //                // countdown(mins-1);    
    //                setTimeout(function () { countdown(parseInt(mins)-1,false); }, 1000);
    //             }
    //         }
    //     }
    //     tick();
    // }
    // function setCookie(cname,cvalue,exdays) {
    //     var d = new Date();
    //     d.setTime(d.getTime() + (exdays*24*60*60*1000));
    //     var expires = "expires=" + d.toGMTString();
    //     document.cookie = cname+"="+cvalue+"; "+expires;
    // }
    //  function getCookie(cname) {
    //     var name = cname + "=";
    //     var ca = document.cookie.split(';');
    //     for(var i=0; i<ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0)==' ') c = c.substring(1);
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }
    // countdown(32,true);



function getTargetDate(Milliseconds_to_count){
        var t = new Date();
        t.setMilliseconds(t.getMilliseconds()+Milliseconds_to_count)
        return t.getTime();
    }
    //Время меняем тут:
    var Milliseconds_to_count = 1800 * 1000; //  отсчет в секундах - 7 часов = 7 * 60 * 60 * 1000
    var time = 200;
    var target_date = getTargetDate(JSON.parse(localStorage.getItem("Milliseconds"))|| Milliseconds_to_count);
    // update the tag with id "pay-timer" every 1 second
    var timer = function () {
    // variables for time units
    var days, hours, minutes, seconds;
    // get tag element
    var countdown = document.getElementById("pay-timer");
        // var d = document.getElementById("day");
        // var h = document.getElementById("hour");
        var m = document.getElementById("minute");
        var s = document.getElementById("second");
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date);
        localStorage.setItem("Milliseconds", JSON.stringify(seconds_left));
        if(seconds_left < 1000){
            target_date = getTargetDate(Milliseconds_to_count);
            time = 1000;
        }
        seconds_left /= 1000;
        // do some time calculations
        // days = parseInt(seconds_left / 86400);
        // seconds_left = seconds_left % 86400;
     
        // hours = parseInt(seconds_left / 3600);
        // seconds_left = seconds_left % 3600;
     
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
     
        // if(days < 10){
        //     days = "0" + days;
        // }
        // if(hours < 10){
        //     hours = "0" + hours;
        // }
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }
     
        // d.innerHTML = days;
        // h.innerHTML = hours;
        m.innerHTML = minutes;
        s.innerHTML = seconds;
        window.setTimeout(timer, time)
    };
timer()






})

