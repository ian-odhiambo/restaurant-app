import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-[#01385f] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          <div>
            <h4 className="font-bold">26 Church rd Westlands,</h4>
            <p>0114952730</p>

          </div>
          <div>
            <h4 className="font-bold">Garden estate rd(Roasters)</h4>
            <p>0746827730</p>
          </div>
        </div>
        <div>
        <SocialIcons />
        </div>
 
        <div>  <p className="text-sm">
          © {new Date().getFullYear()} Izzi Fish Restaurant
        </p></div>
      </div>
    </footer>
  );
};

export default Footer;
