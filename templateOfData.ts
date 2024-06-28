interface ISearch {
	id?: string,
	scraping_id: string,
	marketplace: 'ML',
	status: 'pending' | 'completed' | 'error',
	create_at: Date,
	updated_at: Date,
	results: IPropsML[]
}

interface IPropsML {
	id?: string,
	sku: string,
	search_id: string,
	product_id: string,
	rating : {
		picked: boolean,
		data: {
			rating: string,
			amount_of_reviews: string		
		}
	},
	short_description: {
		picked: boolean,
		data: {
			text: string
		},
	},
	characteristics: {
		picked: boolean,
		data: {
			text: string
		},	
	},
	url: string,
	mlb: string,
	isCatalog: boolean,
	img: string,
	catalog?: [
		{
			seller: ISellerML
			price: IPricingML
			condition: string
			ranking: number
		}
	]
	seller?: ISellerML
	price?: IPricingML
	condition?: 'new' | 'used'
	status: 'pending' | 'completed' | 'error'
}

interface ISellerML {
	name: string,
	amount_of_sales: string,
	category: string,
	catalog?: object,
	geoLocation?: object,
}

interface IPricingML {
	price: string,
	installments: string,
	installments_value: string,
}