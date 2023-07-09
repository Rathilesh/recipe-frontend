import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardComponent from "../components/Card";

export default function RecipeDetailsByCategory() {

  const [recipieData,setRecipieData] = useState([])
  const [categoryName,setCategoryName] = useState([])
  const [loading,setLoading] = useState(false)

  let { id } = useParams();


  useEffect(()=>{

    const getRecipiesByCategory = async () => {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/V1/category/${id}`);
        const ResponseData = await response.json();
        setRecipieData(ResponseData.content.data.recipe); // probably a safer way to do this, but if you console.log(data) you'll see an object is being returned, not an array. 
        setCategoryName(ResponseData.content.data.name); // probably a safer way to do this, but if you console.log(data) you'll see an object is being returned, not an array. 
        setLoading(false);
      };    
      getRecipiesByCategory(); 

  },[id])
  return (
    <Container>
       {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
            <Row>
            <h3>Recipies related to the ``{categoryName ?? ''}``</h3>
            <hr/>
            {recipieData.map((recipe)=>{
               return <CardComponent key={recipe.name} data={recipe} />
            })}
            </Row>
      )}
    </Container>
  )
}
