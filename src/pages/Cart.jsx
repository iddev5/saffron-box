import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartTile from "../components/CartTile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      <Navbar />
      {cart && cart.length ? (
        <>
          <div className="flex flex-col md:flex-row mt-20 w-full justify-center">
            <div className="flex flex-col justify-center md:w-2/5 items-start p-3">
              {cart.map((item) => (
                <CartTile item={item} />
              ))}
            </div>
            <div className="p-5 space-y-5 mt-2 mb-10">
              <h1 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Item </span>
                <span>{cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount </span>
                <span>{totalCart}</span>
              </p>
              <p>
                <Link to={'/delivery'}><button className="bg-white text-black border-4 border-[#212529] rounded-lg font-bold text-sm p-1.5">Select Address</button></Link>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray=800 font-bold text-xl mb-2">
            Your Cart is Empty
          </h1>
          <Link to={"/"}>
            <button className="bg-[#212529] text-white border-2 rounded-lg font-bold text-sm p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
}
