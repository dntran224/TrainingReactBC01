import React, { Component } from 'react'
import ThongTinSinhVien from './ThongTinSinhVien'

export default class DemoProps extends Component {


    mangSinhVien = [
        {ma:'sv01',ten:'AAA',tuoi:18},
        {ma:'sv02',ten:'BBB',tuoi:22},
        {ma:'sv03',ten:'CCC',tuoi:24},
        
    ]

    renderSinhVien = () => {
        const result = this.mangSinhVien.map((sv,index)=>{
            return <div className="col-4" key={index}>
                <ThongTinSinhVien sinhVien={sv} />
            </div>
        });
        return result;
    }


    render() {
        return (
            <div className="container">
                <h3>Thông tin sinh viên</h3>
                <div className="row">
                    {this.renderSinhVien()}
                </div>
            </div>
        )
    }
}
