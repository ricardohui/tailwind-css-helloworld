import ResponsiveCard from "./ResponsiveCard";
import FieldAndButton from "./FieldAndButton";
import LandingHeader from "./LandingHeader";
function App() {
  return (
    <div className="flex flex-wrap justify-center ">
      <LandingHeader />
      <ResponsiveCard />
      {/* <div className="min-h-screen">Something</div> */}
      <FieldAndButton />
      {/* <div className="min-h-screen"></div> */}
    </div>
  );
}

export default App;
