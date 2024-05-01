                    <div className="rounded-xl text-md font-serif bg-white pl-6 flex items-center h-14">
                        <span className="text-green font-bold">Section :</span> The servant
                        is dependent on his Lord
                    </div>

                    {/* content card proyojone comp create korbo */}
                    <div className="bg-white rounded-lg shadow-md mt-5 p-6">
                        <div className="flex gap-4 pb-6 items-center">
                            <img
                                src={ContFot} // Replace with your img path
                                alt="img 2"
                                width={40}
                                height={40}
                                className="w-9 h-9 "
                            />
                            <p>৩. দাসমুক্তির সওয়াব</p>
                        </div>

                        <p className="pb-3">নিম্নোক্ত বাণীটি ১০ বার বলবে -</p>

                        <p className="py-5">
                            নবী (ﷺ) রাতের বেলা উঠে সালাতের শুরুতে যে দোয়া পড়তেন, তার এক
                            জায়গায় আছে -
                        </p>

                        <p className="py-4 text-3xl text-right">
                            /اِهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ
                            تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُّسْتَقِيْمٍ/
                        </p>

                        <p className="py-4">
                            উচ্চারণঃ //ইহদিনী লিমাখতুলিফা ফীহি মিনাল হাক্কি‌ বিইযনিকা ইন্নাকা
                            তাহ্‌দী মান তাশা-উ ইলা- সিরা-তিম মুস্তাকীম//
                        </p>

                        <p className="pb-8">
                            অনুবাদঃ// যে সত্য নিয়ে মতবিরোধ দেখা দিয়েছে, তোমার ইচ্ছায় আমাকে
                            তার সঠিক পথ দেখিয়ে দাও। তুমি যাকে চাও, তাকে সঠিক পথের দিশা দিয়ে
                            থাকো।//
                        </p>

                        <div className="pb-8">
                            <p className="text-green">রেফারেন্স</p>
                            <p>সূরা আল-ফাতিহা ১:৫</p>
                        </div>

                        {/* footer imgs */}

                        <ContFot />
                    </div>
                    <div className="bg-white rounded-lg shadow-md mt-5 p-6">
                        <div className="flex gap-4 pb-6 items-center">
                            <img
                                src={ContFot} // Replace with your img path
                                alt="img 2"
                                width={24}
                                height={24}
                                className="w-9 h-9 "
                            />
                            <p>৩. দাসমুক্তির সওয়াব</p>
                        </div>
                        <p className="py-4 text-3xl text-right">
                            /اِهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ
                            تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُّسْتَقِيْمٍ/
                        </p>

                        <p className="py-4">
                            উচ্চারণঃ //ইহদিনী লিমাখতুলিফা ফীহি মিনাল হাক্কি‌ বিইযনিকা ইন্নাকা
                            তাহ্‌দী মান তাশা-উ ইলা- সিরা-তিম মুস্তাকীম//
                        </p>

                        <div className="pb-8">
                            <p className="text-green">রেফারেন্স</p>
                            <p>সূরা আল-ফাতিহা ১:৫</p>
                        </div>


                        <ContFot />
                    </div>











