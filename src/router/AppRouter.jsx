import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AMachine, CMachine } from '../pages';
import { NavBar } from '../components';

export function AppRouter() {
    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path="/lenguajes_formales/a_machine" element={ <AMachine /> } />
                <Route path="/lenguajes_formales/c_machine" element={ <CMachine /> } />
                <Route path="/lenguajes_formales/*" element={ <Navigate to="/lenguajes_formales/a_machine" /> } />
            </Routes>
        </React.Fragment>
    );
};
