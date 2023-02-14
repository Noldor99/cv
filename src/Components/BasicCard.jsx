import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Switch } from '@mui/material';
import { useState } from 'react';
import Link from '@mui/material/Link';

const BasicCard = ({card}) => {

  const [returnCard, setReturnCard] = useState(false);

  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      {!returnCard ?
        <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
          <img
            src={card.src}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      : 
      <Box sx ={{display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '220px'}}>
        <Typography>Repository:</Typography>
        <Link href={card.git} color="inherit">
          <Button size="sm" sx={{fontWeight: 500 }}>
            github
          </Button> 
        </Link>
        <Typography>Site:</Typography>
        <Link href={card.site} color="inherit">
          <Button size="sm" sx={{fontWeight: 500 }}>
            WebPege
          </Button> 
        </Link>
        <Typography> <span style={{fontWeight: 'bold'}}>Tech stack: </span>
          
          {card.stack}</Typography>
      </Box>
    }
      <Box sx={{display:'flex', justifyContent: 'space-between'}}>
        <Typography fontSize="lg" fontWeight="lg">
        {card.title}
        </Typography>
        <Switch 
          color="primary" 
          variant="outlined" 
          checked = {returnCard}
          onChange = {(e)=>setReturnCard(!returnCard)}
          />

      </Box>
    </Card>
  )
}

export default BasicCard