export class Header {
    constructor(logo) {
        this.logo = logo
    }

    displayHeader() {
        return `<nav class='navbar navbar-expand-lg navbar-dark' style='height: 35vh;>
                    <div class='container-fluid mb-auto'>
                        <a href='#' class='navbar-brand text-white mb-auto mt-2'>${this.logo}</a>
                        <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#menuList'>
                            <span><i class='fa fa-bars'></i></span>
                        </button>
                    </div>
                    <div class='collapse navbar-collapse mb-auto' id='menuList'>
                        <ul class='navbar-nav my-2 ml-auto'>
                            <li class='nav-item'><a id="home" href='#' class='nav-link text-white active-page'>Home</a></li>
                            <li class='nav-item'><a id="about" href='#' class='nav-link text-white'>About</a></li>
                            <li class='nav-item'><a id="menu" href='#' class='nav-link text-white'>Menu</a></li>
                            <li class='nav-item'><a id="services" href='#' class='nav-link text-white'>Services</a></li>
                            <li class='nav-item'><a id="contact" href='#' class='nav-link text-white'>Contact</a></li>
                            <li class='nav-item'><a id="signUp" href='#' class='nav-link text-white'>Sign Up</a></li>
                            <li class='nav-item'><a id="login" href='#' class='nav-link text-white'>Login</a></li>
                        </ul>
                    </div>
                </nav>`
    }
}


