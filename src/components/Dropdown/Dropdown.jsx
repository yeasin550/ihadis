/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
// import dua from '../../../public/categoryimg//dua.png';
// import arrow from '../../../public/categoryimg//arrow.png';

const Dropdown = ({ category }) => {
    const { id, title, range } = category;
    const [isOpen, setIsOpen] = useState(false);
    const [openCategory, setOpenCategory] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleCategory = (category) => {
        setOpenCategory(category === openCategory ? null : category);
    };

    return (
        <div>
            <div
                onClick={toggleDropdown}
                className="bg-white hover:bg-[#cbf8e8] hover:rounded-lg text-gray-800 rounded-xl flex items-center gap-3 w-80 ml-2 h-24 justify-between overflow-x-hidden"
            >
                <div className="flex items-center gap-5 pl-3">
                    <p className='bg-[#2B9E76] text-white rounded-full px-4 py-2'>
                        {id}
                    </p>
                    <div className="space-y-2">
                        <h1 className="font-mono text-lg font-semibold">{title}</h1>
                        <p>{range}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dropdown;





