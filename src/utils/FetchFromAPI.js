import axios from 'axios'

const BASE_URL= "https://youtube-v31.p.rapidapi.com";


const options = {
  params: {
    maxResults:'50'
  },
  headers: {
    'X-RapidAPI-Key': 'e53bd3aaf4mshc130dbc24021b35p18a162jsn8cbb055ef438',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromApi=async(url)=>{
    const {data} =await axios.get(`${BASE_URL}/${url}`,options);
    return data;
};