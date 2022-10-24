import "bootstrap/dist/css/bootstrap.min.css"
import './CSS/GroupButton.css'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React from "react";
const NavbarButton = () => {
    return ( 
        <nav>
            <ButtonGroup class="btn-group">
                <button>ค้นหาจากห้อง</button>
                <button>เฟอร์นิเจอร์</button>
                <button>เครื่องนอน</button>
                <button>สินค้าสำหรับห้องน้ำ</button>
                <button>สินค้าสำหรับครัว</button>
                <button>ของแต่งบ้าน</button>
                <button>เครื่องใช้ไฟฟ้า</button>
                <button>ฟิตเนสและสุขภาพ</button>
                <button>วัสดุปูพื้น</button>
                <button>สินค้านอกบ้าน</button>
                <button>ก่อสร้างและรีโนเวท</button>
                <button>โปรโมชัน</button>
            </ButtonGroup>
        </nav>
     );
}
 
export default NavbarButton;