/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];


// ------------------------ Edit Functions according to question ---------------


function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  arr.map((obj)=>{
    
    if (obj.profession === "developer") {
      console.log(obj);
    }
  })

}

// ----------------------------------------------------------------------------

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  arr.forEach((obj)=>{
    if (obj.profession === "developer") {
      console.log(obj);
    }
  })
}

// ----------------------------------------------------------------------------

function addData() {
  //Write your code here, just console.log

  // add new object in Data

  const new_data = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(new_data);

  arr.forEach((obj)=>{
    console.log(obj)
  });
  
}

// ----------------------------------------------------------------------------

function removeAdmin() {
  //Write your code here, just console.log

  // It will deleted only admin profession but included the 4th object (it don't have admin profession)
  changed_data = arr.filter((obj)=>obj.profession !== "admin");

  changed_data.map((obj)=>
    console.log(obj));
}

// ----------------------------------------------------------------------------

function concatenateArray() {
  //Write your code here, just console.log

  let new_arr = [
    { id: 10, name: "Big Show", age: "70", profession: "Wrestler" },
    { id: 11, name: "Akshay", age: "55", profession: "Actor" },
    { id: 12, name: "Pele", age: "65", profession: "Footballer" },
  ];

  let combined_array = arr.concat(new_arr);

  // console.log(combined_array);       it will give the function-object 

  combined_array.map((obj)=>console.log(obj));
}


// --------------- Thanks for Checking my answer -------------------
