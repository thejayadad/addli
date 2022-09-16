

function addItem(){
    let items = document.getElementById("item").value;
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let text = document.createTextNode(items);
    li.appendChild(text);
    ul.appendChild(li);
   
}