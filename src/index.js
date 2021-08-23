module.exports = function reverse (n) {
    const strInt = Math.abs(n).toString();
	let result = '';
	for (let i = 0; i < strInt.length; i++) {
		result = `${strInt[i]}${result}`
	}
	return Number(result);
}
