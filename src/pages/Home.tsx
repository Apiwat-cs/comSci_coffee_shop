import { useState } from "react";
import { menus } from "../data/MenuData";
import MenuDetail from "../components/Menu/MenuDetail";
import CartDetail from "../components/Menu/CartDetail";
import CartItem from "../types/CartItem";

function Home() {
    const [cart, setCart] = useState<CartItem[]>([]);
    //เพิ่มสินค้าเข้าตะกร้า
    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id && cartItem.sweetness === item.sweetness);
            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id && cartItem.sweetness === item.sweetness
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    // ปรับจำนวนสินค้า
    const updateQuantity = (id: number,sweetness: String, type: "increase" | "decrease") => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                    item.id === id && item.sweetness === sweetness
                        ? { ...item, quantity: type === "increase" ? item.quantity + 1 : item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // ลบสินค้าออกหาก quantity = 0
        );
    };

    // ลบสินค้าออกจากตะกร้า
    const removeItem = (id: number, sweetness: string) => {
        setCart((prevCart) =>
            prevCart.filter((item) => !(item.id === id && item.sweetness === sweetness))
        );
    };  

    return (
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 2xl:grid-cols-4 gap-6 p-4 span-py">
            {/* ส่วนตะกร้าสินค้า */}
            <div  >
                <CartDetail cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />
            </div>

            {/* ส่วนแสดงเมนู */}
            <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 p-4">
                {menus.map((menu) => (
                    <MenuDetail key={menu.id} menu={menu} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}

export default Home;


