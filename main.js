console.log('linked')

var form = document.getElementById('submit-form');
var addButton = document.getElementById('add-button');
var submitButton = document.getElementById('submit-button');
var ul = document.getElementById('appendable-list');

addButton.addEventListener("click", function(){
	var val = form.value;
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.className = 'delete-button';
	deleteButton.innerText = "X";
	li.innerText = val;
	li.appendChild(deleteButton);
	ul.appendChild(li);
	deleteButton.addEventListener("click", function(){
		console.log("clicked")
		var thisLi = deleteButton.parentElement
		thisLi.parentElement.removeChild(thisLi);
	})
})


submitButton.addEventListener("click", function(){
	var lis = document.getElementsByTagName('li')
	var arr = [];
	for (i=0; i<lis.length; i++){
		arr.push(lis[i].innerText.replace("X", ""))
	}
	console.log("submitting " + arr)
})

// You should be able to have more than one component per page.
