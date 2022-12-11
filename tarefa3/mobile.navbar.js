class MobileNavbar {

    constructor(mobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector();
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards $
                {index / 7 + 0.3s}s`);
        });
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

    }

    Init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const MobileNavbar = new MobileNavbar(
 ".mobile-menu",
 ".nav-list",
 ".nav-list li",

);
MobileNavbar.Init();


