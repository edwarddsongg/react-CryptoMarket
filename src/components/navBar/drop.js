import React, { useState } from 'react';
import { Items } from './items'
import './drop.css'
import { Link } from 'react-router-dom'

function Drop(props) {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    
    return(
        <> 
            <ul  onClick={props.onCloseMobileMenu}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {Items.map((item, index) =>  {
                    return(
                        <li key = {index}>
                            <Link className = {item.cName} to = {item.path}> 
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul> 
        </>
    );
}

export default Drop;

