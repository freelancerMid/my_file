import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "./Images/Image1.jpg"
import image2 from "./Images/Image2.jpg"
import image3 from "./Images/Image3.jpg"

const Home =  () => {
        return (
            <div className='wrapper'>
            <img className="img_view_page" src={image2} alt="Image"/>
                    <div className='container'>
                    </div>
            </div>
        )
    }

const view_page = ()=>{
    return(
        <div>
        
        
        </div>
    )
}

export default Home;
