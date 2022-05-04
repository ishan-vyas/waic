//1368px width
// Root container carrying all elements
var rootContainer = $("<div></div>").attr({"id": "root-container", "class": "pageContainer container-fluid"});
$("body").append(rootContainer);

// Top navigation bar
rootContainer.append(navigationBar); 

// Page Heading
rootContainer.append($("<h1>File Selection</h1>").css({"text-align": "center", "padding-left": "0px"}));

// Centering the items
var centered = $("<center></center>");
rootContainer.append(centered);

// Collection Preview container
centered.append(collectionPreview);

// New collection heading and container
centered.append(newCollectionHeader);
centered.append(newCollection);

// Save collection button
rootContainer.append($("<button>Save Collection</button>").attr("class", "save-collection-btn btn btn-lg"));
