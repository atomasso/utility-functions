export default getRandomElement = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
}