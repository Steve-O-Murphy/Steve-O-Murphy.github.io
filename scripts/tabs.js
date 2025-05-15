function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove 'active' class from all buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add 'active' class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Optional: Open the first tab by default
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
  });
  