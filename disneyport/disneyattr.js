import { Attractions } from './Attractions.js'
console.log(Attractions)


let rideNameElement = document.querySelector('.Ridename')


Attractions.forEach((attraction) => {let rideName = attraction.name

    let newElement = document.createElement("h3");
newElement.textContent = rideName; 
rideNameElement.appendChild(newElement);
}
)

