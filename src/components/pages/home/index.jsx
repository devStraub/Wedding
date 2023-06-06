import React from 'react'

// Redux
import { useSelector } from 'react-redux'

// Primefaces
import { Button } from 'primereact/button';
import { Image } from 'primereact/image'

// Icons
import {
    DiJava,
    DiReact,
    DiDatabase,
    DiMongodb,
    DiDocker,
} from "react-icons/di";

// CSS
import './home.css'

export default function Home() {

    const language = useSelector(state => state.ConfigController.language)

    return (
        <>

            <div className="text-700 text-center">
                <div className="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
                <div className="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
            </div>

        </>
    )
}