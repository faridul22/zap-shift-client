import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../../../components/Logo/SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signInUser } = useAuth()

    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="card-body">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center">
                Welcome Back
            </h1>
            <p className="text-center text-sm text-gray-500 mb-5">
                Login with EasyHR
            </p>
            {/* form */}
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                {/* Email field */}
                <div>
                    <label className="label">
                        <span className="label-text font-medium">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full font-bold"
                        {...register('email', { required: "Email is required" })}
                    />
                    {
                        errors.email && (
                            <p className="text-error text-sm mt-1">{errors.email.message}</p>
                        )
                    }
                </div>
                {/* Password field*/}
                <div>
                    <label className="label">
                        <span className="label-text font-medium">Password</span>
                    </label>

                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full font-bold"
                        {...register("password", {
                            required: "Password is required",
                            validate: {
                                minLength: (value) =>
                                    value.length >= 6 || "Password must be at least 6 characters",
                            },
                        })}
                    />

                    {errors.password && (
                        <p className="text-error mt-1">{errors.password.message}</p>
                    )}
                </div>
                {/* Submit button */}
                <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary w-full bg-lime-400 border-none hover:bg-lime-500 text-black"
                />
            </form>

            {/* Login Link */}
            <p className="text-center text-sm mt-3">
                New to this site?{" "}
                <a href="/register" className="text-primary font-semibold">
                    Register
                </a>
            </p>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Button */}
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;