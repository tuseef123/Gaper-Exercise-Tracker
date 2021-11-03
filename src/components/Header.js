import React from "react";
import varun from "../plugins/images/users/varun.jpg";
import logo from "../plugins/images/New Project (1).png";
import New from "../plugins/images/New.ico";
function Header() {
  return (
    <>
      {/* <!-- ============================================================== -->
      <!-- Topbar header - style you can find in pages.scss -->
      <!-- ============================================================== --> */}
      <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header" data-logobg="skin6">
            {/* <!-- ============================================================== -->
            <!-- Logo -->
            <!-- ============================================================== --> */}
            <a className="navbar-brand" href="dashboard.html">
              {/* <!-- Logo icon --> */}
              <b className="logo-icon">
                {/* <!-- Dark Logo icon --> */}
                <img src={New} alt="homepage" />
              </b>
              {/* <!--End Logo icon --> */}
              {/* <!-- Logo text --> */}
              <span className="logo-text" style={{ marginLeft: "-20px" }}>
                {/* <!-- dark Logo text --> */}
                <img src={logo} alt="homepage" />
              </span>
            </a>
            {/* <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- toggle and nav items -->
            <!-- ============================================================== --> */}
            <a
              className="
                nav-toggler
                waves-effect waves-light
                text-dark
                d-block d-md-none
              "
              href="javascript:void(0)"
            >
              <i className="ti-menu ti-close"></i>
            </a>
          </div>
          {/* <!-- ============================================================== -->
          <!-- End Logo -->
          <!-- ============================================================== --> */}
          <div
            className="navbar-collapse collapse"
            id="navbarSupportedContent"
            data-navbarbg="skin5"
          >
            {/* <!-- ============================================================== -->
            <!-- Right side toggle and nav items -->
            <!-- ============================================================== --> */}
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              {/* <!-- ============================================================== -->
              <!-- Search -->
              <!-- ============================================================== --> */}
              <li className="in">
                <form
                  role="search"
                  className="app-search d-none d-md-block me-3"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control mt-0"
                  />
                  <a href="" className="active">
                    <i className="fa fa-search"></i>
                  </a>
                </form>
              </li>
              {/* <!-- ============================================================== -->
              <!-- User profile and search -->
              <!-- ============================================================== --> */}
              <li>
                <a className="profile-pic" href="profile.html">
                  <img
                    src={varun}
                    alt="user-img"
                    width="36"
                    className="img-circle"
                  />
                  <span className="text-white font-medium">Haris</span>
                </a>
              </li>
              {/* <!-- ============================================================== -->
              <!-- User profile and search -->
              <!-- ============================================================== --> */}
            </ul>
          </div>
        </nav>
      </header>
      {/* <!-- ============================================================== -->
      <!-- End Topbar header --> */}
    </>
  );
}

export default Header;
