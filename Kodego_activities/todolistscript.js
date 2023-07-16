
//======== todoList.html
function newElement (){
    const li = document.createElement("li");
    const inputValue = document.getElementById("todoItem").value;
    const newTodoList = document.createTextNode(inputValue);

    if (inputValue.trim() === ''){
        alert("Please Write To Do Items!");
        inputValue.value = "";
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("todoItem").value="";
    
    const span = document.createElement("SPAN");
    const taskTrsh = document.createElement("span");
    taskTrsh.className="glyphicon glyphicon-trash";
    const checkBX = document.createElement("input");
    checkBX.setAttribute("type","checkbox");
    checkBX.setAttribute("name","listChkBox");
    checkBX.setAttribute("id","listChkBox");
    const checkBoxLabel = document.createElement("label");
    checkBoxLabel.setAttribute("for","listChkBox");
    checkBoxLabel.appendChild(newTodoList);
    span.className="close";
    span.appendChild(taskTrsh);
    li.appendChild(checkBX);
    li.appendChild(checkBoxLabel);
    li.appendChild(span);
    const close = document.getElementsByClassName('close');
    for (i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.remove();
        }
    }
    
}



const myNodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodeList.length; i++) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}




