import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import './App.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import LeftSide from './Components/LeftSide';
import CardList from './Components/CardList';



const App = () => {

  

  return (
    <Container sx={{mb: '30px'}}>
      <Box sx={{display: 'flex', gap: '50px', justifyContent:'center'}}>
        <LeftSide/>
        <Box className='ContainerNext'>

          <div className='title_2'>
            WORK EXPERIENCE
          </div>
          <p className='title_3'>Engineer-constructor</p>
          <Box sx={{display: 'flex', gap: '20px', alignItems: 'center', pb: '10px'}}>
            <img 
              style={{height: '50px'}}
            src="img/logo-tdc.jpeg" alt="" />
            <p style={{margin: '0', fontWeight: '500'}}>TDS UkrSpetstechnika (13.07.2018 – 26.08.2022)</p>
          </Box>
          <p style={{margin:'0'}}>- Development of project documentation</p>
          <p style={{margin:'0'}}>- Start-up and support of the equipment production process</p>
          <p style={{margin:'0'}}>- Consultations of managers</p>
          <p className='title_3'>
            CNC lathe operator
          </p>
          <p style={{marginTop:'0', fontWeight: '500'}}>Quadro International Ltd (05.04.2017- 19.08.2017)</p>
          <p style={{margin:'0'}}>- Production of parts according to drawings on a lathe</p>
          <p style={{margin:'0'}}>-Compliance/adjustment of the technological process.</p>
          <div className='title_2' style={{marginTop:'40px', marginBottom: '20px'}}>
            EDUCATION
          </div>
          <Box sx={{display: 'flex', gap: '20px', alignItems: 'center', pb: '10px'}}>
            <img 
              style={{height: '50px'}}
            src="img/kpi-logo.png" alt="" />
            <p style={{margin: '0', fontWeight: '500'}}>TDS UkrSpetstechnika (13.07.2018 – 26.08.2022)</p>
          </Box>
          <p style={{margin:'0'}}>Bachelor of Engineering Applied mechanics</p>
          <p style={{margin:'0'}}>Dates attended(2012 - 2017)</p>
          <div className='title_2' style={{marginTop:'40px', marginBottom: '20px'}}>
            ADDITIONAL EDUCATION
          </div>
          <Box sx={{display: 'flex', gap: '20px', alignItems: 'center', pb: '10px'}}>
            <img 
              style={{height: '50px'}}
            src="img/fox.png" alt="" />
            <p style={{margin: '0', fontWeight: '500'}}>Foxminded (07.12.2022 - 14.02.2023)</p>
          </Box>
          
          <div className='title_2' style={{marginTop:'40px', marginBottom: '20px'}}>
            OTHER
          </div>
          <Box sx={{display: 'flex'}}>
            <Link href="https://github.com/Noldor99" color="inherit">
              <img 
                style={{height: '50px'}}
                src="img/logo-github.png" alt="" />
            </Link>
            <Link href="https://www.codewars.com/users/Noldor99 " color="inherit">
            <img 
                style={{height: '50px'}}
              src="img/logoCodewars.svg" alt="" />
            </Link>
          </Box>
            <p style={{margin: '0', fontWeight: '500'}}>Portfolio as a constructor:</p>
            <Link href="https://www.codewars.com/users/Noldor99 " xs={{textDecoration: 'none'}} color="inherit">
            <p style={{margin: '0'}}>Link</p>
            </Link>
            <p style={{margin:'50px 0'}}>I am Front-End Developer. I focus on learning HTML5, CSS, JS, React, node.js </p>
        </Box>
      </Box>
      <CardList/>
    </Container>
  )
}

export default App