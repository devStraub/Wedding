import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Primefaces
import { Button } from 'primereact/button';

//Bootstrap
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function Convidados() {

    const language = useSelector(state => state.ConfigController.language)
    const dispatch = useDispatch();

    const items = [
        {
            name: 'Alice Rodrigues',
            type: 'Irmã'
        },
        {
            name: 'João Mario Pedroso',
            type: 'Amigo'
        },
    ]

    return (
        <>
            <Card style={{ minWidth: '80vw' }} className='text-2xl'>
                <CardHeader>
                    <h3>Lista de Convidados</h3>
                </CardHeader>
                <ListGroup as="ol">
                    {items.map((item, idx) => (
                        <ListGroup.Item
                            key={idx}
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto" style={{ width: '30%', textAlign: 'left' }}>
                                <div className="fw-bold">{item.name}</div>
                            </div>

                            <div className="ms-2 me-auto" style={{ width: '30%', textAlign: 'left' }}>
                                {item.type}
                            </div>

                            <div>
                                <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLScTEKCoH1Z_jolR7aBEa7Wgi5o5QCgy35HBZZEhBI3UTuo3Mw/viewform?usp=sf_link' style={{ textDecoration: 'none' }}>
                                    <Button
                                        type="button"
                                        icon="pi pi-check"
                                        className="p-button-success"
                                        style={{ width: '30px', height: '30px', margin: '3px' }}
                                    />
                                </a>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </>
    )
}