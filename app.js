 document.getElementById('login-form').addEventListener('submit', function(e){
  e.preventDefault(); 
  const email = this.email.value;
  const password = this.password.value; 
 
  // Simulated authentication  
  if(email === 'user@test.com' && password === '123456'){ 
    localStorage.setItem('ticketapp_session', 'token123');
    window.location.href = '/dashboard'; 
  } else { 
    document.getElementById('toast').innerText = 'Invalid credentials'; 
  }
});
 
