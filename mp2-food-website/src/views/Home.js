
import React,{useEffect, useState} from "react";
import logoImg from "../logo-spoon.png";
import RandomRecipe from "./homeRandomRecipe";
import Category from "./category";
import Modal from "./homeModal";


const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [categories, getFoodCategory] = useState([]);

  useEffect(() => {

    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((response) => response.json())
      .then((data) => getFoodCategory(data.categories));
  }, []);
  
  return (

  <div className="grid flex w-screen bg-orange-300" >
      <div className="justify-self-center w-screen ">
        
        <div className="text-center w-screen h-64">

          <div className=" flex mt-10 justify-center w-screen">
              <img src={logoImg} alt='This is a logo' className="logoImg"/>
              <div className=" p-4">
                <p className="welcomeFN">Welcome to <span className="logoFontFam">Food Nouveau</span></p>
                <p className="text-base font-semibold pt-10">We serve you a lot of recipe here at our website.</p>
                <p className="text-base font-semibold">We preferred also a lot of recipes around the world.</p>
              </div>
              <img src={logoImg} alt='This is a logo' className="logoImg"/>
          </div>  

          <button onClick={() => {
            setOpenModal(true);
          }}className="p-2 border border-black rounded-lg bg-orange-500 font-bold homeSubscribe">Subscribe</button>
          {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}/>}
          
          
        </div>
        <div className="w-screen flex justify-center">
          <hr className="mt-4 w-[1200px]"/>
        </div>
        <RandomRecipe/>
        <div className="w-screen flex justify-center">
          <hr className="mt-4 w-[1200px]"/>
        </div>
        <h1 className="text-center text-3xl font-black sampleMenu mt-5">Categories</h1>
        <ul className="flex justify-center flex-wrap gap-5 mt-10">
          
          {categories.map(category => (
          <Category key={category.idCategory} category={category} />
          ))}
          
        </ul>
      </div>
      
     <footer className="w-screen bg-orange-600 mt-10 py-2">
        <div className="grid grid-cols-3">
          {/* First Grid */}
          <div className="p-5">
              <div className="text-left">Food <span className="text-white font-bold">Nouveau</span></div>
              <div className="pt-2">
                <ul className="flex gap-2">
                  <li className="border-r-2 border-black pr-1">Home</li>
                  <li className="border-r-2 border-black pr-1">Blog</li>
                  <li className="border-r-2 border-black pr-1">Pricing</li>
                  <li className="border-r-2 border-black pr-1">About</li>
                  <li className="border-r-2 border-black pr-1">Faq</li>
                  <li className=" pr-1">Contact</li>
                </ul>
              </div>
              <div className="text-left pt-2">Copyright © 2023</div>
          </div>

          {/* Second Grid */}
          <div className=" p-5 ">
             <div className="text-left">444 S. Sakahan Ave <br/> Brgy Kalye, San Pedro, Nueva Ecija</div>
             <div className="text-left pt-2">
              +1.555.555.5555
             </div>
             <div className="text-left pt-2">
              support@FoodNouveau.com
             </div>
          </div>

          {/* Third Grid */}
          <div className="p-5">
              <div className="text-left text-xl font-black">About the company</div>
              <div className="text-left indent-6 pt-2">Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.</div>

          </div>
        </div>
     </footer>
  </div>
)};

export default Home;
