import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/SinglePost.css"
import ReactMarkdown from 'react-markdown'
import {getPosts2} from "../contentful"


function SinglePost() {
    const { id } = useParams()
    const [newData, setNewData] = useState()

    useEffect(() => {
        getPosts2(id).then(res => setNewData(res?.fields));
    },[])
    
    return(
        <>
        { newData && newData !== null &&
            <div className="Post">
                <div className="MuiGrid-root MuiGrid-container">
                    <div className="PostHead">
                        <div className="PostHead__back">
                        <Link  to="/" style={{ textDecoration: 'none' }} ><span className="PostHead__back-text">Back to All Blog Posts</span></Link>
                        </div>
                        <h1 className="PostHead__title">{newData.title}</h1>
                        <div className="PostHead__dates">{newData.dateTime}</div>
                        <img className="PostHead__featured-image" src={newData.featureImage.fields.file.url} alt={newData.featureImage.fields.title}/>
                    </div>
                    <div>
                        <div className="PostBody">
                            <div className="MuiGrid-root PostBody__container MuiGrid-container MuiGrid-direction-xs-column">
                                <div dangerouslySetInnerHTML={{ __html: newData.body}} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )

   // return(true)
}

export default SinglePost