import { useEffect, useState } from "react";
import NavBar from "../../component/nav";
import Footer from "../../component/footer"
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './detail.css'
import '../../App.css';
import chat2 from '../../images/chat2.png'
import phone from '../../images/phone.png'
import user2 from '../../images/user2.png'
import location from '../../images/location.png'
import share from '../../images/share.png'
import arrow from '../../images/arrow - Copy.png'
import like from '../../images/like.png'


export function Productdetails() {
  const [images, setImages] = useState([]);
  const [product , setProduct] = useState({});
  const param = useParams();
  console.log("para----->", param.id);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch(`https://dummyjson.com/products/${parseInt(param.id) + 1}`)
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        setProduct(res);
        setImages(res.images || []);
      })
  }

  return (
    <div>
      <NavBar />
      <div className="mainDiv">

        <div style={{ display: 'flex' }}>

          <div style={{ width: "850px", paddingTop: 133 }}>
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={`${param.id}_${index}`}>
                  <img
                    className="d-block w-100"
                    src={image}
                    style={{ height: '480px', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div style={{display:'flex' , flexDirection:'column'}}>


            <div className="userInfo">

              <div className="user1Div">

                <div className="userLeft"> <img src={user2} style={{ width: 60, marginLeft: 19, marginTop: 9 }} /></div>

                <div className="userRight" >
                  <p style={{ fontWeight: "700" }}>ABC Enterprises</p>
                  <p>Member since Jan 2024</p>
                  <p style={{ fontWeight: "700" }}>See profile <img width={18} src={arrow} /></p>
                </div>


              </div>

              <div className="phoneBtn">
                <img style={{ height: 18 }} src={phone} />
                <span className="phoneBtnTxt">Show phone number</span>
              </div>
              <div className="chatBtn">
                <img style={{ height: 18 }} src={chat2} />
                <span className="chatBtnTxt">Chat</span>
              </div>
            </div>

            <div className="locationDiv">
              <h1 className="locationTxt">Location</h1>
              <p className="locationImg"><img style={{width:16}} src={location} /> <span>Bahdurabad, Karachi</span></p>
            </div>

          </div>
        </div>

        <div className="priceDiv">

          <div style={{display:'flex' , justifyContent:'space-between' , alignItems : 'center'}}>
          <h1 className="price" >Rs {product.price}</h1>

          <div><img src={share} style={{width:'21px' ,  marginRight:'20px'}} />
          <img src={like} style={{width:'21px' , marginRight:'18px' }} /></div>

          </div>

          <p className="priceTitle" >{product.title}</p>

          <div className="priceLocationDiv">
              <p className="priceLocationImg"><img style={{width:18 , marginRight : 4}} src={location} /> <span>Bahdurabad, Karachi</span></p>
              <p className='time'>2 days ago</p>
            </div>

        </div>
        <div className="detailsDiv">
          <h2 className="detailHeading">Details</h2>
          <div className="detailsRow1" style={{display:'flex' , alignItems : 'center' , justifyContent:'space-between'}}>
            <p>Price <span>{product.price}</span></p>
            <p style={{marginRight:160}}>Condition <span>Used</span></p>
          </div>
          <p style={{marginBottom:14}}>Type <span>{product.category}</span></p>
        </div>

        <div className="descriptionDiv">
        <h2 className="descriptionHeading">Description</h2>
        <p>{product.description}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem porro earum,<br /> labore aliquid laboriosam minus  in asperiores, ut tempora exercit <br />ationem maiores quae voluptatibus quo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem porro <br /> earum, labore aliquid laboriosam minus <br /> in asperiores, ut tempora exercitationem maiores quae voluptatibus quo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem porro <br /> earum, labore aliquid laboriosam minus  in asperiores, <br /> ut tempora exercitationem br maiores quae voluptatibus quo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit. Quidem porro earum, labore aliquid laboriosam minus <br /> in asperiores, ut tempora exercitationem maiores quae voluptatibus quo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem porro <br /> earum, labore aliquid laboriosam minus  in asperiores, <br /> ut tempora exercitationem br maiores quae voluptatibus quo.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem porro  earum, labore aliquid laboriosam minus  in asperiores,  ut tempora exercitationem br maiores quae voluptatibus quo.</p>

        </div>
      </div>
      <Footer/>
    </div>
  );
}