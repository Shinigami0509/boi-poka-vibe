import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-36 bg-base-200 rounded-xl mt-5">
                <div className="hero-content flex-col lg:flex-row-reverse m-10">
                    <img className='w-2/4 rounded-lg' src={bannerImg} />
                    <div className='space-y-8'>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf </h1>
                       
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;