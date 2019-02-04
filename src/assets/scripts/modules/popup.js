
    var popup = document.getElementById('popup')
    var closePopup = document.querySelectorAll('.js-close-popup');

    $(closePopup).click(function(event) {
        $(popup).fadeOut(500);
       });