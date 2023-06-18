window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var screenHeight = window.innerHeight;
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    navbar.classList.toggle('with-color', scrollPosition > screenHeight);
  });



  AOS.init();