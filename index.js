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
  