class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    printcolor(){
       return console.log(this.rating="PG")
    }
}
var moviee=new Movie("Casino Royale","Eno Productions","PG13")
console.log(moviee)