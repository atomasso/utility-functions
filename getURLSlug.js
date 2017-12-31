export default getURLSlug = (words) => {
	return words
	  .replace(/\s+/, '-')
	  .toLowerCase();
}