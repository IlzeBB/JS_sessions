const str = "Hannah";

const isPalidrome = (inStr) => {
  inStr = inStr.toLowerCase();
  for (let i = 0; i < inStr.length; i += 1) {
    if (inStr[i] !== inStr[inStr.length - 1 - i]) {
      return `${str.toUpperCase()} is not a palindrome.`;
    }
  }
  return `${str.toUpperCase()} is a palindrome.`;
};

console.log(isPalidrome(str));

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return `${str1.toUpperCase()} and ${str2.toUpperCase()} two strings are not anagrams`;
  } else {
    str1.toLowerCase().split("").sort().join("") ===
      str2.toLowerCase().split("").sort().join("");
    {
      return `${str1.toUpperCase()} and ${str2.toUpperCase()} two strings are anagrams`;
    }
  }
}

console.log(anagram("angle", "glean"));

let text = "Have a nice day";

let words = 1;
let textArray = Array.from(text);

for (let i = 0; i < textArray.length; i++) {
  if (textArray[i] == " ") {
    words++;
  }
}

console.log(`The string "${text}" consists of ${words} words`);


function commonCharacterCount(s) {
  var count = 0;
  var str = "";
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) > -1 && str.indexOf(s[i]) == -1) {
      count++;
      str.concat(s[i])
    }
  }

  return `The most frequently occurring character in the string pops up: ${count} times`;
}



var getMax = function (str) {
  var max = 0,
      maxChar = '';
   str.split('').forEach(function(char){
     if(str.split(char).length > max) {
         max = str.split(char).length;
         maxChar = char;
      }
   });
   return `The most frequent character in the string is letter : ${maxChar}`;
 };
 console.log(getMax("see eye to eye"));