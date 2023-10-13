function DeliCode() {
    return (
        <section className="max-w-[1440px] bg-white mx-auto items-center">
            <div className="flex justify-between mx-auto">
                <div className="h-[156px] mt-[26.12px] ml-[70px] px-5 lg:mt-0">
                    <a href="http://localhost:1234/">
                        <img src="/public/logo/left.svg" alt="logo" className='cursor-pointer' />
                    </a>
                </div>
                <ul className="flex gap-[97px] text-lg font-semibold mt-[73px] mr-16 lg:text-base lg:mt-14">
                    {/* fixed top-0 left-0 w-full h-screen flex-col justify-center items-center bg-gray-200 bg-opacity-90 md:bg-transparent md:h-auto md:flex-row md:justify-between md:static */}
                    <a href="http://localhost:1234/">
                        <li className="text-[#FA4A0C] cursor-pointer transition duration-200 ease-in hover:text-[#FA4A0C]">
                            Home
                        </li>
                    </a>
                    <li className="cursor-pointer transition duration-200 ease-in hover:text-[#FA4A0C]">
                        Product
                    </li>
                    <li className="cursor-pointer transition duration-200 ease-in hover:text-[#FA4A0C]">
                        FAQ
                    </li>
                    <li className="cursor-pointer transition duration-200 ease-in hover:text-[#FA4A0C]">
                        Contact
                    </li>
                </ul>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 hover:text-[#FA4A0C] transition duration-150 ease-in">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> */}

            </div>
            <img src="/public/img/img1.svg" alt="img1" className="absolute lg:w-full md:w-full"/>
            <div className="text-center">
                <div className="inline-block relative text-white">
                    <p className="text-2xl font-bold font-Montserrat pt-[72px] lg:pt-10">Food app</p>
                    <p className="w-[800px] text-5xl font-Poppins mt-6 lg:text-4xl">Why stay hungry when</p>
                    <p className="w-[800px] text-5xl font-Poppins mt-6 lg:text-4xl">you can order form Bella Onojie</p>
                    <p className="text-2xl font-light mt-12">Download the bella onoje’s food app now on</p>
                </div>
            </div>
            <div className="flex relative justify-center mt-10 gap-20">
                <a className="bg-[#FA4A0C] text-slate-200 hover:shadow-2xl hover:text-white text-2xl font-bold font-Montserrat px-10 py-4 rounded-full cursor-pointer " href="https://play.google.com/store/apps/details?id=com.macsolution.abcgo" target="_blank">Playstore</a>
                <a className="text-slate-200 hover:text-white hover:shadow-2xl text-2xl font-bold font-Montserrat px-10 py-4 border rounded-full cursor-pointer" href="https://apps.apple.com/us/app/abc-salon-system-go/id6449681664" target="_blank">App Store</a>
            </div>
            <div className="flex justify-center mt-5 lg:mt-12">
                <img src="/public/img/2phone.svg" alt="2phone" className="absolute" />
            </div>
            <div className="mt-[750px] flex justify-center">
                <img src="/public/img/HR.svg" alt="HR" className="" />
            </div>
            <div className="text-center text-4xl font-Poppins mt-32">
                <p>How the app works</p>
            </div>
            <div className="flex justify-center">
                <div>
                    <img src="/public/img/phonelogin.svg" alt="login" />
                </div>
                <div className=" w-[568px] font-Montserrat lg:w-96 lg:mr-20">
                    <p className="mt-64 mb-5 text-[#FA4A0C] text-2xl leading-9">Create an account</p>
                    <p className="mb-7 text-[#252B42] text-4xl leading-10">Create/login to an existing account to get started</p>
                    <p className="w-[460px] lg:w-96 text-[#737373] font-sans text-2xl leading-9">An account is created with your email and a desired password</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className=" w-[568px] font-Montserrat lg:w-96 lg:ml-20">
                    <p className="mt-64 mb-5 text-[#FA4A0C] text-2xl leading-9">Explore varieties</p>
                    <p className="mb-7 text-[#252B42] text-4xl leading-10">Shop for your favorites meal as e dey hot.</p>
                    <p className="w-[460px] lg:w-96 text-[#737373] font-sans text-2xl leading-9">Shop for your favorite meals or drinks and enjoy while doing it.</p>
                </div>
                <div>
                    <img src="/public/img/phonebooking.svg" alt="booking" />
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <img src="/public/img/phonecheckout.svg" alt="checkout" />
                </div>
                <div className=" w-[568px] font-Montserrat lg:w-96 lg:mr-20">
                    <p className="mt-64 mb-5 text-[#FA4A0C] text-2xl leading-9">Checkout</p>
                    <p className="mb-7 text-[#252B42] text-4xl leading-10">When you done check out and get it delivered.</p>
                    <p className="w-[460px] lg:w-96 text-[#737373] font-sans text-2xl leading-9">When you done check out and get it delivered with ease.</p>
                </div>
            </div>
            <img src="/public/img/img2.svg" alt="img2" className="absolute lg:w-full md:w-full"/>
            <div className="text-center">
                <div className="inline-block relative text-white">
                    <p className="w-[800px] text-5xl font-Montserrat mt-36 lg:mt-14">Download the app now.</p>
                    <p className="text-2xl font-light mt-12">Available on your favorite store. Start your premium experience now</p>
                </div>
            </div>
            <div className="flex relative justify-center mt-10 gap-20">
                <a className="bg-[#FA4A0C] text-slate-200 hover:text-white hover:shadow-2xl text-2xl font-bold font-Montserrat px-10 py-4 rounded-full cursor-pointer" href="https://play.google.com/store/apps/details?id=com.macsolution.abcgo" target="_blank">Playstore</a>
                <a className="text-slate-200 hover:text-white hover:shadow-2xl text-2xl font-bold font-Montserrat px-10 py-4 border rounded-full cursor-pointer" href="https://apps.apple.com/us/app/abc-salon-system-go/id6449681664" target="_blank">App Store</a>
            </div>
            <div className="flex justify-between mt-44 mb-10 mx-auto w-[1210px] lg:w-[868px] lg:mt-32 md:w-[700px]">
                <div className=" ">
                    <a href="http://localhost:1234/">
                        <img src="/public/logo/left.svg" alt="logo" className="cursor-pointer" />
                    </a>
                </div>
                <div className="flex gap-7 mt-7">
                    <a href="https://twitter.com/cuongtwitt" target="_blank">
                        <img src="/public/logo/twitter.svg" alt="twitter" className="cursor-pointer" />
                    </a>
                    <a href="https://www.facebook.com/tvc95" target="_blank">
                        <img src="/public/logo/facebook.svg" alt="facebook" className="cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/cuongins/" target="_blank">
                        <img src="/public/logo/instagram.svg" alt="instagram" className="cursor-pointer" />
                    </a>
                </div>
                <div className="my-10 mx-9 text-xs">
                    <p>© Copyright 2020 Bella Onojie.com</p>
                </div>
            </div>
        </section>
    )
}
export default DeliCode