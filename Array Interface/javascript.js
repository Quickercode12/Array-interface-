let list = [];

function insertItem() {
    let item = prompt("Enter item to insert:");

    if (item) {
        list.push(item);
        updateListDisplay();
        document.getElementById("result").innerText = `Inserted ${item}`;
    }
}

function deleteItem() {
    if (list.length > 0) {
        let item = list.pop();
        updateListDisplay();
        document.getElementById("result").innerText = `Deleted ${item}`;
    } else {
        document.getElementById("result").innerText = "List is empty";
    }
}

function removeItem() {

    if(list.length < 1){
        document.getElementById("result").innerText = "List is empty";
    }

    else{
        let item = prompt("Enter item to remove:");
    let index = list.indexOf(item);
    if (index > -1) {
        list.splice(index, 1);
        updateListDisplay();
        document.getElementById("result").innerText = `Removed ${item}`;
    } else {
        document.getElementById("result").innerText = `${item} not index is found in list`;
    }
    }
}

function sizeOfList() {
    document.getElementById("result").innerText = `Size of list: ${list.length}`;
}

function midOfList() {
    if (list.length > 0) {
        let midIndex = Math.floor(list.length / 2);
        document.getElementById("result").innerText = `Mid item: ${list[midIndex]}`;
    } else {
        document.getElementById("result").innerText = "List is empty";
    }
}

function updateListDisplay() {
    let arr = document.getElementById("arr");
    arr.innerHTML = `List: [ ${list.join(", ")} ]`;
}
