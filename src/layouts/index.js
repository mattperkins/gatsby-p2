import React from 'react'

const container = {
    maxWidth: '1175px',
    width: '90%',
    margin: 'auto'
}

export default ({children}) => <div style={container}>{children()}</div>

