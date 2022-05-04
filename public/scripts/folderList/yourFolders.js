// The Folders container
var yourFolders = $("<div></div>").attr({"id": "Your-folders"});

// Array to hold the list of folders
var folderArray = ["Calculus 201", "Sex Education", "WAIC", "Harry Potter books"];

// Loop through and display each folder in array
folderArray.forEach(
    function(item, index)
    {
        yourFolders.append(
            $("<div></div>").attr({"id": "folder-" + (index+1), "class": "folderCont"}).append(
                $("<img></img>").attr({"src": "./images/folder-icon.png", "class": "folder-icon"}),

                $("<div></div>").attr({"class": "folder-name"}).text(item)
            )
        );
    }
);

