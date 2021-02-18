import React from 'react';

function HomeScreen () {
    return(
        <>
        <div className="page-breadcrumb">
            <div className="row">
            <div className="col-7 align-self-center">
                <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">Good Morning Jason!</h3>
                <div className="d-flex align-items-center">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0 p-0">
                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a>
                    </li>
                    </ol>
                </nav>
                </div>
            </div>
            <div className="col-5 align-self-center">
                <div className="customize-input float-right">
                <select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
                    <option selected>Aug 19</option>
                    <option value={1}>July 19</option>
                    <option value={2}>Jun 19</option>
                </select>
                </div>
            </div>
            </div>
        </div>
        {/* ============================================================== */}
        {/* End Bread crumb and right sidebar toggle */}
        {/* ============================================================== */}
        {/* ============================================================== */}
        {/* Container fluid  */}
        {/* ============================================================== */}
        <div className="container-fluid">
            {/* *************************************************************** */}
            {/* Start First Cards */}
            {/* *************************************************************** */}
            <div className="card-group">
            <div className="card border-right">
                <div className="card-body">
                <div className="d-flex d-lg-flex d-md-block align-items-center">
                    <div>
                    <div className="d-inline-flex align-items-center">
                        <h2 className="text-dark mb-1 font-weight-medium">236</h2>
                        <span className="badge bg-primary font-12 text-white font-weight-medium badge-pill ml-2 d-lg-block d-md-none">+18.33%</span>
                    </div>
                    <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">New Clients</h6>
                    </div>
                    <div className="ml-auto mt-md-3 mt-lg-0">
                    <span className="opacity-7 text-muted"><i data-feather="user-plus" /></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="card border-right">
                <div className="card-body">
                <div className="d-flex d-lg-flex d-md-block align-items-center">
                    <div>
                    <h2 className="text-dark mb-1 w-100 text-truncate font-weight-medium"><sup className="set-doller">$</sup>18,306</h2>
                    <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">Earnings of Month
                    </h6>
                    </div>
                    <div className="ml-auto mt-md-3 mt-lg-0">
                    <span className="opacity-7 text-muted"><i data-feather="dollar-sign" /></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="card border-right">
                <div className="card-body">
                <div className="d-flex d-lg-flex d-md-block align-items-center">
                    <div>
                    <div className="d-inline-flex align-items-center">
                        <h2 className="text-dark mb-1 font-weight-medium">1538</h2>
                        <span className="badge bg-danger font-12 text-white font-weight-medium badge-pill ml-2 d-md-none d-lg-block">-18.33%</span>
                    </div>
                    <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">New Projects</h6>
                    </div>
                    <div className="ml-auto mt-md-3 mt-lg-0">
                    <span className="opacity-7 text-muted"><i data-feather="file-plus" /></span>
                    </div>
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <div className="d-flex d-lg-flex d-md-block align-items-center">
                    <div>
                    <h2 className="text-dark mb-1 font-weight-medium">864</h2>
                    <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">Projects</h6>
                    </div>
                    <div className="ml-auto mt-md-3 mt-lg-0">
                    <span className="opacity-7 text-muted"><i data-feather="globe" /></span>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* *************************************************************** */}
            {/* End First Cards */}
            {/* *************************************************************** */}
            {/* *************************************************************** */}
            {/* Start Sales Charts Section */}
            {/* *************************************************************** */}
            <div className="row">
            <div className="col-lg-4 col-md-12">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Total Sales</h4>
                    <div id="campaign-v2" className="mt-2" style={{height: 283, width: '100%'}} />
                    <ul className="list-style-none mb-0">
                    <li>
                        <i className="fas fa-circle text-primary font-10 mr-2" />
                        <span className="text-muted">Direct Sales</span>
                        <span className="text-dark float-right font-weight-medium">$2346</span>
                    </li>
                    <li className="mt-3">
                        <i className="fas fa-circle text-danger font-10 mr-2" />
                        <span className="text-muted">Referral Sales</span>
                        <span className="text-dark float-right font-weight-medium">$2108</span>
                    </li>
                    <li className="mt-3">
                        <i className="fas fa-circle text-cyan font-10 mr-2" />
                        <span className="text-muted">Affiliate Sales</span>
                        <span className="text-dark float-right font-weight-medium">$1204</span>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Net Income</h4>
                    <div className="net-income mt-4 position-relative" style={{height: 294}} />
                    <ul className="list-inline text-center mt-5 mb-2">
                    <li className="list-inline-item text-muted font-italic">Sales for this month</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title mb-4">Earning by Location</h4>
                    <div className style={{height: 180}}>
                    <div id="visitbylocate" style={{height: '100%'}} />
                    </div>
                    <div className="row mb-3 align-items-center mt-1 mt-5">
                    <div className="col-4 text-right">
                        <span className="text-muted font-14">India</span>
                    </div>
                    <div className="col-5">
                        <div className="progress" style={{height: 5}}>
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '100%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="col-3 text-right">
                        <span className="mb-0 font-14 text-dark font-weight-medium">28%</span>
                    </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                    <div className="col-4 text-right">
                        <span className="text-muted font-14">UK</span>
                    </div>
                    <div className="col-5">
                        <div className="progress" style={{height: 5}}>
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '74%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="col-3 text-right">
                        <span className="mb-0 font-14 text-dark font-weight-medium">21%</span>
                    </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                    <div className="col-4 text-right">
                        <span className="text-muted font-14">USA</span>
                    </div>
                    <div className="col-5">
                        <div className="progress" style={{height: 5}}>
                        <div className="progress-bar bg-cyan" role="progressbar" style={{width: '60%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="col-3 text-right">
                        <span className="mb-0 font-14 text-dark font-weight-medium">18%</span>
                    </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-4 text-right">
                        <span className="text-muted font-14">China</span>
                    </div>
                    <div className="col-5">
                        <div className="progress" style={{height: 5}}>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '50%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                    </div>
                    <div className="col-3 text-right">
                        <span className="mb-0 font-14 text-dark font-weight-medium">12%</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* *************************************************************** */}
            {/* End Sales Charts Section */}
            {/* *************************************************************** */}
            {/* *************************************************************** */}
            {/* Start Location and Earnings Charts Section */}
            {/* *************************************************************** */}
            <div className="row">
            <div className="col-md-6 col-lg-8">
                <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-start">
                    <h4 className="card-title mb-0">Earning Statistics</h4>
                    <div className="ml-auto">
                        <div className="dropdown sub-dropdown">
                        <button className="btn btn-link text-muted dropdown-toggle" type="button" id="dd1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i data-feather="more-vertical" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dd1">
                            <a className="dropdown-item" href="#">Insert</a>
                            <a className="dropdown-item" href="#">Update</a>
                            <a className="dropdown-item" href="#">Delete</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="pl-4 mb-5">
                    <div className="stats ct-charts position-relative" style={{height: 315}} />
                    </div>
                    <ul className="list-inline text-center mt-4 mb-0">
                    <li className="list-inline-item text-muted font-italic">Earnings for this month</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-4">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Recent Activity</h4>
                    <div className="mt-4 activity">
                    <div className="d-flex align-items-start border-left-line pb-3">
                        <div>
                        <a href="javascript:void(0)" className="btn btn-info btn-circle mb-2 btn-item">
                            <i data-feather="shopping-cart" />
                        </a>
                        </div>
                        <div className="ml-3 mt-2">
                        <h5 className="text-dark font-weight-medium mb-2">New Product Sold!</h5>
                        <p className="font-14 mb-2 text-muted">John Musa just purchased <br /> Cannon 5M
                            Camera.
                        </p>
                        <span className="font-weight-light font-14 text-muted">10 Minutes Ago</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start border-left-line pb-3">
                        <div>
                        <a href="javascript:void(0)" className="btn btn-danger btn-circle mb-2 btn-item">
                            <i data-feather="message-square" />
                        </a>
                        </div>
                        <div className="ml-3 mt-2">
                        <h5 className="text-dark font-weight-medium mb-2">New Support Ticket</h5>
                        <p className="font-14 mb-2 text-muted">Richardson just create support <br />
                            ticket</p>
                        <span className="font-weight-light font-14 text-muted">25 Minutes Ago</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start border-left-line">
                        <div>
                        <a href="javascript:void(0)" className="btn btn-cyan btn-circle mb-2 btn-item">
                            <i data-feather="bell" />
                        </a>
                        </div>
                        <div className="ml-3 mt-2">
                        <h5 className="text-dark font-weight-medium mb-2">Notification Pending Order!
                        </h5>
                        <p className="font-14 mb-2 text-muted">One Pending order from Ryne <br /> Doe</p>
                        <span className="font-weight-light font-14 mb-1 d-block text-muted">2 Hours
                            Ago</span>
                        <a href="javascript:void(0)" className="font-14 border-bottom pb-1 border-info">Load More</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* *************************************************************** */}
            {/* End Location and Earnings Charts Section */}
            {/* *************************************************************** */}
            {/* *************************************************************** */}
            {/* Start Top Leader Table */}
            {/* *************************************************************** */}
            <div className="row">
            <div className="col-12">
                <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                    <h4 className="card-title">Top Leaders</h4>
                    <div className="ml-auto">
                        <div className="dropdown sub-dropdown">
                        <button className="btn btn-link text-muted dropdown-toggle" type="button" id="dd1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i data-feather="more-vertical" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dd1">
                            <a className="dropdown-item" href="#">Insert</a>
                            <a className="dropdown-item" href="#">Update</a>
                            <a className="dropdown-item" href="#">Delete</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="table-responsive">
                    <table className="table no-wrap v-middle mb-0">
                        <thead>
                        <tr className="border-0">
                            <th className="border-0 font-14 font-weight-medium text-muted">Team Lead
                            </th>
                            <th className="border-0 font-14 font-weight-medium text-muted px-2">Project
                            </th>
                            <th className="border-0 font-14 font-weight-medium text-muted">Team</th>
                            <th className="border-0 font-14 font-weight-medium text-muted text-center">
                            Status
                            </th>
                            <th className="border-0 font-14 font-weight-medium text-muted text-center">
                            Weeks
                            </th>
                            <th className="border-0 font-14 font-weight-medium text-muted">Budget</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border-top-0 px-2 py-4">
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-3"><img src="../assets/images/users/widget-table-pic1.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                                <div className>
                                <h5 className="text-dark mb-0 font-16 font-weight-medium">Hanna
                                    Gover</h5>
                                <span className="text-muted font-14">hgover@gmail.com</span>
                                </div>
                            </div>
                            </td>
                            <td className="border-top-0 text-muted px-2 py-4 font-14">Elite Admin</td>
                            <td className="border-top-0 px-2 py-4">
                            <div className="popover-icon">
                                <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                                <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">SS</a>
                                <a className="btn btn-cyan rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">RP</a>
                                <a className="btn btn-success text-white rounded-circle btn-circle font-20" href="javascript:void(0)">+</a>
                            </div>
                            </td>
                            <td className="border-top-0 text-center px-2 py-4"><i className="fa fa-circle text-primary font-12" data-toggle="tooltip" data-placement="top" title="In Testing" /></td>
                            <td className="border-top-0 text-center font-weight-medium text-muted px-2 py-4">
                            35
                            </td>
                            <td className="font-weight-medium text-dark border-top-0 px-2 py-4">$96K
                            </td>
                        </tr>
                        <tr>
                            <td className="px-2 py-4">
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-3"><img src="../assets/images/users/widget-table-pic2.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                                <div className>
                                <h5 className="text-dark mb-0 font-16 font-weight-medium">Daniel
                                    Kristeen
                                </h5>
                                <span className="text-muted font-14">Kristeen@gmail.com</span>
                                </div>
                            </div>
                            </td>
                            <td className="text-muted px-2 py-4 font-14">Real Homes WP Theme</td>
                            <td className="px-2 py-4">
                            <div className="popover-icon">
                                <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                                <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">SS</a>
                                <a className="btn btn-success text-white rounded-circle btn-circle font-20" href="javascript:void(0)">+</a>
                            </div>
                            </td>
                            <td className="text-center px-2 py-4"><i className="fa fa-circle text-success font-12" data-toggle="tooltip" data-placement="top" title="Done" />
                            </td>
                            <td className="text-center text-muted font-weight-medium px-2 py-4">32</td>
                            <td className="font-weight-medium text-dark px-2 py-4">$85K</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-4">
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-3"><img src="../assets/images/users/widget-table-pic3.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                                <div className>
                                <h5 className="text-dark mb-0 font-16 font-weight-medium">Julian
                                    Josephs
                                </h5>
                                <span className="text-muted font-14">Josephs@gmail.com</span>
                                </div>
                            </div>
                            </td>
                            <td className="text-muted px-2 py-4 font-14">MedicalPro WP Theme</td>
                            <td className="px-2 py-4">
                            <div className="popover-icon">
                                <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                                <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">SS</a>
                                <a className="btn btn-cyan rounded-circle btn-circle font-12 popover-item" href="javascript:void(0)">RP</a>
                                <a className="btn btn-success text-white rounded-circle btn-circle font-20" href="javascript:void(0)">+</a>
                            </div>
                            </td>
                            <td className="text-center px-2 py-4"><i className="fa fa-circle text-primary font-12" data-toggle="tooltip" data-placement="top" title="Done" />
                            </td>
                            <td className="text-center text-muted font-weight-medium px-2 py-4">29</td>
                            <td className="font-weight-medium text-dark px-2 py-4">$81K</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-4">
                            <div className="d-flex no-block align-items-center">
                                <div className="mr-3"><img src="../assets/images/users/widget-table-pic4.jpg" alt="user" className="rounded-circle" width={45} height={45} /></div>
                                <div className>
                                <h5 className="text-dark mb-0 font-16 font-weight-medium">Jan
                                    Petrovic
                                </h5>
                                <span className="text-muted font-14">hgover@gmail.com</span>
                                </div>
                            </div>
                            </td>
                            <td className="text-muted px-2 py-4 font-14">Hosting Press HTML</td>
                            <td className="px-2 py-4">
                            <div className="popover-icon">
                                <a className="btn btn-primary rounded-circle btn-circle font-12" href="javascript:void(0)">DS</a>
                                <a className="btn btn-success text-white font-20 rounded-circle btn-circle" href="javascript:void(0)">+</a>
                            </div>
                            </td>
                            <td className="text-center px-2 py-4"><i className="fa fa-circle text-danger font-12" data-toggle="tooltip" data-placement="top" title="In Progress" /></td>
                            <td className="text-center text-muted font-weight-medium px-2 py-4">23</td>
                            <td className="font-weight-medium text-dark px-2 py-4">$80K</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* *************************************************************** */}
            {/* End Top Leader Table */}
            {/* *************************************************************** */}
        </div>
        </>
    )
}

export default HomeScreen