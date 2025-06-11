import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addtoStoredReadList, addtoStoredWishList } from '../../utility/addToDb';

const BookDetail = () => {

    const { bookId } = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId)

    const book = data.find(book => book.bookId === id)
    // console.log(book)

    const { bookId: currentBookId, image, } = book

    const handleMarkAsRead = (id) => {
        addtoStoredReadList(id)
    }
    const handleMarkAsWish = (id) => {
        addtoStoredWishList(id)
    }

    return (
        <div className='my-12 space-y-3'>
            <h2>Book Details: {bookId}</h2>
            <img className='w-1/4' src={image} alt="" />
            <button onClick={() => handleMarkAsRead(bookId)}
                className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
            <button onClick={() => handleMarkAsWish(bookId)}
                className="btn btn-accent">Add to Wish list</button>
        </div>
    );
};

export default BookDetail;