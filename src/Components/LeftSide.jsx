import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';



const LeftSide = () => {
  return (
    
    <Box className='ContainerSmall'>
      <Box sx={{width: '300px', 
                height: '300px', 
                overflow: 'hidden',
                borderRadius: '50%',
                flex: '0 1 300px',
                }}>
        <img 
          style={{maxWidth:"100%", transform: 'translateY(-6%) scale(1.3)'}}
          src="img/ResumeNew.jpg" alt="" />
      </Box>
      <Typography variant='h4' className='MyName'>VITALII DOVBYSH </Typography>
      <Typography variant='h6' className='FrontEnd'>FRONT END DEVELOPER</Typography>
      <Box sx={{width: '250px'}}>
        <Typography variant='h5' className='title_1'>Tech skills</Typography>
        <p className='parag'>HTML5</p>
        <p className='parag'>CSS3, SASS/SCSS</p>
        <p className='parag'>JavaScript, TypeScript, ES6+</p>
        <p className='parag'>React JS, Redux, Toolkit,</p> 
        <p className='parag'>Bootstrap, Material UI</p>
        <p className='parag'>GitHub, GitLab</p>
        <p className='parag'>REST API</p>
        <p className='parag'>Tailwind css</p>
        <p className='parag'>Gulp</p>
        <p className='parag'>Figma,</p> 
        <p className='parag'>Basic skills Node.js, express</p> 
        <p className='parag'>VBA(Inventor)</p>
      </Box>
      <Box sx={{width: '250px'}}>
        <Typography variant='h5' className='title_1'>Soft skills</Typography>
        <p className='parag'>Teamwork </p>
        <p className='parag'>Autonomous </p>
        <p className='parag'>Calm </p>
        <p className='parag'>Communicative </p> 
        <p className='parag'>Eager to learn</p>
      </Box>
      <Box sx={{width: '250px'}}>
        <Typography variant='h5' className='title_1'>English</Typography>
        <p className='parag'>Knowledge of English at the level of reading technical documentation. </p>
      </Box>
      <Box sx={{width: '250px'}}>
        <Typography variant='h5' className='title_1'>Contacts</Typography>
        <p className='parag'>+38 099 049 2108</p>
          <p className='parag'>vitalii99dovbysh@gmail.com</p>
        <Link href="https://t.me/Betelgeuse009" color="inherit">
          <TelegramIcon 
            className='icon'
            color="action"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/vitalii-dovbysh-990b41257/" color="inherit">
          <LinkedInIcon 
            className='icon'
            color="action"
          />
        </Link>
      <p className='parag'>Kyiv, Ukraine</p>
      </Box>
    </Box>
  
  )
}

export default LeftSide