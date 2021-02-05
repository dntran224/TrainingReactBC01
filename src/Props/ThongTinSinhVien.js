import React, { Component } from "react";

export default class ThongTinSinhVien extends Component {
  render() {
      // this.props là thuộc tính có sẵn của component

      // this.state != this.props
      // giống nhau: dùng để binding dữ liệu lên giao diện và đều là thuộc tính có sẵn của react class component
      // khác nhau:
      //this.state quản lý các trạng thái của biến làm thay đổi giao diện
      //this.props nhận giá trị từ component cha truyền vào
      //this.state (=> gọi phương thức setState) có thể gán lại giá trị đc nhg this.props thì ko cho phép gán lại giá trị

    //   let {ten,tuoi,ma} = this.props.sinhVien;
      let {sinhVien} = this.props;

    return (
      <div className="card text-left">
        <img className="card-img-top" width="100" height="180" src="https://picsum.photos/100/180" alt="photo" />
        <div className="card-body">
          {/* <h4 className="card-title">{this.props.maSV}</h4>
          <p className="card-text">{this.props.sinhVien.ten}</p> */}
          <h4 className="card-title">{sinhVien?.ten}</h4>
          <p className="card-text">{sinhVien?.tuoi}</p>
          
        </div>
      </div>
    );
    // dấu ? ở props là để khi trình duyệt đọc code, nó sẽ hiểu ý mình là nếu có thì show ra, ko có thì ko show, chứ ko phải khi ko có thì sẽ thành lỗi, dừng đọc code
  }
}
