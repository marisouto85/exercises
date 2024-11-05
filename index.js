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

console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); // { piano: 500, stereo: 300, Caligula: 440 }


