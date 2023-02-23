import axios from "axios";
const ENDPOINT = 'https://pixabay.com/api/';
const KEY = '33796051-1e422d07d8c9fc912bc2a7eb4';
const options =
  'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

async function searchImage(name) {
  const URL = `${ENDPOINT}?${KEY}&q=${name}&${options}`;
  // const response = wait.axios.get(URL);
  return wait.axios.get(URL);
}

// export default searchImage;