
import {categories} from '../utils/constant'
import { Stack } from '@mui/material'
import { Feed } from '.'


const SideBar = ({selelctedCategory,setSelectedCategory}) => (
   
    <Stack direction="row" sx={{overflowY:"auto",height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
     
      {categories.map((category)=>(
        <button className='category-btn' onClick={()=> setSelectedCategory(category.name)} style={{background:category.name===selelctedCategory&&'#FC1503',color:'white'}} key={category.name}>
            <span style={{color:category.name===selelctedCategory?'white':'red'}}>{category.icon}</span>
            <span style={{opacity:category.name===selelctedCategory?'1':'0.8'}}>{category.name}</span>
            <span>{selelctedCategory}</span>
        </button>
      ))}
    </Stack>
  )


export default SideBar
