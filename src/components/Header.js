import React from 'react'
import { TbPlaylist } from "react-icons/tb";
import skmlogo from "../images/skm_logo.png";

import './Header.css'

const Header = ({ onClickPlayList }) => {
    return (
        <div className='player-header'>
            <h3 className='player-title'>
                <img src={skmlogo} alt='logo' />
                Zunzun Player
            </h3>

            <button className='playlist-button' onClick={onClickPlayList}>
                <TbPlaylist />
            </button>
        </div>
    )
}

export default Header