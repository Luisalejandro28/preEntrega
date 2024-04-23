import {
  Typography,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

Typography;

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imagen} title={nombre} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${precio}
        </Typography>
      </CardContent>
      <CardActions>
        <link to={`/itemDetail/${id}`}>
          <Button>Detalle</Button>
        </link>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
