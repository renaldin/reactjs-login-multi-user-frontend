import React from 'react'
import Navbar from '../components/Navbar'
import Sidabar from '../components/Sidabar'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='columns mt-6' style={{ minHeight: "100vh" }}>
                <div className="column is-2"><Sidabar /></div>
                <div className="column has-background-light">
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout
