import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import RecipeDetailsCard from "../components/RecipeDetails";

export default function RecipeDetails() {

  const [recipieData,setRecipieData] = useState([])
  const [loading,setLoading] = useState(false)

  let { id } = useParams();


  useEffect(()=>{

    const getRecipies = async () => {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/V1/recipes/${id}`);
        const ResponseData = await response.json();
        setRecipieData(ResponseData.content.data); // probably a safer way to do this, but if you console.log(data) you'll see an object is being returned, not an array. 
        setLoading(false);
      };    
      getRecipies(); 

  },[id])
  return (
    <Container>
       {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        <RecipeDetailsCard details={recipieData}/>
      )}
    </Container>
  )
}
