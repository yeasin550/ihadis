/* eslint-disable react/prop-types */

import { FaBookOpen, FaBook, FaStarOfDavid, FaAngleRight } from "react-icons/fa";
import ContFot from "../ContFot/ContFot";

import homeLogo from "../../../public/image/home-logo.png";
const ContentCard = ({ selectedCategory }) => {
    // Define content based on the selected category
    let content = null;
    if (selectedCategory) {
        content = (
            <div>
                <div className="border rounded-md p-4 space-y-6 ">

                    <div className="flex items-center gap-1 cursor-pointer">
                        <img className="w-7" src={homeLogo} alt="" /> <FaAngleRight />
                        Bukhari <FaAngleRight />1
                    </div>
                    <div className="flex items-center gap-4 border p-4 rounded-md">
                        <FaBook className="text-4xl text-[#2B9E76]" />
                        <div className="space-y-2 flex-1">
                            <h1 className="text-2xl font-semibold">Sahih Bukhari</h1>
                            <p> Total hadith - 7563</p>
                        </div>
                        <h1 className="text-2xl font-semibold">Sahih Al-Bukhari</h1>
                    </div>
                    <div className="flex items-center gap-5 border p-4 rounded-md my-2">
                        <p className="bg-[#2B9E76] text-white rounded-xl px-4 py-2">{selectedCategory.id}</p>
                        <h1 className="text-2xl font-semibold">{selectedCategory.title}</h1>
                    </div>
                    <div className="border rounded-md p-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <FaBookOpen className="text-4xl text-[#2B9e76]" />
                            <h1 className="text-lg font-semibold">{selectedCategory.id}/1. Chapter:</h1>
                        </div>
                        <h1 className="text-xl font-semibold">How the revelation [1] to the Messenger of Allah (may peace be upon him) began.
                        </h1>
                        <h1 className="text-lg">Allah Ta alas words in this regard: Indeed, I have sent down to you such revelations as We sent down revelations to Noah and the Prophets after him. (Surah An-Nisa 4/163)
                        </h1>
                    </div>
                    <div className="border rounded-md p-4 space-y-6">
                        <div className="flex items-center gap-3 text-2xl text-[#2B9E76]">
                            <FaStarOfDavid className="" /> 1
                        </div>
                        <p className="text-xl text-right">حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ، يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏ إِنَّمَا الأَعْمَالُ بِالنِّيَّATِ, وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى, فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا اَوْ إِلَى امْرَا َةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ</p>

                        <h1 className="text-[#2B9E76] text-xl">Narrated Alqamah ibn Waqqas al-Laysi (RA):</h1>

                        <p className="text-xl">I heard Umar Ibn al-Khattab (may Allah be pleased with him) standing on the pulpit say: I heard Allahs Messenger (may peace be upon him) say: Action (will be due) according to intention. And man will be rewarded according to his intentions. So whoever migrates for the purpose of gaining this time or marrying a woman - his migration will be for the purpose for which he migrated. (54, 2529, 3898, 5070, 6689, 6953; Muslim 23/45 AH 1907, Ahmad 168) (Modern Publications-1, Islamic Foundation 1)
                        </p>
                        <ContFot />
                    </div>
                </div>

                <div>
                    <div className="border rounded-md p-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <FaBookOpen className="text-4xl text-[#2B9e76]" />
                            <h1 className="text-lg font-semibold">{selectedCategory.id}/2. Chapter:</h1>
                        </div>
                        <h1 className="text-lg font-semibold">{selectedCategory.id}/2. Chapter:</h1>

                    </div>
                    <div className="border rounded-md p-4 space-y-6">
                        <div className="flex items-center gap-3 text-2xl text-[#2B9E76]">
                            <FaStarOfDavid className="" /> 2
                        </div>
                        <p className="text-xl text-right">حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ، يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏ إِنَّمَا الأَعْمَالُ بِالنِّيَّATِ, وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى, فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا اَوْ إِلَى امْرَا َةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ</p>

                        <h1 className="text-[#2B9E76] text-xl">Narrated Umm al-Mu-minin Aisha (RA):</h1>

                        <p className="text-xl">Harith Ibn Hisham (RA) asked the Messenger of Allah (PBUH), O Messenger of Allah! How does revelation come to you? Allahs Messenger (may peace be upon him) said: [Sometimes it comes to me like a bell. And this is the most painful for me and at the end of it I do not memorize what the angel (angel) says, and sometimes the angel speaks to me in the form of a human being. I have not memorized what he said.] Aisha (may Allah be pleased with her) said, I saw him during the revelation of revelation during the severe winter. As soon as Wahi was over, sweat would drip from his forehead. (3215; Muslim 43/23, Hah 2333, Ahmad 25307, 26258) (Modern Publications: 2, Islamic Foundation: 2)
                        </p>
                        <ContFot />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="sm:w-full mt-5 h-[85vh] overflow-y-auto mr-2">
            {content}
        </div>
    );
};

export default ContentCard;
