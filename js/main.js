document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('#fullName').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            
            if (!name || !email) {
                alert('Please fill out all required fields.');
                return;
            }
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerText = 'SENDING...';
            
            setTimeout(() => {
                alert('Message received! Thank you for getting in touch.');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerText = 'SEND MESSAGE';
            }, 1000);
        });
    }
});

