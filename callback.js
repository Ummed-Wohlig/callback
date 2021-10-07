const users=require('./users.json');
const movies=require('./movies.json');
const reviews=require('./reviews.json');
const { set } = require('express/lib/application');

const getMovies = (id,cb) => {
setTimeout(()=> {
const movie=movies.find((movie)=>movie.id===id);
cb(movie);
},1000)

};


const getReviews = (movieId,cb) => {
setTimeout(()=> {
const review=reviews.find((review)=>review.movie_id ===movieId);
cb(review);
},1000)

};



const getUsers = (name,cb) => {
setTimeout(()=> {
const user=users.find((user)=>user.name===name);
cb(user);
},1000)

};


getMovies(3,(movie)=>{
console.log(movie);
})


getMovies(3,(movie)=>{
getReviews(movie.id,(review)=>{
getUsers(review.reviewer,(user)=>{
console.log(user);
});
});
})