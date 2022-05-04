var newCollectionHeader = $("<div></div>").attr({"class": "collectionName"})
                                    .append(
                                        $("<div><div>").attr("class", "leftarrow").text("<"),

                                        $("<input>").attr({"type": "text", "name": "collectionName", "placeholder": "new collection name"})
                                                    .css({
                                                        "background-color": "aliceblue",
                                                        "outline": "none",
                                                        "border": "none",
                                                        "height": "90%",
                                                        "width": "311px",
                                                        "font-size": "34px",
                                                        "font-style": "italic",
                                                        "text-align": "center"
                                                    }),
                                        
                                        $("<div><div>").attr("class", "rightarrow").text(">")
                                    );

var newCollection = $("<div></div>").attr({"id": "theCollection"});

newCollection.append($("<div>Drop files here</div>").attr({"class": "collectionItem"}));