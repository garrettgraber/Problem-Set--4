

var addNumbers = function(inString) {

	var numberArrayFound = [];

	for(var i=2; i < process.argv.length; i++) {

		var stringUse = process.argv[ i ];
		var previousNumber = '';		

		for(var j=0; j < stringUse.length; j++) {
		
			var currentString = stringUse[ j ];
			var currentArray = currentString.split('');
			var numberArray = currentArray.filter(function(element, index){
				return isNaN(element) === false;
			});
			
			// console.log(numberArray);

			if(numberArray.length > 0) {
				var numberOut = numberArray[ 0 ];
				numberArrayFound.push([numberOut, j]);
			}
		}

	}

	console.log(numberArrayFound);
	var masterArray = [];
	var previousPosition = -2;
	var tempNumber = '';

	for(var i=0; i < numberArrayFound.length; i++) {
		var currentPosition = numberArrayFound[ i ][ 1 ];
		var currentValue = numberArrayFound[ i ][ 0 ];
		console.log('\ncurrentValue: ' + currentValue);
		console.log('currentPosition: ' + currentPosition);
		console.log('previousPosition: ' + previousPosition);
		console.log('tempNumber: ' + tempNumber);

		if(currentPosition - 1 !== previousPosition && previousPosition !== -2) {
			console.log('singleton');
			var tempNumber = currentValue;
			console.log('tempNumber: ' + tempNumber);
		}

		if(currentPosition - 1 === previousPosition || previousPosition === -2) {
			console.log('double');
			tempNumber += currentValue;
			masterArray.push(parseInt(tempNumber));
			console.log('tempNumber: ' + tempNumber);
		}
		else {
			masterArray.push(parseInt(tempNumber));
			console.log('Adding to master..');
			var tempNumber = '';
		}

		
		var previousPosition = currentPosition;
	}
	console.log(masterArray);

};




var foo = function(inputString) {

    var inputSplit = inputString.split('');
	var numberFound = false;
	var currentCountValue = '';
	var totalCount = 0;
	var tempCount = 0;

    for(var i=0; i < inputString.length; i++) {
	
        var element = inputSplit[ i ];
		 var  elementIndex = inputSplit.indexOf(element);
        var elementIsNumber = foo2(element);
		
        if(elementIsNumber === true ) {
			numberFound = true;
			currentCountValue += element;
			var  nextElement = inputSplit[ i + 1 ];

				if( i + 1 < inputSplit.length) {
					var nextElementIsNumber = foo2(nextElement);
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

var foo2 = function(element) {
	return isNaN(element) === false;
};

var foo9 = function() {

	var totalCount = 0;

	for(var i=2; i < process.argv.length; i++) {

		var currentWord = process.argv[  i  ];
		console.log(currentWord);
		var wordCount = foo(currentWord);
		totalCount += wordCount;
		
	}

	console.log("totalCount: " + totalCount);
};

foo9();