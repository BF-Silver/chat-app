import React, { useEffect, useState } from 'react';
import "./Sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import ChatIcon from '@mui/icons-material/Chat';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import SettingsIcon from '@mui/icons-material/Settings';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hooks';
import useCollection from '../../hooks/useCollection';
import { addDoc, collection } from 'firebase/firestore';


const Sidebar = () => {

const user = useAppSelector((state) => state.user.user);
const { documents: channels} = useCollection("channels");

const addChannel = async () => {
   let channelName: string | null =  prompt("新しいチャンネルを作成");
   if (channelName){
    await addDoc(collection(db, "channels"), {
        channelName: channelName,
    });
   }
}

  return <div className="sidebar">

{/* {sidebarLeft} */}
<div className="sidebarLeft">
<div className="serverIcon">
    <img src="./logobird.png" alt="" />
</div>
<div className="serverIcon2">
<TwitterIcon />
</div>
<div className="serverIcon3">
<InstagramIcon />
</div>
<div className="serverIcon4">
<FacebookIcon />
</div>

</div>

{/* {sidebarRight} */}
<div className="sidebarRight">
<div className='sidebarTop'>
    <h3>お問い合わせ</h3>
    <ExpandMoreIcon></ExpandMoreIcon>
</div>


{/* {sidebarChannels} */}
<div className="sidebarChannels">
    <div className='sidebarChannelsHeader'>
        <div className='sidebarHeader'>
        <ExpandMoreIcon></ExpandMoreIcon>
        <h4>
            よくある質問
        </h4>
        </div>
<AddIcon className='sidebarAddIcon' onClick={() => addChannel()}/>
    </div>

<div className='sidebarChannelList'>
    {channels.map((channel) => (
        <SidebarChannel channel={channel} id={channel.id} key={channel.id}/>
    ))
    }
    
</div>

<div className="sidebarFooter">
    <div className="sidebarAccount">
        <img src="user?.photo" alt="" onClick={() => auth.signOut()
        }/>
        <div className="accountName">
            <h4>{user?.displayName}</h4>
            <span>#{user?.uid.substring(0,4)}</span>
        </div>
    </div>
    <div className="sidebarVoice">
        <ChatIcon />
        <HeadsetMicIcon />
        <SettingsIcon/>
    </div>
</div>

</div>
</div>

    </div>
}

export default Sidebar
