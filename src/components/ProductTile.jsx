import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cart-slice";
import { useNavigate } from 'react-router-dom';
import { IoBagCheckOutline } from "react-icons/io5";

export default function ProductTile({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(data));
  }

  function checkout() {
    navigate('/cart')
  }

  return (
    <div className="group flex flex-col items-center border-2 p-4 h-[380px] mt-5 mx-2 rounded-xl">
      <div className="h-[180px]">
        <img
          className="object-cover h-full w-full"
          src={data.image}
          alt={data.title}
        />
      </div>
      <h1 className="font-bold w-full truncate text-gray-700 text-lg">
        {data.title}
      </h1>
      <div className="flex flex-col justify-evenly w-full">
        <p className="text-xl">$ {data.price}</p>

        {cart.some((item) => item.id === data.id) ?
        <button onClick={checkout}
          className="bg-white text-black border-4 border-[#212529] rounded-lg font-bold text-sm p-1.5"
        ><span className="flex justify-center items-center">Checkout <IoBagCheckOutline className="ml-2 text-xl" /></span></button> :

      <button
        onClick={handleAddToCart}
        className="bg-[#212529] text-white border-2 rounded-lg font-bold text-sm p-2"
      >
        Add to Cart
      </button>
      }
    </div>
    </div >
  );
}
