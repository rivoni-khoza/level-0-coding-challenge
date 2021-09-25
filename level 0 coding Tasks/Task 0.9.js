function stringTovowels(vowels) {
  var result = "";

  
  var lookup = {
    "1": "a",
    "2": "e",
    "3": "i",
    "4": "o",
    "5": "u",
   
  };
  result = lookup[vowels];
  return result;
}


console.log(stringTovowels("4")),console.log(stringTovowels("2"));