import { ROUTES } from "@/core/Router/routes";
import React from "react";
import { NavLink } from "react-router-dom"

const menuHeaderList = [
    {
        key: 'main',
        label: 'Главная',
        to: ROUTES.ROOT.path
    },
    {
        key: 'reg',
        label: 'Регистрация',
        to: ROUTES.REGISTER_PAGE.path
    }
];
export const MenuHeader = () => <>{menuHeaderList.map((item) => <NavLink {...item} ><li>{item.label}</li></NavLink>)} </>
