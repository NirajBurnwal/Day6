//@1 class -Movie 
class Movie {
    constructor(title, studio, rating="PG") {
        this.title = title
        this.studio = studio
        this.rating = rating
    }
    getPG(movies) {
        for(let movie in movies){
            if(movie.rating === "PG"){
                return movie.name
            }
        }
    }
}
let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie2 = new Movie("Spider Man", "Columbia Pictures");
let movie3 = new Movie("Mysterious Island", "Ameran Films", "PG15");
let movie4 = new Movie("Harry Pottar", "Warner Bros.");

let movie = [ movie1, movie2, movie3, movie4 ]

let result = movie2.getPG(movie)

// @3 Write a 'person' class to hold all the details
class Person {
    constructor (fname, lname, age, address ){
        this.fname = fname
        this.lname = lname
        this.age = age
        this.address = address
    }
}

let person1 = new Person('niraj', 'burnwal', 24, 'jharkhand')

console.log(person1)