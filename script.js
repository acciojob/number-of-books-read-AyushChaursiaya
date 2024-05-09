
// function shortCut() {	
// 	const input1 = document.getElementById("input1");
// 	const input2 = document.getElementById("input2");
	
// 	var result = calculatShortcut(input1, input2);

// 	document.getElementById("result").textContent = 'Result: ' + result;
// }

// function calculatShortcut(input1, input2) {
	if(!input1 || !input2) {
		return '';
	}

	return input1.charAt(0).toUpperCase() + input2.charAt(0).toUpperCase();

	r
}