document.addEventListener('DOMContentLoaded', function() {
        const newsletterForm = document.getElementById('newsletter-form');
        const newsletterPopup = document.getElementById('popup');
      
        function openPopup() {
          newsletterPopup.classList.add('open-popup');
        }
      
        function closePopup() {
          newsletterPopup.classList.remove('open-popup');
        }
      
        newsletterForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form submission
      
          const emailInput = newsletterForm.querySelector('input[type="email"]');
          const email = emailInput.value.trim();
      
          if (isValidEmail(email)) {
            // Show the popup
            openPopup();
      
            // Clear the input field
            emailInput.value = '';
      
            // Hide the popup after a delay
            setTimeout(() => {
              closePopup();
            }, 3000); // Adjust the delay (in milliseconds) as needed
          } else {
            alert('Please enter a valid email address.');
          }
        });
      
        function isValidEmail(email) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(email);
        }
    });
      

