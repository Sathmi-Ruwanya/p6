document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    const ratingOutput = document.getElementById("selected-rating");
    
    stars.forEach(function(star) {
      star.addEventListener("click", function() {
        const ratingValue = parseInt(this.getAttribute("data-value"));
        highlightStars(ratingValue);
        // ratingOutput.innerHTML = "You rated this " + ratingValue + " stars.";
      });
    });
  
    function highlightStars(rating) {
      stars.forEach(function(star) {
        if (parseInt(star.getAttribute("data-value")) <= rating) {
          star.classList.add("selected");
        } else {
          star.classList.remove("selected");
        }
      });
    }
  });
   
