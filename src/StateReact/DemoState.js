import React, { Component } from "react";

export default class DemoState extends Component {
  userName = "CyberSoft";
  state = { //this.state là 1 thuộc tính đặc biệt (có sẵn) của react class component, chứa các giá trị thay đổi trên giao diện khi người dùng thao tác
      isLogin: false
  };
  // isLogin = false;

  renderLoginTemplate = () => {
      if(this.state.isLogin){
          return <a className="nav-link">Hello {this.userName}</a>
      }
      return <button className="nav-link" onClick={(e)=>{
          // khi click vào nút đăng nhập => gọi hàm handle login
          this.handleLogin();
      }}>Đăng nhập</button>
  };

  handleLogin = () => {
      // this.setSate là phương thức bất đồng bộ chứa 2 tham số là state mới và callback (hàm) thực thi sau khi render lại
      this.setState({
        isLogin : true
    }, ()=>{
          console.log(this.state);
      });  // setState là phương thức có sẵn của react class component dùng để set lại giá trị của biến state và làm render lại giao diện

  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
              {/*this.isLogin ? <a className="nav-link">Hello {this.userName}</a> : <button>Đăng nhập</button>*/}
              {this.renderLoginTemplate()}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
