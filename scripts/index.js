//// slide show
let imagesDiv = document.querySelector("#slideshow");

var imagesArr = [
  "https://wallpapercave.com/wp/wp6691137.jpg",
  "https://wallpapercave.com/wp/wp6988375.jpg",
  "https://wallpapercave.com/wp/wp6988365.jpg",
  "https://wallpapercave.com/wp/wp1816325.jpg",
  "https://wallpapercave.com/uwp/uwp1627274.jpeg",
  "https://wallpapercave.com/wp/wp2552602.png",
  "https://wallpapercave.com/dwp1x/ZaIF4KJ.jpg",
  "https://wallpapercave.com/wp/uXheq6i.jpg",
  "https://wallpapercave.com/dwp1x/wp10495976.jpg",
];

var i = 0;
let id;

function start() {
  let img = document.createElement("img");
  id = setInterval(function () {
    if (i == imagesArr.length) {
      i = 0;
    }
    imagesDiv.innerHTML = null;
    img.src = imagesArr[i];
    imagesDiv.append(img);
    i++;
  }, 2000);
}

start();

//// displaying the movies
var dataBase = [
  //1
  {
    name: "Spider-Man",
    releaseDate: "24 May 2002",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    imdb: "7.4",
    boxOffice: "$825 million",
  },
  //2
  {
    name: "Spider-Man 2",
    releaseDate: "23 July 2004",
    poster:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97e4becb-d3b7-4732-8039-af5e062af33c/d80mer7-61ac8790-7574-4078-9738-929c5ca5db09.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk3ZTRiZWNiLWQzYjctNDczMi04MDM5LWFmNWUwNjJhZjMzY1wvZDgwbWVyNy02MWFjODc5MC03NTc0LTQwNzgtOTczOC05MjljNWNhNWRiMDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._oSMUYUqbfgGfBjTLlWrMaVtaRpseeg-n41Rwj6mScI",
    imdb: "7.4",
    boxOffice: "$789 million",
  },
  //3
  {
    name: "Spider-Man 2",
    releaseDate: "4 May 2007",
    poster:
      "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    imdb: "6.2",
    boxOffice: "89.49 crores USD",
  },
  //4
  {
    name: "The Amazing Spider-Man",
    releaseDate: "29 June 2012",
    poster:
      "https://i5.walmartimages.com/asr/bfd77bf3-8395-48c3-a6b8-e1a638de06df_1.82a362e2634a1b47f135fb3740521ed2.jpeg",
    imdb: "6.9",
    boxOffice: "$758 million",
  },
  //5
  {
    name: "The Amazing Spider-Man 2",
    releaseDate: "1 May 2014",
    poster: "https://m.media-amazon.com/images/I/91hnTmjz+SL._AC_SY679_.jpg",
    imdb: "6.6",
    boxOffice: "70.9 crores USD",
  },
  //6
  {
    name: "Iron Man",
    releaseDate: "1 May 2008",
    poster:
      "https://www.themoviedb.org/t/p/original/nKaWJIux5Er7E4HYj7b9J1IY0gK.jpg",
    imdb: "7.9",
    boxOffice: "$585.8 million",
  },
  //7
  {
    name: "Iron Man 2",
    releaseDate: "7 May 2010",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
    imdb: "6.9",
    boxOffice: "$623.9 million",
  },
  //8
  {
    name: "Iron Man 3",
    releaseDate: "26 April 2013",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg",
    imdb: "7.2",
    boxOffice: "121.5 crores USD",
  },
  //9
  {
    name: "The Batman",
    releaseDate: "4 March 2022",
    poster:
      "https://external-preview.redd.it/Rjf8dmvTvvRY4k_M8RSPk3cN-LOt4IC827_1ZMdz1z0.jpg?auto=webp&s=bb68296c55043e8dc9d7eb4a78257c22bc71f9f8",
    imdb: "8.2",
    boxOffice: "$600.4 million",
  },
];

//uploading the data to localStorage
localStorage.setItem("movies", JSON.stringify(dataBase));

//getting the movies from localStorage
var movies = JSON.parse(localStorage.getItem("movies"));

//function to display the movies
function displayMovies(movies) {
  document.querySelector("#movies").innerHTML = "";
  movies.map(function (ele) {
    //to prevent the issue when sort button is pressed -> displaying oldData and newData

    //div to store the poster and details
    var boxMain = document.createElement("div");
    boxMain.setAttribute("class", "boxMain");
    //div to store the poster of the image
    var boxImg = document.createElement("div");
    boxImg.setAttribute("class", "boxImg");
    //div to store all the details of the movie
    var boxDet = document.createElement("div");
    boxDet.setAttribute("class", "boxDet");
    ////getting the details
    //getting name
    var name = document.createElement("h2");
    name.innerText = `Movie: ${ele.name}`;
    //getting poster
    var image = document.createElement("img");
    image.src = ele.poster;
    //getting imdb
    var imdb = document.createElement("h3");
    imdb.innerText = `IMDB: ${ele.imdb}`;
    //getting release date
    var date = document.createElement("h3");
    date.innerText = `Release date: ${ele.releaseDate}`;
    //getting budget
    var collection = document.createElement("h3");
    collection.innerText = `Box Office: ${ele.boxOffice}`;
    //appending poster to boxImg
    boxImg.append(image);
    //appending all the details inside box
    boxDet.append(name, imdb, date, collection);
    //appending boxImg & boxDet inside boxMain
    boxMain.append(boxImg, boxDet);
    //appending box-div inside div with id=movies
    document.querySelector("#movies").append(boxMain);
  });
}

//to display movies when page is reloaded
displayMovies(movies);
////sorting
//sorting low to high
function lowToHigh() {
  movies.sort(function (a, b) {
    return a.imdb - b.imdb;
  });
  // console.log(movies);
  displayMovies(movies);
}

//sorting high to low
function highToLow() {
  movies.sort(function (a, b) {
    return b.imdb - a.imdb;
  });
  // console.log(movies);
  displayMovies(movies);
}
