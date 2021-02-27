"use strict";

const movies = [{
        "Title": "William S. Burroughs: A Man Within",
        "Year": "2010",
        "Released": "12 Dec 2010",
        "Genre": "Documentary",
        "Team": {
            "Director": "Yony Leyser",
            "Writer": "Yony Leyser",
            "Actors": ["Fred Aldrich", "Laurie Anderson", "Amiri Baraka", "Jello Biafra"],
        },
        "Plot": "William S. Burroughs: featuring never before seen footage as well as exclusive interviews with his closest friends and colleagues. Born the heir of the Burroughs' adding machine estate, he ...",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxODUzNjUyM15BMl5BanBnXkFtZTcwOTQzNjc5Mw@@._V1_SX300.jpg",
        "Type": "movie"
    },
    {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "Released": "25 May 1977",
        "Genre": "Action, Adventure, Fantasy, Sci-Fi",
        "Team": {
            "Director": "George Lucas",
            "Writer": "George Lucas",
            "Actors": ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
        },
        "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Type": "movie",
    },
    {
        "Title": "Sabrina",
        "Year": "1954",
        "Released": "07 Oct 1954",
        "Genre": "Comedy, Drama, Romance",
        "Team": {
            "Director": "Billy Wilder",
            "Writer": "N/A",
            "Actors": ["Humphrey Bogart", "Audrey Hepburn", "William Holden", "Walter Hampden"],
        },
        "Plot": "A playboy becomes interested in the daughter of his family's chauffeur, but it's his more serious brother who would be the better man for her.",
        "Poster": "N/A",
        "Type": "movie"
    },
    {
        "Title": "Charmed",
        "Year": "1998–2006",
        "Released": "07 Oct 1998",
        "Genre": "Drama, Fantasy, Mystery",
        "Team": {
            "Director": "N/A",
            "Writer": "Constance M. Burge",
            "Actors": ["Holly Marie Combs", "Alyssa Milano", "Brian Krause", "Rose McGowan"],
        },
        "Plot": "Three sisters discover their destiny, to battle against the forces of evil, using their witchcraft. They are the Charmed Ones.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTIxNmUxMWQtNjc0Yy00NjM2LWFjMTMtNjA2MmEzOTFiMWRmXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg",
        "Type": "series"
    }
];

let showUser = document.getElementById('userTbody'),
    divHTML = '';
for (let i = 0; i < movies.length; i++) {
    if (i % 2 == 0) {
        divHTML += `<div style="padding: 15px 0px 15px 0px; text-align: center; background:  #EEEEEE;"><img src=${movies[i].Poster}><ul style="list-style-type: none"><li>${movies[i].Title}</li><li>${movies[i].Year}</li><li>${movies[i].Released}</li><li><ul style="list-style-type: none"><li>${movies[i].Team.Director}</li><li>${movies[i].Team.Writer}</li><li>${movies[i].Team.Actors}</li></ul></li><li>${movies[i].Plot}</li></ul></div>`;
    } else {
        divHTML += `<div style="padding: 15px 0px 15px 0px; text-align: center; background:  #D0C0C0;"><img src=${movies[i].Poster}><ul style="list-style-type: none"><li>${movies[i].Title}</li><li>${movies[i].Year}</li><li>${movies[i].Released}</li><li><ul style="list-style-type: none"><li>${movies[i].Team.Director}</li><li>${movies[i].Team.Writer}</li><li>${movies[i].Team.Actors}</li></ul></li><li>${movies[i].Plot}</li></ul></div>`;
    }

}
document.getElementById('wrap-table').innerHTML = divHTML;