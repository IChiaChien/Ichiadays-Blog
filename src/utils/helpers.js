export function generateSlug(string) {
	return string
		.toString()
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-');
}

export function generateTagData(categories) {
	let categoryData = [];
	categories.forEach(category => {
		categoryData.push({
			title: category,
			slug: `${generateSlug(category)}`,
		});
	});
	return categoryData;
}
