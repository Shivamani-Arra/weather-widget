import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}){
    const iniimage="https://images.unsplash.com/photo-1656772325658-ff0f8ea02a34?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF6eSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
   


    return (
        <div className="InfoBox">
            <h1>WeatheInfo-{info.weather}</h1>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={iniimage}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <p>Temperature={info.temp}&deg;C</p>
                    <p>Humidity={info.humidity}</p>
                    <p>Min Temp={info.tempMin}&deg;C</p>
                    <p>Max Temp={info.tempMax}&deg;C</p>
                    <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
                
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
            </div>
                </div>
                

    );
}