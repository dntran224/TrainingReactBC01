import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    mangSinhVien = [
        {ma:1,ten:'AAA'},
        {ma:2,ten:'BBB'},
        {ma:3,ten:'CCC'}
    ]


    renderSinhVien = () => {
        // const arrJSX = [];
        // for(let index=0; index < this.mangSinhVien.length; index++){
        //     // Mỗi lần duyệt lấy ra 1 đối tượng sinh viên trong mảng this.mangSinhVien
        //     let tagP = <p key={index}>{this.mangSinhVien[index].ten}</p>;
        //     arrJSX.push(tagP);
        // }
        // console.log('arrJSX',arrJSX);
        // return arrJSX;        

        const arrJSX = this.mangSinhVien.map((sinhVien,index) => {
            return <li key={index}>
                {sinhVien.ten}
            </li>
        });
        return arrJSX;
    }



    render() {
        return (
            <div>
                <ul>
                {this.renderSinhVien()}
                </ul>

                <table>
                    <thead>
                        <tr>
                            <th>Mã sv</th>
                            <th>Tên sv</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mangSinhVien.map((sinhVien,index)=>{
                            return <tr>
                                <td>{sinhVien.ma}</td>
                                <td>{sinhVien.ten}</td>
                                <td><button className="btn btn-danger">Xóa</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
