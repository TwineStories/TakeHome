import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';

import TwineLogo from "../src/assets/images/TwineLogo.png";
import Avatar from "../src/assets/images/ProfilePicture.png";


const navigation = [
    { name: 'art', navigateTo: '/art' },
    { name: 'collab', navigateTo: '/collab' },
    { name: 'create', navigateTo: '/create' },
]

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <header className="navbar inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-3 lg:px-12" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to={'/'} className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <span className="flex items-center h-[60px]">
                            <img
                                className="max-w-xs w-auto"
                                src={TwineLogo}
                                alt="logo"
                            />
                        </span>

                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon className="h-[34px] light-green" icon={faBars} />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.navigateTo} className="nav-item-font text-4xl font-extrabold leading-8 light-green">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
                    <div className="bg-light-green relative inline-flex items-center justify-center cursor-pointer w-[50px] h-[50px] overflow-hidden bg-gray-100 rounded-full">
                        <FontAwesomeIcon className="dark-green h-5 w-5" icon={faMagnifyingGlass} />
                    </div>
                    <div>
                        <div className="relative">
                            <img className="w-20 h-20 rounded-full" src={Avatar} alt="avatar" />
                            <span className="flex flex-initial items-center justify-center gap-1 top-5 -right-7 absolute w-14 h-10 bg-light-purple dark:border-gray-800 rounded-[16px]">
                                <FontAwesomeIcon className="h-6 dark-purple" icon={faBell} /> <p className="dark-purple notification-count">0</p>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to={'/'} className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src={TwineLogo}
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <FontAwesomeIcon className="h-8 light-green" icon={faXmark} />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.navigateTo}
                                        className="nav-item-font -mx-3 block rounded-lg px-3 py-2 light-green"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <form className="flex items-center">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <FontAwesomeIcon className="dark-green" icon={faMagnifyingGlass} />
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-light-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                        {/* <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:dark-green dark:focus:dark-green" placeholder="Search" required /> */}
                                    </div>
                                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-light-green rounded-lg hover:bg-light-green focus:light-green focus:outline-none focus:bg-light-green dark:bg-light-green dark:hover:bg-light-green dark:focus:bg-light-green">
                                        <FontAwesomeIcon className="dark-green" icon={faMagnifyingGlass} />
                                        <span className="sr-only">Search</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Navbar;