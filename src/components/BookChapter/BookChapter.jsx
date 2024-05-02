/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// import ContFot from "../ContFot/ContFot";
// import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";
// import { FaBook, FaBookOpen } from "react-icons/fa";
import ContentCard from "../ContentCard/ContentCard";

const BookChapter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openCategory, setOpenCategory] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleCategory = (category) => {
        setOpenCategory(category === openCategory ? null : category);
    };
    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? true : category);
    };
    const categories = [
        {
            id: 1,
            title: "Opening chapter of Revelation",
            range: "Hadith Range: 1 - 7",
            // subcategories: [
            //     { id: 21, title: "ddddddddddddddddddd" },
            //     { id: 22, title: "ddddddddddddddddddd" },
            // ],
        },
        {
            id: 2,
            title: "Faith",
            range: "Hadith Range: 8 - 58",
        },
        {
            id: 3,
            title: "Lim",
            range: "Hadith Range: 59 - 134",
        },
        {
            id: 4,
            title: "Ouzo",
            range: "Hadith Range: 135 - 247",
        },
        {
            id: 5,
            title: "Shower",
            range: "Hadith Range: 248 - 293",
        },
        {
            id: 6,
            title: "Hage",
            range: "Hadith Range: 294 - 333",
        },
        {
            id: 7,
            title: "Tayammmum",
            range: "Hadith Range: 334 - 348",
        },
        {
            id: 8,
            title: "The Prayer",
            range: "Hadith Range: 349 - 520",
        },
        {
            id: 9,
            title: "Prayer Times",
            range: "Hadith Range: 521 - 602",
        },
        // {
        //     id: 10,
        //     title: "Call To Prayer",
        //     range: "Hadith Range: 521 - 875",
        // },
        // {
        //     id: 11,
        //     title: "Friday",
        //     range: "Hadith Range: 876 - 941",
        // },




    ];
    return (
        <div className="">

            <section className="md:flex md:gap-6 h-96 md:ml-32 ml-0">
                {/* category section */}
                <div className="mt-5 md:w-[550px] h-[85vh] overflow-y-auto bg-white rounded-t-xl">
                    <div className="sticky custom-green top-0 z-50 h-16 flex text-xl text-white justify-around items-center cursor-pointer">
                        Chapter
                    </div>

                    <div className="p-3 sticky top-14 z-50 bg-white">
                        <label className="input input-bordered flex items-center gap-2 sticky top-0 z-50">
                            <div className="p-2 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="grow w-44"
                                placeholder="Search For Filter"
                            />
                        </label>
                    </div>
                  
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => handleCategoryClick(category)}
                            className={`bg-white hover:bg-[#cbf8e8] hover:rounded-lg text-gray-800 rounded-xl flex items-center gap-3 md:w-80 w-full ml-2 h-24 justify-between overflow-x-hidden cursor-pointer ${selectedCategory === category ? "bg-[#cbf8e8] rounded-lg" : ""
                                }`}
                        >
                            <div className="flex items-center gap-5 pl-3">
                                <p className="bg-[#2B9E76] text-white rounded-full px-4 py-2">{category.id}</p>
                                <div className="space-y-2">
                                    <h1 className="font-mono text-lg font-semibold">{category.title}</h1>
                                    <p>{category.range}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
                <div className="w-full mt-5 h-[90vh] overflow-y-auto mr-2 ">
                    <ContentCard selectedCategory={selectedCategory} />
                </div>

            </section>
        </div>
    );
};

export default BookChapter;
