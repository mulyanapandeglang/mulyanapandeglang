<script>
function showPageLinks() {
    var container = document.createElement('div');
    container.className = 'pagination-container';
    var postCount = document.querySelectorAll('.date-outer').length;
    var totalPages = Math.ceil(postCount / perPage);
    var currentPage = 1;
    var url = window.location.href;
    var pageMatch = url.match(/\/\d+$/);
    if (pageMatch) currentPage = parseInt(pageMatch[0].replace('/', ''));
    if (totalPages > 1) {
        if (currentPage > 1) {
            container.innerHTML += '<a href="/' + (currentPage - 1) + '" class="pagination-prev">Previous</a>';
        }
        for (var i = 1; i <= totalPages; i++) {
            if (Math.abs(i - currentPage) < numPagesToShow || i === 1 || i === totalPages) {
                if (i === currentPage) {
                    container.innerHTML += '<span class="current">' + i + '</span>';
                } else {
                    container.innerHTML += '<a href="/' + i + '" class="pagination-number">' + i + '</a>';
                }
            }
        }
        if (currentPage < totalPages) {
            container.innerHTML += '<a href="/' + (currentPage + 1) + '" class="pagination-next">Next</a>';
        }
        var blogPager = document.querySelector('.blog-pager');
        if (blogPager) {
            blogPager.innerHTML = '';
            blogPager.appendChild(container);
        }
    }
}
window.addEventListener('load', showPageLinks);
//]]>
</script>
