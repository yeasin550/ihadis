import handlove from "../../../public/image/handlove.png";
// import pulm from "../../../public/image/pulm.png";
import img1 from "../../../public/image/home.png";
import img2 from "../../../public/image/menu.png";
import homeLogo from "../../../public/image/home-logo.png";
import img3 from "../../../public/image/bulb.png";
import img4 from "../../../public/image/mark.png";
import img5 from "../../../public/image/aid.png";
import img6 from "../../../public/image/bubble.png";
import img7 from "../../../public/image/book.png";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

const Sidebar = () => {
    return (
        <aside className="md:fixed hidden sm:block md:h-[94vh] bg-base-100 md:w-25 shadow-md  flex-col items-center overflow-y-auto rounded-3xl mt-5">
            <ul className="flex flex-col justify-between items-center md:gap-5 ">
                <Link href={"/"} className="mt-4">
                    {/* <img alt="pulm logo" src={pulm} width={80} height={80} /> */}
                </Link>

                <Link href={"/"} className="rounded-full ">
                    <img alt="pulm logo" src={img1} width={45} height={40} />
                </Link>

                <Link href={"/"} className="rounded-full ">
                    <img alt="pulm logo" src={homeLogo} width={45} height={40} />
                </Link>

                <Link href={"/"} className="rounded-full ">
                    <img alt="pulm logo" src={img7} width={45} height={40} />
                </Link>

                <Link href={"/"} className="rounded-full ">
                    <img alt="pulm logo" src={img4} width={45} height={40} />
                </Link>

                <Link href={"/"} className="rounded-full ">
                    <img alt="pulm logo" src={img2} width={45} height={40} />
                </Link>

                <Link href={"/"} className="rounded-full">
                    <FaTelegramPlane className=" bg-gray-200 text-gray-500 rounded-full w-12 h-12 p-2" />
                </Link>
                <Link href={"/"} className="rounded-full">
                    <img alt="pulm logo" src={img5} width={45} height={40} />
                </Link>
                <Link href={"/"} className="rounded-full">
                    <img alt="pulm logo" src={img6} width={45} height={40} />
                </Link>
                <Link href={"/"} className="rounded-full">
                    <img alt="pulm logo" src={img3} width={45} height={40} />
                </Link>


                <Link href={"/"} className="mb-10">
                    <img alt="pulm logo" src={handlove} width={85} height={85} />
                </Link>
            </ul>
        </aside>
    );
};

export default Sidebar;
