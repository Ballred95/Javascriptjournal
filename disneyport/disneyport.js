import { Dining } from './Dining.js'
console.log(Dining);
import { Attractions } from './Attractions.js'
console.log(Attractions)


let dineNameElement = document.querySelector('.Dinename')

Dining[0].forEach((dine) => {
    let dineName = dine.name
    let portSize = document.createElement("p");
    let newElement = document.createElement("h5");
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

//


let rideNameElement = document.querySelector('.Ridename')


Attractions.forEach((attraction) => {let rideName = attraction.name

    let newElement = document.createElement("h5");
newElement.textContent = rideName; 
rideNameElement.appendChild(newElement);
}
)