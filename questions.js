var selectElementsStartingWithA = function(array) {
function startingWithA(elements) {
    return elements.charAt(0) === "a";
}
return array.filter(startingWithA);
}

var selectElementsStartingWithVowel = function(array) {
  var vowels = ["a", "e", "i", "o", "u", "y"];
  function startingWithVowel(elements){
    var firstChar = elements.charAt(0);
return vowels.indexOf(firstChar) !== -1;
  }
  return array.filter(startingWithVowel);
}

var removeNullElements = function(array) {
function isNull(elements) {
  return elements !== null
}
return array.filter(isNull);
}

var removeNullAndFalseElements = function(array) {
function isNullOrFalse(elements) {
  return elements !== null && elements !== false;
}
return array.filter(isNullOrFalse)
}

var reverseWordsInArray = function(array) {
return array.map(elements=>elements.split('').reverse().join(''))
}
var everyPossiblePair = function(array) {
return array;
}

var allElementsExceptFirstThree = function(array) {
// return array.slice(3)
array.splice(0, 3) // "déstructif", il enlève de 0 à 3 (dans cet exemple)
return array
}

var addElementToBeginning = function(array, element) {
array.unshift(1);
return array;
}

var sortByLastLetter = function(array) {
  var blabla = function(a, b) {
    if (a[a.length-1] > b[b.length-1])
    return 1;
    else {
      return -1;
    }
  }
return array.sort(blabla)
}

var getFirstHalf = function(string) {
}

var makeNegative = function(number) {
  if (number > 0) {return - number;}
  return number
}

var numberOfPalindromes = function(array) {

}

var shortestWord = function(array) {

}

var longestWord = function(array) {
  function returnMax (previousMax, word) {
  return previousMax.length > word.length ? previousMax : word;
}
  return array.reduce(returnMax);
}


var sumNumbers = function(array) {
  function sumNumber (previousNum, number) {
    return previousNum + number;
  }
  return array.reduce(sumNumber)
}

var repeatElements = function(array) {

}

var stringToNumber = function(string) {

}

var calculateAverage = function(array) {

}

var getElementsUntilGreaterThanFive = function(array) {

}

var convertArrayToObject = function(array) {
  var newObject = {};
  if ( array.length % 2 ) throw "ERROR !"
  for ( var i = 0; i < array.length; i += 2) {
    newObject[array[i]] = array[ i + 1 ]
  }
  return newObject;
}

var getAllLetters = function(array) {
  function addIfUnique(letters, newLetter) {
    if ( letters.indexOf(newLetter) === -1 )
    letters.push(newLetter)
    return letters;
  }
  return array.join("").split("").sort().reduce(addIfUnique, [])
}

var swapKeysAndValues = function(object) {

}

var sumKeysAndValues = function(object) {

}

var removeCapitals = function(string) {
  return string.replace(/[A-Z]/g, "")
}

var roundUp = function(number) {

}

var formatDateNicely = function(date) {

}

var getDomainName = function(string) {

}

var titleize = function(string) {
  var exceptions = ['the', 'and'];
  function titleWord (word, exceptions) {
    if (exceptions.indexOf(word) !== -1) return word;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  var titleizeArray = [];
  var firstWordOfSentence = true;
  for (var word of string.split(' ')) {
      if (firstWordOfSentence) {
        titleizeArray.push(titleWord(word, []))
        firstWordOfSentence = false;
      }
      else {
        titleizeArray.push(titleWord(word, exceptions))
      }
      if (word.slice(-1) === '.') firstWordOfSentence = true;
  }
  return titleizeArray.join(' ');
  }

var checkForSpecialCharacters = function(string) {

}

var squareRoot = function(number) {

}

var factorial = function(number) {

}

var findAnagrams = function(string) {
  function permute (array) {
    if (array.length === 1) return [array];
    var fullPermutation = [];
    for (var i in array) {
      var subset = array.slice(0);
      subset.splice(i, 1);
      for (var permutation of permute(subset)) {
        permutation.unshift(array[i]);
        fullPermutation.push(permutation);
      }
    }
    return fullPermutation
  }
  function joinLetters (array) {
    return array.join('');
  }
  return permute(string.split('')).map(joinLetters);
}

var convertToCelsius = function(number) {

}

var letterPosition = function(array) {

}
