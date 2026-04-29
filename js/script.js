// Menu category filter
var filterBtns = document.querySelectorAll('.filter-btn');
var menuItems = document.querySelectorAll('.menu-item');

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var filter = btn.getAttribute('data-filter');

        filterBtns.forEach(function(b) {
            b.classList.remove('active');
        });
        btn.classList.add('active');

        menuItems.forEach(function(item) {
            if (filter === 'all') {
                item.classList.remove('hidden');
            } else if (item.getAttribute('data-category') === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});