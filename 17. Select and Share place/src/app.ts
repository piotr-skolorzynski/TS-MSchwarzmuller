const form = document.querySelector('form')!;
const adressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAdress = adressInput.value;
}

form.addEventListener('submit', searchAddressHandler);
