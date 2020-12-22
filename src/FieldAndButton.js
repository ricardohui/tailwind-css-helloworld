export default function FieldAndButton() {
  return (
    <div className="p-4">
      <form className="">
        <input
          className="border border-transparent p-3 w-56 shadow-lg mr-5 rounded-sm focus:ring-8 focus:ring-purple-600  focus:outline-none focus:border-transparent"
          placeholder="Your email"
        ></input>
        <button
          className=" bg-primary-600 text-white p-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-8 focus:ring-purple-100 focus:ring-opacity-90"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
