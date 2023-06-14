import { useAppDispatch, useAppSelector } from "hooks/redux";
import React, { useEffect } from "react";
import { AppRouter } from "core/Router/Router";
import { Header } from "components/templates/Header/Header";
import { Footer } from "@/components/templates/Footer/Footer";

export default function App() {
    useEffect(() => {
        console.log(123);
    });
    return (
        <div className="app">
            <Header />
            <AppRouter />
            <Footer />
        </div>
    );
}

