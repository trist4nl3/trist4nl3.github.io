// Function to toggle menu popup visibility and hide/show sidebar
function toggleMenuPopup() {
    var menuPopup = document.getElementById("menuPopup");
    var sidebarPopup = document.getElementById("sidebarPopup");
    if (menuPopup.style.display === "none" || menuPopup.style.display === "") {
        menuPopup.style.display = "block";
        sidebarPopup.style.display = "none";
        document.body.style.overflow = "hidden"; // Disable scrolling
        // Add event listener to detect clicks outside of the sidebar
    } else {
        menuPopup.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    }
}

// Function to toggle sidebar menu visibility
function toggleSidebar() {
    var sidebarPopup = document.getElementById("sidebarPopup");
    var menuPopup = document.getElementById("menuPopup");
    if (sidebarPopup.style.display === "none" || sidebarPopup.style.display === "") {
        sidebarPopup.style.display = "block";
        menuPopup.style.display = "none";
        document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
        sidebarPopup.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    }
}
function showInfo(icon) {
    var sidebarPopup = document.getElementById("sidebarPopup");
    toggleSidebar(); // Show sidebar menu
    // Clear previous content
    sidebarPopup.innerHTML = "";

    // Populate sidebar menu based on icon clicked
    switch (icon) {
        case 'about':
            sidebarPopup.innerHTML = "<img src='assets/closeButton.png' alt='Close' class='close-btn' onclick='toggleSidebar()'><div class='content'><img src='assets/happyicon.gif' alt='Talking person' class='avatar'><div class='text'><h2>About Me</h2><p>Hi, I'm Tristan. I'm a software developer with a passion for creating games and web applications.</p></div></div>";
            break;
        case 'resume':
            sidebarPopup.innerHTML = "<img src='assets/closeButton.png' alt='Close' class='close-btn' onclick='toggleSidebar()'><div class='content'><img src='assets/happyicon.gif' alt='Talking person' class='avatar'><div class='text'><h2>My Resume</h2><p>Here you can find my resume information.</p></div></div>";
            break;
        case 'contact':
            // Populate sidebar menu for contact
            break;
        case 'rickroll':
            // Populate sidebar menu for rickroll
            break;
        default:
            break;
    }

    // Show the sidebar menu
    sidebarPopup.style.display = "block";
}

// Function to close menu popup when Escape key is pressed
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        var menuPopup = document.getElementById("menuPopup");
        var sidebarPopup = document.getElementById("sidebarPopup");
        menuPopup.style.display = "none";
        sidebarPopup.style.display = "none";
        var topLeftIcons = document.getElementById("topLeftIcons");
        var topRightIcons = document.getElementById("topRightIcons");
        topLeftIcons.style.display = "block"; // Show icons
        topRightIcons.style.display = "block"; // Show icons
    }
});





