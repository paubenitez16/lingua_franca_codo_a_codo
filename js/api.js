	const encodedParams = new URLSearchParams();
	encodedParams.append("q", "English is hard, but detectably so");
	
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'Accept-Encoding': 'application/gzip',
			'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
			'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
		},
		body: encodedParams
	};
	
	fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));

		const options = {
			method: 'GET',
			headers: {
				'Accept-Encoding': 'application/gzip',
				'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
				'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
			}
		};
		
		fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));

			const encodedParams = new URLSearchParams();
			encodedParams.append("q", "Hello, world!");
			encodedParams.append("target", "es");
			encodedParams.append("source", "en");
			
			const options = {
				method: 'POST',
				headers: {
					'content-type': 'application/x-www-form-urlencoded',
					'Accept-Encoding': 'application/gzip',
					'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
					'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
				},
				body: encodedParams
			};
			
			fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
				.then(response => response.json())
				.then(response => console.log(response))
				.catch(err => console.error(err));
				
