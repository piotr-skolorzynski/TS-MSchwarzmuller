import axios from 'axios';

const form = document.querySelector('form')!;
const adressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'Bshfjkhj_sfsdfsdf675sfdsfs65s_6df5';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAdress = adressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAdress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location!');
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById('map')!, {
        center: coordinates,
        zoom: 16,
      });

      new google.maps.Marker({ position: coordinates, map });
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener('submit', searchAddressHandler);