// category sub category
{/* {isOpen && (
                <div className="w-80 ml-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
                    <ul className=" ml-5 border-l-2 border-h-2 border-green-500 border-dotted ">
                        {categories.map((category) => (
                            <li key={category.id} className=''>
                                <div className='flex'>

                                    <span className='text-green text-4xl font-extrabold'>.</span>
                                    <div
                                        onClick={() => toggleCategory(category.id)}
                                        className="cursor-pointer px-4 text-sm text-gray-700 hover:bg-gray-100 pt-5"
                                    >
                                        {category.name}
                                    </div>
                                </div>
                                {openCategory === category.id && (
                                    <ul className="ml-4 text ">
                                        {category.subcategories.map((subcategory) => (
                                            <li key={subcategory.id} className="py-2 cursor-pointer gap-1">
                                                <img
                                                    alt='arrow'
                                                    src={arrow}
                                                />
                                                {subcategory.name}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}




{/* {categories.map((category) => (
                        <div key={category.id} category={category}
                            onClick={toggleDropdown}
                            className="bg-white hover:bg-[#cbf8e8] hover:rounded-lg text-gray-800 rounded-xl flex items-center gap-3 w-80 ml-2 h-24 justify-between overflow-x-hidden"
                        >
                            <div className="flex items-center gap-5 pl-3">
                                <p className='bg-[#2B9E76] text-white rounded-full px-4 py-2'>
                                    {category.id}
                                </p>
                                <div className="space-y-2">
                                    <h1 className="font-mono text-lg font-semibold">{category.title}</h1>
                                    <p>{category.range}</p>
                                </div>
                            </div>

                        </div>
                        // <Dropdown key={category.id} category={category} />
                    ))} */}




//  map category
{/* Render content based on selectedCategory */ }
{/* {selectedCategory && (
                        <div className="sm:w-full mt-5 h-[85vh] overflow-y-auto mr-2 ">

                            <div className="flex items-center gap-4 border p-4 rounded-md">
                                <FaBook className="text-5xl text-[#2B9E76]" />
                                <div className="space-y-2 flex-1">
                                    <h1 className="text-2xl font-semibold">Sahih Bukhari</h1>
                                    <p> Total hadith - 7563</p>
                                </div>
                                <h1 className="text-2xl font-semibold">Sahih Al-Bukhari</h1>
                            </div>
                            <div className="flex items-center gap-5 border p-4 rounded-md my-2">
                                <p className="bg-[#2B9E76] text-white rounded-full px-4 py-2">1</p>
                                <h1 className="text-2xl font-semibold">The opening chapter of Revelation</h1>
                            </div>
                            <div className="border rounded-md p-4 space-y-6">
                                <div className="flex items-center gap-3">
                                    <FaBookOpen className="text-4xl text-[#2B9e76]" />

                                    <h1 className="text-lg font-semibold">1/1. Chapter:</h1>
                                </div>
                                <h1 className="text-xl font-semibold">How the revelation [1] to the Messenger of Allah (may peace be upon him) began.
                                </h1>
                                <h1 className="text-lg">Allah Ta alas words in this regard: Indeed, I have sent down to you such revelations as We sent down revelations to Noah and the Prophets after him. (Surah An-Nisa 4/163)
                                </h1>
                            </div>






                        </div>
                    )} */}





{/* content card */ }
{/* <div className="sm:w-full mt-5 h-[85vh] overflow-y-auto mr-2 ">
                    
                    <div className="flex items-center gap-4 border p-4 rounded-md">
                        <FaBook className="text-5xl text-[#2B9E76]" />
                        <div className="space-y-2 flex-1">
                            <h1 className="text-2xl font-semibold">Sahih Bukhari</h1>
                            <p> Total hadith - 7563</p>
                        </div>
                        <h1 className="text-2xl font-semibold">Sahih Al-Bukhari</h1>
                    </div>
                    <div className="flex items-center gap-5 border p-4 rounded-md my-2">
                        <p className="bg-[#2B9E76] text-white rounded-full px-4 py-2">1</p>
                        <h1 className="text-2xl font-semibold">The opening chapter of Revelation</h1>
                    </div>
                    <div className="border rounded-md p-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <FaBookOpen className="text-4xl text-[#2B9e76]" />

                            <h1 className="text-lg font-semibold">1/1. Chapter:</h1>
                        </div>
                        <h1 className="text-xl font-semibold">How the revelation [1] to the Messenger of Allah (may peace be upon him) began.
                        </h1>
                        <h1 className="text-lg">Allah Ta alas words in this regard: Indeed, I have sent down to you such revelations as We sent down revelations to Noah and the Prophets after him. (Surah An-Nisa 4/163)
                        </h1>
                    </div>
                   
                </div> */}





