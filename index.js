function endPoint(str) {
    let length = str.length;
  
    let words = str.split(" ").length;
  
    let vowels = str.match(/[aeiou]/gi).length;
  
    return `the sentence has ${length} characters, ${words} words and ${vowels} vowel`
  }
  
  console.log(endPoint("I am a full stack developer"));