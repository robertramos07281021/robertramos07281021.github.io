import React, { useEffect, useState } from "react";
import db from "../firebase-config";

const Favorites = () => {
  const [food, setFood] = useState([]);
  const [popupInfo, setPopupInfo] = useState(false);
  useEffect(() => {
    db.collection("food")
      .orderBy("datetime", "desc")
      .onSnapshot((snapshot) => {
        setFood(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              foodName: doc.data().foodName,
              foodCountry: doc.data().foodCountry,
              foodCategory: doc.data().foodCategory,
              foodIngredients: doc.data().foodIngredients,
              foodSummary: doc.data().foodSummary,
              image: doc.data().images,
              datetime: doc.data().datetime,
            };
          })
        );
      });
  }, []);
  return (

    <div className='rounded-md'>
      <div className='pb-52'>
        <h1 className='text-3xl'>Favorites Recipes</h1>
      </div>

      {/* Featured recipes from the user input */}
      <div className=' w-40'>
        <h1 className='text-3xl'>Featured Recipes</h1>
        <div>
          <div className=''>
            {food.map((food, index) => (
              <div key={index.id}>
                <div className='w-52 rounded overflow-hidden'>
                  <img
                    className='w-full'
                    src={food.image}
                    alt='Food '
                  />
                  <div className='px-6 py-3'>
                    <div className='font-bold text-sm mb-2 text-center'>
                      {food.foodName}
                    </div>
                  </div>
                </div>
                <div className='text-center mb-4'>
                  <button
                    onClick={() => {
                      setPopupInfo(true);
                    }}
                    className='p-2 hover:bg-orange-600 hover:text-white hover: rounded-lg bg-orange-500 font-bold'>
                    Read More
                  </button>
                </div>

                {popupInfo && (
                  <div className='fixed bg-slate-950/50 w-screen h-screen rounded drop-shadow-lg randomInfo'>
                    <div className='p-5 inline-block w-9/12 h-[42rem] bg-orange-300 foodInfo mb-1 pt-12 overflow-auto pb-28'>
                      <h1 className='text-4xl'>{food.strMeal}</h1>
                      <hr></hr>
                      <h3>
                        <strong>Ingredients</strong>
                      </h3>
                      <p>
                        <span className='font-medium'>
                          {food.foodIngredients}
                        </span>
                      </p>
                      <div>
                        <h3 className='pt-5'>
                          <strong>Instructions:</strong>
                        </h3>
                        <p className='indent-10 text-justify px-5'>
                          {food.foodSummary}
                        </p>

                        <h3 className='pt-5'>
                          <strong>Image:</strong>
                        </h3>
                        <img
                          className='w-80 h-80 ml-5 mt-3 rounded'
                          src={food.images}
                          alt='Food'
                        />
                        <button
                          className=' absolute border border-black p-2 top-4    right-4 p-2 hover:bg-orange-600 hover:text-white hover:   rounded-lg bg-orange-500 font-bold'
                          onClick={() => {
                            setPopupInfo(false);
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
      </div>
    </div>
  );



};

export default Favorites;
