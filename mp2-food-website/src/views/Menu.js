import React from "react";
import { useState, useEffect } from "react";

const Menu = () => {
  //-------------------------- 1st random recipe
  const [foodApi1, getFoodApi1] = useState([]);
  const [popupInfoApi1, setPopupInfoApi1] = useState(false);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi1(data.meals));
  }, []);

  //-------------------------- 2nd random recipe

  const [foodApi2, getFoodApi2] = useState([]);
  const [popupInfoApi2, setPopupInfoApi2] = useState(false);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi2(data.meals));
  }, []);

  //-------------------------- 3rd random recipe
  const [foodApi3, getFoodApi3] = useState([]);
  const [popupInfoApi3, setPopupInfoApi3] = useState(false);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi3(data.meals));
  }, []);

  //-------------------------- 4th random recipe
  const [foodApi4, getFoodApi4] = useState([]);
  const [popupInfoApi4, setPopupInfoApi4] = useState(false);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi4(data.meals));
  }, []);

  //-------------------------- 5th random recipe
  const [foodApi5, getFoodApi5] = useState([]);
  const [popupInfoApi5, setPopupInfoApi5] = useState(false);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi5(data.meals));
  }, []);

  //-------------------------- 6th random recipe
  const [foodApi6, getFoodApi6] = useState([]);
  const [popupInfoApi6, setPopupInfoApi6] = useState(false);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi6(data.meals));
  }, []);

  //-------------------------- 7th random recipe
  const [foodApi7, getFoodApi7] = useState([]);
  const [popupInfoApi7, setPopupInfoApi7] = useState(false);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi7(data.meals));
  }, []);

  //-------------------------- 8th random recipe
  const [foodApi8, getFoodApi8] = useState([]);
  const [popupInfoApi8, setPopupInfoApi8] = useState(false);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => getFoodApi8(data.meals));
  }, []);

  // -------------------------- Search
  const [foodSearch, setFoodSearch] = useState("");
  const [getFoodApi, setGetFoodApi] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [showInfo, setShowInfo] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const toggleFood = (food) => {
    setShowInfo(!showInfo);
    setSelectedFood(food);
  };

  const closePopup = () => {
    setShowInfo(false);
    setSelectedFood(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSearch}`
      );
      const data = await response.json();
      setGetFoodApi(data.meals);
      setFoodSearch("");
    } catch (error) {
      console.log("Error:", error);
    }

    if (foodSearch === "") {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setIsLoading(false);
  };

  console.log(getFoodApi);

  const HandleChangeFoodSearch = (e) => {
    setFoodSearch(e.target.value);
  };

  return (
    <div className='flex flex-col w-screen menuBg bg-orange-300'>
      <div className='flex justify-center'>
        <div className='flex flex-col mt-5 w-3/5 text-center'>
          <p className='text-4xl text-black align-self-center searchText'>
            Search Your Food Recipe
          </p>
          <form
            className=' pt-5'
            onSubmit={handleSubmit}>
            <input
              type='text'
              name='search'
              id='search'
              className='border rounded-md'
              onChange={HandleChangeFoodSearch}
              value={foodSearch}
            />
            <button className='pl-5 text-black'>search</button>
          </form>

          <hr className='mt-5 w-30' />
        </div>
      </div>

      <div className='flex w-screen mt-5 justify-center mb-10'>
        {isHidden ? (
          <div className='flex flex-wrap gap-20 pl-24 mt-10 w-4/5  '>
            {/*---------------------------------------- 1st random */}

            <div className='rounded-md'>
              {foodApi1.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 rounded overflow-hidden'>
                    <img
                      className='w-full'
                      src={food.strMealThumb}
                      alt='Food Picture API1'
                    />
                    <div className='px-6 py-3'>
                      <div className='font-bold text-sm mb-2 text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button onClick={()=>{
                      setPopupInfoApi1(true)
                    }} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                  </div>

                  {popupInfoApi1 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <h1 className="text-4xl">{food.strMeal}</h1>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food Picture Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi1(false);
                              }}>
                              {" "}
                            Close
                        </button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 2nd random */}
            <div className='rounded-md'>
              {foodApi2.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 rounded overflow-hidden'>
                    <img
                      className='w-full'
                      src={food.strMealThumb}
                      alt='Food Picture API1'
                    />
                    <div className='px-6 py-3'>
                      <div className='font-bold text-sm mb-2 text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button onClick={()=>{
                      setPopupInfoApi2(true)
                    }} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                  </div>

                  {popupInfoApi2 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <h1 className="text-4xl">{food.strMeal}</h1>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food Picture Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi2(false);
                              }}>
                              {" "}
                            Close
                        </button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 3rd random */}
            <div className='rounded-md'>
              {foodApi3.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 rounded overflow-hidden'>
                    <img
                      className='w-full'
                      src={food.strMealThumb}
                      alt='Food Picture API1'
                    />
                    <div className='px-6 py-3'>
                      <div className='font-bold text-sm mb-2 text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button onClick={()=>{
                      setPopupInfoApi3(true)
                    }} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                  </div>

                  {popupInfoApi3 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <h1 className="text-4xl">{food.strMeal}</h1>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food Picture Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi3(false);
                              }}>
                              {" "}
                            Close
                        </button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 4th random */}
            <div className='rounded-md'>
              {foodApi4.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 rounded overflow-hidden'>
                    <img
                      className='w-full'
                      src={food.strMealThumb}
                      alt='Food Picture API1'
                    />
                    <div className='px-6 py-3'>
                      <div className='font-bold text-sm mb-2 text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button onClick={()=>{
                      setPopupInfoApi4(true)
                    }} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                  </div>

                  {popupInfoApi4 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <h1 className="text-4xl">{food.strMeal}</h1>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food Picture Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi4(false);
                              }}>
                              {" "}
                            Close
                        </button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 5th random */}
            <div className='rounded-md'>
              {foodApi5.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 rounded overflow-hidden'>
                    <img
                      className='w-full'
                      src={food.strMealThumb}
                      alt='Food Picture API1'
                    />
                    <div className='px-6 py-3'>
                      <div className='font-bold text-sm mb-2 text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button onClick={()=>{
                      setPopupInfoApi5(true)
                    }} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                  </div>

                  {popupInfoApi5 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <h1 className="text-4xl">{food.strMeal}</h1>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food Picture Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi5(false);
                              }}>
                              {" "}
                            Close
                        </button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 6th random */}
            <div className='rounded-md'>
              {foodApi6.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 rounded overflow-hidden'>
                    <img
                      className='w-full'
                      src={food.strMealThumb}
                      alt='Food Picture API1'
                    />
                    <div className='px-6 py-3'>
                      <div className='font-bold text-sm mb-2 text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button onClick={()=>{
                      setPopupInfoApi6(true)
                    }} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                  </div>

                  {popupInfoApi6 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <h1 className="text-4xl">{food.strMeal}</h1>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food Picture Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi6(false);
                              }}>
                              {" "}
                            Close
                        </button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 7th random */}
            <div className='rounded-md'>
              {foodApi7.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 rounded overflow-hidden'>
                    <img
                      className='w-full'
                      src={food.strMealThumb}
                      alt='Food Picture API1'
                    />
                    <div className='px-6 py-3'>
                      <div className='font-bold text-sm mb-2 text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button onClick={()=>{
                      setPopupInfoApi7(true)
                    }} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                  </div>

                  {popupInfoApi7 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <h1 className="text-4xl">{food.strMeal}</h1>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food Picture Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4 right-4 p-2 hover:bg-orange-600 hover:text-white hover:rounded-lg rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi7(false);
                              }}>
                              {" "}
                            Close
                        </button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/*---------------------------------------- 8th random */}
            <div className='rounded-md'>
              {foodApi8.map((food) => (
                <div key={food.idMeal}>
                  <div className='w-52 rounded overflow-hidden'>
                    <img
                      className='w-full'
                      src={food.strMealThumb}
                      alt='Food Picture API1'
                    />
                    <div className='px-6 py-3'>
                      <div className='font-bold text-sm mb-2 text-center'>
                        {food.strMeal}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <button onClick={()=>{
                      setPopupInfoApi8(true)
                    }} className="p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold">Read More</button>
                  </div>

                  {popupInfoApi8 && (
                    <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                      <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                        <h1 className="text-4xl">{food.strMeal}</h1>
                        <hr></hr>
                        <h3>
                          <strong>Ingredients</strong>
                        </h3>
                        <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                        <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food Picture Search'
                        />
                          <button
                            className=' absolute border border-black p-2 top-4 right-4 p-2 hover:bg-orange-600 hover:text-white hover:rounded-lg rounded-lg bg-orange-500 font-bold'
                            onClick={() => {
                              setPopupInfoApi8(false);
                              }}>
                              {" "}
                            Close
                        </button>
                        </div>
                      </div>
                      
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='flex flex-wrap gap-20 rounded-md justify-center w-10/12 '>
            {getFoodApi.map((food) => (
              <div key={food.idMeal}>
                <div className='w-52 rounded'>
                  <img
                    className='w-full'
                    src={food.strMealThumb}
                    alt='Food Picture Search'
                  />
                  <div className='px-6 py-3'>
                    <div className='font-bold text-sm mb-2 text-center'>{food.strMeal}</div>
                  </div>
                </div>
                <div className="text-center mb-4 ">
                <button onClick={() => toggleFood(food)} className="p-1 border border-black rounded-lg bg-orange-500">Read More</button>
                </div>
                {showInfo && selectedFood === food && (
                  <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                    <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                    <h1 className="text-4xl">{food.strMeal}</h1>
                    <hr className="w-54"></hr>
                      <h3>
                        <strong>Ingredients:</strong>
                      </h3>
                      
                      <div className="grid grid-cols-2">
                        <div className="pl-5">
                          <p><span className="font-medium">{food.strIngredient1}</span> - {food.strMeasure1}</p>
                          <p><span className="font-medium">{food.strIngredient2}</span> - {food.strMeasure2}</p>
                          <p><span className="font-medium">{food.strIngredient3}</span> - {food.strMeasure3}</p>
                          <p><span className="font-medium">{food.strIngredient4}</span> - {food.strMeasure4}</p>
                          <p><span className="font-medium">{food.strIngredient5}</span> - {food.strMeasure5}</p>
                          <p><span className="font-medium">{food.strIngredient6}</span> - {food.strMeasure6}</p>
                          <p><span className="font-medium">{food.strIngredient7}</span> - {food.strMeasure7}</p>
                          <p><span className="font-medium">{food.strIngredient8}</span> - {food.strMeasure8}</p>
                          <p><span className="font-medium">{food.strIngredient9}</span> - {food.strMeasure9}</p>
                          <p><span className="font-medium">{food.strIngredient10}</span> - {food.strMeasure10}</p>
                        </div>
                        <div>
                          <p><span className="font-medium">{food.strIngredient11}</span> - {food.strMeasure11}</p>
                          <p><span className="font-medium">{food.strIngredient12}</span> - {food.strMeasure12}</p>
                          <p><span className="font-medium">{food.strIngredient13}</span> - {food.strMeasure13}</p>
                          <p><span className="font-medium">{food.strIngredient14}</span> - {food.strMeasure14}</p>
                          <p><span className="font-medium">{food.strIngredient15}</span> - {food.strMeasure15}</p>
                          <p><span className="font-medium">{food.strIngredient16}</span> - {food.strMeasure16}</p>
                          <p><span className="font-medium">{food.strIngredient17}</span> - {food.strMeasure17}</p>
                          <p><span className="font-medium">{food.strIngredient18}</span> - {food.strMeasure18}</p>
                          <p><span className="font-medium">{food.strIngredient19}</span> - {food.strMeasure19}</p>
                          <p><span className="font-medium">{food.strIngredient20}</span> - {food.strMeasure20}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="pt-5">
                          <strong>Instructions:</strong>
                        </h3>
                        <p className="indent-10 text-justify px-5">{food.strInstructions}</p>
                    
                        <h3 className="pt-5">
                          <strong>Youtube:</strong>
                        </h3>
                        <a href={food.strYoutube} target="_blank" className="ml-5 hover:underline ">{food.strYoutube}</a>
                        
                        <h3 className="pt-5">
                          <strong>Source:</strong>
                        </h3>
                        <a href={food.strSource} target="_blank" className="ml-5 hover:underline">{food.strSource}</a>

                        <h3 className="pt-5">
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.strMealThumb}
                          alt='Food Picture Search'
                        />
                        <button
                        onClick={closePopup}
                        className=' absolute border border-black p-2 top-4 right-4 p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold'>
                        {" "}
                        Close
                        </button>
                      </div>
                 
                      
                    </div>
                    
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
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
  );
};

export default Menu;
