import React from 'react';

function PPDBScreen() {
    return(
        <>
            <div className="page-breadcrumb">
                <div className="row">
                <div className="col-7 align-self-center">
                    <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">PPDB</h4>
                    <div className="d-flex align-items-center">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb m-0 p-0">
                        <li className="breadcrumb-item"><a href="index.html" className="text-muted">Apps</a></li>
                        <li className="breadcrumb-item text-muted active" aria-current="page">Ticket List</li>
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
                {/* ============================================================== */}
                {/* Start Page Content */}
                {/* ============================================================== */}
                {/* basic table */}
                <div className="row">
                <div className="col-12">
                    <div className="card">
                    <div className="card-body">
                        <div className="row">
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                            <div className="card card-hover">
                            <div className="p-2 bg-primary text-center">
                                <h1 className="font-light text-white">2,064</h1>
                                <h6 className="text-white">Total Tickets</h6>
                            </div>
                            </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                            <div className="card card-hover">
                            <div className="p-2 bg-cyan text-center">
                                <h1 className="font-light text-white">1,738</h1>
                                <h6 className="text-white">Responded</h6>
                            </div>
                            </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                            <div className="card card-hover">
                            <div className="p-2 bg-success text-center">
                                <h1 className="font-light text-white">1100</h1>
                                <h6 className="text-white">Resolve</h6>
                            </div>
                            </div>
                        </div>
                        {/* Column */}
                        <div className="col-md-6 col-lg-3 col-xlg-3">
                            <div className="card card-hover">
                            <div className="p-2 bg-danger text-center">
                                <h1 className="font-light text-white">964</h1>
                                <h6 className="text-white">Pending</h6>
                            </div>
                            </div>
                        </div>
                        {/* Column */}
                        </div>
                        <div className="table-responsive">
                        <table id="zero_config" className="table table-striped table-bordered no-wrap">
                            <thead>
                            <tr>
                                <th>Status</th>
                                <th>Title</th>
                                <th>ID</th>
                                <th>Product</th>
                                <th>Created by</th>
                                <th>Date</th>
                                <th>Agent</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><span className="badge badge-light-warning">In Progress</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">Elegant
                                    Theme
                                    Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">276377</a></td>
                                <td>Elegant Admin</td>
                                <td>Eric Pratt</td>
                                <td>2018/05/01</td>
                                <td>Fazz</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-danger">Closed</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">AdminX
                                    Theme
                                    Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">1234251</a></td>
                                <td>AdminX Admin</td>
                                <td>Nirav Joshi</td>
                                <td>2018/05/11</td>
                                <td>Steve</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-success">Opened</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">Admin-Pro
                                    Theme Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">1020345</a></td>
                                <td>Admin-Pro</td>
                                <td>Vishal Bhatt</td>
                                <td>2018/04/01</td>
                                <td>John</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-warning">In Progress</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">Elegant
                                    Theme
                                    Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">7810203</a></td>
                                <td>Elegant Admin</td>
                                <td>Eric Pratt</td>
                                <td>2018/01/01</td>
                                <td>Fazz</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-warning">In Progress</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">AdminX
                                    Theme
                                    Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">2103450</a></td>
                                <td>AdminX Admin</td>
                                <td>Nirav Joshi</td>
                                <td>2018/05/01</td>
                                <td>John</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-warning">In Progress</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">Admin-Pro
                                    Theme Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">2140530</a></td>
                                <td>Admin-Pro</td>
                                <td>Vishal Bhatt</td>
                                <td>2018/07/01</td>
                                <td>Steve</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-success">Opened</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">Elegant
                                    Theme
                                    Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">4500123</a></td>
                                <td>Elegant Admin</td>
                                <td>Eric Pratt</td>
                                <td>2018/05/10</td>
                                <td>Fazz</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-danger">Closed</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">Elegant
                                    Theme
                                    Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">1230450</a></td>
                                <td>Elegant Admin</td>
                                <td>Eric Pratt</td>
                                <td>2018/05/14</td>
                                <td>John</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-danger">Closed</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">AdminX
                                    Theme
                                    Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">1240503</a></td>
                                <td>AdminX Admin</td>
                                <td>Nirav Joshi</td>
                                <td>2018/02/01</td>
                                <td>Steve</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-success">Opened</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">Admin-Pro
                                    Theme Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">1250304</a></td>
                                <td>Admin-Pro</td>
                                <td>Vishal Bhatt</td>
                                <td>2018/05/21</td>
                                <td>Fazz</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-success">Opened</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">Elegant
                                    Theme
                                    Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">1470250</a></td>
                                <td>Elegant Admin</td>
                                <td>Eric Pratt</td>
                                <td>2018/05/11</td>
                                <td>John</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-danger">Closed</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">Admin-Pro
                                    Theme Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">1450023</a></td>
                                <td>Admin-Pro</td>
                                <td>Vishal Bhatt</td>
                                <td>2018/05/13</td>
                                <td>Steve</td>
                            </tr>
                            <tr>
                                <td><span className="badge badge-light-warning">In Progress</span></td>
                                <td><a href="javascript:void(0)" className="font-weight-medium link">AdminX
                                    Theme
                                    Side Menu Open OnClick</a></td>
                                <td><a href="javascript:void(0)" className="font-bold link">1420530</a></td>
                                <td>AdminX Admin</td>
                                <td>Nirav Joshi</td>
                                <td>2018/10/01</td>
                                <td>Fazz</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th>Status</th>
                                <th>Title</th>
                                <th>ID</th>
                                <th>Product</th>
                                <th>Created by</th>
                                <th>Date</th>
                                <th>Agent</th>
                            </tr>
                            </tfoot>
                        </table>
                        <ul className="pagination float-right">
                            <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default PPDBScreen