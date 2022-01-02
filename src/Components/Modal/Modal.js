
import React, {useState, useEffect, useCallback} from 'react';
import './Modal.css';

const Modal = () => {
    const [isOpened, setOpened] = useState(false);

    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
            setOpened(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    return (
        <div className='modal'>

            { isOpened ?
                <div className='opened-modal'>
                    <span className='modal-text'> This is my modal</span>
                    <button className='btn btn-secondary' onClick={() => setOpened(false)}>Close</button>
                </div>
                :
                <button className='btn btn-primary' onClick={() => setOpened(true)}>Open Modal</button>
            }
        </div>

    )
}

export default Modal;