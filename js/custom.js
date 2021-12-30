/* custom js

    var height = $('.topHeader').outerHeight();

    $(window).scroll(function() {
        if($(this).scrollTop() > height)
        {
            $(".header").addClass("fixedHeader");
            
        }
        else if($(this).scrollTop() <= height)
        {
             $(".header").removeClass("fixedHeader");
            
        }     
    });


    var menu = new MmenuLight(
        document.querySelector( '#navbarSupportedContent' ),
        '(max-width: 991px)'
    );

    var navigator = menu.navigation({
            selectedClass: 'Selected',
            slidingSubmenus: true,
            theme: 'dark',
            title: 'Menu'
    });

    var drawer = menu.offcanvas({
         position: 'left'
    });


    document.querySelector( '.navbar-toggler' ).addEventListener( 'click', evnt => {
        evnt.preventDefault();
        drawer.open();
    });

 */