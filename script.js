function validation(){
    var e=document.getElementById('email').value;
    var p=document.getElementById('passw').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    if (!emailPattern.test(e)) {
        alert('Please enter a valid email address.');
        window.location.reload();
    } else if (!passwordPattern.test(p)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number.');
        window.location.reload();
    } else {
        alert('Sign-up Successful');
        window.location.reload();
    }
}