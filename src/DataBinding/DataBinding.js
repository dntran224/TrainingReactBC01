import React, { Component } from "react";
import style from "./DataBinding.module.css";

// class component
export default class DataBinding extends Component {
  sinhVien = {
    id: 1,
    ten: "XYZ",
  };

  renderSinhVien = () => {
    // Binding phương thức thì phương thức đó phải trả về nội dung là 1 số hoặc chuỗi hoặc 1 thẻ component bao phủ

    return (
      <div>
        id: {this.sinhVien.id} - ten: {this.sinhVien.ten}
      </div>
    );
  };

  render() {
    // phương thức

    let title = "hellooo";
    let sanPham = {
      ten: "iphone 5",
      gia: 1000,
      hinhAnh: "https://picsum.photos/200/200",
    };

    return (
      <div>
        <p className={` ${style.textGreen} ${style["txt-light"]}`}>aabbcc</p>

        <p style={{ backgroundColor: "red", color: "white" }}>bbbbbbbb</p>
        
        {this.renderSinhVien()}
        <h1>Họ Tên: {this.sinhVien.ten}</h1>
        <p id="title">{title}</p>
        <div class="card text-left w-25">
          <img class="card-img-top" src={sanPham.hinhAnh} alt="" />
          <div class="card-body">
            <h4 class="card-title">{sanPham.ten}</h4>
            <p class="card-text">{sanPham.gia}</p>
          </div>
        </div>
      </div>
    );
  }
}
