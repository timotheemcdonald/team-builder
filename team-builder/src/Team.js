import React, {useState} from 'react'
import styled from 'styled-components'

const TeamStyled = styled.div`

border: 1px solid black;
width: 35%;
max-width:100%;
margin: 10px;

`

const CenterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

function Team (props) {
    const {teamMember} = props

    if(!teamMember) {
        return <h3>Error</h3>
    }
    return (
        <CenterDiv>
         
            <TeamStyled>
        <p>
        {teamMember.name}
        </p>
        <p>
            {teamMember.email}
        </p>
        <p>
            {teamMember.role}
        </p>
        </TeamStyled>
        </CenterDiv>
    )
}

export default Team;