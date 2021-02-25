import React, {
  useState
} from 'react';
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
import NavbarComponent from './Components/NavbarComponent';

function App() {
  const [state, setState] = useState({
    loggedIn: false,
    user: {}
  })

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
              <Route 
                exact 
                path='/'
                render={props=> (
                  <LoginScreen {...props} data={state} setData={setState} />
                )}
              />

          <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
            
             {/* navbar */}
             <Route
                render={props => (
                  <NavbarComponent {...props} data={state} setData={setState} />
                )}
              />

            {/* Sidebar */}
            <aside className="left-sidebar" data-sidebarbg="skin6">
              {/* Sidebar scroll*/}
              <div className="scroll-sidebar" data-sidebarbg="skin6">
                {/* Sidebar navigation*/}
                <nav className="sidebar-nav">
                  <ul id="sidebarnav">
                    <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href="/home" aria-expanded="false"><i data-feather="home" className="feather-icon" /><span className="hide-menu">Dashboard</span></a></li>
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
