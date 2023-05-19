const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = searchForm.elements.q.value;
    const config = {
        params: {
            q: searchTerm,
        },
        headers: {}
    };

    const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);

    const movieSection = document.querySelector(".movieSection");
    movieSection.style.display = 'none';
    const bodyMovies = document.querySelector('.movies');
    bodyMovies.innerHTML = '';
    displayImage(res.data);
    searchForm.elements.q.value = '';

   
})



const displayImage = (shows) => {
    for (let show of shows){
        if(show.show.image){
            //show img
            const singleShowDiv = document.createElement('div');
            singleShowDiv.className = "showsDiv";
            const img = document.createElement('img');
            img.src = show.show.image.medium;

            //show genre
            const para = document.createElement('p');
            
            const infoShowDiv = document.createElement('div');
            infoShowDiv.className = "infoDiv";
            const genre = show.show.genres;
            para.innerHTML = genre;

            //show ratings
            const showRatings = show.show.rating.average;
            const ratingsPara = document.createElement('p');
            if(showRatings == null){
                ratingsPara.innerHTML = "Ratings: N/A";
            } else {
                ratingsPara.innerHTML = `Ratings: ${showRatings}`;
            }

            //summary
            const summaryDiv = document.createElement('div');
            summaryDiv.className = "summaryDiv";
            const summary = show.show.summary;
            summaryDiv.innerHTML = `Summary: ${summary}`;

            const bodyMovies = document.querySelector('.movies');
            infoShowDiv.appendChild(para);
            infoShowDiv.appendChild(ratingsPara);
            infoShowDiv.appendChild(summaryDiv);
            bodyMovies.append(singleShowDiv);
            singleShowDiv.appendChild(img);
            singleShowDiv.appendChild(infoShowDiv);
        }
    }
}


const trendingNow = async () =>{
    try{
        const res = await axios("https://api.tvmaze.com/shows?");
        for(let i = 0 ; i < 60 ; i ++){
            const r = Math.floor(Math.random() * 240);

            //image
            const singleShowDiv = document.createElement('div');
            singleShowDiv.className = "showsDiv";
            const img = document.createElement('img');
            img.src = res.data[r].image.medium;

            // infodiv
            const infoDiv = document.createElement('div');
            infoDiv.className = "infoDiv";

            // ratings
            const ratingsPara = document.createElement('p');
            ratingsPara.className = "rating";
            const rating = res.data[r].rating.average;
            if(rating == null){
                ratingsPara.innerHTML = "Ratings: N/A";
            } else {
                ratingsPara.innerHTML = `Ratings: ${rating}`;
            }
            
            //genre
            const genres = res.data[r].genres;
            const genresPara = document.createElement('p')
            genresPara.className = "genres";
            genresPara.innerHTML = genres;

            //summary
            const summaryDiv = document.createElement('div');
            summaryDiv.className = "summaryDiv";
            const summary = res.data[r].summary;
            summaryDiv.innerHTML = `Summary: ${summary}`;

            
            const bodyMovies = document.querySelector('.trendingNow');
            infoDiv.appendChild(ratingsPara);
            infoDiv.appendChild(genresPara);
            infoDiv.appendChild(summaryDiv);
            singleShowDiv.appendChild(img);
            singleShowDiv.appendChild(infoDiv);
            bodyMovies.append(singleShowDiv);
            
        }
    }
    catch(e){
        console.log("error: ", e);
    }
}
trendingNow();


const actionSection  = async () =>{
    try{
        const res = await axios("https://api.tvmaze.com/shows?");
      
        
        for(let show of res.data){
          
            if((show.genres[1] === "Action"|| show.genres[2] === "Action" || show.genres[0] === "Action")||(show.genres[1] === "Adventure"|| show.genres[2] === "Adventure" |show.genres[0] === "Adventure")){
            
            const singleShowDiv = document.createElement('div');
            singleShowDiv.className = "showsDiv";

            //image
            const img = document.createElement('img');
            img.src = show.image.medium;

            // infodiv
            const infoDiv = document.createElement('div');
            infoDiv.className = "infoDiv";

            // ratings
            const ratingsPara = document.createElement('p');
            ratingsPara.className = "rating";
            const rating = show.rating.average;
            if(rating == null){
                ratingsPara.innerHTML = "Ratings: N/A";
            } else {
                ratingsPara.innerHTML = `Ratings: ${rating}`;
            }

            //genre
            const genres = show.genres;
            const genresPara = document.createElement('p')
            genresPara.className = "genres";
            genresPara.innerHTML = genres;
            //summary
            const summaryDiv = document.createElement('div');
            summaryDiv.className = "summaryDiv";
            const summary = show.summary;
            summaryDiv.innerHTML = `Summary: ${summary}`;
        
           
            


            const bodyMovies = document.querySelector('.actionAdventure');
            infoDiv.appendChild(ratingsPara);
            infoDiv.appendChild(genresPara);
            infoDiv.appendChild(summaryDiv);
            singleShowDiv.appendChild(img);
            singleShowDiv.appendChild(infoDiv);
            bodyMovies.append(singleShowDiv);
            }
        }
 

    }
    catch(e){
        console.log("error: ", e);
    }
}
actionSection();



