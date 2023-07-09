import { Container, Row, Spinner} from "react-bootstrap"
import CardComponent from "./components/Card"
import { useEffect, useState } from "react"

function App() {

   const [recentRecipiesList,setRecentRecipiesList] = useState([])
   const [mostLikedRecipiesList,setMostLikedRecipiesList] = useState([])
   const [loading,setLoading] = useState(false)

  useEffect(()=>{

    const getLatestAllRecipies = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3001/api/V1/sort/recipes/createdAt");
      const ResponseData = await response.json();
      setRecentRecipiesList(ResponseData.content.data); // probably a safer way to do this, but if you console.log(data) you'll see an object is being returned, not an array. 
      setLoading(false);
    };   
    
    const getMostLikedAllRecipies = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3001/api/V1/sort/recipes/totalLikes");
      const ResponseData = await response.json();
      setMostLikedRecipiesList(ResponseData.content.data); // probably a safer way to do this, but if you console.log(data) you'll see an object is being returned, not an array. 
      setLoading(false);
    };

    getLatestAllRecipies(); 
    getMostLikedAllRecipies(); 

  },[])

  return (
    <Container>
      <h2>Latest Recipies</h2>
      <hr/>
      <Row style={{marginBottom:'2rem'}}>
      {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
        
        recentRecipiesList.map((recipe)=>{
            return <CardComponent  key={recipe.name} data={{name:recipe.name,description:recipe.makingDescription,image:recipe.image,id:recipe.id}}/>
          })
      )}
      </Row>

      <h2>Most Liked Recipies</h2>
      <hr/>

      <Row style={{marginBottom:'2rem'}}>
      {loading ? (
        <Spinner animation="border" variant="danger" />
      ) : (
          mostLikedRecipiesList.map((recipe)=>{
            return <CardComponent  key={recipe.name} data={{name:recipe.name,description:recipe.makingDescription,image:recipe.image,id:recipe.id}}/>
          })
      )}
      </Row>
      
    </Container>
  )
}

export default App
