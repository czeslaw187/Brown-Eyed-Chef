// class import
import { Header } from './header.js'
import { Home } from './pages/home.js'
import { AboutUs } from './pages/aboutUs.js'
import { Menu } from './pages/menu.js'
import { ServicesUs } from './pages/services.js'
import { ContactUs } from './pages/contact.js'
import { SignUp } from './pages/signUp.js'
import { Login } from './pages/login.js'
import { Carousel } from './carousel.js'

// declaring headerNav instance
const head = new Header('Brown Eyed Chef')

// declaring pages instances
const homePage = new Home()
const aboutUs = new AboutUs()
const menu = new Menu()
const services = new ServicesUs()
const contact = new ContactUs()
const signUp = new SignUp()
const login = new Login()
let contentArray = [
    homePage.displayHome(),
    aboutUs.displayAboutUs(), 
    menu.displayMenu(), 
    services.displayServices(), 
    contact.displayContactUs(), 
    signUp.displaySignUp(), 
    login.displayLogin()
] 

// declare carousel instance
const carousel = new Carousel() 

    
// render header and main page
let imgArr = ['./images/bbq1.jpg', './images/bbq2.jpg', './images/bbq3.jpg'] // slideshow pic array

$('#slideShow').html(carousel.displaySlideshow(imgArr))
$('#navbar').html(head.displayHeader())
$('#mainContent').html(carousel.displayCarousel(contentArray))

// navigation logics
$('#menuList li a').on('click', (e)=> {
    $('#menuList li a').removeClass('active-page');
    $(e.target).addClass('active-page')
    switch(e.target.innerHTML) {
        case 'About':
            $('#pageCarousel').carousel(1) 
            break;
        case 'Home':
            $('#pageCarousel').carousel(0)
            break;
        case 'Menu':
            $('#pageCarousel').carousel(2)
            break; 
        case 'Services':
            $('#pageCarousel').carousel(3)
            break;
        case 'Contact':
            $('#pageCarousel').carousel(4)
            break;
        case 'Sign Up': 
            $('#pageCarousel').carousel(5)
            break;
        case 'Login':
            $('#pageCarousel').carousel(6)
            break;
        default:
            return;
    }        
})

// adds active-page class to nav element on slide
$('#pageCarousel').on('slid.bs.carousel', ()=> {
    if ($('.carousel-item').hasClass('active')) {
        let navIndex = $('#pageCarousel .active').index()
        $('#menuList li a').removeClass('active-page')
        $('#menuList li a').eq(navIndex).addClass('active-page')
    
        
    }
})