import logo from "./logo.svg";
import "./App.css";
import HeaderFunc from "./components/HeaderFunc";
import HeaderClass from "./components/HeaderClass";
import DataBinding from './DataBinding/DataBinding';
import RenderWithMap from './RenderWithMap/RenderWithMap'
import BaiTapRenderMap from './RenderWithMap/BaiTapRenderMap'
import DemoProps from './Props/DemoProps'
import BTProductList from './components/BaiTapLayout/BTProductList'
import DemoQLSP from "./Props/DemoQLSP/DemoQLSP";


function App() {
  return (
    <div className="App">
      {/* <DataBinding /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapRenderMap /> */}
      {/* <DemoProps /> */}
      {/* <BTProductList /> */}
      <DemoQLSP /> 
    </div>
  );
}

export default App;
