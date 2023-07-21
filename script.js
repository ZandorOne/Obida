let data;

async function getFilmData() {
  try {
    const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
      method: 'GET',
      headers: {
        'X-API-KEY': '0bfd8858-468c-412d-8716-397a337e2adc',
        'Content-Type': 'application/json',
      },
    });

    data = await response.json();
    console.log(data);

  } catch (error) {
    console.log(error);
  }
      .then(res => res.json())
      .then(json => {
        data = json;
        console.log(data);
      })
      .catch(err => console.log(err));

      for (response of response.headers){
        console.log('${res} = ${data}')
      }

      console.log('data', data);

      response = await response.json();
      console.log(response);
    }
