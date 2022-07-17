// Navbar JS .... scrolling down turns navbar dark 
var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
})

// sliding cards JS ... owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    stagePadding: 100,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
