document.addEventListener("DOMContentLoaded", function () {
    const darkModeCheckbox = document.getElementById("darkModeCheckbox");

    function toggleDarkMode() {
        const body = document.body;
        const name = document.querySelector(".name");
        const additionalNameElements = document.querySelectorAll(".additional-name, .additional-name2, .additional-name3");
        const box = document.querySelector(".box");
    
        if (darkModeCheckbox.checked) {
            // Dark mode
            body.style.backgroundColor = "#040D12"; 
            document.documentElement.style.setProperty('--background-color', '#040D12'); 
            name.style.webkitTextStrokeColor = "white"; 
            box.style.color = "white";
    
            additionalNameElements.forEach(function(element) {
                element.style.color = "white"; // Change text color to white for all "additional-name" elements
            });

        } else {
            // Light mode
            body.style.backgroundColor = "#CEE6F3"; 
            document.documentElement.style.setProperty('--background-color', '#FFF4F4'); 
            name.style.webkitTextStrokeColor = "#65647C";
            box.style.color = "#65647C";
            additionalNameElements.forEach(function(element) {
                element.style.color = "#65647C"; // Change text color to the original color for all "additional-name" elements
            });
        }
    }
    

    // Attach a change event listener to the checkbox
    darkModeCheckbox.addEventListener("change", toggleDarkMode);


    
    toggleDarkMode();

    
});



