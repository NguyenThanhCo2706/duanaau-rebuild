export default function Session() {

  return (
    <section className="bg-white menu-fixtop"><div className="container p-0">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="https://duhocaau.vn/"><img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="slide-collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://duhocaau.vn/"><i className="fa fa-home" style={{ fontSize: '18px' }}></i><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dmenu dropdown">
              <a className="nav-link dropdown-toggle" href="https://duhocaau.vn/gioi-thieu" role="button" aria-haspopup="true" aria-expanded="false">Giới thiệu</a><span className="down-arrow" data-toggle="dropdown"></span>
              <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown">
                <h6 className="border-bottom"><a href="https://duhocaau.vn/gioi-thieu/ve-du-hoc-a-au">Về du học Á-Âu</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/gioi-thieu/co-cau-to-chuc">Cơ cấu tổ chức</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/gioi-thieu/quy-trinh-lam-viec">Quy trình làm việc</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/gioi-thieu/thanh-tich">Thành tích</a></h6>
              </div>
            </li>
            <li className="nav-item dropdown megamenu">
              <a className="nav-link dropdown-toggle" href="https://duhocaau.vn/du-hoc-cac-nuoc" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Du học các nước</a><span className="down-arrow" data-toggle="dropdown"></span>
              <div className="dropdown-menu largemenu" aria-labelledby="navbarDropdown">
                <div className="row">
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/du-hoc-cac-nuoc/my">Du học Mỹ <img src="./Công ty Tư Vấn Du Học Á - Âu _ Tư Vấn Du Học Uy Tín Tại TPHCM_files/3JHvuPcN8dEN1QuhWDZosflDaPk0WjxrPQBqyUeO.png" alt="Mỹ" /></a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-pho-thong">Chương trình phổ thông</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-cao-dang">Chương trình cao đẳng</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-dai-hoc-va-sau-dai-hoc">Chương trình đại học &amp; sau đại học</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/kinh-nghiem-du-hoc">Kinh nghiệm du học</a>

                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/du-hoc-cac-nuoc/uc">Du học Úc <img src="./Công ty Tư Vấn Du Học Á - Âu _ Tư Vấn Du Học Uy Tín Tại TPHCM_files/ACA5QW0lqkNIPgzAs3cnSAz6BXHjY0aqS325CuUd.png" alt="Úc" /></a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-pho-thong-uc">Chương trình phổ thông</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-cao-dang-uc">Chương trình cao đẳng</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-dai-hoc-va-sau-dai-hoc-uc">Chương trình đại học &amp; sau đại học</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/kinh-nghiem-du-hoc-uc">Kinh nghiệm du học</a>

                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/du-hoc-cac-nuoc/canada">Du học Canada <img src="./Công ty Tư Vấn Du Học Á - Âu _ Tư Vấn Du Học Uy Tín Tại TPHCM_files/DqID8rFuzo0zSsY2s6HclJqJimHCUdP5KqAUziC9.png" alt="Canada" /></a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-pho-thong-1">Chương trình phổ thông</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-cao-dang-1">Chương trình cao đẳng</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-dai-hoc-va-sau-dai-hoc-1">Chương trình đại học &amp; sau đại học</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/kinh-nghiem-du-hoc-1">Kinh nghiệm du học</a>

                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/du-hoc-cac-nuoc/anh">Du học Anh <img src="./Công ty Tư Vấn Du Học Á - Âu _ Tư Vấn Du Học Uy Tín Tại TPHCM_files/ldDIw9jjkZvJEijIgvp9ZF8JAr5Oww62uY9Lc5sK.png" alt="Anh" /></a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-pho-thong-2">Chương trình phổ thông</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-cao-dang-2">Chương trình cao đẳng</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-dai-hoc-va-sau-dai-hoc-2">Chương trình đại học &amp; sau đại học</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/kinh-nghiem-du-hoc-2">Kinh nghiệm du học</a>

                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/du-hoc-cac-nuoc/singapore">Du học Singapore <img src="./Công ty Tư Vấn Du Học Á - Âu _ Tư Vấn Du Học Uy Tín Tại TPHCM_files/bFrqV8kwdVmIF8JTlOM9dw5eS3R3UyuSUWkEc2Jf.png" alt="Singapore" /></a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-pho-thong-3">Chương trình phổ thông</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-cao-dang-3">Chương trình cao đẳng</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-dai-hoc-va-sau-dai-hoc-3">Chương trình đại học &amp; sau đại học</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/kinh-nghiem-du-hoc-3">Kinh nghiệm du học</a>

                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/du-hoc-cac-nuoc/new-zealand">Du học New Zealand <img src="./Công ty Tư Vấn Du Học Á - Âu _ Tư Vấn Du Học Uy Tín Tại TPHCM_files/x3fiEbuPpDnBU2QQzrO831BUwEfjMBSrfhMZsF5f.png" alt="New Zealand" /></a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-pho-thong-4">Chương trình phổ thông</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-cao-dang-4">Chương trình cao đẳng</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-dai-hoc-va-sau-dai-hoc-4">Chương trình đại học &amp; sau đại học</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/kinh-nghiem-du-hoc-4">Kinh nghiệm du học</a>

                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/du-hoc-cac-nuoc/thuy-sy">Du học Thụy Sỹ <img src="./Công ty Tư Vấn Du Học Á - Âu _ Tư Vấn Du Học Uy Tín Tại TPHCM_files/E0jfv68P21fIbrgJBkiKGZWYXQ7yJHq3RPmc5mhg.png" alt="Thụy Sỹ" /></a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-cao-dang-5">Chương trình cao đẳng</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-dai-hoc-va-sau-dai-hoc-5">Chương trình đại học &amp; sau đại học</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/kinh-nghiem-du-hoc-5">Kinh nghiệm du học</a>

                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/du-hoc-cac-nuoc/ha-lan">Du học Hà Lan <img src="./Công ty Tư Vấn Du Học Á - Âu _ Tư Vấn Du Học Uy Tín Tại TPHCM_files/IVuPKhsDm6HtmptvrkhfnXF16fy70JdsNY9DOTqx.png" alt="Hà Lan" /></a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-dai-hoc-va-sau-dai-hoc-6">Chương trình đại học &amp; sau đại học</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/kinh-nghiem-du-hoc-6">Kinh nghiệm du học</a>

                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/du-hoc-cac-nuoc/philippines">Du học Philippines <img src="./Công ty Tư Vấn Du Học Á - Âu _ Tư Vấn Du Học Uy Tín Tại TPHCM_files/7pmVDnEkfXEGDzv7z0C2Avd0X2ngaDckie5fiAyn.png" alt="Philippines" /></a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-pho-thong-7">Chương trình phổ thông</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/chuong-trinh-dai-hoc-va-sau-dai-hoc-7">Chương trình đại học &amp; sau đại học</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/chuong-trinh-du-hoc-cac-nuoc/kinh-nghiem-du-hoc-7">Kinh nghiệm du học</a>

                    </div>
                  </div>

                </div>
              </div>
            </li>
            <li className="nav-item dmenu dropdown">
              <a className="nav-link dropdown-toggle" href="https://duhocaau.vn/nganh-hot" role="button" aria-haspopup="true" aria-expanded="false">Ngành hot</a><span className="down-arrow" data-toggle="dropdown"></span>
              <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown12">
                <h6 className="border-bottom"><a href="https://duhocaau.vn/nganh-hot/nha-hang-khach-san">Du học ngành Nhà Hàng - Khách sạn</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/nganh-hot/phan-tich-du-lieu">Phân tích dữ liệu</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/nganh-hot/tri-tue-nhan-tao">Trí tuệ nhân tạo</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/nganh-hot/tai-chinh">Tài chính</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/nganh-hot/thiet-ke-do-hoa">Thiết kế đồ họa</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/nganh-hot/quan-tri-kinh-doanh">Quản trị kinh doanh</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/nganh-hot/nganh-khac">Ngành khác</a></h6>
              </div>
            </li>
            <li className="nav-item dropdown megamenu">
              <a className="nav-link dropdown-toggle" href="https://duhocaau.vn/tin-tuc" id="navbarDropdown20" role="button" aria-haspopup="true" aria-expanded="false">Tin tức - Học Bổng</a><span className="down-arrow" data-toggle="dropdown"></span>
              <div className="dropdown-menu largemenu" aria-labelledby="navbarDropdown">
                <div className="row">
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6 className="border-bottom"><a href="https://duhocaau.vn/tin-tuc/tin-tuc-a-au">Tin tức Á Âu</a></h6>
                      <h6 className="border-bottom"><a href="https://duhocaau.vn/tin-tuc/khuyen-hoc">Khuyến học</a></h6>
                      <h6 className="border-bottom"><a href="https://duhocaau.vn/tin-tuc/hanh-trang-du-hoc">Hành trang du học</a></h6>
                      <h6 className="border-bottom"><a href="https://duhocaau.vn/hoc-bong">Học bổng</a></h6>
                      <h6 className="border-bottom"><a href="https://duhocaau.vn/hinh-anh">Hình ảnh</a></h6>
                      <h6 className="border-bottom"><a href="https://duhocaau.vn/cam-nhan-doi-tac">Cảm nhận của đối tác</a></h6>
                      <h6 className="border-bottom"><a href="https://duhocaau.vn/cam-nhan-du-hoc-sinh">Học sinh Du học Á - Âu nói gì</a></h6>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/video">Video</a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/video/video-cong-ty">Video công ty</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/video/chia-se-cua-hoc-sinh-dau-visa">Chia sẻ của học sinh đậu Visa</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/video/a-au-tv">Á – Âu TV</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/video/tu-van-tuyen-sinh">Tư vấn tuyển sinh</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/video/hoi-nhanh-dap-nhanh">Hỏi nhanh – đáp nhanh</a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/hoi-thao">Hội thảo</a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/hoi-thao/my">Du học Mỹ</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/hoi-thao/uc">Du học Úc</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/hoi-thao/canada">Du học Canada</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/hoi-thao/anh">Du học Anh</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/hoi-thao/singapore">Du học Singapore</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/hoi-thao/new-zealand">Du học New Zealand</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/hoi-thao/thuy-sy">Du học Thụy Sỹ</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/hoi-thao/ha-lan">Du học Hà Lan</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/hoi-thao/philippines">Du học Philippines</a>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 mb-4">
                    <div className="border-bottom">
                      <h6><a href="https://duhocaau.vn/lich-tiep-truong">Lịch tiếp trường</a></h6>
                      <a className="dropdown-item" href="https://duhocaau.vn/lich-tiep-truong/my">Mỹ</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/lich-tiep-truong/uc">Úc</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/lich-tiep-truong/canada">Canada</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/lich-tiep-truong/anh">Anh</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/lich-tiep-truong/singapore">Singapore</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/lich-tiep-truong/new-zealand">New Zealand</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/lich-tiep-truong/thuy-sy">Thụy Sỹ</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/lich-tiep-truong/ha-lan">Hà Lan</a>
                      <a className="dropdown-item" href="https://duhocaau.vn/lich-tiep-truong/philippines">Philippines</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dmenu dropdown destop-hidden">
              <a className="nav-link dropdown-toggle" href="https://duhocaau.vn/danh-sach-truong" role="button" aria-haspopup="true" aria-expanded="false">Danh sách trường</a><span className="down-arrow" data-toggle="dropdown"></span>
              <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown12">
                <h6 className="border-bottom"><a href="https://duhocaau.vn/danh-sach-truong/danh-sach-truong-my">Danh sách trường Mỹ</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/danh-sach-truong/danh-sach-truong-uc">Danh sách trường Úc</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/danh-sach-truong/danh-sach-truong-canada">Danh sách trường Canada</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/danh-sach-truong/danh-sach-truong-anh">Danh sách trường Anh</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/danh-sach-truong/danh-sach-truong-singapore">Danh sách trường Singapore</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/danh-sach-truong/danh-sach-truong-new-zealand">Danh sách trường New Zealand</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/danh-sach-truong/danh-sach-truong-thuy-sy">Danh sách trường Thụy Sỹ</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/danh-sach-truong/danh-sach-truong-ha-lan">Danh sách trường Hà Lan</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/danh-sach-truong/danh-sach-truong-philippines">Danh sách trường Philippines</a></h6>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link" href="https://duhocaau.vn/visa">Visa</a></li>
            <li className="nav-item"><a className="nav-link" href="https://duhocaau.vn/uu-dai">Ưu đãi</a></li>
            <li className="nav-item"><a className="nav-link" href="https://duhocaau.vn/phong-van-visa-my">Phỏng vấn visa Mỹ</a></li>
            <li className="nav-item dmenu dropdown">
              <a className="nav-link dropdown-toggle" href="https://duhocaau.vn/lienhe" role="button" aria-haspopup="true" aria-expanded="false">Liên hệ</a><span className="down-arrow" data-toggle="dropdown"></span>
              <div className="dropdown-menu sm-menu" aria-labelledby="navbarDropdown4">
                <h6 className="border-bottom"><a href="https://duhocaau.vn/lienhe">Liên hệ chúng tôi</a></h6>
                <h6 className="border-bottom"><a href="https://duhocaau.vn/tuyen-dung">Tuyển dụng</a></h6>
              </div>
            </li>
            <li className="nav-item destop-hidden"><a className="nav-link" href="http://app.duhocaau.vn/" target="_blank">Tra cứu hồ sơ</a></li>
            <li className="flag nav-item dmenu destop-hidden"><a href="https://duhocaau.vn/home">EN</a></li>
          </ul>
        </div>
      </nav>
    </div>
    </section>
  )
}