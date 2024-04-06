import "./style/input.css";
import "./App.css";
// components
import { MyContainer, withFontLoader } from "./components";

const MyComponentWithFonts = withFontLoader(MyContainer, [
  "Overpass:300,400,700",
]);
function App() {
  return (
    <>
      <MyComponentWithFonts />
    </>
  );
}
export default App;
