document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('my-form').addEventListener('submit', function(e) {
        var password = document.getElementById('password').value;
        var confirm_password = document.getElementById('confirm-password').value;


        if (password !== confirm_password) {
            e.preventDefault();
            alert('passwords do not match.')
        } 
    })
})


