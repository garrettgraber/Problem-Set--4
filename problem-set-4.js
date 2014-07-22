

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

addNumbers(process.argv.slice(2));