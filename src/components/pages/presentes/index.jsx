import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Primefaces
import { Button } from 'primereact/button';

//Bootstrap
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import CardHeader from 'react-bootstrap/esm/CardHeader';

export default function Presentes() {

    const language = useSelector(state => state.ConfigController.language)
    const dispatch = useDispatch();

    const items = [
        {
            name: 'Item',
            price: 'R$ 599,00'
        },
    ]

    return (
        <>
            <Card style={{ minWidth: '80vw' }} className='text-2xl'>
                <CardHeader>
                    <h3>Lista de Presentes</h3>
                </CardHeader>
                <ListGroup as="ol">
                    {items.map((item, idx) => (
                        <ListGroup.Item
                            key={idx}
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{item.name}</div>
                            </div>

                            <div className="ms-2 me-auto">
                                {item.price}
                            </div>

                            <div>
                                <a target='_blank' href='https://nubank.com.br/pagar/1e9xll/UpeFWNIsch' style={{ textDecoration: 'none' }}>
                                    <Button
                                        type="button"
                                        icon="pi pi-gift"
                                        className="p-button-danger"
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