/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  /* ----- END NAVIGATION BAR FUNCTION ----- */
  //--------------Add active-link class to the clicked item--------------//
  document.addEventListener('DOMContentLoaded', function() {
    const navMenuItems = document.querySelectorAll('.nav-menu a');
  
    navMenuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active-link class from all items
            navMenuItems.forEach(navItem => navItem.classList.remove('active-link'));
            // Add active-link class to the clicked item
            item.classList.add('active-link');
        });
    });
  });
  
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
  
  /* ----- TYPING EFFECT ----- */
  var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "Designer", "Engineer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
  });
  
  /* ----- CLOSE MENU ON ITEM CLICK ----- */
  document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.getElementById("myNavMenu");
    const navMenuItems = document.querySelectorAll('.nav-menu a');
  
    navMenuItems.forEach(item => {
      item.addEventListener('click', () => {
        navMenu.className = "nav-menu";
      });
    });
  });
  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
  })
  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  
  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})
  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
  origin: 'left',
  distance: '150px',
  duration: 2000,
  reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.edu-box',{delay: 100})
  srLeft.reveal('.pro-box',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.ed-box',{delay: 100})
  srRight.reveal('.pro-box',{delay: 100})
  
  
  srRight.reveal('.form-control',{delay: 100})
  
  
  
  /* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
      const scrollY = window.pageYOffset
  
      sections.forEach(current => {
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 50;
          sectionId = current.getAttribute('id')
  
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
          } else {
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
      })
  }
  window.addEventListener('scroll', scrollActive)
  
  //-- ----- Google Contact form----- --//
      
        
          const scriptURL = 'https://script.google.com/macros/s/AKfycbwiQ3vGQMrfgezpXUiM_ydKQ6VgXvdInarIHuBDNP8j6_2lS9NUOJnavdLcB6ubN_yi/exec'
          const form = document.forms['submit-to-google-sheet']
          const msg = document.getElementsByClassName('msg')
        
          form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => {
                  msg[0].innerHTML = "Message Sent Successfully"
                  form.reset()
                  setTimeout(() => {
                      msg[0].innerHTML = ""
                  }, 4000)
              })
              .catch(error => console.error('Error!', error.message))
          })