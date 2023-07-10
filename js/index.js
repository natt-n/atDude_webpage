function animateElements(selector, offset) {
    var elements = document.querySelectorAll(selector);
  
    function handleScroll() {
      var windowHeight = window.innerHeight;
  
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect().top;
  
        if (position < windowHeight - offset) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  }
  
  animateElements('.fade-in-from-bottom', 100);
  animateElements('.fade-in-pop-center', 100);
  