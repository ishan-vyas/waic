// search tags container 
var searchTags = $("<div></div>").attr({"id": "search-tags-container"});

// List of tags
var tags = ["location-tag", "fileType-tag", "lastMod-tag", "title-tag"];

var counter = 1;
function tagName()
{
        if(counter == 1) { counter++; return "Location"; }
        else if(counter == 2) { counter++; return "File Type"; }
        else if(counter == 3) { counter++; return "Last Mod"; }
        else { return "Title"; }
}

tags.forEach(
    function (item)
    {
        searchTags.append(
            $("<div></div>").attr({"id": item, "class": "search-tags"}).append(
                $("<img>").attr({"src": "./images/dropdownBtn.png", "class": "dropdowns"}), 
                $("<div></div>").attr({"class": "tag-names"}).text(tagName)
            )
        );
    }
);

