import './player_options.css'
import album from '../../Images/disc4.jpeg'
import {GoTriangleLeft} from 'react-icons/go'
import {GoTriangleRight} from 'react-icons/go'
import {GoPrimitiveSquare} from 'react-icons/go'
import {GoPlay} from 'react-icons/go'
import {GoUnmute} from 'react-icons/go'
import {AiOutlineArrowsAlt} from 'react-icons/ai'


const Player_options = () => {
    return (
        <div className="player_options_container">
            <div className='album_info'>
                <img src={album} alt='album' />
                <div className='album_info_text'>
                    <h2>Into it</h2>
                    <h4>Grips in hell</h4>
                </div>
            </div>

            <div className='controls'>
            <GoTriangleLeft/>
            <GoTriangleRight/>
            <GoPrimitiveSquare/>
            <GoPlay/>
            <GoUnmute/>
            <AiOutlineArrowsAlt/>

            </div>
        </div>
    )
}

export default Player_options