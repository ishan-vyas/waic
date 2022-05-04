// Container for the search Results
var searchResults = $("<div></div>").attr({"id": "search-results", "class": "searchResults"});

// array of search results
var fileArray = ["PDF-1", "Slideshow-1", "PDF-2", "Slideshow-2", "PDF-3", "other", "other", "other"];

// Loop through and display all results
fileArray.forEach(
    function(item, index)
    {
        searchResults.append($("<div></div>").attr({"class": "search-result"}));
    }
);