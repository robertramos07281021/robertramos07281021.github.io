import React,{useEffect, useState} from "react";

const RandomRecipe = () => {
    const [foodApi1, getFoodApi1] = useState([]);
    useEffect(() => {
  
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        .then((response) => response.json())
        .then((data) => getFoodApi1(data.meals));
    }, []);

    const [foodApi2, getFoodApi2] = useState([]);
    useEffect(() => {
  
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52764`)
        .then((response) => response.json())
        .then((data) => getFoodApi2(data.meals));
    }, []);

    const [foodApi3, getFoodApi3] = useState([]);
    useEffect(() => {
  
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52839`)
        .then((response) => response.json())
        .then((data) => getFoodApi3(data.meals));
    }, []);

   

    const [foodApi4, getFoodApi4] = useState([]);
    useEffect(() => {
  
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52827`)
        .then((response) => response.json())
        .then((data) => getFoodApi4(data.meals));
    }, []);

    return(
        <div>
            
            <h1 className="text-3xl text-center font-black sampleMenu pt-5">Sample Menu</h1>
            <div className="flex gap-16 mt-5 justify-center">
                
                <div className="w-60">
                    {foodApi1.map((food) => (
                        <div key={food.idMeal}>
                        <img src={food.strMealThumb} alt="first food api" className="rounded-lg"/>
                        <p className="text-center font-bold p-3">{food.strMeal}</p>
                        </div>
                    ))}
                    
                </div >

                <div className="w-60">
                    {foodApi2.map((food) => (
                        <div key={food.idMeal}>
                        <img src={food.strMealThumb} alt="first food api" className="rounded-lg"/>
                        <p className="text-center font-bold p-3">{food.strMeal}</p>
                        </div>
                    ))}
                </div>

                <div className="w-60">
                    {foodApi3.map((food) => (
                        <div key={food.idMeal}>
                        <img src={food.strMealThumb} alt="first food api" className="rounded-lg"/>
                        <p className="text-center font-bold p-3">{food.strMeal}</p>
                        </div>
                    ))}
                </div>

                <div className="w-60 ">
                    {foodApi4.map((food) => (
                        <div key={food.idMeal}>
                        <img src={food.strMealThumb} alt="first food api" className="rounded-lg"/>
                        <p className="text-center font-bold p-3">{food.strMeal}</p>
                        </div>
                    ))}
                </div>

            </div>
            
        </div>
    )
}

export default RandomRecipe;

