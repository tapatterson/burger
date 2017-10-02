// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devburger").on("click", function(event) {
    var id = $(this).data("id");

   // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

 $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

   var newBurger = {
      burger_name: $("#addburger").val().trim()
      
   };

   // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

 $(".update-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

   var updatedBurger = {
      burger_name: $("#burger_name").val().trim()
      
   };

   var id = $(this).data("id");

   // Send the POST request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updatedBurger
    }).then(
      function() {
        console.log("Burgers Updated");
        // Reload the page to get the updated list
        location.assign("/");
      }
    );
  });
});
