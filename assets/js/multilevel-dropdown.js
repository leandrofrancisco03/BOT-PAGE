document.addEventListener('DOMContentLoaded', function(){
    // The page has loaded

    let menuItems = document.querySelectorAll('.multilevel .dropdown-menu a');
    
    for (let item of menuItems) {
        // Trigger the menu on click
        item.addEventListener('click', triggerMenu);
        // Trigger the menu on hover. You can remove this.
        item.addEventListener('mouseenter', triggerMenu);
    }
    
    // When the body is clicked, hide all menu items
    
    document.body.addEventListener('click', function() {
        document.querySelectorAll('.multilevel .dropdown-menu .dropdown-menu')
            .forEach(m => m.classList.remove('show'));
    });
});

function triggerMenu(e) {
    
    // Hide all other dropdowns
    e.target.parentNode.querySelectorAll('.dropdown-menu')
        .forEach(m => m.classList.remove('show'));
    
    let toggle = e.target.closest('.dropdown-toggle');
    
    if (!toggle) {
        return;
    }

    // Show the new dropdown menu
    let menu = toggle.nextElementSibling;

    if (menu && menu.matches('.dropdown-menu')) {
        // This is a dropdown menu toggle. Show the menu
        // and prevent it from closing on click.
        menu.classList.add('show');
        e.stopPropagation();
    }
}