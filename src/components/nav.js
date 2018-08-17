import React from 'react';
import _ from 'lodash';
import { NavLink } from 'react-router-dom';

const routes = [
    { path: '/random/bid', label: '随机投标' },
    { path: '/random/matrix', label: '随机矩阵' }
];

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                {_.map(routes, route => (
                    <NavLink key={route.path}
                        className='nav-link'
                        to={route.path}
                        activeStyle={{ color: 'limegreen'}}
                    >{route.label}</NavLink>
                ))}
            </div>
        )
    }
}