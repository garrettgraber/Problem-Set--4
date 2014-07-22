var _ = require('underscore');

var wordNumberCount = function(inputString) {

    var inputSplit = inputString.split('');
	var numberFound = false;
	var currentCountValue = '';
	var totalCount = 0;
	var tempCount = 0;

    for(var i=0; i < inputString.length; i++) {
	
        var element = inputSplit[ i ];
		 var  elementIndex = inputSplit.indexOf(element);
        var elementIsNumber = findIfElementIsNumber(element);
		
        if(elementIsNumber === true ) {
			numberFound = true;
			currentCountValue += element;
			var  nextElement = inputSplit[ i + 1 ];

				if( i + 1 < inputSplit.length) {
					var nextElementIsNumber = findIfElementIsNumber(nextElement);
				}
				else {
					var nextElementIsNumber = false;
				}
				if(nextElementIsNumber === false) {
					var InStringNumber = parseInt(currentCountValue);
					tempCount += InStringNumber;
					totalCount += tempCount;
					tempCount = 0;
					currentCountValue = '';
					numberFound = false;
				}
        }
    } 
	return totalCount;
};

var findIfElementIsNumber = function(element) {
	return isNaN(element) === false;
};

var addNumbers = function() {

	var totalCount = 0;

	for(var i=2; i < process.argv.length; i++) {

		var currentWord = process.argv[  i  ];
		console.log(currentWord);
		var wordCount = wordNumberCount(currentWord);
		totalCount += wordCount;
		
	}

	console.log("totalCount: " + totalCount);
	return totalCount;
};

//addNumbers();

var longestWord = function() {
	var wordArray = process.argv.slice(2);
	var sortedWordArray = _.sortBy(wordArray, function(element) { return element.length } );
	sortedWordArray.reverse();
	var largestWord = sortedWordArray[ 0 ];
	console.log('largest word: ' + largestWord);
	return largestWord;
};

//longestWord();

var averageStringNumbers = function() {
	var wordArray = process.argv.slice(2);
	var totalCount = addNumbers();
	var totalCountWords = countNumberLetters( wordArray );
	var resultRough = totalCount / totalCountWords;
	var result = Math.ceil(resultRough);
	console.log('Result: ' + result);
	return result;
};

var countNumberLetters = function(inArray) {

	var totalCountWords = 0;
	var alphabetString = 'abcdefghijklmnopqrstuvwxyz';
	var alphabetStringUpper = alphabetString.toUpperCase();
	var checkAlphaStringTotal = alphabetString + alphabetStringUpper;

	for(var i=0; i < inArray.length; i++) {

		var currentWordArray = inArray[ i ].split('');

		for(var j=0; j < currentWordArray.length; j++) {

			var currentLetter = currentWordArray[ j ];
			var isNumber = findIfElementIsNumber( currentLetter );

			if(isNumber === false && checkAlphaStringTotal.indexOf(currentLetter) > -1) {
				totalCountWords += 1;				
			}
		}
	}
	return totalCountWords;
};

averageStringNumbers();
