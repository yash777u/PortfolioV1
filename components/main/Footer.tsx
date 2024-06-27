"use client";

import React, { useState } from 'react';

const CopyToClipboard = ({ id, value }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const copyText = document.getElementById(id);
        copyText.select();
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    return (
        <div className="relative my-[15px] cursor-pointer z-20 flex items-center w-90">
            <input
                id={id}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full max-w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={value}
                disabled
                readOnly
            />
            <button
                onClick={copyToClipboard}
                className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
            >
                {!copied ? (
                    <span id="default-icon">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                    </span>
                ) : (
                    <span id="success-icon" className="inline-flex items-center">
                        <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917L5.724 10.5 15 1.5" />
                        </svg>
                    </span>
                )}
            </button>
            <div
                id="tooltip-copy-to-clipboard"
                role="tooltip"
                className={`absolute top-1/2 left-full ml-2 transform -translate-y-1/2 transition-opacity duration-300 ${copied ? 'opacity-100 visible' : 'opacity-0 invisible'} inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm dark:bg-gray-700`}
            >
                {copied ? 'Copied!' : 'Copy to clipboard'}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mb-5">
                        <div className="font-bold text-[16px]">Contact</div>
                        <CopyToClipboard id="npm-install-copy-button-1" value="yogeshkumardagar7@gmail.com" />
                        <CopyToClipboard id="npm-install-copy-button-2" value="yogesh.kumar.02@proton.me" />
                    </div>
                </div>
                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Yogesh Kumar / 2024 @ All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
