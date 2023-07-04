//CRUD - Create, Read, Update, Delete
//C - CREATE (Retreive, store data in local storage, retrieve data from local storage and insedt in a table)
//R - READ (Reading the data from the form).
//U - UPDATE (Edit and update)
//D - DELETE (delet data)

// Global Variables
let row = null; //for Submit function

function Submit(){ //This function was called in HTML file
    let dataEntered = retrieveData();
    let readData = readingDataFromLocalStorage(dataEntered);
    console.log(readData);

    if(row == null){
        insert(readData);
        msg.innerHTML = "Data Inserted!"
    }else{
        update();
        msg.innerHTML = "Data Updated!"
    };
    
    document.getElementById("name").value ="";
    document.getElementById("job").value ="";;
    document.getElementById("exp").value ="";;
};

// CREATE
// Retriving data from Form
function retrieveData(){
    let name1 = document.getElementById("name").value;
    let job = document.getElementById("job").value;
    let exp = document.getElementById("exp").value;

    let array = [name1, job, exp];
    return array; //Is is necesarry to return the array because they are multiple values
};

// READ
// Data in LocalStorage
function readingDataFromLocalStorage(dataEntered){
    // Storing data in local storage
    let n = localStorage.setItem("Name", dataEntered[0]);
    let j = localStorage.setItem("Job", dataEntered[1]);
    let e = localStorage.setItem("Experience", dataEntered[2]);

    // Getting values from Local Storage to set them in table
    let n1 = localStorage.getItem("Name", n);
    let j1 = localStorage.getItem("Job", j);
    let e1 = localStorage.getItem("Experience", e);

    let array = [n1, j1, e1]
    return array;
};

// INSERT
//Insert data on table
function insert(readData){
    let row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onclick="edit(this)" id="editbtn">Edit</button> 
    <button onclick="remove(this)" id="deletebtn">Delete</button> `;

};


//EDIT
function edit(btn){
    row = btn.parentElement.parentElement; //Obtains the row the button belongs to
    // let cell = btn.parentElement;
    // console.log("row= "+row);
    // console.log("row1= "+cell);
    // console.log("td= "+btn);
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("exp").value = row.cells[2].innerHTML;
    
};


//UPDATE
function update(){
  
    row.cells[0].innerHTML = document.getElementById("name").value
    row.cells[1].innerHTML = document.getElementById("job").value
    row.cells[2].innerHTML = document.getElementById("exp").value
    row = null;
}

//DELETE
function remove(btn){
    let answer = confirm("Are you sure you want to delete the selected Row?");
    // console.log(answer)
    if(answer === true){
        row = btn.parentElement.parentElement; //Obtains the row the button belongs to
        // document.getElementById("table").deleteRow(row.rowIndex);
        
        row.remove();

    }
};


