// exercise 1

function countTrueValues(arr) {
    return arr.filter(Boolean).length;
}

const values = [true, false, true, true, false, false];
const values2 = [true, true, true, true, true, true];
console.log(countTrueValues(values)); // Output: 3
console.log(countTrueValues(values2)); // Output: 6

// exercise 2

function addPetValue(obj, petName, value) {
    // Create a new object with the pet's name as the key and the value as the value
    let result = {};
    result[petName] = value;
  
    // Return the new object
    return result;
  }
  
 
  let stolenItems = { tv: 500, laptop: 1000 };
  let petName = "Buddy";
  let petValue = 300;
  
  console.log(addPetValue(stolenItems, petName, petValue)); 
  // Output: { Buddy: 300 }
