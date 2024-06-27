// components/main/Contact.tsx
"use client";
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        _subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const responseData = await response.json();
            console.log('Email sent successfully:', responseData);
            // Optionally, show a success message or clear the form
            setFormData({
                name: '',
                email: '',
                _subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Failed to send email:', error);
            // Optionally, show an error message to the user
        }
    };

    return (
        <div id='contact' className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="text-center pb-6">
                        <h1 className="text-3xl font-bold">Get in Touch</h1>
                        <p className="text-gray-300">
                            Fill out the form below to send us a message.
                        </p>
                    </div>
                    <form className="relative z-20" onSubmit={handleSubmit}>
                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
                            type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
                            type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                        <input
                            className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
                            type="text" placeholder="Subject" name="_subject" value={formData._subject} onChange={handleChange} />
                        <textarea
                            className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 text-white"
                            placeholder="Type your message here..." name="message" style={{ height: "121px" }} value={formData.message} onChange={handleChange}></textarea>
                        <div className="flex justify-between">
                            <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit" value="Send ➤" />
                            <input
                                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="reset" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
