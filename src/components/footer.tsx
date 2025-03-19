import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          {/* Left side with logo and tagline */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-5xl md:text-7xl font-bold mb-1">Blind Date</h2>
            <p className="text-hotPink md:text-lg ml-1">Built with love in Denver, Colorado</p>
          </div>
          
          {/* Right side with links - offset to the right */}
          <div className="mt-20 md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Navigation Links */}
            <div className="col-span-1">
              <h3 className="font-semibold text-2xl mb-3 border-b-2 mr-20">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="/#about" className="hover:text-pink-400 transition duration-300">Mission</a></li>
                <li><a href="/#whatif" className="hover:text-pink-400 transition duration-300">What If</a></li>
                <li><a href="/#process" className="hover:text-pink-400 transition duration-300">Our Process</a></li>
                <li><a href="/#comingsoon" className="hover:text-pink-400 transition duration-300">Coming Soon</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div className="col-span-1">
              <h3 className="font-semibold text-2xl mb-3 border-b-2 mr-20">Company</h3>
              <ul className="space-y-2">
                <li><a href="/company/careers" className="hover:text-pink-400 transition duration-300">Careers</a></li>
                <li><a href="/company/press" className="hover:text-pink-400 transition duration-300">Press</a></li>
                <li><a href="/company/support" className="hover:text-pink-400 transition duration-300">Support</a></li>
                <li><a href="/company/become_a_host" className="hover:text-pink-400 transition duration-300">Have a Biz & Want to Host Dates?</a></li>
              </ul>
            </div>
            
            {/* Legal - single column */}
            <div className="col-span-1">
              <h3 className="font-semibold text-2xl mb-3 border-b-2 mr-20">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/legal/terms_and_conditions" className="hover:text-pink-400 transition duration-300">Terms & Conditions</a></li>
                <li><a href="/legal/community_guidelines" className="hover:text-pink-400 transition duration-300">Community Guidelines</a></li>
                <li><a href="/legal/privacy_policy" className="hover:text-pink-400 transition duration-300">Privacy Policy</a></li>
                <li><a href="/legal/colorado_safety_policy" className="hover:text-pink-400 transition duration-300">Colorado Safety Policy</a></li>
                <li><a href="/legal/safety_tips" className="hover:text-pink-400 transition duration-300">Safety Tips</a></li>
                <li><a href="/legal/ccpa" className="hover:text-pink-400 transition duration-300">CCPA</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 my-8">
          <a href="#" className="text-logoBlue hover:text-white transition duration-300">
            <span className="sr-only">YouTube</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .5 6.186C0 8.07 0 12 0 12s0 3.93.5 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="#" className="text-logoBlue hover:text-white transition duration-300">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
          <a href="#" className="text-logoBlue hover:text-white transition duration-300">
            <span className="sr-only">Bluesky</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm2.5 14.5h-5L7 12l5-5 5 5-2.5 4.5z"/>
            </svg>
          </a>
          <a href="#" className="text-logoBlue hover:text-white transition duration-300">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.047 10.047 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="text-logoBlue hover:text-white transition duration-300">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
        
        {/* Copyright at the very bottom */}
        <div className=" text-slate-500 text-xs pt-4 border-t border-slate-800">
          <p>&copy; Blind Date World, LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;