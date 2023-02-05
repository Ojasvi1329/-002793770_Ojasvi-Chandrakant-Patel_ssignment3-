
let check_count = 1;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


// function Test(){
//   console.log("out");
//   $(function() {
//     $('td:first-child input').change(function() {
//       $(this).closest('tr').toggleClass("highlight", this.checked);
//     });
//   });
// }

//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

// var myNodeList = document.getElementsById("myTable");


// for(i=0;i<myNodeList.length;i++){
//   var span = document.createElement("span");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodeList[i].appendChild(span);
// }



function myCreateFunction( table ){



  var table = document.getElementById(table);


  let rowCount = document.getElementById('myTable').rows.length + 1;
  let id = rowCount;

  let checkboxId = "checkbox_"+id;
  let deleteId = "delete_"+id;
  let editId = "edit_"+id;
  rowCount = rowCount/2;
  // console.log(rowCount);
  var row = table.insertRow(-1);
  var cell0 = row.insertCell(0);



  var newElem_0 = document.createElement( 'input' );
  newElem_0.setAttribute("id", checkboxId); //assigning checkbox Id here
  newElem_0.setAttribute("type", "checkbox");
  cell0.appendChild(newElem_0);
  var br = document.createElement('br');
  cell0.appendChild(br);
  var br = document.createElement('br');
  cell0.appendChild(br);
  const img = new Image(25); 
  img.src = "down.png";
  img.setAttribute("onclick","imgTog(event)");
  cell0.appendChild(img);
  newElem_0.setAttribute('onclick',"myFunction(event)");
  // newElem_0.setAttribute('onclick','callFunction(" ' + checkboxId+' ")');
  
  var cell1 = row.insertCell(1);
  cell1.innerHTML = "Student "+ rowCount;

  var cell2 = row.insertCell(2);
  cell2.innerHTML = "Teacher "+ rowCount;
  

  var awardStatusArray = [
    "Approved",
    "Rejected"
  ];
  
  var randomItem = awardStatusArray[Math.floor(Math.random()*awardStatusArray.length)];

  var cell3 = row.insertCell(3);
  cell3.innerHTML = randomItem;

  var cell4 = row.insertCell(4);
  cell4.innerHTML = "Fall";

  var cell5 = row.insertCell(5);
  cell5.innerHTML = "TA";

  var cell6 = row.insertCell(6);
  cell6.innerHTML = getRandomInt(9999);

  var cell7 = row.insertCell(7);
  cell7.innerHTML = getRandomInt(100) + "%";

  // var cell8 = row.insertCell(8);
  // var newElem_8 = document.createElement( 'button' );
  // newElem_8.innerHTML = "Delete";
  // newElem_8.setAttribute("id",deleteId);
  // // newElem_8.onClick(callFunction(deleteId));

  // cell8.appendChild(newElem_8);

  // var cell9 = row.insertCell(9);
  // var new_Elem_9 = document.createElement( 'button' );
  // new_Elem_9.setAttribute("id",editId);
  // new_Elem_9.innerHTML = "Edit";
  // cell9.appendChild(new_Elem_9);
  
  var newRow = table.insertRow(-1);
  newRow.innerHTML = "Advisor: "+ "<br /><br />"+"Award Details<br />" +"Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />" ;
  newRow.setAttribute("class","dropDownTextArea hide");

  alert("Record added successfully");
}



function myDeleteFunction(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);

  alert("Record deleted successfully");
}

function myEditFunction(r){
  alert("Edit the details");
}

function checkbox(o){
  var j = o.parentNode.parentNode.rowIndex;
  // document.getElementById.o.style.backgroundColor=(o.style.backgroundColor=='red')?('transparent'):('red');
  document.getElementBy("myTable").style.backgroundColor = "yellow"

  // document.getElementById("myTable").css('background','yellow');
  // if(this.style.background == "" || this.style.background =="white") {
  //   $(this).css('background', 'red');
  // }
  // else {
  //   $(this).css('background', 'white');
  // }
  alert("clicked on btn")
}