const dramaSection  = async () =>{
    try{
        const res = await axios("https://api.tvmaze.com/shows?");
       
        
        for(let show of res.data){
            
            if((show.genres[1] === "Drama"|| show.genres[2] === "Drama" || show.genres[0] === "Drama")){
        
            const singleShowDiv = document.createElement('div');
            singleShowDiv.className = "showsDiv";

            //image
            const img = document.createElement('img');
            img.src = show.image.medium;

            // infodiv
            const infoDiv = document.createElement('div');
            infoDiv.className = "infoDiv";

            // ratings
            const ratingsPara = document.createElement('p');
            ratingsPara.className = "rating";
            const rating = show.rating.average;
            if(rating == null){
                ratingsPara.innerHTML = "N/A";
            } else {
                ratingsPara.innerHTML = `Ratings: ${rating}`;
            }

            //genre
            const genres = show.genres;
            const genresPara = document.createElement('p')
            genresPara.className = "genres";
            genresPara.innerHTML = genres;
            
            //summary
            const summaryDiv = document.createElement('div');
            summaryDiv.className = "summaryDiv";
            const summary = show.summary;
            summaryDiv.innerHTML = `Summary: ${summary}`;


            const bodyMovies = document.querySelector('.dramas');  
            
            infoDiv.appendChild(ratingsPara);
            infoDiv.appendChild(genresPara);
            infoDiv.appendChild(summaryDiv);
            singleShowDiv.appendChild(img);
            singleShowDiv.appendChild(infoDiv);
            bodyMovies.append(singleShowDiv);
            }
        }
 
    }
    catch(e){
        console.log("error: ", e);
    }
}
dramaSection();


// ------------------------------------>>>>>>>Trending Section
document.addEventListener("click", e => {
    let handleTrending
    if (e.target.matches(".handle")){ 
        handleTrending = e.target
    } else {
       handleTrending =  e.target.closest(".handle")
    }
    if (handleTrending != null)
    trendingClick(handleTrending)
    
})


function trendingClick(handleTrending) {
    const sliderTrending = handleTrending.closest(".trending").querySelector(".trendingNow")
    const sliderIndexTrending = parseInt(
        getComputedStyle(sliderTrending).getPropertyValue("--slider-index")
    )
    if (handleTrending.classList.contains("leftHandleTrending")){
        sliderTrending.style.setProperty("--slider-index", sliderIndexTrending - 1)

    }

    if (handleTrending.classList.contains("rightHandleTrending")){
        sliderTrending.style.setProperty("--slider-index", sliderIndexTrending + 1)

    }
}


//------------------->>>>>>>>>>Action Section
document.addEventListener("click", e => {
    let handleAction
    if (e.target.matches(".handle")){ 
        handleAction = e.target
    } else {
       handleAction =  e.target.closest(".handle")
    }
    if (handleAction != null)
    actionClick(handleAction)
    
})

function actionClick(handleAction) {
    const sliderAction = handleAction.closest(".action").querySelector(".actionAdventure")
    const sliderIndexAction = parseInt(
        getComputedStyle(sliderAction).getPropertyValue("--slider-index")
    )
    if (handleAction.classList.contains("leftHandleAction")){
        sliderAction.style.setProperty("--slider-index", sliderIndexAction - 1)

    }

    if (handleAction.classList.contains("rightHandleAction")){
        sliderAction.style.setProperty("--slider-index", sliderIndexAction + 1)

    }
}

//------------------->>>>>>>>>>Dramas Section
document.addEventListener("click", e => {
    let handleDrama
    if (e.target.matches(".handle")){ 
        handleDrama = e.target
    } else {
       handleDrama =  e.target.closest(".handle")
    }
    if (handleDrama != null)
    dramaClick(handleDrama)
    
})

function dramaClick(handleDrama) {
    const sliderDrama = handleDrama.closest(".dramaSection").querySelector(".dramas")
    const sliderIndexDrama = parseInt(
        getComputedStyle(sliderDrama).getPropertyValue("--slider-index")
    )
    if (handleDrama.classList.contains("leftHandleDrama")){
        sliderDrama.style.setProperty("--slider-index", sliderIndexDrama - 1)

    }

    if (handleDrama.classList.contains("rightHandleDrama")){
        sliderDrama.style.setProperty("--slider-index", sliderIndexDrama + 1)

    }
}

