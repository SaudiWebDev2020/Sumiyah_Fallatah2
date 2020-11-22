//  1 - correct
console.log(hello);                                   
var hello = 'world';                                 
//var hello
//console.log-> undefined 
//hello = world

//  2 - correct
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//function gets hoisted to the top so it's defined 
//needle = haystack
//test() is called , needle = magnet , print magnet

//  3 - correct
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// function is not called therefore we will get the output from console.log as ( super cool )

//  4 - correct guess
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone'; //what does this do?
}
// function gets hoisted to the top 
// food = chicken 
// console.log: chicken
// call function eat 
// console.log food : half-chicken
// food = gone i think

//  5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//my guess is undefined in both c.l in 46-53 so no output
//we got: TypeError: mean is not a function

//  6 - correct
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// function rewind is hoisted to the top so it exists 
// genre is undefined 
// genre = disco
// call the function
//      c.l= rock
//      c.l= r&b
// cl. = disco

//  7 - correct
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// function is hoisted to the top
// c.l : san jose
// call learn function
//      c.l: seattle
//      c.l: burbank
// c.l: san jose

//  8-bonus
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// makeDojo is hoisted to the top
// c.l calls makeDojo with chicago, 65 
    // dojo name = chicago
    // dojo student = 65
    // dojo hiring = true
// c.l calls makeDojo with berkeley, 0 
    // dojo name = berkeley
    // dojo student = 0
    // assining a value to the dojo object that was created as a const wont work 