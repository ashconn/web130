import * as $ from 'jquery';

export class Nav {
    constructor() {
        this.submenuOpen = true;
        this.mobilemenuOpen = true;
        this.setup();
    }

    setup() {
        let products = $('#products');
        products.on('click', this.toggleSubmenu);
        this.toggleSubmenu();

        let mobileMenu = $('#mobileMenu');
        mobileMenu.on('click', this.toggleMobileMenu);
        // Unexpand menu for sm screens
        if (window.innerWidth < 640) {
            this.toggleMobileMenu;
        }
    }

    toggleSubmenu() {
        let submenu = $('#productsSubmenu');

        if (this.submenuOpen) {
            this.submenuOpen = false;
            submenu.hide();
            $('#products').on('click', function(){
                $(this).toggleClass('on');
            });
        } else {
            this.submenuOpen = true;
            submenu.show();
            $('#products').on('click', function(){
                $(this).removeClass('on');
            });
        }
    }

    toggleMobileMenu() {
        let navItems = $('li').not('.mobile-only');
        let menuIcon = $('.menu-icon');

        if (this.mobilemenuOpen) {
            this.mobilemenuOpen = false;
            navItems.hide();
            //Toggle icon
            menuIcon.removeClass('open');
        } else {
            this.mobilemenuOpen = true;
            navItems.show();
            //Toggle icon
            menuIcon.addClass('open');
        }
    }
}