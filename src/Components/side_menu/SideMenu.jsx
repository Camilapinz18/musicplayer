import './sideMenu.css'
import { FiSearch } from 'react-icons/fi'
import { RiHome2Fill } from 'react-icons/ri'
import { TbTrendingUp } from 'react-icons/tb'
import { AiFillHeart } from 'react-icons/ai'
import { FaHistory } from 'react-icons/fa'
import { RiPlayListFill } from 'react-icons/ri'
import { GiSplashyStream } from 'react-icons/gi'

const SideMenu = () => {
    return (
        <div className="sideMenu_container">
            <div className='logo_container'>
                <GiSplashyStream />
            </div>
            <div className='side_menu_options'>
                <h3>Menu</h3>
                <div className='option'>
                    <RiHome2Fill className='icons' />
                    <h4>Home</h4>
                </div>
                <div className='option'>
                    <FiSearch className='icons' />
                    <h4>Search</h4>
                </div>
                <div className='option'>
                    <TbTrendingUp className='icons' />
                    <h4>Trending</h4>
                </div>
                <div className='option'>
                    <AiFillHeart className='icons' />
                    <h4>Favorites</h4>
                </div>
                <div className='option'>
                    <FaHistory className='icons' />
                    <h4>History</h4>
                </div>
                <div className='option'>
                    <RiPlayListFill className='icons' />
                    <h4>Playlist</h4>
                </div>

            </div>
        </div>

    )
}

export default SideMenu