import ResponsiveCard from "./ResponsiveCard";
import FieldAndButton from "./FieldAndButton";
function App() {
  return (
    <div className="flex flex-wrap justify-center align-middle p-24">
      <ResponsiveCard />
      <div className="p-64"></div>
      <FieldAndButton />
    </div>
  );
}

export default App;
