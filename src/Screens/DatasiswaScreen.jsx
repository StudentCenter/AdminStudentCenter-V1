import React, {
    useState,
    useEffect
} from 'react';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { MDBDataTable } from 'mdbreact';

function DatasiswaScreen() {
    const [tableStudents, setTableStudent] = useState('')
    const [nama, setNama] = useState('')
    const [kelas, setKelas] = useState('') 
    const [nisn, setNisn] = useState('') 
    const [ttl, setTtl] = useState('') 
    const [anak_ke, setAnak_ke] = useState('') 
    const [agama, setAgama] = useState('') 
    const [alamat, setAlamat] = useState('') 
    const [no_hp, setNo_hp] = useState('') 
    const [nama_ayah, setNama_ayah] = useState('') 
    const [pekerjaan_ayah, setPekerjaan_ayah] = useState('') 
    const [no_hp_ibu, setNo_hp_ibu] = useState('') 
    const [nama_ibu, setNama_ibu] = useState('') 
    const [pekerjaan_ibu, setPekerjaan_ibu] = useState('') 
    const [no_hp_wali, setNo_hp_wali] = useState('') 
    const [nama_wali, setNama_wali] = useState('') 
    const [pekerjaan_wali, setPekerjaan_wali] = useState('') 
    const [alamat_wali, setAlamat_wali] = useState('') 
    const Swal = withReactContent(MySwal)
    const [loading, setLoading] = useState(false)
    const URL_API = `http://localhost:8000`
    const [datakelas, setDataKelas] = useState('')

    // Setting the data table
    const dataTableStudents = students => {
        let rowsData = []

        for (var index = 0; index < students.length; index++) {
            let rowItem = {}
            rowItem["no"] = index + 1
            rowItem["nama"] = students[index].nama
            rowItem["kelas"] = students[index].kelas[0].kelas
            rowItem["nisn"] = students[index].nisn
            rowItem["action"]=
            <>
                <button type="button" className="show btn btn-primary" 
                        onClick={e => getIdStudent(e)} id={students[index].id} 
                        data-toggle="modal" data-target="#editModal">
                <small className="text-light">Details</small></button>

                {/* <a href={"/detail/" + students[index].id}>Detail Siswa</a> */}
            </>
              
            // rowItem["ttl"] = students[index].ttl
            // rowItem["anak_ke"] = students[index].anak_ke
            // rowItem["agama"] = students[index].agama
            // rowItem["alamat"] = students[index].alamat
            // rowItem["no_hp"] = students[index].no_hp
            // rowItem["nama_ayah"] = students[index].nama_ayah
            // rowItem["pekerjaan_ayah"] = students[index].pekerjaan_ayah
            // rowItem["no_hp_ibu"] = students[index].no_hp_ibu
            // rowItem["nama_ibu"] = students[index].nama_ibu
            // rowItem["pekerjaan_ibu"] = students[index].pekerjaan_ibu
            // rowItem["no_hp_wali"] = students[index].no_hp_wali
            // rowItem["nama_wali"] = students[index].nama_wali
            // rowItem["pekerjaan_wali"] = students[index].pekerjaan_wali
            // rowItem["alamat_wali"] = students[index].alamat_wali
            rowsData.push(rowItem)
        }
        setTableStudent(rowsData)
    }

    const fetchStudents = async () => {
        try{
            const fetchApiStudents = await fetch(`${URL_API}/student`,{
                    method : 'GET', 
            }) 
            const siswadata = await fetchApiStudents.json()
            dataTableStudents(siswadata.result)
            console.log(siswadata)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    const fetchKelas = async () => {
        try {
            const data = await fetch(`${URL_API}/kelas`, {
                method: 'GET'
            })
            const resp = await data.json()
            console.log(resp.result)
            setDataKelas(resp.result)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    useEffect(() => {
        fetchStudents()
        .then(() => {
            setLoading(true)
        })
        .then(() => {
            fetchKelas()
        })
    }, [])

    // Data job
    const dataStudents = (data) => {
        return {
            columns: [
                {
                    label: 'No',
                    field: 'no',
                    sort: 'asc'
                },
                {
                    label: 'Nama Siswa',
                    field: 'nama',
                    sort: 'asc'
                },
                {
                    label: 'Kelas',
                    field: 'kelas',
                    sort: 'asc'
                },
                {
                    label: 'Nisn',
                    field: 'nisn',
                    sort: 'asc'
                },
                {
                    label: 'Action',
                    field: 'action',
                    sort: 'asc'
                },
                // {
                //     label: 'Ttl',
                //     field: 'ttl',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Anak Ke',
                //     field: 'anak_ke',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Agama',
                //     field: 'agama',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Alamat',
                //     field: 'alamat',
                //     sort: 'asc'
                // },
                // {
                //     label: 'No Hp',
                //     field: 'no_hp',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Nama Ayah',
                //     field: 'nama_ayah',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Pekerjaan Ayah',
                //     field: 'pekerjaan_ayah',
                //     sort: 'asc'
                // },
                // {
                //     label: 'No Hp Ibu',
                //     field: 'no_hp_ibu',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Nama Ibu',
                //     field: 'nama_ibu',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Pekerjaan Ibu',
                //     field: 'pekerjaan_ibu',
                //     sort: 'asc'
                // },
                // {
                //     label: 'No Hp wali',
                //     field: 'no_hp_wali',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Nama wali',
                //     field: 'nama_wali',
                //     sort: 'asc'
                // },
                // {
                //     label: 'Pekerjaan wali',
                //     field: 'pekerjaan_wali',
                //     sort: 'asc'
                // },
                
            ],
            rows: data
        }
    }

    // Handle Add data Siswa
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const fetchApi = await fetch(`${URL_API}/student/store`, {
                method: 'POST',
                body: JSON.stringify({
                    nama,
                    kelas,
                    nisn,
                    ttl,
                    anak_ke,
                    agama,
                    alamat,
                    no_hp,
                    nama_ayah,
                    pekerjaan_ayah,
                    no_hp_ibu,
                    nama_ibu,
                    pekerjaan_ibu,
                    no_hp_wali,
                    nama_wali,
                    pekerjaan_wali,
                    alamat_wali
                }),
                headers: { 'Content-Type': 'application/json' }
            })
            const create = await fetchApi.json()
            console.log(create)
            if (create.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Succes Add Data Job',
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
                    setNama('')
                    setKelas('')
                    setNisn('')
                    setTtl('')
                    setAnak_ke('')
                    setAgama('')
                    setAlamat('')
                    setNo_hp('')
                    setNama_ayah('')
                    setPekerjaan_ayah('')
                    setNo_hp_ibu('')
                    setNama_ibu('')
                    setPekerjaan_ibu('')
                    setNo_hp_wali('')
                    setNama_wali('')
                    setPekerjaan_wali('')
                    setAlamat_wali('')
                    fetchStudents().then(() => {
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

    // Get id job
    const getIdStudent = async e => {
        console.log(e.target.id)
        try {
            const data = await fetch(`${URL_API}/student/get/${e.target.id}`, {
                method: 'GET'
            })
            const result = await data.json()
            setNama(result.data.nama)
            setKelas(result.data.kelas[0].kelas)
            setNisn(result.data.nisn)
            setAgama(result.data.agama)
            setAlamat(result.data.alamat)
            console.log(result.data.kelas[0].kelas)
        } catch (error) {
            console.log(error)
        }
    }




    if (loading) {
        Swal.close()
        return(
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
                                            Tambah Siswa
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
                            <div>
                                <MDBDataTable
                                        style={{ color: "black"}}
                                        sortable={false}
                                        striped
                                        noBottomColumns={true}
                                        data={dataStudents(tableStudents)}
                                        responsive={true}
                                />
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
                                        <label htmlFor="exampleFormControlInput1">Nama</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput1"
                                            placeholder="input nama"
                                            onChange={e => setNama(e.target.value)}
                                            value={nama}
                                            name="nama"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput2">Kelas</label>
                                        <select 
                                            className="form-control" 
                                            id="exampleFormControlSelect1"
                                            value={kelas}
                                            onChange={e => setKelas(e.target.value)}
                                            required
                                        >
                                            <option selected>Pilih Kelas</option>
                                            {datakelas ?
                                            datakelas.map((item) => {
                                                return(
                                                    <>
                                                    <option key={item.id} value={item.id}>{item.kelas}</option>
                                                    </>
                                                )
                                            })
                                            :
                                            <option>Tidak Ada Data Kelas</option>
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput3">Nisn</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput3"
                                            placeholder="input nisn"
                                            onChange={e => setNisn(e.target.value)}
                                            value={nisn}
                                            name="nisn"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Tahun Tanggal Lahir</label>
                                        <input
                                            type="date"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input tahun tanggal lahir"
                                            onChange={e => setTtl(e.target.value)}
                                            value={ttl}
                                            name="ttl"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Anak ke</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input anak keberapa"
                                            onChange={e => setAnak_ke(e.target.value)}
                                            value={anak_ke}
                                            name="anak_ke"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Agama</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input agama"
                                            onChange={e => setAgama(e.target.value)}
                                            value={agama}
                                            name="agama"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Alamat</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input alamat"
                                            onChange={e => setAlamat(e.target.value)}
                                            value={alamat}
                                            name="alamat"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">No Hp Ayah</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input no hp"
                                            onChange={e => setNo_hp(e.target.value)}
                                            value={no_hp}
                                            name="no_hp"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Nama Ayah</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input nama ayah"
                                            onChange={e => setNama_ayah(e.target.value)}
                                            value={nama_ayah}
                                            name="nama_ayah"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">pekerjaan Ayah</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input pekerjaan ayah"
                                            onChange={e => setPekerjaan_ayah(e.target.value)}
                                            value={pekerjaan_ayah}
                                            name="pekerjaan_ayah"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">No Hp Ibu</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input no hp ibu"
                                            onChange={e => setNo_hp_ibu(e.target.value)}
                                            value={no_hp_ibu}
                                            name="no_hp_ibu"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Nama Ibu</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input nama ibu"
                                            onChange={e => setNama_ibu(e.target.value)}
                                            value={nama_ibu}
                                            name="nama_ibu"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">pekerjaan Ibu</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input pekerjaan ibu"
                                            onChange={e => setPekerjaan_ibu(e.target.value)}
                                            value={pekerjaan_ibu}
                                            name="pekerjaan_ibu"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">No Hp Wali</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input no hp wali"
                                            onChange={e => setNo_hp_wali(e.target.value)}
                                            value={no_hp_wali}
                                            name="no_hp_wali"
                                            style={{ color: "white" }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Nama Wali</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input nama wali"
                                            onChange={e => setNama_wali(e.target.value)}
                                            value={nama_wali}
                                            name="nama_wali"
                                            style={{ color: "white" }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">pekerjaan Wali</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input pekerjaan wali"
                                            onChange={e => setPekerjaan_wali(e.target.value)}
                                            value={pekerjaan_wali}
                                            name="pekerjaan_wali"
                                            style={{ color: "white" }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Alamat Wali</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input alamt wali"
                                            onChange={e => setAlamat_wali(e.target.value)}
                                            value={alamat_wali}
                                            name="alamat_wali"
                                            style={{ color: "white" }}
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
                   <div className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Modal</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style={{ color: "white", marginRight: "10px" }}>×</span>
                                </button>
                            </div>
                            <form >
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Job Position</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput1"
                                            placeholder="input job position"
                                            // onChange={e => setJobPosition(e.target.value)}
                                            value={nama}
                                            name="jobposition"
                                            style={{ color: "white" }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput2">Job Location</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput2"
                                            placeholder="input job location"
                                            // onChange={e => setJobLocation(e.target.value)}
                                            value={kelas}
                                            name="joblocation"
                                            style={{ color: "white" }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput3">Job Description</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput3"
                                            placeholder="input job description"
                                            // onChange={e => setJobDescription(e.target.value)}
                                            value={agama}
                                            name="jobdescription"
                                            style={{ color: "white" }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Job Link</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input job link"
                                            // onChange={e => setJobLink(e.target.value)}
                                            value={alamat}
                                            name="joblink"
                                            style={{ color: "white" }}
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" >Edit Data</button>
                                </div>
                            </form>
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


export default DatasiswaScreen   