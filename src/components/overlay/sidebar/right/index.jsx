import React from 'react'

// Router Dom
import { useNavigate } from 'react-router-dom'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeRightSidebar } from '../../../../redux/reducers/components/overlays/sidebar/right'

// Primefaces
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button';

// Bootstrap
import Nav from 'react-bootstrap/Nav';

// Rotas
import { routes } from '../../../../routes'

export default function RightSidebar() {

    // Redux
    const visible = useSelector(state => state.rightSidebarView.value)
    const dispatch = useDispatch()

    //Router
    const navigate = useNavigate();

    return (
        <Sidebar visible={visible} position="right" onHide={() => dispatch(closeRightSidebar())}>
            <h2>Menu Rotas</h2>
            <Nav defaultActiveKey="/home" className="flex-column">

                {routes.map((route, index) => (
                    <Nav.Item key={index}>
                        <Button
                            label={route.labelPT}
                            style={{ width: '100%', marginBlock: '5px' }}
                            onClick={() => {
                                navigate(route.path)
                                dispatch(closeRightSidebar())
                            }} />
                    </Nav.Item>
                ))}

            </Nav>
        </Sidebar>
    )
}