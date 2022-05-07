$(window).ready(function() {
    $("#btn1").hover(function() {
            $(this).css('background', '#B11313'),
                $(this).css('box-shadow', '0px 5px 5px #ffffff'),
                $(this).css('color', '#ffffff');
        },
        function() {
            $(this).css('background', '#ffffff'),
                $(this).css('box-shadow', 'none'),
                $(this).css('color', '#B11313');
        });

    $(".btn2").hover(function() {
            $(this).css('background', '#ffffff'),
                $(this).css('box-shadow', '0px 5px 5px #ffffff'),
                $(this).css('color', '#B11313');
        },
        function() {
            $(this).css('background', '#B01313'),
                $(this).css('box-shadow', 'none'),
                $(this).css('color', '#ffffff');
        });


    $("#fb").hover(function() {
            $(this).css('color', '#ffffff');
        },
        function() {
            $(this).css('color', '#292929');
        });
    $("#insta").hover(function() {
            $(this).css('color', '#ffffff');
        },
        function() {
            $(this).css('color', '#292929');
        });
    $("#youtube").hover(function() {
            $(this).css('color', '#ffffff');
        },
        function() {
            $(this).css('color', '#292929');
        });
    $("#twitter").hover(function() {
            $(this).css('color', '#ffffff');
        },
        function() {
            $(this).css('color', '#292929');
        });



    $(".acceuil").hover(function() {
            $(this).css('color', '#ffffff')
            $(this).css('text-decoration', 'underline');
        },
        function() {
            $(this).css('text-decoration', 'none')
        });

    $(".adves").hover(function() {
            $(this).css('color', '#ffffff')
            $(this).css('text-decoration', 'underline');
        },
        function() {
            $(this).css('text-decoration', 'none')
        });

    $(".heros").hover(function() {
            $(this).css('color', '#ffffff')
            $(this).css('text-decoration', 'underline');
        },
        function() {
            $(this).css('text-decoration', 'none')
        });

    $(".propos").hover(function() {
            $(this).css('color', '#ffffff')
            $(this).css('text-decoration', 'underline');
        },
        function() {
            $(this).css('text-decoration', 'none')
        });

    $("#spid").animate({ left: '0 100%' }, 5000)
        .fadeTo(2000, 0.5);
});


/*const container = document.querySelector('.container')


const TL1 = new TimelineMax({
    paused: false
});
TL1
    .from(container, 1, {
        opacity: 0,
        x: -100
    })
    .from(image, 1, {
        scale: 0
    })
    .from(titre, 0.6, {
        opacity: 0,
        x: -100
    })
    .from(paragraphe, 0.6, {
        opacity: 0,
        y: 100
    })
    .staggerFrom(boutton, 0.5, {
        scal: 0
    })
    */