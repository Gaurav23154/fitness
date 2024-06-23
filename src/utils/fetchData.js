export const exerciseOptions={
    method: 'GET',
   
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    },
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '5554fa460emsh82fb6287b77bc16p195212jsne525f4660791',
  },
};
export const fetchData=async(url, options) => {
    const response =await fetch(url, options);
    const data =await response.json();

    return data;
};