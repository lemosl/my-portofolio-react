import {Container, Grid, styled, Typography} from "@mui/material"
import avatar from "../../../../assets/images/avatar.jpg"

const Hero = () => {


  const StyledHero = styled("div")(() => ({
      backgroundColor: "black"

  })) 

  const StyledImg = styled("img")(() => ({
    width:"30%",
    borderRadius:"50%"

  })) 

  return (
<>
  <StyledHero>
        <Container>
        <Grid container spacing={2}>
        <Grid item xs={4}>
        <StyledImg src={avatar} />
        </Grid>
    
        <Grid item xs={8}>
        
        </Grid>

</Grid>
</Container>
  </StyledHero>
</>
   
  )
}

export default Hero
