import { movieData } from "./data.mjs";


let table = document.getElementById('table');

let keys = Object.keys(movieData); 
console.log(keys);

//create the template for the table
//iterate through the MovieData
for(let i = 0; i< keys.length; i++){

//get the data accordinly to each object
    let template =     
     `
    <tr>
        <td>${keys[i]} </td>
        <td >${movieData[keys[i]].plot}</td>
        <td>${movieData[keys[i]].cast} </td>
        <td>${movieData[keys[i]].runtime} </td>
        <td>${movieData[keys[i]].rating} </td>
        <td>${movieData[keys[i]].year} </td>
    
    </tr>
    `
table.innerHTML += template;
}


