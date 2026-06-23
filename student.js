function add(){
    let name = document.getElementById("name").value;
    let RollNo = document.getElementById("RollNo").value;
    let CGPA = document.getElementById("CGPA").value;

    if(name ==="" || RollNo ==="" || CGPA === ""){
        alert("please fill the form");
    }
    let table = document.getElementById("StudentList");
    let row = table.insertRow();
    row.insertCell(0).innerText = name;
     row.insertCell(1).innerText = RollNo;
      row.insertCell(2).innerText = CGPA;
      let actionCell = row.insertCell(3);
      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "delete";
      deleteBtn.onclick = function(){
        row.remove();
      }
      actionCell.appendChild(deleteBtn);
      document.getElementById("name").value = "";
      document.getElementById("RollNo").value = "";
      document.getElementById("CGPA").value = "";

}