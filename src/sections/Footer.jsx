import { footerLogo } from "../assets/images";
import {socialMedia, footerLinks} from "../constants";
import {copyrightSign} from "../assets/icons";

const Footer = () => {
  return (
    <>
      <footer className="max-container">
        <div className="flex items-start max-lg:flex-col flex-wrap gap-20 justify-center">
          <div className="flex items-start flex-col">
            <a href="/">
              <img
                src={footerLogo}
                alt="logo"
                width={150}
                height={46}
                className="m-0"
              />
            </a>
            <p className="mt-6 text-white-400 font-montserrat sm:max-w-sm leading-7 text-base">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
                {socialMedia.map((icons) => (
                  <div
                  className="flex justify-center items-center rounded-full w-12 h-12 bg-white"
                   key={icons.alt}     
                  >
                    <img src={icons.src}
                     alt={icons.alt}
                     width={24}
                     height={24}
                      />
                  </div>  
                ))}                          
            </div>
          </div>
                {/* footer links */}
                
            <div className="text-white-400 flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((links) => (
                      <li className="mt-3 font-montserrat leading-normal text-base text-white-400 hover:text-slate-gray"
                       key={links.name}>
                        <a href={links.link}>{links.name}</a>
                      </li>
                    ))}
                  </ul>  
                </div>
              ))}
            </div>
        </div>
        {/* copyright sign */}
        <div className="flex justify-between text-white-400 mt-20 max-sm:flex-col max-sm:items-center">
              <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer gap-2 ">
                <img src={copyrightSign} alt="copyright sign" 
                height={20}
                width={20}
                className="rounded-full m-0"
                />
                <p>Copyright. All rights reserved.</p>
              </div>
              <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;


