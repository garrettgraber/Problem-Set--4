

var foo = function(inputString) {

    var inputSplit = inputString.split('');
	console.log(inputSplit);
	var numberFound = false;
	var currentCountValue = '';
	var totalCount = 0;

    for(var i=0; i < inputString.length; i++) {

        var element = inputSplit[ i ];
		 var  elementIndex = inputSplit.indexOf(element);
        var elementIsNumber = foo2(element);
		
		console.log('\nelement: ' + element);
		console.log('elementIsNumber: ' + elementIsNumber);
		console.log('total count: ' + totalCount);

        if(elementIsNumber === true ) {

			numberFound = true;
			currentCountValue += element;
			var  nextElement = inputSplit[elementIndex + 1 ];
			
			if( elementIndex + 1 <= inputSplit.length) {
				var nextElementIsNumber = foo2(nextElement);
			}
			else {
				var nextElementIsNumber = false;
			}
			
			if(nextElementIsNumber === false) {
			
				var InStringNumber = parseInt(currentCountValue);
				totalCount += InStringNumber;
				numberFound = false;
			}

        }

    } 
	
	return totalCount;

};

var foo2 = function(element) {
	return isNaN(element) === false;
};






