$(document).ready(function () {

    var button = '#slidx_button';
    var menu = '#slidx_menu'; 
    var mode = 'click' 
    var side = 'right' 
    var buttonMove = 'yes' 
    var shadow = 'yes' 
    var opacity = 0.6;
    var size = 350; 
    var speed = 0.5;
    var normalTime = 0;
    var menuTime = 300;
    var menuTop = 144;
    var menuBottom = 0;
    var zIndexMenu = 98;


    var slidxOpen = "slidx_open";
    var slidxShadow = "slidx_shadow";
    var slidxShadowID = '#' + slidxShadow;
    var zIndexButton = zIndexMenu - 1;
    var zIndexShadow = zIndexMenu - 2;
    var speedM = speed * 1000;

    if (buttonMove == 'yes') {
        $(button).css({
           /* 'position': 'fixed',
            'top': '18px',*/
            'transition': speed + 's',
            'z-index': zIndexButton,
        });

        if (side == 'right') {
            $(button).css({
                'right': '-15px',
            })
        }

        if (side !== 'right') {
            $(button).css({
                'right': '-15px',
            })
        }
    }

    $(menu).css({
        'position': 'fixed',
        'top': menuTop + 'px',
        'bottom': menuBottom + 'px',
        'width': size + 'px',
        'max-width': '100%',
        'overflow-y': 'auto',
        'transition': speed + 's',
        'z-index': zIndexMenu,
    });

    if (side == 'right') {
        $(menu).css({
            'right': '-' + size + 'px',
        })
    }

    if (side !== 'right') {
        $(menu).css({
            'right': '-' + size + 'px',
        })
    }

    function open() {

        if (side == 'right') {

            $(menu).animate({
                right: '0',
            }, normalTime);

            /*if (buttonMove == 'yes') {
                $(button).animate({
                    right: size,
                }, normalTime);
            }*/

        }

        if (side !== 'right') {

            $(menu).animate({
                right: '0',
            }, normalTime);

            if (buttonMove == 'yes') {
                $(button).animate({
                    right: size,
                }, normalTime);
            }
        }

        $(menu).addClass(slidxOpen);

        if (shadow == 'yes') {
            $("<div>", {
                id: slidxShadow,
                css:
                {
                    'position': 'fixed',
                    'top': '0px',
                    'width': '100%',
                    'height': '100%',
                    'background-color': '#000000',
                    'opacity': '0',
                    'z-index': zIndexShadow,
                },
            }).appendTo('html');

            $(slidxShadowID).fadeTo(speedM, opacity);
        }
    };

    function close(delayTime) {
        if (side == 'right') {
            $(menu).animate({
                right: '-' + size,
            }, delayTime)

            if (buttonMove == 'yes') {
                $(button).animate({
                    right: '-15px',
                }, delayTime);
            }
        }

        if (side !== 'right') {
            $(menu).animate({
                right: '-' + size,
            }, delayTime)

            if (buttonMove == 'yes') {
                $(button).animate({
                    right: 0,
                }, delayTime);
            }
        }

        $(menu).removeClass(slidxOpen);
        $(slidxShadowID).fadeOut(speedM);

        setTimeout(function () {
            $(slidxShadowID).remove();
        }, speedM);
    };

    if (mode == 'click') {

        $(button).click(function () {

            event.preventDefault();
            if (!$(menu).hasClass(slidxOpen)) {
                open();
            } else {
                close(normalTime);
            }
        });

        $(menu).click(function () {
            close(menuTime);
        });
    }

    $(document).on('click', slidxShadowID, function () {
        close(normalTime);
    });


    //--------------- Modo HOVER ---------------//
    if (mode == 'hover') {

        $(button).mouseover(function () {
            if (!$(menu).hasClass(slidxOpen)) {
                open();
            } else {
                close(normalTime);
            }
        });


        $(menu).mouseleave(function () {
            close(normalTime);
        });

        $(menu).click(function () {
            close(menuTime);
        });
    };
});
