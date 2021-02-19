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
    const [no_hp_siswa, setNo_hp_siswa] = useState('') 
    const [no_hp_ayah, setNo_hp_ayah] = useState('') 
    const [nama_ayah, setNama_ayah] = useState('') 
    const [pekerjaan_ayah, setPekerjaan_ayah] = useState('') 
    const [no_hp_ibu, setNo_hp_ibu] = useState('') 
    const [nama_ibu, setNama_ibu] = useState('') 
    const [foto_siswa, setFoto_siswa] = useState('') 
    const [pekerjaan_ibu, setPekerjaan_ibu] = useState('') 
    const [no_hp_wali, setNo_hp_wali] = useState('') 
    const [nama_wali, setNama_wali] = useState('') 
    const [pekerjaan_wali, setPekerjaan_wali] = useState('') 
    const [alamat_wali, setAlamat_wali] = useState('') 
    const Swal = withReactContent(MySwal)
    const [loading, setLoading] = useState(false)
    const URL_API = `http://localhost:8000`
    const [datakelas, setDataKelas] = useState('')
    const [id_siswa, setId_siswa] = useState('')

    // for edit
    const [foto_siswa_edit, setFoto_siswa_edit] = useState('') 

    // Setting the data table
    const dataTableStudents = students => {
        let rowsData = []

        for (var index = 0; index < students.length; index++) {
            let rowItem = {}
            rowItem["no"] = index + 1
            rowItem["nama"] = students[index].nama
            rowItem["kelas"] = students[index].kelas[0].kelas
            rowItem["nisn"] = students[index].nisn
            rowItem["alamat"] = students[index].alamat
            rowItem["agama"] = students[index].agama
            rowItem["foto_siswa"] = 
            <>
            <img style={{ width: "30px"}} src={ students[index].foto_siswa} alt=""/>
            </>      
            rowItem["action"]=
            <>
                <button type="button" className="show btn btn-primary" 
                        onClick={e => getIdStudent(e)} id={students[index].id} 
                        data-toggle="modal" data-target="#editModal">
                <small className="text-light">details</small></button>
            </>
            rowItem["delete"]=
            <>

                    <button type="button" className="show btn btn-danger mr-1" 
                            onClick={e => deleteStudent(e)} id={students[index].id} >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>

                    <button type="button" className="btn btn-success" 
                            onClick={e => getIdStudent(e)} id={students[index].id}
                            data-toggle="modal" data-target="#modalEdit">
                            <i class="fa fa-pencil-square" aria-hidden="true"></i>
                    </button>
            </>
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
    }, [id_siswa])

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
                    label: 'Alamat',
                    field: 'alamat',
                    sort: 'asc'
                },
                {
                    label: 'Agama',
                    field: 'agama',
                    sort: 'asc'
                },
                {
                    label: 'Foto',
                    field: 'foto_siswa',
                    sort: 'asc'
                },
                {
                    label: 'Action',
                    field: 'action',
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

    // Handle Add data Siswa
    const handleSubmit = async e => {
        e.preventDefault();
        let formData = new FormData(e.target)
        try {
            const fetchApi = await fetch(`${URL_API}/student/store`, {
                method: 'POST',
                body: formData
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
                    setNo_hp_siswa('')
                    setFoto_siswa('')
                    setAlamat('')
                    setNo_hp_ayah('')
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

    // Get id Siswa
    const getIdStudent = async e => {
        console.log(e.currentTarget.id)
            try {
                const data = await fetch(`${URL_API}/student/get/${e.currentTarget.id}`, {
                    method: 'GET'
                })
                const result = await data.json()
                setNama(result.data.nama)
                setId_siswa(result.data.id)
                setKelas(result.data.kelas[0].id)
                setNisn(result.data.nisn)
                setTtl(result.data.ttl)
                setAgama(result.data.agama)
                setAnak_ke(result.data.anak_ke)
                setAlamat(result.data.alamat)
                setNo_hp_siswa(result.data.no_hp_siswa)
                setNo_hp_ayah(result.data.no_hp_ayah)
                setNama_ayah(result.data.nama_ayah)
                setPekerjaan_ayah(result.data.pekerjaan_ayah)
                setNo_hp_ibu(result.data.no_hp_ibu)
                setNama_ibu(result.data.nama_ibu)
                setPekerjaan_ibu(result.data.pekerjaan_ibu)
                setNo_hp_wali(result.data.no_hp_wali)
                setNama_wali(result.data.nama_wali)
                setPekerjaan_wali(result.data.pekerjaan_wali)
                setAlamat_wali(result.data.alamat_wali)
                console.log(result.data)
            } catch (error) {
                console.log(error)
            }
    }

     // handle submit edit siswa
     const handleEdit = async e => {
        e.preventDefault();
        let formData = new FormData(e.target)
        try {
            const fetchApi = await fetch(`${URL_API}/student/update/${id_siswa}`, {
                method: 'POST',
                body: formData,
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
                    setNama('')
                    setKelas('')
                    setNisn('')
                    setTtl('')
                    setAnak_ke('')
                    setAgama('')
                    setNo_hp_siswa('')
                    setFoto_siswa_edit('')
                    setAlamat('')
                    setNo_hp_ayah('')
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

     // Delete job
     const deleteStudent = (e) => {
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
                    'Data job has been deleted.',
                    'success'
                ).then(async () => {
                    try {
                        const careerDelete = await fetch(`${URL_API}/student/delete/${id}`, {
                            method: 'DELETE'
                        })
                        await careerDelete
                    } catch (error) {
                        console.log(error)
                    }
                }).then(function () {
                    fetchStudents().then(() => {
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
                                {tableStudents ? 
                                    <MDBDataTable
                                            style={{ color: "black"}}
                                            sortable={false}
                                            striped
                                            noBottomColumns={true}
                                            data={dataStudents(tableStudents)}
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
                                            name="kelas"
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
                                        <label htmlFor="exampleFormControlInput4">No Hp Siswa</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input agama"
                                            onChange={e => setNo_hp_siswa(e.target.value)}
                                            value={no_hp_siswa}
                                            name="no_hp_siswa"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Foto</label>
                                        <input
                                            type="file"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input foto"
                                            onChange={e => setFoto_siswa(e.target.value)}
                                            value={foto_siswa}
                                            name="foto_siswa"
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
                                            onChange={e => setNo_hp_ayah(e.target.value)}
                                            value={no_hp_ayah}
                                            name="no_hp_ayah"
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
                                            className="form-control text   -dark"
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
                                            placeholder="input nama wali   "
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

                   {/* <!-- Detail Modal --> */}
                   <div className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Detail Siswa</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style={{ color: "dark", marginRight: "10px" }}>×</span>
                                </button>
                            </div>
                            <form >
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">No Hp Siswa
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput1"
                                            placeholder="input job position"
                                            value={no_hp_siswa}
                                            name="jobposition"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput2">Anak Ke</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput2"
                                            placeholder="input job location"
                                            value={anak_ke}
                                            name="joblocation"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Alamat</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input job link"
                                            value={alamat}
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">No Hp Ayah</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input job link"
                                            value={no_hp_ayah}
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Nama Ayah</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input job link"
                                            value={nama_ayah}
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Pekerjaan Ayah</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input job link"
                                            value={pekerjaan_ayah}
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">No Hp Ibu</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input job link"
                                            value={no_hp_ibu}
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Nama Ibu</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input job link"
                                            value={nama_ibu}
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Pekerjaan Ibu</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input job link"
                                            value={pekerjaan_ibu}
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">No Hp Wali</label>
                                        {no_hp_wali ?
                                            <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="-"
                                            value={no_hp_wali}
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                        :
                                            <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="-"
                                            value="-"
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                        }
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Nama Wali</label>
                                        { nama_wali ?
                                            <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="-"
                                            value={nama_wali}
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                            :
                                            <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="-"
                                            value="-"
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                        />
                                        }
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Pekerjaan Wali</label>
                                        {pekerjaan_wali ?
                                            <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="-"
                                            value={pekerjaan_wali}
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                          />
                                            :          
                                            <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="-"
                                            value="-"
                                            name="joblink"
                                            style={{ color: "white" }}
                                            readOnly
                                           />
                                        }
                                      
                                   
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Alamat Wali</label>
                                        {alamat_wali ? 
                                            <input
                                                type="text"
                                                className="form-control text-dark"
                                                id="exampleFormControlInput4"
                                                placeholder="-"
                                                value={alamat_wali}
                                                name="joblink"
                                                style={{ color: "white" }}
                                                readOnly
                                            />
                                        :
                                            <input
                                                type="text"
                                                className="form-control text-dark"
                                                id="exampleFormControlInput4"
                                                placeholder="input job link"
                                                value='-'
                                                name="joblink"
                                                style={{ color: "white" }}
                                                readOnly
                                            />
                                        }
                                        
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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
                                            name="kelas"
                                            onChange={e => setKelas(e.target.value)}
                                            required
                                        >
                                            <option selected>Pilih Kelas</option>
                                            {datakelas ?
                                            datakelas.map((item) => {
                                                return(
                                                    <>
                                                    <option key={item.id} value={item.id} >{item.kelas}</option>
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
                                        <label htmlFor="exampleFormControlInput4">No Hp Siswa</label>
                                        <input
                                            type="text"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input agama"
                                            onChange={e => setNo_hp_siswa(e.target.value)}
                                            value={no_hp_siswa}
                                            name="no_hp_siswa"
                                            style={{ color: "white" }}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput4">Foto</label>
                                        <input
                                            type="file"
                                            className="form-control text-dark"
                                            id="exampleFormControlInput4"
                                            placeholder="input foto"
                                            onChange={e => setFoto_siswa_edit(e.target.value)}
                                            value={foto_siswa_edit}
                                            name="foto_siswa"
                                            style={{ color: "white" }}
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
                                            onChange={e => setNo_hp_ayah(e.target.value)}
                                            value={no_hp_ayah}
                                            name="no_hp_ayah"
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
                                            placeholder="input nama wali   "
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
                                    <button type="submit" className="btn btn-success" >Edit Data</button>
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