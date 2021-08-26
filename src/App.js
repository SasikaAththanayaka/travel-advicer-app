import './App.css';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';
import { CssBaseline, Grid} from "@material-ui/core";
import {getPlacesData} from "./api";
import { useEffect, useState } from 'react';
import { Place } from '@material-ui/icons';
function App() {
  const [places,setPlaces] =useState([]);
  const [coordinates,setCoordinates]=useState({});
  const [bounds,setBounds] =useState({});
  const [isLoading,setIsLoading] =useState(false);
  const [childClicked, setChildClicked] = useState(null);
  const [type,setType] =useState("restaurants");
  const [rating,setRating] =useState("");
  const [filterdPlaces, setFilterdPlaces] = useState([]);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      setCoordinates({lat:latitude,lng:longitude})
    })
  },[]);

  useEffect(()=>{
    const filterdPlaces  =places.filter((Place)=>places.rating>rating);
    setFilterdPlaces(filterdPlaces);
  },[rating]);

  useEffect(()=>{
    if(bounds.sw && bounds.ne){
    setIsLoading(true);
    getPlacesData(type,bounds.sw,bounds.ne)
      .then((data)=>{
          setPlaces(data?.filter((place)=>place.name && place.num.reviews>0));
          setFilterdPlaces([]);
          setIsLoading(false);
      })
    }
  },[type,bounds])
  return (
    <>
      <CssBaseline/>
      <Header setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{width:"100%"}}>
        <Grid item xs={12} md={4}>
          <List 
          places={filterdPlaces.length ? filterdPlaces : places} 
          childClicked={childClicked} 
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filterdPlaces.length ? filterdPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
      
     
    </>
  );
}

export default App;
