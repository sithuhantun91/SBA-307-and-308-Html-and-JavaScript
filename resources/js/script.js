document.addEventListener("DOMContentLoaded", function() {
    // Display Loading screen
    let loadingScreen = document.getElementById('loading');
    if(loadingScreen){
        // Show the loading screen
        loadingScreen.style.display = 'block';

        // Simulate loading time (e.g., fetching data)
        setTimeout(function() {
            // Hide the loading screen
            loadingScreen.style.display = 'none';
            // Redirect to Sign in page
            window.location.href = 'sign-in.html';
        }, 5000); // Adjust the timeout as needed
    }

    // Back button click event
    let backButton = document.getElementById("back-btn");
    if(backButton){
        backButton.onclick = function () {
            history.back();
        };
    }

    // Get all elements with the class name 'profile-edit-btn'
    let profile_edit_btns = document.getElementsByClassName("profile-edit-btn");
    // Iterate through the elements and add an onclick event listener
    for (let i = 0; i < profile_edit_btns.length; i++) {
        profile_edit_btns[i].addEventListener("click", function() {
            location.href = 'update-user.html';
        });
    }

    // Get all elements with the class name 'profile-delete-btn'
    let profile_delete_btns = document.getElementsByClassName("profile-delete-btn");
    // Iterate through the elements and add an onclick event listener
    for (let i = 0; i < profile_delete_btns.length; i++) {
        profile_delete_btns[i].addEventListener("click", function() {
            //Do Nothing
        });
    }

    // Get all elements with the class name 'add-new-user-btn'
    let add_new_user_btns = document.getElementsByClassName("add-new-user-btn");
    // Iterate through the elements and add an onclick event listener
    for (let i = 0; i < add_new_user_btns.length; i++) {
        add_new_user_btns[i].addEventListener("click", function() {
            location.href = 'add-new-user.html';
        });
    }

    // Get all elements with the class name 'save-btn'
    let save_btns = document.getElementsByClassName("save-btn");
    // Iterate through the elements and add an onclick event listener
    for (let i = 0; i < save_btns.length; i++) {
        save_btns[i].addEventListener("click", function() {
            //Do Nothing
        });
    }
});