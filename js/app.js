var main = document.getElementById('main');
var url = 'https://swapi.co/api/people/?format=json';
var characters;

var list = document.createElement("ul");

fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    // set the resulting json.result to characters
    characters = data.results;
    //sort
    sort(characters);

    //add list item to list ul element
    characters.forEach(character => {
        var name = document.createTextNode(character.name + " " + character.height);
        var item = document.createElement("li");
        item.appendChild(name);

        list.appendChild(item);

    });
    
    main.appendChild(list);
});

//sort the array
function sort(arr){
    var done = false;
    while(!done){
        done = true;
        for(var i = 0; i < arr.length-1; i++){
                if(parseInt(arr[i].height) > parseInt(arr[i+1].height)){
                    var temp = arr[i+1];
                    arr[i+1] = arr[i];
                    arr[i] = temp;
                    done = false;
                }
        }
    }
    console.log(arr);
}
