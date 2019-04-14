var selectElementsStartingWithA = function(array) {
    var resultArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i][0].toLowerCase() == 'a'){
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

var selectElementsStartingWithVowel = function(array) {
    var resultArray = [];
    var vowelsTable = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (i = 0; i < array.length; i++)
    {
        for(j = 0; j < vowelsTable.length; j++)
        {
            if (array[i][0].toLowerCase() == vowelsTable[j])
            {
                resultArray.push(array[i]);
            }
        }
    }
    return resultArray;
}

var removeNullElements = function(array) {
    var resultArray = [];
    for (i = 0; i < array.length; i++)
    {
        if (array[i] !== null)
        {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

var removeNullAndFalseElements = function(array) {
    var resultArray = [];
    for (i = 0; i < array.length; i++)
    {
        if ((array[i] !== null) && (array[i] !== false))
        {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

var reverseWordsInArray = function(array) {
    var resultArray = [];
    for (i = 0; i < array.length; i++)
    {
        var reverseWords = Array.from(array[i]).reverse().join(''); //on décompose string en array, on renverse, on le rejoin l'array en string
        resultArray.push(reverseWords);
    }
    return resultArray;
}

var everyPossiblePair = function(array) {
    // var result = ;
    // var resultArray = [];
    // for (var i = 0; i < array.length - 1; i++) {
    //     for (var j = i; j < array.length - 1; j++) {
    //         resultArray.push([array[i], array[j+1]]);
    //     }
    // }
    // return resultArray;
}

var allElementsExceptFirstThree = function(array) {
    var resultArray = [];
    for (i = 3; i < array.length; i++)
    {
        resultArray.push(array[i]);
    }
    return resultArray;
}

var addElementToBeginning = function(array, element) {
    var resultArray = [element];
    for (i = 0; i < array.length; i++)
    {
        resultArray.push(array[i]);
    }
    return resultArray;
}

var sortByLastLetter = function(array) {
    var resultArray = [];
    for (i = 0; i < array.length; i++)
    {
        array.sort(function(a, b) //sort() peut avoir une fonctionComparaison
        {

            return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
//          On set a et b avec le code UTF-16 de chaque occurrence de l'array
//          puis on passe en param de charCodeAt sa longeur -1 pour focus la dernière lettre de chaque occurrence
        })
        resultArray.push(array[i]);
    }
    return resultArray;
}

var getFirstHalf = function(string) {
    return string.substring(0, 3);
}

var makeNegative = function(number) {
    return number = -5;
}

var numberOfPalindromes = function(array) {
    var resultArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].charAt(0) == array[i].substring(array[i].length-1)) {
            resultArray.push(array[i]);
        }
    }
    return resultArray.length;
}

var shortestWord = function(array) {
    return array;
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
