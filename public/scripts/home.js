//1368px width
// Root container carrying all elements
var rootContainer = $("<div></div>").attr({"id": "root-container", "class": "container-fluid"});
$("body").append(rootContainer);

// Top navigation bar
rootContainer.append(navigationBar);

// Page Heading
rootContainer.append($("<h1>Welcome back, User</h1>"));

// Suggested content heading and container
rootContainer.append($("<h2>Suggested</h2>"));
rootContainer.append(suggestedContents);

// Your folders heading and container
rootContainer.append($("<h2>Your folders</h2>"));
rootContainer.append(yourFolders);

// Your files heading and container
rootContainer.append($("<h2>Your files</h2>"));
rootContainer.append(yourFiles);