import React from 'react'
import {Stack,Typography} from '@mui/material'

const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack type="button" alignItems="center" justifyContent='center' className='bodyPart-card'
    sx={
        {
        borderTop:  bodyPart === item ? '4px solid #ff2625' :'', 
            backgroundColor:'#fff',borderBottomLeftRadius:"20px",
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'45px'
        }   
    } onClick={()=>{
      setBodyPart(item)
      window.scrollTo({top:1800, left:100, behaviour:'smooth'})
       }}>
        <img src="/assets/icons/gym.png" alt="Dumble" style={{width:'40px', height:'40px'}} />
        <Typography textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart