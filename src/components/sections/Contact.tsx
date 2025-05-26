import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 bg-white dark:bg-gray-900 text-black dark:text-gray-600">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Left side - Contact Info */}
          <div className="w-full md:w-2/5 bg-[#4E4E4E] bg-opacity-70 p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Contact Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-xl mt-1" />
                <div>
                  <p>25 Avenue de Paris</p>
                  <p>75002 Paris</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-xl" />
                <p>hello@nextversion.com</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <FaPhone className="text-xl" />
                <p>+1 555 505 555</p>
              </div>
            </div>
            
            <div className="mt-12 flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Right side - Contact Form */}
          <div className="w-full md:w-3/5 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none"
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none resize-none"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#4E4E4E] text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;