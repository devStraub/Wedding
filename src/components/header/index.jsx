import React from 'react'

// Router Dom
import { useNavigate } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { showRightSidebar } from '../../redux/reducers/components/overlays/sidebar/right'
import { setPage } from '../../redux/reducers/components/pages';
import { setLanguage } from '../../redux/reducers/configs'

// Primefaces
import { Button } from 'primereact/button';

// CSS
import './header.css'

// Icons
import {
    GiRing
} from "react-icons/gi";

export default function Header() {

    // Redux
    const language = useSelector(state => state.ConfigController.language)
    const dispatch = useDispatch()

    //Router
    const navigate = useNavigate();    

    return (
        <>
            <div className='header-left'>
                <Button rounded text onClick={() => navigate("/")}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <GiRing style={{ fontSize: '30px' }} />
                        <strong>Wedding</strong>
                    </div>
                </Button>
            </div>
            <div className='header-right' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button icon="pi pi-bars" text onClick={() => dispatch(showRightSidebar())} />
            </div>
        </>
    )
}