document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const mobile = document.getElementById('mobile').value.trim();
  
      if (!name || !email || !mobile) {
        alert('Please fill in all the fields.');
        return;
      }
  
      if (!/^\d{10}$/.test(mobile)) {
        alert('Enter a valid 10-digit mobile number.');
        return;
      }
  
      alert(`Thanks for registering, ${name}!`);
      form.reset();
    });
  });
  