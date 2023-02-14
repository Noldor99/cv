import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'
import BasicCard from './BasicCard'

const MyCard = [
  {
    src : './img/card_1.jpg', 
    title: 'dummyShop', 
    stack: 'React, Toolkit, RTK Query',
    site: 'https://noldor99.github.io/dummyShop/',
    git: 'https://github.com/Noldor99/dummyShop'
  },
  {
    src : './img/card_5.jpg', 
    title: 'CatCart', 
    stack: 'React, Toolkit',
    site: 'https://noldor99.github.io/CatCart/',
    git: 'https://github.com/Noldor99/CatCart'
  },
  {
    src : './img/card_2.jpg', 
    title: 'Auth-Router-Post', 
    stack: 'React, RTK Query, Toolkit',
    site: 'https://noldor99.github.io/Auth-Router-Post/',
    git: 'https://github.com/Noldor99/Auth-Router-Post'
  },
  {
    src : './img/card_3.jpg', 
    title: 'TodoServer', 
    stack: 'React, RTK Query, REST API',
    site: 'https://noldor99.github.io/TodoServer/',
    git: 'https://github.com/Noldor99/TodoServer'
  },
  {
    src : './img/card_4.jpg', 
    title: 'Currensy', 
    stack: 'React, Toolkit',
    site: 'https://noldor99.github.io/currensy/',
    git: 'https://github.com/Noldor99/currensy'
  },
  {
    src : './img/card_6.jpg', 
    title: 'simpleSite', 
    stack: 'HTML, SASS, React',
    site: 'https://noldor99.github.io/simpleSite/',
    git: 'https://github.com/Noldor99/simpleSite'
  },
]

const CardList = () => {
  return (
    <>
    <Typography variant='h4' 
      sx={{textAlign: 'center', padding: '30px 0'}}>MyWork</Typography>
    <Grid container spacing={2}>
      {MyCard.map((card)=>
        <Grid item xs={6} lg={4}>
          <BasicCard
            key={card.title}
            card = {card}
          />
        </Grid>
      )}
    </Grid>
    </>
  )
}

export default CardList