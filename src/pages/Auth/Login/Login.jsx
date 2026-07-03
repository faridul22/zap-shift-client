import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <div className="card-body">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center">
                Login your Account
            </h1>
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
                <a href="/login" className="text-primary font-semibold">
                    Login
                </a>
            </p>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Button */}
            <button className="btn btn-outline w-full">
                <FcGoogle className="text-xl" />
                Register with Google
            </button>
        </div>
    );
};

export default Login;