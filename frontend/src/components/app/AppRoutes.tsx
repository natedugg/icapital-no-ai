import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Investors from '../investors/Investors';
import Edit from '../investors/Edit/Edit';
import Add from '../investors/Add/Add';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Investors />} />
                <Route path="/investors" element={<Investors />} />
                <Route path="/investors/:investor_id" element={<Edit />} />
                <Route path="/investors/new" element={<Add />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;