import logo from "./logo.svg";
import "./App.css";
import HeaderFunc from "./components/HeaderFunc";
import HeaderClass from "./components/HeaderClass";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoState from "./StateReact/DemoState"
import BaiTapChonXe from "./StateReact/BaiTapChonXe";

function App() {
  return (
    <div className="App">
      <HandleEvent />
      <br />
      <DemoState />
      <br />
      <BaiTapChonXe />
    </div>
  );
}

export default App;
