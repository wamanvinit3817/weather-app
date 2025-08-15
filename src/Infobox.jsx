import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Infobox({data}){
    function capitalizeWords(str) {
  return str
    .toLowerCase()
    .replace(/\b\w/g, char => char.toUpperCase());
}
let URL="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  if(data.humidity >= 60){
    URL="https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  if(data.temp_max > 30){
    URL="https://images.unsplash.com/photo-1549849171-09f62448709e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  if(data.temp < 20){
    URL="https://images.unsplash.com/photo-1517362302400-873b4e30f5c0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }

    return(
        <div className="container">
        <div className="Infobox">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={URL}
        title="green iguana"
      />
      <CardContent>
        <h2><i class="fa-solid fa-location-dot"></i> {data.loc}</h2>
        <Typography gutterBottom variant="h6" component="div">
         {capitalizeWords(data.dec)}
        </Typography>
       
       <p><i class="fa-solid fa-temperature-empty"></i> {data.temp} °C</p>
       <p><i class="fa-solid fa-temperature-arrow-up"></i> Max :{data.temp_max} °C</p>
       <p><i class="fa-solid fa-temperature-arrow-down"></i> Min : {data.temp_min} °C</p>
       <p><i class="fa-solid fa-face-smile"></i> Feels like: {data.feels_like} °C</p>
       <p><i class="fa-solid fa-droplet"></i> Humidity : {data.humidity}%</p>
      </CardContent>
      <CardActions>

      <a
  href={`https://wa.me/7387223817?text=${encodeURIComponent(
    `Weather in ${data.loc}: ${data.temp}°C, feels like ${data.feels_like}°C, ${data.dec}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
   <Button size="small" variant='contained'>Share</Button>
</a>

        <a href={`https://www.google.com/search?q=weather+${data.loc}
`} target="_blank" rel="noopener noreferrer"><Button size="small" variant='contained'>Learn More</Button></a>
      </CardActions>
    </Card>
       </div>
       </div>
    )
}