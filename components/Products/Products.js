class Products {

	render() {
		let htmlProduct = '';

		CATALOG.forEach(({id, name, img, price}) => {
			htmlProduct += `
				<li>
					<span>${name}</span>
					<img src="${img}">
					<p>Цена ${price}</p>
					<button>Добавить в корзину</button>
				</li>
			`;
		});

		const htmlUl = `
			<ul>${htmlProduct}</ul>
		`;

		ROOT_PRODUCTS.innerHTML = htmlUl;
	}
}

const productsPage = new Products;
productsPage.render();