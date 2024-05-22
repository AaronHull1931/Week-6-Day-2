$(document).ready(function() {
    let gridSize = 4;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let box = $("<div class = 'box'></div>");
            $("#grid-container").append(box);
            box.on("click", function() {
                $(this).toggleClass("darkMode")
            });
        }
    }
});