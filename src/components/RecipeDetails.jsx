/* eslint-disable react/prop-types */
import { Container, Image, Stack } from "react-bootstrap";

export default function RecipeDetailsCard({details}) {
  return (
    <Container>
        <Stack direction="horizontal" gap={3}>
            <h3>{details.name} </h3> 
            <span className="ms-auto" style={{textAlign:'right'}}>Preparation Time : {details.preparationTime} Hour</span>
        </Stack>
        
        <Image alt="recepie Image" width={'50%'}   src={details.image} fluid  />
        <hr/>
        <article>
            {details.makingDescription}
        </article>
        <hr/>
        <h6>Total Likes : {details.totalLikes}</h6>
        
    </Container>
  )
}
