import React from 'react'

// Components
import RightSidebar from './sidebar/right'
import Modal from './dialog/modal'
import DialogConfirm from './dialog/confirm'

export default function Overlay(){

    return(
        <>  
            <RightSidebar/>  
            <Modal/>
            <DialogConfirm/>
        </>
    )
}