$(document).ready(
    function()
    {
        $(".search-result").draggable( { 
            drag: function()
            {
                $(this).addClass("clicked");
            },
            helper: "clone" 
        });

        $("#theCollection").droppable(
            {
                drop: function()
                {
                    $("#theCollection").prepend($(".clicked"));
                }
            }
        );
    }
);
