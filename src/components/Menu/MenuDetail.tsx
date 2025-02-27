import { useState } from "react";
import { ShoppingBasket } from "lucide-react";
import CartItem from "../../types/CartItem";
import Menu from "../../types/Menu";

interface MenuDetailProps {
    menu: Menu;
    addToCart: (cart: CartItem) => void;
}

function MenuDetail({ menu, addToCart }: MenuDetailProps) {
    const [sweetness, setSweetness] = useState<string>("100%");

    return (
        <div className="border rounded-lg p-2 shadow-md hover:shadow-xl transition bg-white flex flex-col ">
            {/* รูปเมนู */}
            <img
                src={menu.menuImageUrl}
                alt={menu.title}
                className="w-36 h-36 object-cover rounded-md mx-auto items-center"
            />

            {/* ชื่อเมนู */}
            <h1 className="text-xs font-bold mt-2 bg-black text-white px-3 py-1 rounded-md text-center">
                {menu.title}
            </h1>

            {/* คำอธิบาย */}
            <p className="text-gray-600 text-sm mt-1">{menu.description}</p>

            {/* ราคา */}
            <p className="text-sm font-bold text-blue-600 mt-2">฿{menu.price.toFixed(2)}</p>

            {/* ระดับความหวาน */}
            <div className="flex flex-col  mt-2">
                <span className="text-sm font-semibold">ระดับความหวาน</span>
                <div className="flex gap-2 mt-1 justify-center ">
                    {["0%", "50%", "100%", "150%"].map((level) => (
                        <button
                            key={level}
                            className={`px-2 py-1 text-xs rounded-md border ${
                                sweetness === level
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                            }`}
                            onClick={() => setSweetness(level)}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>

            {/* ปุ่มเพิ่มลงตะกร้า */}
            <button
                onClick={() => addToCart({
                    ...menu, sweetness, quantity: 1,
                    name: undefined,
                    image: undefined
                })}
                className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white rounded-lg py-2 mt-4"
            >
                <ShoppingBasket size={20} />
                เพิ่มลงตะกร้า
            </button>
        </div>
    );
}

export default MenuDetail;
