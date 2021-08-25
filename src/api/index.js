import axios from 'axios';
const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
  
export const getPlacesData = async (sw,ne) =>{
    try{
        const {data: {data} }=await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'd197d0a725mshaecabf1b07af3fdp1a5a78jsn706bd02a4618'
          }
        });
        return data;
    }catch(error){
        console.log(error);
    }
}