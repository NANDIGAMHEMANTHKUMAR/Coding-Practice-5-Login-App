// Write your code here
import './index.css'

const Login = prop => {
  const {login} = prop
  return (
    <button className="login-button" type="button" onClick={login}>
      Login
    </button>
  )
}

export default Login
