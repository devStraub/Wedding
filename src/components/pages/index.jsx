import React from 'react'

//Redux
import { useSelector } from 'react-redux'

// CSS
import './page.css'

// Primefaces
import { Card } from 'primereact/card'

// Components
import Header from '../header'
import Footer from '../footer'

// Routes
import { RouteList } from '../../routes';
import Overlay from '../overlay';

export default function Pages() {

    const page = useSelector(state => state.pageView.value)
    const navigationMode = useSelector(state => state.ConfigController.navigationMode)

    const header = () => {

        return (
            <>
                <Header />
            </>
        )
    }

    const footer = () => {

        return (
            <>
                <Footer />
            </>
        )
    }

    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <div style={{ margin: '3rem'}}>
                    {navigationMode === 'monopage'
                        ?
                        page
                        :
                        <RouteList />
                    }
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
            <Overlay />
        </>
    )
}