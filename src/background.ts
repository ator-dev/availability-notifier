namespace background {
	function onLoad() {
		const text = this.responseText;
		for (const productId of ["310-458", "366-662"]) {
			const i = text.indexOf('"StockStatus"', text.indexOf(`"${productId}"`));
			const inStock = text.substring(i, i + 23) === '"StockStatus":"InStock"';
			console.log(`Product ${productId} in stock: ${inStock}`);
		}
	}

	const productKey = "ST007579";
	const request = new XMLHttpRequest();
	request.addEventListener("load", onLoad);
	request.open("GET", `https://www.next.co.uk/style/${productKey}`);
	request.send();
}
