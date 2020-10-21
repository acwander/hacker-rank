function repeatedString(s, n) {
	let result = 0;

	if (n >= s.length) {
		let counter = [...s].filter((e) => e === 'a').length;
		result = Math.floor(n / s.length) * counter;
	}

	let tailStrLength = n % s.length;
	for (let i = 0; i < tailStrLength; i++) {
		if (s[i] === 'a') {
			result++;
		}
	}

	return result;
}

console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));
