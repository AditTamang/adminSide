import React from 'react'
import Sidebar from '../../../components/admin/Sidebar'
import Heading from './Heading'

const TrialLayout = () => {
    return (

        <>
            <Sidebar />
            <Heading />
            <Outlet />
        </>
    )
}

export default TrialLayout