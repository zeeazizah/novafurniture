  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('main-navbar');
    const brand = document.querySelector('.navbar-brand');

    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      brand.classList.add('scrolled-logo');
    } else {
      navbar.classList.remove('scrolled');
      brand.classList.remove('scrolled-logo');
    }
  });

