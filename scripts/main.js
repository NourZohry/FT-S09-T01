document.getElementById("task-form").addEventListener("click", function(event){
    event.preventDefault()
});

var popup = $("<div>", {"class": "popup"});
var confirmationText = $("<p>", {"id": "confirmation-text"}).text("");
var yesButton = $("<button>", {"id": "yes-button", "class": "yes-button"}).text("Yes");
var noButton = $("<button>", {"id": "no-button", "class": "no-button"}).text("No");
noButton.click(function() {
    popup.toggleClass("invisible");                
})
popup.append(confirmationText).append(yesButton).append(noButton);
popup.toggleClass("invisible");
$("#main-container").append(popup);


$(document).ready(function(){

    $("#add-button").click(function(){
        var inputText = $("#add-text").val();
        console.log(inputText);
        if (inputText != '') {
            var taskContainer = $("<div>", {"class": "taskContainer d-flex flex-row justify-content-between gap-3 my-1"})
            var task = $("<h5>").text(inputText);

            var deleteButton = $("<i>", {"id": "delete-button", "class": "bi bi-x-circle"});


            deleteButton.click(function() {
                // taskContainer.append(popup);
                popup.toggleClass("invisible");
                confirmationText.text("Are you sure you want to delete " + inputText + "?");

                yesButton.unbind( "click" );
                yesButton.click(function(){
                    taskContainer.remove(); 
                    popup.toggleClass("invisible");
                })
            })

            taskContainer.append(task);
            taskContainer.append(deleteButton)
            $("#tasks").append(taskContainer);

            $("#add-text").val('');
        }
    });
  });