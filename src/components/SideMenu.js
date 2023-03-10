import React, { useEffect } from 'react';


const SideMenu = (props) => {
    const activeItemInMenu = props.activeItemInMenu;

    //useEffect hook to add active class to the active item in the menu
    useEffect(() => {


        const menuItems = document.querySelectorAll('#side-menu tr');
        for (let item of menuItems) {
            if (item.getAttribute('data-option') === activeItemInMenu) {
                item.classList.add('active');
            }
        }

    });

    return (
        <table id="side-menu">
            <tbody>
                <tr>
                    <th className="table-heading">iPod.js</th>
                </tr>
                <tr data-option="coverflow">
                    <td className="table-item">Coverflow<i className="fas fa-chevron-right"></i></td>
                </tr>
                <tr data-option="music">
                    <td className="table-item">Music<i className="fas fa-chevron-right"></i></td>
                </tr>
                <tr data-option="games">
                    <td className="table-item">Games<i className="fas fa-chevron-right"></i></td>
                </tr>
                <tr data-option="settings">
                    <td className="table-item">Settings<i className="fas fa-chevron-right"></i></td>
                </tr>
            </tbody>
        </table>
    );
}

export default SideMenu;
