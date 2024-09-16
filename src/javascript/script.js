$(document).ready(function() {
    $('mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x'); 
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;
        
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBotton = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBotton) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

        // Corrigindo a sobreposição do header
        header.css('position', 'fixed');
        header.css('top', '0');
        header.css('width', '100%');
        header.css('z-index', '1000'); // Garantindo que o header fique acima das imagens
    });

    // ScrollReveal configurações
    ScrollReveal().reveal('#cta', { 
        origin: 'left',
        duration: 2000,
        distance: '5%'
    });

    ScrollReveal().reveal('.dish', { 
        origin: 'left',
        duration: 2000,
        distance: '5%'
    });

    ScrollReveal().reveal('#testimonials_chef', {  
        origin: 'left',
        duration: 1000,
        distance: '5%'
    });

    ScrollReveal().reveal('.feedback', { // Corrigido o seletor
        origin: 'right', // Corrigido 'rigth' para 'right'
        duration: 1000,
        distance: '5%'
    });
});






