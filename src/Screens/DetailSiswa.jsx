import React, {
    useState,
    useEffect
} from 'react';

const DetailSiswa = (props) => {
    const id = props.location.pathname.substring(13)
    console.log(props)
    const URL_API = `http://localhost:8000`
    const [datakelas, setDataKelas] = useState('')
    const [namasiswa, setNamaSiswa] = useState('')
    const [kelassiswa, setKelasSiswa] = useState('')
    const [agamasiswa, setAgamaSiswa] = useState('')
    const [nisnsiswa, setNisnSiswa] = useState('')
    const [alamatsiswa, setAlamatSiswa] = useState('')
    const [fotosiswa, setFotoSiswa] = useState('')

    // fetch data siswa
    const fetchDetailStudent = async () => {
        try {
            const data = await fetch(`${URL_API}/student/get/${id}`, {
                method: 'GET'
            })
            const resp = await data.json()
            console.log(resp)
            setNamaSiswa(resp.data.nama)
            setKelasSiswa(resp.data.kelas[0].id)
            setAgamaSiswa(resp.data.agama)
            setNisnSiswa(resp.data.nisn)
            setAlamatSiswa(resp.data.alamat)
            setFotoSiswa(resp.data.foto_siswa)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }

    // fetch kelas
    const fetchKelas = async () => {
        try {
            const data = await fetch(`${URL_API}/kelas`, {
                method: 'GET'
            })
            const resp = await data.json()
            console.log(resp)
            setDataKelas(resp.result)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }


    useEffect(() => {
        fetchDetailStudent()
            .then(() => {
                fetchKelas()
            })
    }, [])

    return (
        <>
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-11 align-self-center">
                        <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">Detail Siswa</h4>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Detail Siswa</h3>
                                <h6 className="card-subtitle"><code>Edit this data in data siswa!</code></h6>
                                <form className="mt-4">
                                    <div className="form-group">
                                        <label>Nama Siswa</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Input nama siswa"
                                            value={namasiswa}
                                            onChange={(e) => setNamaSiswa(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Nisn Siswa</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Input nisn siswa"
                                            value={nisnsiswa}
                                            onChange={(e) => setNisnSiswa(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="exampleFormControlSelect1">Kelas Siswa</label>
                                        <select
                                            className="form-control"
                                            id="exampleFormControlSelect1"
                                            value={kelassiswa}
                                            onChange={(e) => setKelasSiswa(e.target.value)}
                                        >
                                            <option selected>Choose...</option>
                                            {datakelas ?
                                                datakelas.map((item) => {
                                                    return (
                                                        <>
                                                            <option key={item.id} value={item.id}>{item.kelas}</option>
                                                        </>
                                                    )
                                                })
                                                :
                                                <>
                                                    <option value="Null">No Data!</option>
                                                </>
                                            }

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Agama Siswa</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Input agama siswa"
                                            value={agamasiswa}
                                            onChange={(e) => setAgamaSiswa(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Alamat Siswa</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Input alamat siswa"
                                            value={alamatsiswa}
                                            onChange={(e) => setAlamatSiswa(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img src={fotosiswa} alt="Foto_siswa" style={{ width: '100%', borderRadius: 10 }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailSiswa