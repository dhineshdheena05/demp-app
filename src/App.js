 
import { useEffect, useState } from 'react';
import './App.css';


function App() {

  let [movieinfo,setmovieinfo]=useState(null);
  let [title,setTitle]=useState(null);

  useEffect(() =>{

   getMovieData();

  },[])

 function readTitle(value){
   setTitle(value);
  }

function getMovieData(title){

  let url='https://omdbapi.com/?t=${title}&apikey=2bbe471d';

  fetch(url)
  .then((response) =>response.json())
  .then((movie) =>{
    console.log(movie);
    setmovieinfo(movie);
  })
  .catch((err) =>{
    console.log(err);
  })
  
}


  return (
    <div className="App">
     <div className="container">
       <div className="padd">
         <h1>movie search</h1>
         <div className="input-group">
           <input type="text" placeholder=" enter the movie name" onChange={(event)=>{readTitle(event.target.value)}} className="search-field"/>
         <button className="btn" onClick={getMovieData}>Get movie</button>
         </div>
         {
           movieinfo?.Error===undefined?(

         <div className="movie">

          <div className="poster">
             <img src={movieinfo?.Poster} alt="poster" className="img-poster"/>
          </div>

           <div className="details">
             <div className="padd">
               <h1>{movieinfo?.Title}</h1>
               <p><strong>Genre </strong>:{movieinfo?.Genre}</p>
               <p><strong>Director </strong>:{movieinfo?.Director}</p>
               <p><strong>Plot </strong>:{movieinfo?.Plot}</p>
               <p><strong>Actors </strong>:{movieinfo?.Actors}</p>
               <p><strong>Boxoffice </strong>:{movieinfo?.Boxoffice}</p>
               <p><strong>Language </strong>:{movieinfo?.Language}</p>
               <p><strong>Released </strong>:{movieinfo?.Released}</p>
               <p><strong>Runtime </strong>:{movieinfo?.Runtime}</p>

               <div className="ratings">

                {
                  movieinfo?.Ratings.map((rating,index)=>(
                    <div key={index}>
                    <strong> {rating.Source}</strong>
                    <h3>{rating.Value}</h3>
                   </div>
 
                  ))
                }

                                 
               </div>
             </div>
           </div>

           </div>
  ):
  (
    <h1>movie not found</h1>
  )
        
        }
      </div>
       </div> 
    </div>
  );
}

export default App;
