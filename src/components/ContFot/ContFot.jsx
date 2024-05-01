import copy from '../../../public/image/copy.png';
import mark from '../../../public/image/mark.png';
import bulb from '../../../public/image/bulb.png';
import share from '../../../public/image/share.png';
import info from '../../../public/image/info.png';

// import star from './../public/img/star.png'

const ContFot = () => {
    return (
        <div className="md:flex justify-between">
            <div className="flex items-center gap-2 font-semibold md-my-0 my-5">
                {/* <img
                    src={play} // Replace with your img path
                    alt="img 1"
                    width={48}
                    height={48}
                    className="object-cover mr-4 rounded-lg"
                /> */}
                <h1>Value of Hadith:
                </h1>
                <button className="bg-[#2B9E76] rounded-md py-1 px-2 text-white">Sahih Hadith</button>
            </div>
            <div className="flex gap-8 pr-3 items-center justify-around">
                <img
                    src={copy} 
                    alt="img 2"
                    width={24}
                    height={24}
                    className="w-5 h-5 mt-1 cursor-pointer"
                    title="Copy" 
                />
                <img
                    src={mark} 
                    alt="img 3"
                    width={24}
                    height={24}
                    className="w-7 h-7 cursor-pointer"
                    title="Bookmark" 
                    
                />
                <img
                    src={bulb} 
                    alt="img 4"
                    width={24}
                    height={24}
                    className="w-7 h-7 cursor-pointer"
                    title="Share" 
                />
                <img
                    src={share} // Replace with your img path
                    alt="img 5"
                    width={24}
                    height={24}
                    className="w-6 h-6 cursor-pointer"
                    title="Share" 
                />
                <img
                    src={info} // Replace with your img path
                    alt="img 6"
                    width={24}
                    height={24}
                    className="w-6 h-6 cursor-pointer"
                    title="Report" 
                />
            </div>
        </div>
    );
};

export default ContFot;