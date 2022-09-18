import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AMachine, CMachine } from '../pages';
import { NavBar } from '../components';

export function AppRouter() {
    return (
        <React.Fragment>
            <NavBar />
            <Routes>
                <Route path="/a_machine" element={ <AMachine /> } />
                <Route path="/c_machine" element={ <CMachine /> } />
                <Route path="/*" element={ <Navigate to="/a_machine" /> } />
            </Routes>
        </React.Fragment>
    );
};
