import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {

    const { googleLogin } = useAuth();

    const handleGoogleLogIn = () => {
        console.log("google login clicked")
        googleLogin()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogIn} className="btn btn-outline w-full">
                <FcGoogle className="text-xl" />
                Google LogIn
            </button>
        </div>
    );
};

export default SocialLogin;