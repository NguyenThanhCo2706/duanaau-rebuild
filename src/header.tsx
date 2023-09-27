import facebook from './facebook.svg';
import { ReactComponent as FacebookIcon } from './facebook.svg';

export default function Header() {

  return (
    <header>
      <div className="rr-left">
        <div className="rl-text">CÔNG TY DU HỌC HÀNG ĐẦU VIỆT NAM</div>
      </div>
      <div className="rr-right">
        <div className="rr-text">
          <ul className="input-group">
            <li className="item-share">
              <div className="items instagram" style={{ backgroundColor: 'white', textAlign: 'center' }}>
                <img src={process.env.PUBLIC_URL + 'images/instagram.png'} alt="" />
              </div>
              <div className="items facebook" style={{ backgroundColor: 'white' }}>
                <img src={process.env.PUBLIC_URL + 'images/facebook.png'} alt="" />
              </div>
              <div className="items youtube" style={{ backgroundColor: 'white' }}>
                <img src={process.env.PUBLIC_URL + 'images/youtube.png'} alt="" />
              </div>
            </li>
            <li className="link-btn-top">
              <a href="https://duhocaau.vn/chi-tiet-hoi-thao/rot-visa-do-ban-chua-gap-dung-chuyen-gia-1" style={{ backgroundColor: "white" }}>
                <div className="items" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <i className="fa-solid fa-display"></i>
                </div>
                <span>Tra cứu hồ sơ</span>
              </a>
            </li>
            <li className="link-btn-top">
              <a href="https://duhocaau.vn/chi-tiet-hoi-thao/rot-visa-do-ban-chua-gap-dung-chuyen-gia-1" style={{ backgroundColor: "white" }}>
                <div className="items" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <span>Đăng ký tư vấn</span>
              </a>
            </li>
            <li className="link-btn-top">
              <a href="https://duhocaau.vn/chi-tiet-hoi-thao/rot-visa-do-ban-chua-gap-dung-chuyen-gia-1" style={{ backgroundColor: "white" }}>
                <div className="items" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <i className="fa-solid fa-pen"></i>
                </div>
                <span>Nộp hồ sơ online</span>
              </a>
            </li>
            <li className="link-btn-top">
              <a href="https://duhocaau.vn/chi-tiet-hoi-thao/rot-visa-do-ban-chua-gap-dung-chuyen-gia-1" style={{ backgroundColor: "white" }}>
                <div className="items" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <i className="fa-solid fa-book"></i>
                </div>
                <span>Đăng ký gặp chuyên gia</span>
              </a>
            </li>
            <li className="flag"><a href="https://duhocaau.vn/home">EN</a></li>
            <li className="search-top">
              <a href="https://duhocaau.vn/#" data-toggle="modal" data-target="#search-modal">
                <i className="fa-solid fa-magnifying-glass" style={{ color: 'white' }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}