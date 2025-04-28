let slideIndex = 1;

function showSlides(n) {
    let slides = $(".slides");
    let captions = [
        "M - Picture of Minecraft",
        "I - Picture of Icee",
        "R - Picture of Rock",
        "I - Picture of Infant",
        "A - Picture of Artwork",
        "N - Picture of Noodles",
        "G - Picture of Grandpa",
        "A - Picture of Amusement Park",
        "R - Picture of Rails",
        "C - Picture of Cat",
        "I - Picture of Ice Tea",
        "A - Picture of Automobile"
    ];


    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.hide(); 
    $(slides[slideIndex-1]).show();
    $("#caption").text(captions[slideIndex-1]);
}
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}
$(document).ready(function() {
    showSlides(slideIndex);

    $(".prev").click(function(){
        plusSlides(0);
    });

    $(".next").click(function(){
        plusSlides(0);
    });

    $(".demo").click(function(){
        let index = $(".demo").index(this) + 1;
        currentSlide(index);
    });
});






   
       


