import './index.css'

const Logout = prop => {
  const {logout} = prop
  return (
    <button className="login-button" type="button" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
