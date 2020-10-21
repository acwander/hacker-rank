function hourGlassSum(arr) {
	const maxX = 3;
	const maxY = 3;
	let total = -64; // Smallest possible value is -63

	for (let y = 0; y <= maxY; y++) {
		for (let x = 0; x <= maxX; x++) {
			// Sum the top row of the hourglass
			let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];
			// Sum the middle row of the hourglass
			sum += arr[y + 1][x + 1];
			// Sum the bottom row of the hourglass
			sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];
			// Set total to new value if higher than current sum
			if (total < sum) {
				total = sum;
			}
		}
	}
	// Return final total
	return total;
}

const givenArray = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0],
];

console.log(hourGlassSum(givenArray)); // 19
