const BASE_URL = 'https://api.thecatapi.com/v1';
const X_API_KEY =
  'live_MLMEZPUTycenXY4aowkAlwJ8Usad9Hnb5et1NPirg9x6Kl6YWXD0uwBjoZ4cYZC9';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${X_API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${X_API_KEY}&breed_ids=${breedId}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
