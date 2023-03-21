import { useState } from "react";
import Alert from "./Alert";

const Login = () => {
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [show, setShow] = useState(false)

    const validarInput = (e) => {
        e.preventDefault()
        console.log(email + contraseña)
        if (!email.trim() || !contraseña.trim()) {
            return <Alert alerta="Faltan datos por completar"/>
        } else return setShow(true);
    }


    return (
        <>
            <form onSubmit={validarInput}>
                <label>Email</label>
                <input name="Email" onChange={(e) => setEmail(e.target.value)} />
                <label>Contraseña</label>
                <input name="Contraseña" onChange={(e) => setContraseña(e.target.value)} />
                <button type="submit" disabled={!email.trim() || !contraseña.trim()}
                >Iniciar sesión</button>
            </form>
            {
                show && (<Alert alerta= "El inicio de sesión ha sido exitoso"/>)
               
            }
        </>
    )
}
export default Login;