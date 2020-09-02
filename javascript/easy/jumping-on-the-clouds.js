function jumpingOnClouds(c) {
	// declare count variable
	let count = 0;
	// loop through array until i < array length - 1
	for (let i = 0; i < c.length - 1; i++) {
		// check for double jump
		if (i + 2 < c.length && c[i + 2] == 0) {
			// increment counter
			count++;
			// extra increment i for double jump
			i++;
			// else single jump
		} else {
			// increment counter
			count++;
		}
	}
	// return counter for answer
	return count;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
