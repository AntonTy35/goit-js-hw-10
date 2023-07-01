// import axios from 'axios';

import { fetchBreeds } from '../src/cat-api';
import { fetchCatByBreed } from '../src/cat-api';

// axios.defaults.headers.common['x-api-key'] = X_API_KEY;

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

breedSelect.style.display = 'none';
breedSelect.style.margin = '20px';
error.style.display = 'none';
error.style.color = 'red';
catInfo.style.display = 'flex';
catInfo.style.gap = '20px';

breedSelect.addEventListener('change', onChange);

fetchBreeds()
  .then(data => {
    loader.style.display = 'none';
    breedSelect.style.display = 'block';
    breedSelect.innerHTML = createOptionMarkup(data);
  })
  .catch(err => {
    loader.style.display = 'none';
    error.style.display = 'block';
    console.log('Failure', err);
  });

function createOptionMarkup(arrName) {
  return arrName
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function onChange() {
  fetchCatByBreed(breedSelect.value)
    .then(obj => {
      catInfo.innerHTML = createCatInfoMarkup(obj[0]);
    })
    .catch(err => {
      console.log('Failure', err);
    });
}

function createCatInfoMarkup({ url, breeds }) {
  const { name, description, temperament } = breeds[0];
  return `<img src="${url}" alt="${name}" width="50%" >
    <div>
      <h2>${name}</h2>
      <p>${description}</p>
      <p><b>Temperament: </b>${temperament}</p>
    </div>`;
}
