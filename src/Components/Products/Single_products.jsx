import React from 'react';
import { useEffect,useState } from 'react';
import Axios  from 'axios';


const SingleProducts = () => {
    const[data,setdata]=useState([])
    useEffect(() => {
       Axios("http://myjson.dit.upm.es/api/bins/hok5")
       .then((res)=>{
        console.log(res.data);
        setdata(res.data)

       
       })
       .catch((err)=>{
        console.log(err);
       })
    }, []);
    // console.log("Data keldi=>",data);

    return (
        <div className='bacground'>
            <div className='container  '>
           <div className='row mt-5'>
                <div className='col-6 '>
                    <div className='card text-center card_style text-white'>
                        {/* <img src="https://w7.pngwing.com/pngs/520/117/png-transparent-arrow-computer-icons-encapsulated-postscript-curves-angle-triangle-monochrome.png" alt="" /> */}
                        <img width="25%" className="img_margin" src="https://ae01.alicdn.com/kf/Hcb07fe78ff94409b949a45752811e72dT.jpg" alt="" />
                        <div className='brend '  >
                            <h3 className="m-3">SONY 200mm ZOOM </h3>
                            <b >$60000</b>
                            <p className='mt-4 mb-5 text-center title_single'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eius blanditiis, voluptatibus unde iste, beatae officiis, dolores quam exercitationem sit itaque quod molestias ipsa aspernatur nam dicta pariatur placeat eligendi.</p>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <h1 className='text-white text-center'>Products</h1>
                    <div className='row ms-3 oweflov_y'>
                    {
                        data.map(item=>{
                            return(
                                <div className='card card_border text-center col-5 p-3 '>
                                    <img className='circle-rounten' src={item.img_src} alt="" />
                                   <h4 className='mt-3'> {item.name}</h4>
                                </div>
                            )
                        })
                    }

                    </div>
                    
                </div>
           </div>
        </div>
        </div>
    );
}

export default SingleProducts;
