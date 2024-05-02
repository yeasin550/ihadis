import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar />
            {/* <div className="h-[85vh]"> */}

            <Outlet/>
            {/* </div> */}
            
        </div>
    );
};

export default Main;