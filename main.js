
var addButton = document.getElementById('addButton'),
input  = document.getElementById('inputField'),
toDoList = document.getElementById('toDoList')


function addNewItem(){
	if(!input.value == ""){
		var toDoListItem = document.createElement('li');
		toDoListItem.className = 'todo';
		// Remove item on click
		toDoListItem.addEventListener("click", itemDone);
		// Add field input	
		toDoListItem.innerText = input.value;
		// Add item and checkbox to list
		toDoList.appendChild(toDoListItem)
		// Reset input field
		input.value = "";
	}
}

function itemDone(e){
	var elem, evt = e ? e:event;
	elem = evt.srcElement;

	// Toggle todo class
	if(elem.className === "todo done"){
		elem.classList.remove("done"); 	
	}else{
		elem.classList.add("done"); 	
	}
	return true;
}

addButton.addEventListener("click", addNewItem);

document.onkeydown = function(){
	if(window.event.keyCode == '13'){
		addNewItem();
	}
}

