import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomid } = useParams();
    const myMeeting = async (element) => {
        const appId = 2025032658;
        const serverSecret = '61bcbf8d625ab11a91c09ed88ae4b479';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId, serverSecret, roomid, Date.now().toString(), "Aman");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            }
        })
    }
    return (
        <div>
            <div ref={myMeeting}/>
        </div>
    )
}

export default Room