import React ,{useEffect , useState} from 'react'
import axios from 'axios'

export default function Menu() {
  const [menuData , setMenuData] = useState([])
  const [menu_active,  setMenu_active]=useState(true)
    useEffect(()=>{
        axios.get("http://localhost:1337/api/menu-bars?populate=menu_icons")
        .then((res)=>{
          console.log(res.data.data);
          setMenuData(res.data.data)
        })
    }, [])
  return (
    <div>
    <div className="">
      <button onClick={()=>{setMenu_active(!menu_active)}}>mklcsd</button>
    </div>

    <div className={`menu-active`}>
      <ul className='list-style-none'>
        {
          (menu_active)?
          <>
        {
            menuData.map((arr , index)=>{
              return(
                <li className='d-flex flex-row align-items-center' key={index}>
                  <img className='p-2' src={`http://localhost:1337`+arr.attributes.menu_icons.data[0].attributes.url} alt={arr.attributes.menu_name } width="50px"/>
                {/* <p className='p-2'>{arr.attributes.menu_name}</p> */}
                </li>
              )
            })
          }
          </>
          :
          <>
          {
            menuData.map((arr , index)=>{
              return(
                <li className='d-flex flex-row align-items-center' key={index}>
                  <img className='p-2' src={`http://localhost:1337`+arr.attributes.menu_icons.data[0].attributes.url} alt={arr.attributes.menu_name } width="50px"/>
                <p className='p-2 m-0'>{arr.attributes.menu_name}</p>
                </li>
              )
            })
          }
          </>
        }
      </ul>
    </div>
    </div>
    
  )
}
