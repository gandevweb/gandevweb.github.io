$(function() {
    // Apply on BODY with resize window
    // padding top from NAVBAR
    // padding bottom from FOOTER
    let setNavH = 0;
    let smSetNavH = 0;
    let setFootH = parseInt($('footer').css('height'));
    if ($(window).width() >= 768) {
        setNavH = parseInt($('#myNavbar').css('height'));
    } else {
        smSetNavH = parseInt($('#myNavbar').css('height'));
    }
    let setHeight = setNavH ? setNavH + setFootH : smSetNavH + setFootH;
    $('body').css({
        "padding-top": setNavH ? setNavH + "px" : smSetNavH + "px",
        "padding-bottom": setFootH + "px",
    });
    bodyHeight();
    $(window).resize(function() {
        if ($(window).width() >= 768) {
            setNavH = parseInt($('#myNavbar').css('height'));
            $('body').css({
                "padding-top": setNavH + "px"
            });
            setHeight = setNavH + setFootH;
        } else {
            if (smSetNavH) {
                $('body').css({
                    "padding-top": smSetNavH + "px"
                });
            } else {
                smSetNavH = parseInt($('#myNavbar').css('height'));
                $('body').css({
                    "padding-top": smSetNavH + "px"
                });
            }
            setHeight = smSetNavH + setFootH;
        }
        bodyHeight();
    });
    // BTN for CV
    $('.btn-show').on('click', function(){
        if ($('#cv-pdf').css('display') == "none")
        {
            $('#cv-pdf').css('display', 'block');
            $('body').css({
                "height": $(document).height() + setFootH + "px"
            });
        } else {
            $('#cv-pdf').css('display', 'none');
            bodyHeight();
        }
    });
    // Navbar active and sr-only apply and display page
    $('.nav-link').on('click', function() {
        $('.sr-only').remove();
        $('.nav-link').each(function() {
            $(this).removeClass('active');
        });
        $(this).addClass('active').append("<span class=\"sr-only\">(current)</span>");
        reset_page();
        reset_exp();
        reset_format();
        $($(this).attr('href')).css({
            "display":"block"
        });
        bodyHeight();
        gotop('body');
    });
    // Experiences show detail
    $('#experiences a').on('click', function(){
        let test = $($(this).attr('href')).css("display");
        reset_exp();
        let forId = $(this).attr('href').substr(1);
        if (test != "block"){
            $($(this).attr('href')).css({
                "display":"block"
            });
            $("#exp-title-"+forId).css({
                "max-width": "30%"
            });
            $("#m-info-"+forId).html(" Hide Info ");
            bodyHeight();
            gotop($(this).attr('href'));
        } else {
            bodyHeight();
            gotop('body');
        }
    });
    // Formations show detail
    $('#formations a').on('click', function(){
        let test = $($(this).attr('href')).css("display");
        reset_format();
        let forId = $(this).attr('href').substr(1);
        if (test != "block"){
            $($(this).attr('href')).css({
                "display":"block"
            });
            bodyHeight();
            gotop($(this).attr('href'));
        } else {
            bodyHeight();
            gotop('body');
        }
    });
    // ////////////
    // PART CONTACT
    // WITH PHP
    // ////////////
    // height from NAVBAR + MAIN + FOOTER
    function bodyHeight(){
        $('body').css({
            "height": 32 + setHeight + parseInt($('main').css('height')) + "px"
        });
    };

    function reset_page() {
        let display_id = ['cv-pdf', 'me', 'competences', 'experiences', 'formations', 'projets', 'contact'];
        display_id.forEach((value_disp) => {
            $("#"+value_disp).css({
                "display": "none"
            });
        });
    };

    function reset_exp(){
        let display_id = ['ecole42', 'malis', 'cafe', 'tang', 'cyber', 'allsystem'];
        display_id.forEach((value_disp) => {
            $("#"+value_disp).css({
                "display": "none"
            });
            $("#exp-title-"+value_disp).css({
                "max-width": "100%"
            });
            $("#m-info-"+value_disp).html(" More Info ");
        })
    };
    
    function reset_format(){
        var display_id = ['format1', 'format2', 'format3', 'format4', 'format5', 'format6'];
        display_id.forEach((value_disp) => {
            $("#"+value_disp).css({
                "display": "none"
            });
        });
    };
    function gotop(choice) {
        $("html, body").animate({
            scrollTop: $(choice).offset().top - (smSetNavH > setNavH ?  smSetNavH : setNavH)
        }, "slow");
    };
});