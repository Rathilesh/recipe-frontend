import { Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Search from "../components/Search";
import CategoryDisplay from "../components/CategoryDisplay";

export default function Layout() {
  return (
    <>
    {/* navigation component */}

    <Nav defaultActiveKey="/" as="ul" style={{backgroundColor:'#e8e8e8', padding:'1rem', justifyContent:"flex-end",gap:'1rem'}}>
      <Nav.Item as="li">
        <Link to="/">Home</Link>
      </Nav.Item>
      {/* <Nav.Item as="li">
        <Link to="/blogs">Blogs</Link>
      </Nav.Item> */}
      <Nav.Item as="li">
        <Link to="/contact">profile</Link>
      </Nav.Item>
    </Nav>

    {/* categories display */}

    <CategoryDisplay/>

    {/* search component */}

     <Search/>
      

     <Outlet />

     <footer style={{textAlign:'center',backgroundColor:'#e8e8e8'}}>Copyright reserved </footer>
    </>
  )
}
