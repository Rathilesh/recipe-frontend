import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardComponent from "../components/Card";

export default function SearchedRecipe() {

  const [recipieData,setRecipieData] = useState([])
  const [loading,setLoading] = useState(false)

  let { query } = useParams();


  useEffect(()=>{

    const getRecipiesByQuery = async () => {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/V1/search/recipes/${query}`);
        const ResponseData = await response.json();
        setRecipieData(ResponseData.content.data); // probably a safer way to do this, but if you console.log(data) you'll see an object is being returned, not an array. 
           setLoading(false);
      };    
      getRecipiesByQuery(); 

  },[query])
  return (
    <Container>
       {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
            
            recipieData.length ==0 ? (
                <h1>There is no recipe related your search query</h1>
            ) : (

              <>
                <h3>Recipies listing based on  ``{query ?? ''}`` </h3>
                <hr/>
                {recipieData.map((recipe)=>{
                  return <CardComponent key={recipe.name} data={recipe} />
                })}
              </>

            )
            
            
            
      )}
    </Container>
  )
}
