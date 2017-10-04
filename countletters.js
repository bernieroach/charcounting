// countletters find and count the number of characters found in an input for each character in the alphabet


function countLetters(strInput){
  var charCount = {};
  for(var i=0; i< strInput.length; i++){
    // read each character
    // skip blanks
    if (strInput[i] === " ")
      continue;
    if (typeof(charCount[strInput[i]]) !== "number") {
      // if undefined then this is the first time we are counting this character
      // so value is 1
      charCount[strInput[i]] = 1;
    }
    else {
      // we have a count started for this character, add 1
      charCount[strInput[i]]++ ;
    }

  }
  return charCount;
}

console.log(countLetters(" this is ia s long string with spaces and @#$!%!^%!@#$!@#%!@#$!@#$!@#$"));

