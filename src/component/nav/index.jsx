
import './style.css'
import olxIconLight from '../../images/olxLight.png'
import olxIconDark from '../../images/olxDark.png'
import carIcon from '../../images/car.png'
import searchIconBlack from '../../images/mBlack.png'
import searchIconWhite from '../../images/mWhite.png'
import plusIcon from '../../images/plus.png'
import arrowIcon from '../../images/arrow.png'
import bellIcon from '../../images/bell.png'
import buildingIcon from '../../images/building.png'
import chatIcon from '../../images/chat.png'
import userIcon from '../../images/user.png'

export default function NavBar(){
    return (
        <div>

<header>
        <div className='first-row'>
          <ul style={{ display: 'flex' }} >
            <li className='logo1'>< img src={olxIconLight} style={{ width: 35 }} alt="olx" /></li>
            <li><img src={carIcon} alt="car" /> <span>MOTORS</span></li>
            <li><img src={buildingIcon} alt="building" /> <span>PROPERTY</span></li>
          </ul>
        </div>
        <div className='second-row'>
          <ul style={{ display: 'flex', alignItems: 'center' }}>
            <li><img src={olxIconDark} style={{ width: 63 }} /></li>
            <li><div className='location-bar'><img style={{ width: 18 }} src={searchIconBlack} /> <input type="text" /> <img style={{ width: 18 }} src={arrowIcon} alt="" /></div></li>
            <li style={{ display: 'flex', alignItems: 'center' }}><div className='search-bar'><input type="text" placeholder='Find Cars, Mobile Phones and more...' /> </div><div className='search-icon'><img src={searchIconWhite} /></div></li>
            <li><img className='chat' style={{ width: 22 }} src={chatIcon} /></li>
            <li><img className='bell' style={{ width: 24 }} src={bellIcon} /></li>
            <li><div className='user'><img style={{ width: 30 }} src={userIcon} /> <img style={{ width: 18, marginLeft: 2 }} src={arrowIcon} /></div></li>
            <li><div className='sellBtn'><img style={{ width: 14, marginRight: 3 }} src={plusIcon} /> <span className='sell'>SELL</span></div></li>
          </ul>
        </div>
      </header>
        </div>
    )
}