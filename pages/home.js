import Navbar from '../components/Navbar';
import Style from '../styles/Home.module.css';
const home = () => {
    return (
        <>
        <Navbar/>
        <h1 className={Style.maintext}>Home</h1>
        </>
    )
  }
  
  export default home