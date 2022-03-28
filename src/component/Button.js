import React from "react";
import { Link } from "react-router-dom";


export default function Button (text, url) {
    return(
        <link to={url} style={{textDecoration: 'none'}}>
            {text}
        </link>
    )
}