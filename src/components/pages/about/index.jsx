import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Primefaces
import { Card } from 'primereact/card';

// Bootstrap
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Resources
import Photo from '../../../resources/images/lindo-casal-se-casando-na-praia.jpg'

export default function About() {

    const language = useSelector(state => state.ConfigController.language)

    return (
        <>
            <Row className="gap-2">
                <div className="text-700 text-center">
                    <Image src={Photo} width='200' roundedCircle style={{ opacity: '0.7' }} />
                    <div className="text-900 font-bold text-5xl mb-3">Pedro & Maria</div>
                    <div className="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
                </div>
            </Row>
        </>
    )
}