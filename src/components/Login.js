import { React, useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";


export const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
  }

  return (
    <>
      {success ? (
        <section>
          <h1>Inicio de sesión exitoso</h1>
        </section>

      ) : (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <div className="text-center mb-4">
            <img style={{ width: '100px', height: 'auto' }} src="/img/ciclix.png" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <MDBInput
              wrapperClass='mb-4'
              label='Correo'
              id='username'
              type='email'
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Contraseña'
              id='password'
              type='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />

            <div className="d-flex justify-content-between mx-3 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recuerdame' />
              <Link to='forgot'>¿Olvidaste la contraseña?</Link>
            </div>

            <Link to='/main'><MDBBtn className="mb-4">Iniciar sesión</MDBBtn></Link>
          </form>

          <div className="text-center">
            <p>¿No eres miembro? <Link to='/register' >Registrate</Link></p>
          </div>

        </MDBContainer>
      )}
    </>
  )
};

export default Login;