import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
export default function Index() {
    return (
        <>
         <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
         </main>
          
        </>
    )
}
