import React, {useState} from 'react'

function Team (props) {
    const {teamMember} = props

    if(!teamMember) {
        return <h3>Error</h3>
    }
    return (
        <div>Team Placeholder
        <p>
        {teamMember.name}
        </p>
        <p>
            {teamMember.email}
        </p>
        <p>
            {teamMember.role}
        </p>
        </div>
    )
}

export default Team;