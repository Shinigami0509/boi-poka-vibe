import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags, category, rating, totalPages } = book

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6 border border-white">
                <figure className='bg-blue-200 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex gap-4 justify-center'>
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-300 text-green-800">
                                {tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className='border-t-2 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div>{rating}</div>
                        <div>{totalPages}</div>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;