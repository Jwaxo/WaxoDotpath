module.exports = function(string) {
	console.log("Splitting string '" + string + "'.");
	var objectsContainer = {}; //We use a basic container to hold the new object

	//Then we split up the string on . and create a new object from it
	string = string.split(".");
	console.log("String is split to '" + string + "'.");
	var dotPathSearch = function(found) {
		
		for (var i = 0;i < string.length; i++) {
			console.log("Walking to '" + string[i] + "'.");
			if (found == undefined) {
				found = undefined;
			} else if (found.hasOwnProperty(string[i])) {
				found = found[string[i]];
			} else {
				found = undefined;
			}
		}
		
		console.log("Found '" + found + "', returning.");
		
		return found;
	}

	return dotPathSearch;
};