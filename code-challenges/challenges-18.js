'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {

        
        var words = str.split(" ");
      
  
        var middleIndex = Math.floor(words.length / 2);
      
        var middleWord = words[middleIndex];
        return middleWord.length;
      }
      
  

// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (word1, word2) => {
    
        // Convert words to lowercase
        const lowercaseWord1 = word1.toLowerCase();
        const lowercaseWord2 = word2.toLowerCase();
      
        // Create frequency maps for each word
        const frequencyMap1 = createFrequencyMap(lowercaseWord1);
        const frequencyMap2 = createFrequencyMap(lowercaseWord2);
      
        // Compare frequency maps
        return areMapsEqual(frequencyMap1, frequencyMap2);
      }
      
      function createFrequencyMap(word) {
        const frequencyMap = new Map();
        for (const letter of word) {
          frequencyMap.set(letter, (frequencyMap.get(letter) || 0) + 1);
        }
        return frequencyMap;
      }
      
      function areMapsEqual(map1, map2) {
        if (map1.size !== map2.size) {
          return false;
        }
      
        for (const [key, value] of map1) {
          if (value !== map2.get(key)) {
            return false;
          }
        }
      
        return true;
      }
    
      
     

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };