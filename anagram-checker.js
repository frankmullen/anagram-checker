


function startCheck() {
	document.getElementById("result").innerHTML=("");
	var word1 = document.getElementById("word1").value;
	console.log("word is: " + word1);
	var word2 = document.getElementById("word2").value;
	console.log("word is: " + word2);
	var newWord1 = convertWordToAlphabeticalArray(word1).join("");
	var newWord2 = convertWordToAlphabeticalArray(word2).join("");
	console.log(newWord1);
	console.log(newWord2);
	checkAnagram(newWord1, newWord2);

};


function checkWords(word1, word2) {
	array1;
	array2;
};

function convertWordToAlphabeticalArray(word) {
	
	var wordArray = [];
	for (var i=0; i<word.length; i++) {
		if (word.charAt(i).match(/[A-Za-z]/)){
			wordArray[i] = word.charAt(i).toLowerCase();
		}
	}

	console.log(wordArray.toString());
	return convertAlphabetical(wordArray);
	
};

function convertAlphabetical(wordArray) {

	for (var i=1; i<wordArray.length; i++) {

		for (var j=0; j<=i; j++){
			
			if (wordArray[i] < wordArray[j]) {
				var moveLetter = wordArray[i];
				//move every character after the insertion point j, but no greater than i to a position one higher
				for (var k=i; k>j; k--) {
					wordArray[k] = wordArray[k-1];
				}
				//insert character from wordArray
				wordArray[j] = moveLetter;
			}
		}
	}
	console.log(wordArray.toString());
	return wordArray
};

function checkAnagram(word1, word2) {
	if (word1 === word2) {
		document.getElementById("result").innerHTML=("Yes, the words are anagrams!");
	} else {
		document.getElementById("result").innerHTML=("No, the words are not anagrams!");
	}
}

function testFunction(){
	return "hello";
}

