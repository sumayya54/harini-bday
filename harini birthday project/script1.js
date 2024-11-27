// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll Animation for Sections
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );
  
  document.querySelectorAll('.hidden').forEach(section => {
    observer.observe(section);
  });
  
  // Hover Effect for Images
  document.querySelectorAll('.reason img').forEach(image => {
    image.addEventListener('mouseover', () => {
      image.style.transform = 'scale(1.1)';
      image.style.transition = 'transform 0.3s ease';
    });
  
    image.addEventListener('mouseout', () => {
      image.style.transform = 'scale(1)';
    });
  });
  