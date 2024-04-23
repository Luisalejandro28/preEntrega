import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartWidget = () => {
  return (
    <>
      <Badge badgeContent={5} color="primary">
        <ShoppingCartOutlinedIcon color="action" />
      </Badge>
    </>
  );
};
export default CartWidget;
