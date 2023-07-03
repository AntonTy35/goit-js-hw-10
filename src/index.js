import { fetchBreeds, fetchCatByBreed } from './cat-api';

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

breedSelect.addEventListener('change', onChange);

function onChange() {
  catInfo.style.display = 'none';
  error.style.display = 'none';

  fetchCatByBreed(breedSelect.value)
    .then(obj => {
      loader.style.display = 'none';
      catInfo.innerHTML = createCatInfoMarkup(obj[0]);
      catInfo.style.display = 'flex';
    })
    .catch(err => {
      loader.style.display = 'none';
      error.style.display = 'block';
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
