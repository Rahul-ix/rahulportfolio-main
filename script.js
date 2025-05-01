function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the page loads, show the modal
window.onload = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// Handle form submission
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Perform your form submission
    var form = this;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            // Success! Close the modal
            modal.style.display = "none";
            // You can add any other success handling here if needed
        } else {
            // Error handling
            console.error('Form submission failed!');
        }
    };
    xhr.send(formData);
});

function showLoader() {
  // Show the loader when the form is submitted
  document.getElementById("loader").style.display = "block";
}