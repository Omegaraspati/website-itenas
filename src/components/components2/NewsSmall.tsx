'use client'

import Image from 'next/image'
import React from 'react'
import smallnews1 from '@/assets/smallnews1.png'
import smallnews2 from '@/assets/smallnews2.jpg'
import smallnews3 from '@/assets/smallnews3.png'

const NewsSmall = () => {
    return (
        <div className=''>
            <div className="flex items-stretch gap-4 py-3">
                <Image
                    src={smallnews1}
                    alt="smallnews1"
                    width={50}
                    height={50}
                    className="aspect-square w-36 rounded-lg object-cover"
                />

                <div>
                    <h3 className=" font-medium text-orange-500 hover:text-orange-700">TPerkuat Luaran Akademis,
                        Fakultas Arsitektur dan Desain Itenas Kembali Menggelar Seminar Nasional</h3>

                    <p className="mt-0.5 text-gray-700 text-sm">
                        August 20, 2024
                    </p>
                </div>
            </div>

            <div className="flex items-stretch gap-4 ">
                <Image
                    src={smallnews2}
                    alt="smallnews1"
                    width={50}
                    height={50}
                    className="aspect-square w-36 rounded-lg object-cover"
                />

                <div>
                    <h3 className=" font-medium text-orange-500 hover:text-orange-700">TPerkuat Luaran Akademis,
                        Fakultas Arsitektur dan Desain Itenas Kembali Menggelar Seminar Nasional</h3>

                    <p className="mt-0.5 text-gray-700 text-sm">
                        August 20, 2024
                    </p>
                </div>
            </div>

            <div className="flex items-stretch gap-4 py-3 ">
                <Image
                    src={smallnews3}
                    alt="smallnews1"
                    width={50}
                    height={50}
                    className="aspect-square w-36 rounded-lg object-cover"
                />

                <div>
                    <h3 className=" font-medium text-orange-500 hover:text-orange-700">TPerkuat Luaran Akademis,
                        Fakultas Arsitektur dan Desain Itenas Kembali Menggelar Seminar Nasional</h3>

                    <p className="mt-0.5 text-gray-700 text-sm">
                        August 20, 2024
                    </p>
                </div>
            </div>
            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-orange-300 text-black shadow-sm hover:bg-orange-500 hover: focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transform transition-transform duration-300 hover:scale-90">
                Berita Selanjutnya
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                </svg>
            </button>

        </div>
    )
}

export default NewsSmall