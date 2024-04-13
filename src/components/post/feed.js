import React, {useEffect, useState} from "react";
import ApiConnector from "../../api/apiConnector";
import ApiEndpoints from "../../api/apiEndpoints";

const Feed = () => {

    const style = {
        width: '300px',
        height: '300px'
    }

    const center = {
        marginTop: "20px",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
    }

    const [feed, setFeed] = useState([]);

    const fetchFeeds = async() => {
        const feedData = await ApiConnector.sendGetRequest(
            ApiEndpoints.FEED
        )
        
        feedData.map((element) => {

            const obj = {
                image: element.image,
                description: element.description
            }
            setFeed((prev) => ([...prev, obj]));
        });
    }

    useEffect(() => {
        fetchFeeds();
    }, []);

    return (
        <div style={center}>
            {
                
                feed.length > 0 && feed.map((ele) => {
                    return (
                        <div>
                            <img src={ele.image} style={style}/>
                            <p>{ele.description}</p>
                        </div>
                    )
                })
                
            }
        </div>
    )
}

export default Feed;