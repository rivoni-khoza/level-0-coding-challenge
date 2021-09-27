function compare(){
    let stringOne = hat;
    let StringTwo = bat;
    let wordRegex = /[^abcdfgh]gi/;
    let results = stringOne.match(wordRegex)&&StringTwo.match(wordRegex);
 
    console.log(results);
}