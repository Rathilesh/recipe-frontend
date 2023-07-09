import { useRef } from "react";
import { Button, Container, Form,  Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Search() {

  const searchBox = useRef()
  const navigate = useNavigate();

  const handleClick = ()=>{
    // console.log('search box vaue => ',searchBox.current.value)
    navigate(`/search/${searchBox.current.value}`);
    searchBox.current.value = ''
  }

  return (
    <Container style={{marginBottom:'2rem',marginTop:'2rem'}}>
        <h1>Search</h1>
        {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label> */}

        <Stack direction="horizontal" gap={1}>
      <Form.Control
            width={'80%'}
            type="text"
            id="search"
            ref={searchBox}
        />
      <Button size="md" onClick={()=>handleClick()}>Search</Button>
    </Stack>

    </Container>
  )
}
