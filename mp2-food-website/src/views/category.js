import React, { useEffect, useState } from "react";
import Modal from "./modal";

export default function Category({ category }) {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryStage, setCategoryState] = useState([]);
    useEffect(() => {

      
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
        .then((response) => response.json())
        .then((data) => setCategoryState(data.meals));
    }, []);


  
    return (
        <li >
          <img onClick={()=> setIsOpen(true)} src={category.strCategoryThumb} alt="categories" className="rounded-lg"/>
          <div className="font-bold text-center" onClick={()=> setIsOpen(true)}>{category.strCategory}</div>
          
          <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
          <div className="col-span-4 p-3 text-center flex justify-center">
            <div className="w-10/12">
              <div className="flex justify-center">
                <img src={category.strCategoryThumb} alt="Home category picture" />
              </div>
              <p className="text-4xl categoryText">{category.strCategory}</p>
              <hr></hr>
            </div>
            
          </div>
          
          {categoryStage.map(catStage =>(
            <div key={catStage.idMeal} className="justify-self-center w-56 text-center mt-2">
              
              <div className="flex justify-center">
                <img src={catStage.strMealThumb} alt="Modal images" className="rounded-lg "/>
                
              </div>
              <p><strong>{catStage.strMeal}</strong></p>
              
            </div>
            
          ))}
          </Modal>
        </li>

    )
      
}
