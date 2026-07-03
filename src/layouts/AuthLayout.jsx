import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mt-5 mx-auto'>
            <Logo></Logo>
            <div className='flex justify-center items-center px-6 mt-4 shadow-2xl rounded-xl pb-10'>
                <div className='flex-1 bg-base-100'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;