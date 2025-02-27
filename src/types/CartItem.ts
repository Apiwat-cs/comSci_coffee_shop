import Menu from "./Menu";

interface CartItem extends Menu {
  name: string | undefined;
  image: string | undefined;
  sweetness: string;
  quantity: number;
}

export default CartItem;
