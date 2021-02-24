import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import KehadiranScreen from './Screens/KehadiranScreen';
import PPDBScreen from './Screens/PPDBScreen';
import EkskulScreen from './Screens/EkskulScreen';
import DatasiswaScreen from './Screens/DatasiswaScreen';
import KelasScreen from './Screens/KelasScreen';
import BKScreen from './Screens/BKScreen';
import DetailSiswa from './Screens/DetailSiswa';
import LoginScreen from './Auth/LoginScreen';

function App() {
  return (
    <>
      {/* Preloader */}
      <div className="preloader">
        <div className="lds-ripple">
          <div className="lds-pos" />
          <div className="lds-pos" />
        </div>
      </div>

      <Router>
        <Switch>
              <Route exact path='/'>
                <LoginScreen/>
              </Route>

          <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
            {/* Header */}
            <header className="topbar" data-navbarbg="skin6">
              <nav className="navbar top-navbar navbar-expand-md">
                <div className="navbar-header" data-logobg="skin6">
                  {/* This is for the sidebar toggle which is visible on mobile only */}
                  <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
                  {/* ============================================================== */}
                  {/* Logo */}
                  {/* ============================================================== */}
                  <div className="navbar-brand">
                    {/* Logo icon */}
                    <a href="/">
                      <b className="logo-icon">
                        {/* Dark Logo icon */}
                        <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                        {/* Light Logo icon */}
                        <img src="../assets/images/logo-icon.png" alt="homepage" className="light-logo" />
                      </b>
                      {/*End Logo icon */}
                      {/* Logo text */}
                      <span className="logo-text">
                        {/* dark Logo text */}
                        <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                        {/* Light Logo text */}
                        <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                      </span>
                    </a>
                  </div>
                  {/* ============================================================== */}
                  {/* End Logo */}
                  {/* ============================================================== */}
                  {/* ============================================================== */}
                  {/* Toggle which is visible on mobile only */}
                  {/* ============================================================== */}
                  <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more" /></a>
                </div>
                {/* ============================================================== */}
                {/* End Logo */}
                {/* ============================================================== */}
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                  {/* ============================================================== */}
                  {/* toggle and nav items */}
                  {/* ============================================================== */}
                  <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
                    {/* Notification */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle pl-md-3 position-relative" href="javascript:void(0)" id="bell" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span><i data-feather="bell" className="svg-icon" /></span>
                        <span className="badge badge-primary notify-no rounded-circle">5</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown">
                        <ul className="list-style-none">
                          <li>
                            <div className="message-center notifications position-relative">
                              {/* Message */}
                              <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <div className="btn btn-danger rounded-circle btn-circle"><i data-feather="airplay" className="text-white" /></div>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                  <h6 className="message-title mb-0 mt-1">Luanch Admin</h6>
                                  <span className="font-12 text-nowrap d-block text-muted">Just see
                                    the my new
                                    admin!</span>
                                  <span className="font-12 text-nowrap d-block text-muted">9:30 AM</span>
                                </div>
                              </a>
                              {/* Message */}
                              <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="btn btn-success text-white rounded-circle btn-circle"><i data-feather="calendar" className="text-white" /></span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                  <h6 className="message-title mb-0 mt-1">Event today</h6>
                                  <span className="font-12 text-nowrap d-block text-muted text-truncate">Just
                                    a reminder that you have event</span>
                                  <span className="font-12 text-nowrap d-block text-muted">9:10 AM</span>
                                </div>
                              </a>
                              {/* Message */}
                              <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="btn btn-info rounded-circle btn-circle"><i data-feather="settings" className="text-white" /></span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                  <h6 className="message-title mb-0 mt-1">Settings</h6>
                                  <span className="font-12 text-nowrap d-block text-muted text-truncate">You
                                    can customize this template
                                    as you want</span>
                                  <span className="font-12 text-nowrap d-block text-muted">9:08 AM</span>
                                </div>
                              </a>
                              {/* Message */}
                              <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                                <span className="btn btn-primary rounded-circle btn-circle"><i data-feather="box" className="text-white" /></span>
                                <div className="w-75 d-inline-block v-middle pl-2">
                                  <h6 className="message-title mb-0 mt-1">Pavan kumar</h6> <span className="font-12 text-nowrap d-block text-muted">Just
                                    see the my admin!</span>
                                  <span className="font-12 text-nowrap d-block text-muted">9:02 AM</span>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li>
                            <a className="nav-link pt-3 text-center text-dark" href="javascript:void(0);">
                              <strong>Check all notifications</strong>
                              <i className="fa fa-angle-right" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* End Notification */}
                    {/* ============================================================== */}
                    {/* create new */}
                    {/* ============================================================== */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i data-feather="settings" className="svg-icon" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                    <li className="nav-item d-none d-md-block">
                      <a className="nav-link" href="javascript:void(0)">
                        <div className="customize-input">
                          <select className="custom-select form-control bg-white custom-radius custom-shadow border-0">
                            <option selected>EN</option>
                            <option value={1}>AB</option>
                            <option value={2}>AK</option>
                            <option value={3}>BE</option>
                          </select>
                        </div>
                      </a>
                    </li>
                  </ul>
                  {/* ============================================================== */}
                  {/* Right side toggle and nav items */}
                  {/* ============================================================== */}
                  <ul className="navbar-nav float-right">
                    {/* ============================================================== */}
                    {/* Search */}
                    {/* ============================================================== */}
                    <li className="nav-item d-none d-md-block">
                      <a className="nav-link" href="javascript:void(0)">
                        <form>
                          <div className="customize-input">
                            <input className="form-control custom-shadow custom-radius border-0 bg-white" type="search" placeholder="Search" aria-label="Search" />
                            <i className="form-control-icon" data-feather="search" />
                          </div>
                        </form>
                      </a>
                    </li>
                    {/* ============================================================== */}
                    {/* User profile and search */}
                    {/* ============================================================== */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="../assets/images/users/profile-pic.jpg" alt="user" className="rounded-circle" width={40} />
                        <span className="ml-2 d-none d-lg-inline-block"><span>Hello,</span> <span className="text-dark">Jason Doe</span> <i data-feather="chevron-down" className="svg-icon" /></span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                        <a className="dropdown-item" href="javascript:void(0)"><i data-feather="user" className="svg-icon mr-2 ml-1" />
                          My Profile</a>
                        <a className="dropdown-item" href="javascript:void(0)"><i data-feather="credit-card" className="svg-icon mr-2 ml-1" />
                          My Balance</a>
                        <a className="dropdown-item" href="javascript:void(0)"><i data-feather="mail" className="svg-icon mr-2 ml-1" />
                          Inbox</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:void(0)"><i data-feather="settings" className="svg-icon mr-2 ml-1" />
                          Account Setting</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="javascript:void(0)"><i data-feather="power" className="svg-icon mr-2 ml-1" />
                          Logout</a>
                        <div className="dropdown-divider" />
                        <div className="pl-4 p-3"><a href="javascript:void(0)" className="btn btn-sm btn-info">View
                            Profile</a></div>
                      </div>
                    </li>
                    {/* ============================================================== */}
                    {/* User profile and search */}
                    {/* ============================================================== */}
                  </ul>
                </div>
              </nav>
            </header>

            {/* Sidebar */}
            <aside className="left-sidebar" data-sidebarbg="skin6">
              {/* Sidebar scroll*/}
              <div className="scroll-sidebar" data-sidebarbg="skin6">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                  <ul id="sidebarnav">
                    <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="/" aria-expanded="false"><i data-feather="home" className="feather-icon" /><span className="hide-menu">Dashboard</span></a></li>
                    <li className="list-divider" />
                    <li className="nav-small-cap"><span className="hide-menu">Pendaftaran PPDB</span></li>
                    <li class="sidebar-item"> <a class="sidebar-link has-arrow" href="javascript:void(0)"
                                aria-expanded="false"><i data-feather="file-text" class="feather-icon"></i><span
                                    class="hide-menu">PPDB </span></a>
                            <ul aria-expanded="false" class="collapse  first-level base-level-line">
                                <li class="sidebar-item"><a href="form-inputs.html" class="sidebar-link"><span
                                            class="hide-menu"> Dashboard
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href="form-input-grid.html" class="sidebar-link"><span
                                            class="hide-menu"> Calon Siswa
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href="form-checkbox-radio.html" class="sidebar-link"><span
                                            class="hide-menu"> Calon Siswa Terdaftar
                                        </span></a>
                                </li>
                                <li class="sidebar-item"><a href="form-checkbox-radio.html" class="sidebar-link"><span
                                            class="hide-menu"> Calon Siswa Diterima
                                        </span></a>
                                </li>
                            </ul>
                    </li>
                    <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="/datasiswa" aria-expanded="false"><i  className="fas fa-user" /><span className="hide-menu">Data Siswa</span></a></li>             
                    <li className="list-divider" />
                    <li className="nav-small-cap"><span className="hide-menu">Kurikulum</span></li>
                    <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="/kehadiran" aria-expanded="false"><i className="far fa-newspaper" /><span className="hide-menu">Kehadiran Siswa</span></a></li>
                    <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="/ekskul" aria-expanded="false"><i className="fas fa-baseball-ball" /><span className="hide-menu">Ekstrakulikuler</span></a></li>
                    <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="/kelas" aria-expanded="false"><i  className="far fa-address-book" /><span className="hide-menu">Rombongan Kelas</span></a></li>  
                    <li className="list-divider" />
                    <li className="nav-small-cap"><span className="hide-menu">Bimbingan Konseling</span></li>
                    <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="/bimbingankonseling" aria-expanded="false"><i data-feather="calendar" className="feather-icon" /><span className="hide-menu">Bimbingan Konseling</span></a></li>
                    <li className="list-divider" />
                  </ul>
                </nav>
                {/* End Sidebar navigation */}
              </div>
              {/* End Sidebar scroll*/}
            </aside>

            {/* Page Content */}
            <div className="page-wrapper">

              {/* Route Dashboard*/}
              <Route path="/home">
                <HomeScreen/>
              </Route>

              {/* Route PPDB */}
              <Route path="/ppdb">
                <PPDBScreen/>
              </Route>

              {/* Route kehadiran */}
              <Route path="/kehadiran">
                <KehadiranScreen/>
              </Route>

              {/* Route Data Siswa */}
              <Route path="/datasiswa">
                <DatasiswaScreen/>
              </Route>

              {/* Route Ekstrakulikuler */}
              <Route path="/ekskul">
                <EkskulScreen/>
              </Route>

              {/* Route Kelas */}
              <Route path="/kelas">
                <KelasScreen/>
              </Route>

              {/* Route Bk */}
              <Route path="/bimbingankonseling">
                <BKScreen/>
              </Route>

              <Route 
                path="/detailsiswa"
                render={props => (
                  <DetailSiswa {...props} />
                )}
              />
                

            {/* Footer */}
            <footer className="footer text-center text-muted">
              All Rights Reserved by AdminStudentCenter.
            </footer>
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
