import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const container = {
    maxWidth: '1175px',
    width: '90%',
    margin: 'auto'
}

export default ({children}) => <div style={container}>
<Header />
{children()}
<Footer />
</div>

