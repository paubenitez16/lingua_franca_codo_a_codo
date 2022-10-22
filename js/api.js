const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'uk-address-and-postcodes.p.rapidapi.com'
	}
};

fetch("https://uk-address-and-postcodes.p.rapidapi.com/rapidapi/v1/autocomplete/addresses?query=topstreet")

.then(Response console.log(Response))

.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


