function myFunction() {
      var x = document.getElementById("myLinks");
      console.log(x);
      if (x.style.display === "block"){
         x.style.display = "none";
      } else {
         x.style.display = "block";
      }
     
  }



      
   // Section4
  $('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   responsiveClass:true,
   responsive:{
       0:{
           items:1,
           nav:true
       },
       600:{
           items:3,
           nav:false
       },
       1000:{
           items:5,
           nav:true,
           loop:false
       }
   }
})