import { useState,useEffect } from "react"
import {Box,Typography} from '@mui/material';
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/FetchFromAPI";
import {Videos} from './';


const SearchFeed = () => {

  const [videos,setVideos]= useState([]); 
  const {searchTerm} =useParams();
  console.log(searchTerm)
  useEffect(()=>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=> setVideos(data.items))
  },[searchTerm]);

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
      Search Results for:<span style={{color:'#f31503'}}>{searchTerm}videos</span>
      </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed
