import { Plus, Minus, Trash2 } from "lucide-react";
import CartItem from "../../types/CartItem";

interface CartDetailProps {
    cart: CartItem[];
    updateQuantity: (id: number,sweetness:String, type: "increase" | "decrease") => void;
    removeItem: (id: number, sweetness: string) => void;
}

const CartDetail: React.FC<CartDetailProps> = ({ cart, updateQuantity, removeItem }) => {
    return (
        <div className="rounded-lg p-6 shadow-xl hover:shadow-xl bg-white">
            <h2 className="text-sm font-bold bg-gray-800 text-white p-2 rounded-md text-center">
                รายการสินค้าในตะกร้า
            </h2>

            {cart.length === 0 ? (
                <p className="text-sm text-red-500 text-center mt-2">ไม่มีสินค้าในตะกร้า</p>
            ) : (
                <div className="space-y-4 mt-4 ">
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-2">
                            <div className="flex items-center gap-2">
                                <img src={item.menuImageUrl} alt={item.title} className="w-10 h-10 rounded-md" />
                                <div>
                                    <p className="font-semibold text-md">{item.title}</p>
                                    <p className="text-gray-600 text-sm">หวาน: {item.sweetness}</p>
                                    <p className="text-gray-600 text-sm">ราคา: ฿{item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <button
                                    onClick={() => updateQuantity(item.id,item.sweetness, "decrease")}
                                    className="w-6 h-6 ms-6 border-orange-600 bg-white border-2 text-orange-600 rounded-lg  flex items-center justify-center "
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="font-bold">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id,item.sweetness, "increase")}
                                    className="w-6 h-6  border-green-600 bg-white border-2 text-green-600 rounded-lg  flex items-center justify-center "
                                >
                                    <Plus size={16} />
                                </button>
                                <button
                                    onClick={() => removeItem(item.id, item.sweetness)}
                                    className="w-6 h-6 ms-2 border-[#FB2C36] bg-[#FB2C36] border-2 text-white rounded-lg  flex items-center justify-center "
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {cart.length > 0 && (
                <div className="mt-4 border-t pt-2 text-center">
                    <p className="font-bold text-lg text-blue-600">
                        รวมทั้งหมด: ฿{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CartDetail;
