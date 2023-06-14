import React from "react";
import './Header.scss';
import { MenuHeader } from "@/containers/MenuHeader/MenuHeader";

export const Header = () => {

    return (
        <header className="header">
            <div className="header__logo">LOGO</div>
            <nav className="header__nav">
                <ul>
                    <MenuHeader />
                </ul>
            </nav>
            <button className="header__btn-callback">Заказать звонок</button>
        </header>
    )
}