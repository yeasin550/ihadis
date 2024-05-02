/* eslint-disable react/no-unknown-property */
import { FaCopyright, FaDownload, FaHandHoldingHeart, FaRProject } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoIosCheckbox, IoMdCheckboxOutline } from "react-icons/io";
import setting from "../../../public/image/setting.png";
import profile from "../../../public/image/profile.png";
import homeLogo from "../../../public/image/home-logo.png";

const Navbar = () => {


    return (
        <div className="mx-4 my-3 flex items-center justify-between sticky top-0 left-0 z-50 bg-white">
            <div className="flex items-center gap-5">
                <img className="w-11" src={homeLogo} alt="" />
                <div><h1 className="text-xl font-bold ">
                    Hadiths
                </h1>
                    <p> Read hadith learn and know</p></div>
            </div>
            <div className="flex">
                <div className="hidden sm:block mr-24">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow w-64"
                            placeholder="Search by dua name"
                        />

                        <div className="p-2 rounded-lg bg-slate-100 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-8 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </label>
                </div>
                {/* 2div */}
                <div className="dropdown dropdown-end mr-4">
                    <div
                        tabIndex={0}
                        role="button"
                        className="hidden sm:block btn btn-ghost btn-circle  mr-3"
                    >
                        <div className="flex items-center gap-2">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={profile}
                                className=""
                            />
                            <p>⯆</p>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[0] px-3 py-4 shadow menu menu-sm dropdown-content text-sm bg-base-100 rounded-box w-64"
                    >
                        <li className="flex flex-row items-center hover:bg-slate-100 p-1 rounded-lg">
                            <FaHandHoldingHeart className="text-green-600 text-[45px]" />
                            Support Us
                        </li>
                        <li className="flex flex-row items-center hover:bg-slate-100 p-1 rounded-lg">
                            <FaDownload className="text-green-600 text-[42px]" />
                            Download Dua App
                        </li>
                        <li className="flex flex-row items-center hover:bg-slate-100 p-1 rounded-lg">
                            <IoIosCheckbox className="text-green-600 text-[45px]" />
                            Privacy Policy
                        </li>
                        <li className="flex flex-row items-center hover:bg-slate-100 p-1 rounded-lg">
                            <IoMdCheckboxOutline className="text-green-600 text-[45px]" />
                            Thank & Credit
                        </li>
                        <li className="flex flex-row items-center hover:bg-slate-100 p-1 rounded-lg">
                            <FcAbout className="text-green-600 text-[45px]" />
                            About Us
                        </li>
                        <li className="flex flex-row items-center hover:bg-slate-100 p-1 rounded-lg">
                            <FaCopyright className="text-green-600 text-[42px]" />
                            Copy-write Warning
                        </li>
                        <li className="flex flex-row items-center hover:bg-slate-100 p-1 rounded-lg">
                            <FaRProject className="text-green-600 text-[45px]" />
                            Our Other Project
                        </li>
                    </ul>
                </div>
                {/* 3 div */}
                <div className="drawer drawer-end ">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex items-center justify-center ml-4">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={setting}
                                className="w-8 cursor-pointer"
                            />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer-4"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu p-4 w-80 min-h-full bg-white text-base-content ">
                            <div className="text-center text-2xl pt-4">Settings</div>

                            <div className="mt-2 rounded-lg border-4 border-t-0 border-l border-r border-b text-2xl">
                                <div className="w-full gap-3 cursor-pointer rounded-md text-[16px] px-4">
                                    <label for="cars" className="font-semibold">Select Arabic font
                                    </label> <br />
                                    <select className="w-full border border-green-600 py-1 rounded-md px-2" id="cars" name="cars">
                                        <option value="uthmani">KFGQ</option>
                                        <option value="quran" >Me Quran</option>
                                        <option value="mushaf" >Al Mushaf</option>
                                        <option value="amiri" >Amiri</option>
                                        <option value="arial" >Arial</option>
                                    </select>
                                </div>

                                <div>
                                    <div className="w-full gap-3 cursor-pointer rounded-md text-[16px] px-4">
                                        <h1 className="py-2 rounded-md font-semibold">Arabic font size
                                        </h1>
                                        <input type="range" className="w-full"></input>
                                    </div>
                                    <div className="w-full gap-3 cursor-pointer rounded-md text-[16px] px-4">
                                        <h1 className="py-2 rounded-md font-semibold">Translation font size
                                        </h1>
                                        <input type="range" className="w-full"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 rounded-lg border-4 border-t-0 border-l border-r border-b text-2xl">
                                <div className="flex items-center justify-between w-full gap-3 cursor-pointer rounded-md text-[18px] px-8">
                                    <h1 className="py-2 rounded-md font-semibold">Night Mode</h1>
                                    <input
                                        type="checkbox"
                                        id="vehicle1"
                                        name="vehicle1"
                                        value="Bike"
                                    ></input>
                                </div>
                            </div>
                            <div className="bg-[#34AB82] p-5 rounded-md text-center space-y-3 mt-2">
                                <h1 className="text-2xl text-white font-bold">You also participate in Sadakay Zaria
                                </h1>
                                <p className="text-lg text-white text-justify">Your donation, however small, will help spread the message of Islam and hadith. Donate to our project to be part of our work and help in this important work. Inshallah it will be accepted by Allah as a charity.</p>
                                <button className="bg-white py-2 px-4 rounded-md text-xl">Support</button>
                            </div>
                        </ul>
                    </div>
                    
                </div>
               
            </div>

        </div>
    );
};

export default Navbar;