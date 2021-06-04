
const hamburgerButton = document.getElementById('hamburger');
hamburgerButton.addEventListener('click', function(){
    toggleSidebar();
});

const sidebar = document.getElementsByClassName("sidebar")[0];
const navbar = document.getElementsByClassName("navbar")[0];
const main = document.getElementsByClassName("main")[0];



let sidebarIsExpanded=true;


function expandSidebar(){
    sidebar.style.display = "block";
    navbar.classList.add("navigation");
    main.classList.add("mainwork");
   
}

function collapseSidebar(){
    sidebar.style.display = "none";
    navbar.classList.remove("navigation");
    main.classList.remove("mainwork");
}

function toggleSidebar(){
    if(sidebarIsExpanded){
        collapseSidebar();
    }else{
        expandSidebar();
    }
    sidebarIsExpanded = !sidebarIsExpanded;
}