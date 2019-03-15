import { Dining } from './Dining.js'
console.log(Dining);

let dineNameElement = document.querySelector('.Dinename')

Dining[0].forEach((dine) => {
    let dineName = dine.name
    let portSize = document.createElement("p");
    let newElement = document.createElement("h1");
    let portSizeinfo = dine.portion_size;

    newElement.textContent = dineName; 

    dineNameElement.appendChild(newElement);
    portSize.textContent = portSizeinfo; 
    newElement.appendChild(portSize);
    // let 
    console.log(portSize);
console.log(dineName)
}
)



console.log(Dining[0, 0]);


