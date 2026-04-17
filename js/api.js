const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/';
const GET_DATA_URL = `${BASE_URL}data`;
const POST_DATA_URL = BASE_URL;

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
};

export const getPhotos = async () => {
  const response = await fetch(GET_DATA_URL);
  return checkResponse(response);
};

export const sendPhoto = async (formData) => {
  const response = await fetch(POST_DATA_URL, {
    method: 'POST',
    body: formData,
  });
  return checkResponse(response);
};
