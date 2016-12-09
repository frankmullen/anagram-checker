var word1 = listen;
var word2;
var oldWordArray=[];
var newWordArray=[];

console.log("word is: " + word1);
convertWordToArray(word1);
convertArrayToAlphabeticalArray(oldWordArray);
console.log("new word is: " + newWordArray.toString());

function checkWords(word1, word2) {
	array1;
	array2;
}

function convertWordToArray(word) {

	var wordArray = [];
	for (var i=0; i<word.length; i++) {
		wordArray[i] = word.charAt[0];
	}
	oldWordArray = wordArray;
}

function convertArrayToAlphabeticalArray(wordArray) {
	
	var newArray;

	for (var i=0; i<wordArray.length; i++) {
		if (i === 0) {
			newArray[0] = wordArray[0];
		} else {
			for (j=0; j<newArray.length; j++) {
				//see where the new letter slots in
				if (wordArray[i]<newArray[j]) {
					//make new last character in array, same as previous last
					newArray.push(newArray[newArraylength-1]);
					//move every character after the insertion point to a position one higher
					for (var k=newArray.length-2; k>j; k--) {
						newArray[k] = newArray[k-1];
					}
					//insert character from wordArray
					newArray[j] = wordArray[i];
			} else {
				newArray.push(wordArray[i]);
			}
		}
	}
}