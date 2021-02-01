import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {


    state = {
        imgSrc: './img/car/products/steel-car.jpg'
    }


    changeColor = (color) => {
        // thay đổi giá trị hình dựa vào biến màu
        this.setState({
            imgSrc: `./img/car/products/${color}-car.jpg`,
        });
        // hàm setState thay đổi biến this.state.imgSrc => đồng thời gọi render lại giao diện
    };


    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="w-100" src={this.state.imgSrc} />
                    </div>
                    
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                                <button onClick={(event)=>{
                                    this.changeColor('red');
                                }}>Red</button>    
                            </div>
                            <div className="col-4">
                            <button onClick={(event)=>{
                                    this.changeColor('silver');
                                }}>Silver</button>
                            </div>
                            <div className="col-4">
                            <button onClick={(event)=>{
                                    this.changeColor('black');
                                }}>Black</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
