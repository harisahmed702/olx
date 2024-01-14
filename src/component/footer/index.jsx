import './style.css'
import twiter from '../../images/twiterIcon.svg'
import fb from '../../images/facebookIcon.svg'
import yt from '../../images/youtubeIcon.svg'
import insta from '../../images/instagramIcon.svg'
import appStore from '../../images/playstore.svg'
import googlePlay from '../../images/googlePlay.svg'
import appGallery from '../../images/appGallery.svg'


export default function Footer() {
    return <div>
        <div className="footer">
            <div className="top">
                <div className='topDiv'>
                    <div className='abc' style={{ marginLeft: 32 }}>
                        <h6 >POPULAR CATEGORIES</h6>
                        <p>Cars</p>
                        <p>Flats for rent</p>
                        <p>Mobile Phones</p>
                        <p>Jobs</p>
                    </div>
                    <div className='abc'>
                        <h6>TRENDING SEARCHES</h6>
                        <p>Bikes</p>
                        <p>Watches</p>
                        <p>Books</p>
                        <p>Dogs</p>
                    </div>
                    <div className='abc' >
                        <h6>ABOUT US</h6>
                        <p>About Dubizzle Group</p>
                        <p>OLX Blog</p>
                        <p>Contact Us</p>
                        <p>OLX for Businesses</p>
                    </div>
                    <div className='abc'>
                        <h6>OLX</h6>
                        <p>Help</p>
                        <p>Sitemap</p>
                        <p>Terms of use</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='abc'>
                        <h6>FOLLOW US</h6>

                        <div className='imgDiv1' style={{ margin: 0 }}>
                            <span><img src={twiter} /></span>
                            <span><img src={fb} /></span>
                            <span><img src={yt} /></span>
                            <span><img src={insta} /></span>
                        </div>
                        <div style={{width:120 , display:'flex'}} className='imgDiv2'>
                            <span><img src={appStore} /></span>
                            <span><img src={googlePlay} /></span>
                            <span><img src={appGallery} /></span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bottom">
                <div>
                    <span style={{fontWeight:"600" , marginRight:14}}>Free Classifieds in Pakistan</span>
                    <span style={{fontWeight:"400" , marginRight:35}}>. © 2006-2024 OLX</span>
                </div>
            </div>
        </div>

    </div>
}