import { useEffect, useState } from "react";
import { Col, Container, Image,  Row,  Spinner } from "react-bootstrap";
import trayLogo from'./../assets/tray.png';
import {  useNavigate } from "react-router-dom";

export default function CategoryDisplay() {

const [categoriesList,setCategoriesList] = useState([])
const [loading,setLoading] = useState(false)
const navigate = useNavigate();

const handleCategoryClick = (id)=>{
    navigate(`/category-recepies/${id}`);

}
const url = "http://localhost:3001/api/V1/categories";



useEffect(()=>{

    const getAllCategories = async () => {
        setLoading(true);
        const response = await fetch(url);
        const ResponseData = await response.json();
        setCategoriesList(ResponseData.content.data); // probably a safer way to do this, but if you console.log(data) you'll see an object is being returned, not an array. 
        setLoading(false);
    };    
    getAllCategories(); 

    },[url])

  return (
    <Container style={{marginTop:'2rem'}}>
    <Row className="justify-content-md-center">
        
      
    {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        categoriesList.map((category)=>{
            return <Col  key={category.name} lg="1" style={{ display:'flex', flexDirection:'column', cursor:'pointer',alignItems:'center'}} onClick={()=>handleCategoryClick(category.id)} >
                <Image width={50} height={50} key={category.name} src={trayLogo} roundedCircle />
                <h6 style={{textAlign:'center'}}>{category.name}</h6>
            
            </Col>
        })

        
      )
    }
    </Row>
    </Container>
  )
}
