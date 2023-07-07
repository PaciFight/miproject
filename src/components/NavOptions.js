import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptions.css"
const datatoggle = JSON.parse(localStorage.getItem("value"));



const NavOptions = ( {miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {

   const [miPhoneToggle, setMiPhoneToggle] = useState(false);
   const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
 

   
  useEffect(() => {
    //miphones
    if (datatoggle === 1) {
      return setMiPhoneToggle(true);
    }
    //redmiphones
    if (datatoggle === 2) {
      return setRedmiPhoneToggle(true);
    }
    //tv
    if (datatoggle === 3) {
      return setTvToggle(true);
    }
    //laptops
    if (datatoggle === 4) {
      return setLaptopToggle(true);
    }
    //lifestyle
    if (datatoggle === 5) {
      return setFitnessToggle(true);
    }
    //home
    if (datatoggle === 6) {
      return setHomeToggle(true);
    }
    //audio
    if (datatoggle === 7) {
      return setAudioToggle(true);
    }
    //accessories
    if (datatoggle === 8) {
      return setAccessoriesToggle(true);
    } else {
      console.log("entered but nothing found");
      return null;
    }
       
   }, [])

    return (
        <div className="navOptions"> 

            {miPhoneToggle?   miPhones.map((item)=>(

                 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
            
      
            {redmiPhoneToggle?   redmiPhones.map((item)=>(

               < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

            {tvToggle ?  tv.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }

           {laptopToggle ?   laptop.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     
   

            {fitnessToggle ?   fitnessAndLifeStyle.map((item)=>(

              < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
           )) : null }
     

               {homeToggle ?   home.map((item)=>(

                   < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
              )) : null }
     
     

            {audioToggle ?   audio.map((item)=>(

             < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null }
     

            {accessoriesToggle ?   accessories.map((item)=>(

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
             )) : null }
     
        </div>
    )
}

export default NavOptions
