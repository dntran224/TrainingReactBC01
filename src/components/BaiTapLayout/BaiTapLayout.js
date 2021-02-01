//rcc

import React, { Component } from "react";
import BTHeader from "./BTHeader";
import BTSlider from "./BTSlider";
import ProductList from "./ProductList";
import Promotion from "./Promotion";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div className="BaiTapLayout">
        <BTHeader />
        <BTSlider />
        <ProductList />
        <Promotion />
      </div>
    );
  }
}