function myFunction(e){
  // var checkBox = document.getElementById("myCheck");
  // // Get the output text
  // var text = document.getElementById("text");

  // // If the checkbox is checked, display the output text
  // if (checkBox.checked == true){
  //   text.style.display = "block";
  // } else {
  //   text.style.display = "none";
  // }

  //Working 
  // if(e.target.checked==true){
  //   // console.log(e);
  //   console.log(e.parentNode);
  //   console.log(e.target);
  //   console.log("Checked")
  //   e.target.style.backgroundColor = "yellow";
  // } else {
  //   console.log("Un checked")
  // }
  let input_list = document.getElementsByTagName('input');
  console.log(input_list);

  for(var i = 0; i < input_list.length; i++){
    input_list[i].addEventListener('click',check);
}
  
  

}

// let input_list = document.getElementsByTagName('input');
//   console.log(input_list);

//   for(var i = 0; i < input_list.length; i++){
//     input_list[i].addEventListener('click',check);
// }

function check(e){
  if(e.target.checked==true){
    check_count+=1;
    if(check_count>0){
      let val = document.getElementById("button");
      val.style.backgroundColor = "orange";
      val.style.border = "2px solid orange";

      let firsthead = document.getElementById("firstRow");
      console.log("IMP");
      console.log(firsthead.lastChild.textContent);
      console.log(firsthead.lastChild.innerHTML);

      if(firsthead.lastChild.textContent=="DELETE" || firsthead.lastChild.textContent=="EDIT"){

      } else{
        // Add Column header value
      let tr_list = document.getElementsByTagName("tr");
      console.log(tr_list[0]);
      var newth1 =  document.createElement('th');
      var newth2 =  document.createElement('th');

      var newDivText1 = document.createTextNode('DELETE');
      var newDivText2 = document.createTextNode('EDIT');

      newth1.appendChild(newDivText1);
      newth2.appendChild(newDivText2);
      // console.log(table.children);

      let firstRow = document.getElementById('firstRow');
      firstRow.appendChild(newth1);
      firstRow.appendChild(newth2);
      }
      

      

      let last = document.getElementById('lastCol')

      // firstRow.insertBefore(newth1,last);
      // firstRow.insertBefore(newth2,last);
      console.log(firstRow);
    }
    console.log("checked");

    // Setting Background
    let row = e.target.parentElement.parentElement;
    row.style.backgroundColor="yellow";

    // Adding Delete Button
    let td_ele = document.createElement('td');
    let but_ele = document.createElement('button');
    let but_text = document.createTextNode('DELETE');
    but_ele.setAttribute("onclick","myDeleteFunction(this)")

    but_ele.appendChild(but_text);
    td_ele.appendChild(but_ele);
    e.target.parentElement.parentElement.appendChild(td_ele);

    // Adding Edit Button
    let td_ele2 = document.createElement('td');
    let but_ele2 = document.createElement('button');
    let but_text2 = document.createTextNode('EDIT');
    but_ele2.setAttribute("onclick","myEditFunction(this)");

    but_ele2.appendChild(but_text2);
    td_ele2.appendChild(but_ele2);
    e.target.parentElement.parentElement.appendChild(td_ele2);

  } else {
    check_count-=1;
    if(check_count<=0){
      let val = document.getElementById("button");
      val.style.backgroundColor = "gray";
      val.style.border = "2px solid gray";

      // Remove Column header names
      let firsthead = document.getElementById("firstRow");
      firsthead.removeChild(firsthead.lastChild);
      firsthead.removeChild(firsthead.lastChild);

    }
    console.log("unchecked");

    // Setting Background to White
    let row = e.target.parentElement.parentElement;
    row.style.backgroundColor="white";

    // Removing Delete Button
    let fin_row = e.target.parentElement.parentElement;
    fin_row.removeChild(fin_row.lastChild);
    fin_row.removeChild(fin_row.lastChild);
    // const list = document.getElementById("myList");
    // list.removeChild(list.firstElementChild);
  }
  // console.log(e.target.parentElement.parentElement);
  // e.target.parentElement.parentElement.classList.toggle("highlight");
}


function imgTog(e){

  const img_list = document.getElementsByTagName('img');
  console.log(img_list);

  for(var i = 0; i < img_list.length; i++){
    img_list[i].addEventListener('click',imgToggle);
}

}

// const img_list = document.getElementsByTagName('input');
//   console.log(img_list);

//   for(var i = 0; i < img_list.length; i++){
//     img_list[i].addEventListener('click',imgToggle);
// }

function imgToggle(e){
  // console.log(e.target.parentElement.parentElement.nextSibling);
  e.target.parentElement.parentElement.nextElementSibling.classList.toggle("hide")
}


