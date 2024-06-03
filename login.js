document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.querySelector('.signup-box form');
    const loginForm = document.querySelector('.login-box form');
  
    if (signupForm) {
      const signupButton = signupForm.querySelector('input[type="button"]');
      signupButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const firstName = signupForm.querySelectorAll('input[type="text"]')[0].value.trim();
        const lastName = signupForm.querySelectorAll('input[type="text"]')[1].value.trim();
        const email = signupForm.querySelector('input[type="email"]').value.trim();
        const password = signupForm.querySelectorAll('input[type="password"]')[0].value.trim();
        const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value.trim();
  
        if (validateSignup(firstName, lastName, email, password, confirmPassword)) {
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          alert('Đăng ký tài khoản thành công!!!');
          window.location.href = 'dangnhap.html';
        } else {
          alert('email hoặc password ko hợp lệ!');
        }
      });
    }
  
    if (loginForm) {
      const loginButton = loginForm.querySelector('input[type="button"]');
      loginButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const email = loginForm.querySelector('input[type="email"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value.trim();
  
        if (validateLogin(email, password)) {
          alert('Đăng Nhập Thành công: Bạn có muốn vào trang chủ Du lịch Việt Nam?');
          window.location.href = 'index.html';
        } else {
          alert(' email hoặc password sai.');
        }
      });
    }
  
    function validateSignup(firstName, lastName, email, password, confirmPassword) {
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return false;
      }
      if (password !== confirmPassword) {
        return false;
      }
      return validateEmail(email) && validatePassword(password);
    }
  
    function validateLogin(email, password) {
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');
      return email === storedEmail && password === storedPassword;
    }
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function validatePassword(password) {
      return password.length >= 6;
    }
  });