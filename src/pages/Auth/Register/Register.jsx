import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = (data) => {
        console.log(data)
    }
    return (
        <div className="card-body">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center">
                Create an Account
            </h1>
            <p className="text-center text-sm text-gray-500 mb-5">
                Register with EasyHR
            </p>
            {/* form */}
            <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="label">
                        <span className="label-text font-medium">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Full Name"
                        className="input input-bordered w-full font-bold"
                        {...register('name', { required: "Name is required" })}
                    />
                    {
                        errors.name && (
                            <p className="text-error text-sm mt-1">{errors.name.message}</p>
                        )
                    }
                </div>
                {/* Email */}
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
                {/* Password */}
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

                                uppercase: (value) =>
                                    /[A-Z]/.test(value) ||
                                    "At least one uppercase letter is required",

                                lowercase: (value) =>
                                    /[a-z]/.test(value) ||
                                    "At least one lowercase letter is required",

                                number: (value) =>
                                    /\d/.test(value) ||
                                    "At least one number is required",

                                special: (value) =>
                                    /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                                    "At least one special character is required",
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
                    value="Register"
                    className="btn btn-primary w-full bg-lime-400 border-none hover:bg-lime-500 text-black"
                />
            </form>

            {/* Login Link */}
            <p className="text-center text-sm mt-3">
                Already have an account?{" "}
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

export default Register;