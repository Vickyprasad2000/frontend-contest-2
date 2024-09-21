/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(employee => {
    if (employee.profession === 'developer'){
        console.log(employee);
        }
    });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee => {
      if (employee.profession === 'developer'){
          console.log(employee);
          }
      });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(employee => employee.profession !== "admin");
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 4, name: "sara", age: "22", profession: "designer" },
    { id: 5, name: "mike", age: "25", profession: "manager" },
    { id: 6, name: "lucy", age: "30", profession: "analyst" },
  ];

  let combinedArr = arr.concat(newArr);

  console.log(combinedArr);
}