// TODO: PARTIAL SOLUTION- FIX TO WORK FOR ALL TEST CASES, WORKS UNTIL N IS TOO LARGE

function repeatedString(s, n) {
	let result = 0;
	let str = '';
	let array = s.split('');

	while (str.length < n) {
		for (let i = 0; i < array.length; i++) {
			str += array[i];

			if (str.length === n) {
				break;
			}
		}
	}

	let newArr = str.split('');
	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i] === 'a') {
			result++;
		}
	}
	return result;
}

console.log(repeatedString('aba', 10));
// console.log(repeatedString('a', 1000000000000));
