/*  
    I certify that the JavaScript file I am submitting is all my own work. 
    None of it is copied from any source or any person. 
    Signed: Rachel Kristofferson
    Date: 8/4/2024
*/
/*
    Author: Rachel Kristofferson
    Date: 8/4/2024
    Class: CSC135
    File Name: scripts.js
    Project: Javascript file for Alaska Awaits project
    Description: Creates the picture slideshow on the home page.

    Sources: https://www.youtube.com/watch?v=749ta0nvj8s
*/


var slides = document.querySelectorAll(".slides img");
var currentSlide = 0;

initializeSlide();

function initializeSlide(){
    slides[currentSlide].classList.add("displaySlide");
    
}
function showSlide(index){
    if(index >= slides.length){
        currentSlide = 0;
    }
    else if(index < 0){
        currentSlide = slides.length - 1;
    }

    slides.forEach(function(slide) {
        slide.classList.remove("displaySlide");
    });
    slides[currentSlide].classList.add("displaySlide");

}
function prevSlide(){
    currentSlide--;
    showSlide(currentSlide);
}
function nextSlide(){
    currentSlide++;
    showSlide(currentSlide);
}