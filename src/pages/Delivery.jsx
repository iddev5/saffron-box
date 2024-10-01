import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function Delivery() {
    const navigate = useNavigate()

    return <>
        <Navbar />
        <div className="flex flex-col w-full mt-20 items-center justify-center">
            <form className="flex flex-col md:w-4/12" method="POST" onSubmit={() => navigate('/')}>
                <label for="pincode">Pincode</label>
                <input id="pincode" type="number" className="border-4" />
                <label for="country">Country</label>
                <input id="country" type="text" className="border-4" />
                <label for="locality">Locality</label>
                <input id="locality" type="text" className="border-4" />
                <label for="city">City</label>
                <input id="city" type="text" className="border-4" />
                <label for="state">State</label>
                <input id="state" type="text" className="border-4" />

                <input className="bg-white text-black border-4 border-[#212529] rounded-lg font-bold text-sm p-1.5 md:w-3/12 mt-5" type="submit" value="Place order!" />
            </form>
        </div>
        <Footer />
    </>
}