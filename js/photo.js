$(document).ready(function(){
    // filter
    $('nav a').on('click', function(event){
        event.preventDefault();
        // current class
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        // set new heading
        $('h1.heading').text($(this).text());
        
        // filter link text
        var category = $(this).text().toLowerCase().replace(' ', '-');
        
        // remove hidden class if "all" is selected
        if(category == 'all-projects'){
            $('ul#photo li:hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('ul#photo li').each(function(){
               if(!$(this).hasClass(category)){
                   $(this).hide().addClass('hidden');
               } else {
                   $(this).fadeIn('slow').removeClass('hidden');
               }
            });
        }
        return false;        
    });
    // lightbox
    $('ul#photo a').on('click', function(event){
        event.preventDefault();
        var link = $(this).find('img').attr('src');
        $('.photo img').attr('src', '');
        $('.photo img').attr('src', link);
        $('.photo').fadeIn('slow');
    });
    // close lightbox
    $('.photo').on('click', function(event){
        event.preventDefault();
        $('.photo').fadeOut('slow');
    });
});