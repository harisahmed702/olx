import './App.css';
import Footer from './component/footer'
import { useEffect , useState } from 'react';
import NavBar from './component/nav';
import like from './images/like.png'
import { useNavigate } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);

  const navigate=useNavigate()
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.products);
        setProducts(res.products);
      });
  }

  if (!products?.length) {
    return  <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , height : '100vh' , width:'100vw'}}>
    <div class="loader"></div>
    </div> 
      
  }


  return (
    <div className="App">
      <NavBar/>

      <div className="cartDiv">

        {products.map((item,index) => (
          <div className='cart' key={item.id} onClick={()=>navigate(`./detail/${index}`)}>
            <div className='carImg'>
              <img style={{borderBottom :"1px solid #ccd5d6" , width: '100%' , height:157  }} src={item.thumbnail} alt={item.name} />
            </div>
            <div className='cartContent'>
              <div className='price'><span>Rs {item.price}</span> <img style={{height: 20 , width : 20 }} src={like}/></div>
              <p className='description'>{item.description}</p>
              <p className='locate'>Karachi , Pakistan</p>
              <p className='time'>2 days ago</p>
            </div>
          </div>
        ))}
      </div>

      <Footer/>

    </div>
  );
}

export default App;
