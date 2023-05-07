let RecipeArray = [];

let RecipeObject = function (pData, pType) {
    this.data = pData;
    this.type = pType;
}

RecipeArray.push ( new RecipeObject("Caesar", "Salads")  );
RecipeArray.push ( new RecipeObject("Chicken Soup", "Soups")  );
RecipeArray.push ( new RecipeObject("Braised steak and onions", "Meat Recipes")  );
RecipeArray.push ( new RecipeObject("Baked ricotta cake", "Deserts")  );

let selectedType = "";

// code runs immediately
//================================================================

// runs  when dom is loaded
document.addEventListener("DOMContentLoaded", function (event) {

    createList();

    document.getElementById("buttonAdd").addEventListener("click", function () {
        RecipeArray.push ( new RecipeObject(document.getElementById("dataInput").value, selectedType ) );
        
        document.getElementById("dataInput").value = "";

        createList();
    });

    $(document).bind("change", "#select-type", function (event, ui) {
        selectedType = document.getElementById("select-type").value;
    });

});


//======================================
// function defintions
function createList() {
    // clear prior data
    var myul = document.getElementById("myul");
    myul.innerHTML = "";

    RecipeArray.forEach(function (element,) {
        var li = document.createElement('li');
          // added data-role="listview" to the ul in the html
        li.innerHTML = element.type + ":   " + element.data;
        myul.appendChild(li);
    });
};