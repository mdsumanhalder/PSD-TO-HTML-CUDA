// Mobile navbar 
const navlinks=document.querySelectorAll('.nav-link');
const myNav=document.querySelector('#myNav');
const openBtn=document.querySelector('.openbtn');
const closeBtn=document.querySelector('.closebtn');
openBtn.addEventListener('click',()=>{
  myNav.style.width='100%';
})
closeBtn.addEventListener('click',()=>{
  myNav.style.width='0%';
})
navlinks.forEach(link=>{
  link.addEventListener('click',()=>{
myNav.style.width='0%'
  })
})

$(document).ready(function(){$(".sticky_section").waypoint(function(t){"down"==t?$("nav").addClass("sticky"):$("nav").removeClass("sticky")});mixitup(".container");$("a").on("click",function(t){var n;""!==this.hash&&(t.preventDefault(),n=this.hash,$("html,body").animate({scrollTop:$(n).offset().top},600,function(){window.location.hash=n}))})});

// ANIMATED CIRCLE JS FILE
$('svg.radial-progress').each(function( index, value ) { 
  $(this).find($('circle.complete')).removeAttr( 'style' );
});
$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll');