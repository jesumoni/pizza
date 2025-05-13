// preloader

window.addEventListener('load', function () {
   
    const preloader = document.getElementById('preloader');
    
  
    preloader.style.transition = 'opacity 7s ease';
    preloader.style.opacity = '0';

   
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 7000); 
  });



 
