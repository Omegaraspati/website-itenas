'use client'

import React from 'react'
import news1 from '@/assets/news1.png'
import Image from 'next/image'

const News = () => {
    return (
        <div>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-[500px]">
                <Image
                    alt="news1"
                    src={news1}
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500"> August 20,2024 </time>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg text-gray-900">Perkuat Luaran Akademis, Fakultas Arsitektur dan Desain Itenas Kembali Menggelar Seminar Nasional</h3>
                    </a>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    Fakultas Arsitektur dan Desain (FAD) Institut Teknologi Nasional Bandung (Itenas) kembali mencatatkan kesuksesan dengan menggelar Seminar Nasional pada Rabu, 14
                    </p>
                    <p className='text-orange-400 text-sm '>readmore</p>
                </div>
            </article>
        </div>
    )
}

export default News