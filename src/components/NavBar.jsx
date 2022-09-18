import React from 'react';
import { NavLink } from 'react-router-dom';

const activeClass = ( { isActive } ) => ( isActive ) ? "active" : undefined;

export function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/a_machine" className={ activeClass }>Automatic Machine</NavLink>
                </li>
                <li>
                    <NavLink to="/c_machine" className={ activeClass }>Choice Machine</NavLink>
                </li>
            </ul>
        </nav>
    );
};
