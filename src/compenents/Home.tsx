import "../App.css";
import Data from "../Item/Data.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export default function Placelist() {
    return (
    <>
      <div>
        <div className="Placelist">
          <div className="Placelist1">Place List</div>
        </div>
        <div></div>
      </div>
      <Container className="item1111">
      <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6}>
        {Data.map(items => (
              <Grid item xs={6} md={4}>
              <Card className="card1">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                
                image={items.profile_image_url}
                
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  {items.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Catagorie : {items.categories} / Rate : {items.rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
              </Grid>
        ))}
        </Grid>
        </Box>
        </Container>
    </>
  );
}
