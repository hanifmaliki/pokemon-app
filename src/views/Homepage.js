import React from 'react'
import styled from '@emotion/styled'
import PokemonLogo from '../image/pokemon.png'
import Background from '../image/background.jpg'
import { Button } from '@mui/material';

const Container = styled.div`
    height: 100%;
    width: 100%;
`

const Logo = styled.img`
    width: 40%;
`

const ButtonContainer = styled.div`

`

const Homepage = () => {
    return (
        <Container style={{ backgroundImage: `url(${Background})` }}>
            <Logo src={PokemonLogo} />
            <ButtonContainer>
                <Button variant='contained'>Wild Pokemon</Button>
                <Button variant='contained'>My Pokemon</Button>
            </ButtonContainer>
        </Container>
    )
}

export default Homepage
