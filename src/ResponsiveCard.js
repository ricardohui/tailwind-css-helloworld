import logo from "./logo.svg";

function ResponsiveCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl md:max-w-xl overflow-hidden shadow-xl">
      <div className="md:flex">
        <div className="md:flex">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={logo}
            alt="ChitChat Logo"
          />
        </div>
        <div className="p-7">
          <div className="uppercase text-primary-500 tracking-wider font-semibold text-sm">
            Case Study
          </div>
          <a className="block mt-1 text-lg leading-tight font-medium text-black hover:underline ">
            Find customers for your new business
          </a>
          <p className="mt-2 text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveCard;
