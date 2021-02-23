import React, {
    useState,
    useEffect
} from 'react';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { MDBDataTable } from 'mdbreact';

function KelasScreen() {
    const [tableKelas, setTableKelas] = useState('')
    const Swal = withReactContent(MySwal)
    const [loading, setLoading] = useState(false)
    const [kelas, setkelas] = useState('')
    const URL_API = `http://localhost:8000`
    const [id_kelas, setId_kelas] = useState('')
    const [nama, setNama] = useState('')

    // Setting the data table
    const dataTableKelas = kelas => {
        let rowsData = []

        for (var index = 0; index < kelas.length; index++) {
            let rowItem = {}
            rowItem["no"] = index + 1
            rowItem['kelas'] = kelas[index].kelas
            rowItem['totalsiswa'] = kelas[index].siswa_data.length
            rowItem['detailsiswa'] =
                <>
                    <button type="button" className="show btn btn-primary"
                        data-toggle="modal" data-target="#detailModal" style={{ borderRadius: 5 }}>
                        <small className="text-light">details</small></button>
                </>
            rowItem["delete"] =
                <>
                    <button type="button" className="show btn btn-danger mr-1"
                        onClick={e => deleteKelas(e)} id={kelas[index].id} style={{ borderRadius: 5 }}>
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button type="button" className="btn btn-success"
                        onClick={e => getIdKelas(e)} id={kelas[index].id}
                        data-toggle="modal" data-target="#modalEdit" style={{ borderRadius: 5 }}>
                        <i class="fa fa-pencil-square" aria-hidden="true"></i>
                    </button>
                </>
            rowsData.push(rowItem)
        }
        setTableKelas(rowsData)
    }

    const fetchKelas = async () => {
        try {
            const fetchApiStudents = await fetch(`${URL_API}/kelas`, {
                method: 'GET',
            })
            const siswadata = await fetchApiStudents.json()
            dataTableKelas(siswadata.result)
            console.log(siswadata)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        fetchKelas()
            .then(() => {
                setLoading(true)
            })
    }, [id_kelas])

    // Data kelas
    const dataKelas = (data) => {
        return {
            columns: [
                {
                    label: 'No',
                    field: 'no',
                    sort: 'asc'
                },
                {
                    label: 'Kelas',
                    field: 'kelas',
                    sort: 'asc'
                },
                {
                    label: 'Total Siswa',
                    field: 'totalsiswa',
                    sort: 'asc'
                },
                {
                    label: 'Detail Data',
                    field: 'detailsiswa',
                    sort: 'asc'
                },
                {
                    label: 'Action',
                    field: 'delete',
                    sort: 'asc'
                },

            ],
            rows: data
        }
    }


    // Handle Add data Kelas
    const handleSubmit = async e => {
        e.preventDefault();
        let formData = new FormData(e.target)
        try {
            const fetchApi = await fetch(`${URL_API}/kelas/store`, {
                method: 'POST',
                body: formData
            })
            const create = await fetchApi.json()
            console.log(create)
            if (create.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Succes Add kelas',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                }).then(function () {
                    setkelas('')
                    fetchKelas().then(() => {
                        setLoading(true)
                    });
                    window.$('#addModal').modal('hide')
                    Swal.fire({
                        title: 'Loading...',
                        timer: 1000,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                    })
                })
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'There is an error!',
                html:
                    '<ul> ' +
                    '<li><p style="color: red;">there are columns that have not been filled</p></li> ' +
                    '</ul > '
            })
            console.log(error)
        }
    }

    // Get id Siswa
    const getIdKelas = async e => {
        console.log(e.currentTarget.id)
        try {
            const data = await fetch(`${URL_API}/kelas/get/${e.currentTarget.id}`, {
                method: 'GET'
            })
            const resp = await data.json()
            console.log(resp)
            setId_kelas(resp.data.id)
            setkelas(resp.data.kelas)
        } catch (error) {
            console.log(error)
        }
    }

    // handle submit edit siswa
    const handleEdit = async e => {
        e.preventDefault();
        try {
            const fetchApi = await fetch(`${URL_API}/kelas/update/${id_kelas}`, {
                method: 'PUT',
                body: JSON.stringify({
                    kelas
                }),
                headers: { 'Content-Type': 'application/json' },
            })
            const create = await fetchApi.json()
            console.log(create)
            if (create.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Succes Edit Data Product',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                }).then(function () {
                    setkelas('')
                    fetchKelas().then(() => {
                        setLoading(true)
                    });
                    window.$('#modalEdit').modal('hide')
                    Swal.fire({
                        title: 'Loading...',
                        timer: 1000,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                    })
                })
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'There is an error!',
                html:
                    '<ul> ' +
                    '<li><p style="color: red;">there are columns that have not been filled</p></li> ' +
                    '</ul > '
            })
            console.log(error)
        }
    }

    // Delete kelas
    const deleteKelas = (e) => {
        const id = e.currentTarget.id
        console.log(id)
        Swal.fire({
            title: 'Are you sure to delete this data?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Data kelas has been deleted.',
                    'succekss'
                ).then(async () => {
                    try {
                        const careerDelete = await fetch(`${URL_API}/kelas/delete/${id}`, {
                            method: 'DELETE'
                        })
                        await careerDelete
                    } catch (error) {
                        console.log(error)
                    }
                }).then(function () {
                    fetchKelas().then(() => {
                        setLoading(true)
                    });
                    Swal.fire({
                        title: 'Loading...',
                        timer: 1000,
                        didOpen: () => {
                            Swal.showLoading()
                        },
                    })
                })
            }
        })
    }

    if (loading) {
        Swal.close()
        return (
            <>
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-11 align-self-center">
                            <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">Data Siswa</h4>
                            <div className="d-flex align-items-center">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb m-0 p-0">
                                        <li className="breadcrumb-item"><a href="index.html" className="text-muted">Apps</a></li>
                                        <li className="breadcrumb-item text-muted active" aria-current="page">Ticket List</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="col-1 align-self-center">
                            <div className="customize-input float-right">
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Action:</div>
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#addModal">
                                            <i className="mdi mdi-plus" style={{ marginRight: "10px", color: "green" }} />
                                            Tambah Kelas
                                        </a>
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#addModal">
                                            <i className="mdi mdi-plus" style={{ marginRight: "10px", color: "green" }} />
                                            PDF
                                        </a>
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#addModal">
                                            <i className="mdi mdi-plus" style={{ marginRight: "10px", color: "green" }} />
                                            Excel
                                        </a>
                                    </div>
                                </div>
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
                                                <div className="p-2 bg-primary text-center" style={{ borderRadius: 10 }}>
                                                    <h1 className="font-light text-white">2,064</h1>
                                                    <h6 className="text-white">Total Tickets</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Column */}
                                        <div className="col-md-6 col-lg-3 col-xlg-3">
                                            <div className="card card-hover">
                                                <div className="p-2 bg-cyan text-center" style={{ borderRadius: 10 }}>
                                                    <h1 className="font-light text-white">1,738</h1>
                                                    <h6 className="text-white">Responded</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Column */}
                                        <div className="col-md-6 col-lg-3 col-xlg-3">
                                            <div className="card card-hover">
                                                <div className="p-2 bg-success text-center" style={{ borderRadius: 10 }}>
                                                    <h1 className="font-light text-white">1100</h1>
                                                    <h6 className="text-white">Resolve</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Column */}
                                        <div className="col-md-6 col-lg-3 col-xlg-3">
                                            <div className="card card-hover">
                                                <div className="p-2 bg-danger text-center" style={{ borderRadius: 10 }}>
                                                    <h1 className="font-light text-white">964</h1>
                                                    <h6 className="text-white">Pending</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Column */}
                                    </div>
                                    <div>
                                        {tableKelas ?
                                            <MDBDataTable
                                                style={{ color: "black" }}
                                                sortable={false}
                                                striped
                                                noBottomColumns={true}
                                                data={dataKelas(tableKelas)}
                                                responsive={true}
                                            />
                                            :
                                            <div>
                                                <h1>
                                                    No Data!
                                        </h1>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Add Modal --> */}
                <div className="modal fade" id="addModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Modal</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style={{ color: "white", marginRight: "10px" }}>×</span>
                                </button>
                            </div>
                            <form onSubmit={e => handleSubmit(e)}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput2">Kelas</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input kelas"
                                            onChange={e => setkelas(e.target.value)}
                                            value={kelas}
                                            name="kelas"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success" >Add Data</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                {/* <!-- Edit Modal --> */}
                <div className="modal fade" id="modalEdit" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Modal</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style={{ color: "white", marginRight: "10px" }}>×</span>
                                </button>
                            </div>
                            <form onSubmit={e => handleEdit(e)}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput2">Kelas</label>

                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input kelas"
                                            onChange={e => setkelas(e.target.value)}
                                            value={kelas}
                                            name="kelas"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-success" >Edit Data</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* <!-- Detail Modal --> */}
                <div className="detail modal fade" id="detailModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style={{ color: "black", marginRight: "10px" }}>×</span>
                                </button>
                <div className="modal fade" id="detailModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" style={{ color: "black", marginRight: "10px" }}>×</span>
                    </button>
                    <div className="modal-dialog">
                        <div className="modal-content" style={{
                            // borderTopRightRadius: 50,
                            borderTopLeftRadius: 50,
                            width: '273%',
                            marginLeft: '-85%',
                            paddingBottom: '60%',
                        }}>
                            <div className="container">
                            <table className="table table-striped"
                                style = {{
                                    marginTop: '11%',
                                }}
                            >
                            
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                            </table>
                                <table className="table table-striped mt-5 mb-5">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        Swal.fire({
            title: 'Loading...',
            didOpen: () => {
                Swal.showLoading()
            },
        })
        return (
            <p></p>
        )
    }
}


export default KelasScreen   