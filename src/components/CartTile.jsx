import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

export default function CartTile({ item }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(item.id));
  }

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center px-4 py-3 bg-gray-200 justify-between mt-2 mb-2 rounded-xl">
        <div className="flex items-center basis-4/5">
          <img src={item.image} className="h-28 rounded-lg" alt={item.title} />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-black font-bold">{item.title}</h1>
            <p className="text-whte font-extrabold">{item.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-[#212529] text-white border-2 rounded-lg font-bold text-sm p-3"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
