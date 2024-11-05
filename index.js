/* -------------------------------------------------------------------------- */
/*                                    Task1                                   */
/* -------------------------------------------------------------------------- */

const countTrue = (arr) => {
    return arr.filter((e) => e === true).length;
  };
  
  const countTrueReturnValue = countTrue([true, false, false, true, false]);
  console.log(countTrueReturnValue);
  
  /* -------------------------------------------------------------------------- */
  /*                                    Task2                                   */
  /* -------------------------------------------------------------------------- */
  
  // Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).
  // Notes
  // The value argument will be a number.
  
  // example:
  
  // addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
  
  const addName = function (obj, name, value) {
    const objectClone = { ...obj };
    console.log(objectClone);
  
    objectClone[name] = value;
    return objectClone;
  };
  
  const addNameReturnValue = addName(
    { piano: 500, stereo: 300 },
    "Caligula",
    440
  );
  console.log(addNameReturnValue);
  
function countTrue(arr) {
    return arr.filter(Boolean).length;
}

console.log(countTrue([true, false, false, true, false])); // ➞ 2
console.log(countTrue([false, false, false, false])); // ➞ 0
console.log(countTrue([])); // ➞ 0

//exercise2

function addName(obj, name, value) {
    obj[name] = value;  // Add the new key-value pair
    return obj;          // Return the updated object
  }
  console.log(addName({}, "Brutus", 300)); // { Brutus: 300 }

console.log(addName({ piano: 500 }, "Brutus", 400)); // { piano: 500, Brutus: 400 }

console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); // { piano: 500, stereo: 300, Cali
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
