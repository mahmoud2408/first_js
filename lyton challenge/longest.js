const mot = ["porte", "chambre", "lit", "anticonstitutionnellement"];
let longest = mot.reduce((accumulator, currentvalue) => {
  if (currentvalue.length > accumulator.length) {
    return currentvalue;
  } else {
    return accumulator;
  }
});
console.log(longest);
