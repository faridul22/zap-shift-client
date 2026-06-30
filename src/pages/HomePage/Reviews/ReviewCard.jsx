import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { userName, review: testimonial, user_photoURL, user_email } = review
    return (
        <div className="card w-80 bg-base-100 shadow-xl border border-base-200 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <div className="card-body">
                {/* Quote Icon */}
                <div className="text-primary text-4xl">
                    <FaQuoteLeft />
                </div>

                {/* Testimonial */}
                <p className="text-sm text-base-content/70 leading-7 mt-2">
                    {testimonial}
                </p>

                {/* Divider */}
                <div className="divider my-2"></div>

                {/* User */}
                <div className="flex items-center gap-4">
                    <div className="avatar placeholder">
                        <div className="rounded-full w-12">
                            <img src={user_photoURL} alt="" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-base">{userName}</h3>
                        <p className="text-sm text-base-content/60">
                            {user_email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;