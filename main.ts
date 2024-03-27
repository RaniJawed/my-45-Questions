// Question : 2
let personName = "Rani Jawed"
console.log("hello", personName, " would you like to learn some Python today?");


// Question : 3
let personName ="rani jawed";
console.log(personName.toLowerCase());


console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));

//Question : 4
console.log ("Albert Einstein once said,\ “A person who never made a mistake never tried anything new.\"");

// Question : 5

let famousPerson = "Albert Einstein";

let message = " once said, “A person who never made a mistake never tried anything new.”"

console.log (famousPerson, message);

// Question : 6

let whitespaceName ="\n\tRani Jawed \t\n";
console.log (whitespaceName);

let withoutwhitespaceName = whitespaceName.trim();

console.log ( withoutwhitespaceName);

// Question : 7 & 8

console.log(4 + 4);

console.log(12 - 4);

console.log(4 * 2);

console.log(16 / 2);

// Question : 9

let favNumber = 10
let message = "Mine Favorite Number is:";
console.log (message , favNumber);

// Question : 10

// Addition
console.log(4 + 4);
// Subtraction
console.log(12 - 4);
// Multiplication
console.log(4 * 2);
// Division
console.log(16 / 2);

// Question : 11

let friendsName = ["Rani", "Jawed", "Ariyan", "Harmain" , "Hurram"];

friendsName . forEach (friendname => console.log(friendname));

// Question : 12

let friendsName = ["Rani","Jawed","Ariyan","Harmain","hurram"];

friendsName.forEach (friendName  => console.log(`Hello ${friendName}  how are you ?`));


// Question : 13

let transportationModes = ["sport bike" , "car" , "bus" , "sport car" ,];
transportationModes.forEach(mode => console.log(`I would like to own a ${mode}`));

// Question : 14 

let guestList =["Rani","Jawed","Muskan","Laila","Konj"];
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me ?`));

// Question : 15


let guestList = ["Rani","Jawed","Laila","Muskan","Konj"];

let dontCome = guestList[0];

console.log(dontCome, "nahi a sakti");

guestList.splice(0,1,"Orangzaib");

guestList.forEach(guest =>console.log (`salam ${guest}, would you like to dinner with me ?`));


// Question : 16

// creating a Guest List Array  
let guestList = ["Rani","Jawed","laila","Muskan",];

// making variable for for those guest who cant come 
let dontCome = guestList[0]

// print the name of guest who cant come 
console.log(dontCome, "nahi a sakti hen");

// Add or Remove guest  from Guest list Array 
guestList.splice(0,1,"Orangzaib");

// Message print for Bigger Table 
console.log("Good nwes ! we have found a bigger table for dinner");

// Adding a new guest at starting index of Arry 
guestList.unshift("Kiran");

// Adding a new guest  at Ending index of array
guestList.push("Fatima");


// Get a middle index of our guest list Array 
let middleIndex: number = Math.floor(guestList.length / 2); 

// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Ayesha");

// print Message of Updated List
console.log("Updated List of our Guests ");

// Sending a invitation message to our guests one by one with thier Names 
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));



// Question : 17

// creating a Guest List Array  
let guestList = ["Rani","Jawed","laila","Muskan",];

// making variable for for those guest who cant come 
let dontCome = guestList[0]

// print the name of guest who cant come 
console.log(dontCome, "nahi a sakti hen");

// Add or Remove guest  from Guest list Array 
guestList.splice(0,1,"Orangzaib");

// Message print for Bigger Table 
console.log("Good nwes ! we have found a bigger table for dinner");

// Adding a new guest at starting index of Arry 
guestList.unshift("Kiran");

// Adding a new guest  at Ending index of array
guestList.push("Fatima");


// Get a middle index of our guest list Array 
let middleIndex: number = Math.floor(guestList.length / 2); 

// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "Ayesha");

// print Message of Updated List
console.log("Updated List of our Guests ");

// Sending a invitation message to our guests one by one with thier Names 
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));


// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");

// using While -loop to remove guests from the Array until only two names remain
while(guestList.length > 2){
    let removedguest = guestList.pop();
    console.log(`sorry, ${removedguest} I cant invite you to dinner`);
}



// Sending a invitations to the last two guests on the list 
console.log("Invitation to the last two Guests");
guestList.forEach(lastTwo =>  console.log(`luckly ${lastTwo}your are still invited to dinner`) );


// Removing last two Guests from the List
guestList.pop();
guestList.pop();


console.log("Empty List:",guestList);

// Question : 18

// Making a Array of countries and print its original order 

let countriesToVisit : string [] = ["China","Denmark","Brazil","Argentina"];
console.log("Original order",countriesToVisit);



// Print the Array  in Alphbetical order without Modifying the Actual Array list 
console.log("Alphabetical order:",[...countriesToVisit].sort())


// show that the Array is Still in its original order
console.log("still in original order:",countriesToVisit);


// Print the Array In Reversed Order without modifying the Actual Array List
console.log("Reverse oerder:",[...countriesToVisit].reverse());


// show that the Array is Still in its original order
console.log("still in original order:",countriesToVisit);


// we have Changed the Original Array order Now
console.log("original Array Reversed:",countriesToVisit.reverse());


// Print the Array to show that its back to original order 
console.log("Back to Original Order:",countriesToVisit.reverse());


//Print the Array to show that its Order has been changed in Alphabetical order Now
console.log("sorted in Alphabetical order:",countriesToVisit.sort());


// we have Changed again the Original Array order Now in reverse order Again
console.log("original Array Reversed Again:",countriesToVisit.reverse());
  

// Question : 19



let guestList =["Rani","Jawed","Muskan","Laila","Konj","Hurram"];


//guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me ?`));


let lengthGuests: number = guestList.length;


console.log(`we are inviting total ${lengthGuests} guests`);


// Question : 20

// Making a programing Languages Array
let ProgrammingLanguages: string [] =["typescript","Javascript","python","PHP"];


// Print the Message of List
console.log("List of Programming Language:");


//Print the Values of Array in the form of List 
ProgrammingLanguages.forEach(language => console.log(language));


// Question : 21

interface ItCourse{
    CourseName: string;
    OnSitesStudent: number;}





    let ItCourse = {
   courseName : "Typscript and Javascript",
    Location : "Governor House Sindh",
    OnSiteStudends : 50000}

    console.log(ItCourse);
    

    // Question : 22

    // Creating a Array
let ErrorArray: string [] = ["A","B","C","D"];

//Producing Error ! by Accessing invalid index of Array
// consol.log(ErrorArray[10]);


// Error Removed
console.log(ErrorArray[1]);


// Question : 23



let five = 5;



let ten = 10;

//Test 1
console.log("\nTest 1:five is equal to 5 ?");
console.log(five == 5);


//Test 2

console.log("\nTest 2: ten is equal to 10?");
console.log(ten == 10);

//Test 3

console.log("\nTest 3:5 is not equal to");
console.log(five != ten);


//Test 5 

console.log("\nTest 5: 5 is smaller than 10");
console.log(five < ten);


//Test 6 
console.log("\nTest 6 : 10 is smaller than 5");
console.log(ten < 5);


//Test 7
console.log("\nTest 7: 5 is Equal to 10");
console.log(five == ten);


//Test 8
console.log("\nTest 8: 10 is Equal to 10");
console.log(ten! = 10 );


//Test 9
console.log("\nTset 9:10 Greater than 10");
console.log(five > ten);


//Test 10
console.log("\nTest 10: 100 is smaller than 50");
console.log(100 < 50);

// Question : 24



let apple = "apple";

// Test for Equality & unequality with strings 

console.log("is apple is equal to apple ");
console.log(apple =="apple");


console.log("\nis apple is not equal to apple ");
console.log(apple !="apple");

//Define variables

let APPLE ="apple";
let uppercaseAPPLE ="APPLE";
let ten = 10;
let twenty = 20 
let fruits = ["apple","banana","orange"];
//Tests using lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase ");

console.log(uppercaseAPPLE.toLowerCase()=="apple");


console.log("\nIs APPLE is not equal to apple after converting to lowercase ?");
console.log(uppercaseAPPLE.toLowerCase()!= "apple");


//numerical Tests
//Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

//Not Equal to
console.log("\nIs ten is not equal to twenty ?");
console.log(ten!= twenty);

//Greater  Than 
console.log("\n Is ten is greater than zero ?");
console.log(ten > 0);

//Less Than

console.log("\nIs twenty is less than 10?");
console.log(twenty <10);


//Greater Than or Equal to 
console.log("\nIs ten is greater than or equal to 5 ?");
console.log(ten >= 5);

//Less than or Equal to 
console.log("\ntwenty is less than or equal to 10")
console.log(twenty <= 10);

//Tests using "And" & "or" opraters
console.log("\ntewnty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

//using &&
console.log("\ntwenty is not equal to 10 and twenty is greater than 10 ");
console.log(twenty != 10 && twenty > 30);

//using || (OR)
console.log("\ntwenty is greater than 50 or twenty is equal to 20");
console.log(twenty > 50 || twenty == 20);


console.log("\ntwenty is greater than 50 or twenty is not  equal to 20");
console.log(twenty > 50 || twenty != 20);


//Test whether an item is include in Array
console.log("\nIs orange include in my fruits Array");
console.log(fruits.includes("orange"));

//Not Include
console.log("\nIs orange not include in  my fruits Array");
console.log(!fruits.includes("orange"));


// Question : 25


//Define variable
let Aliencolour = "black";
if (Aliencolour === "Black"){
    //code
    console.log("Alien colour is black player just earned 5 points.");}


    if(Aliencolour === "white"){
        console.log("Alien colour is white"); }


// Question : 26



//Define variable
let Aliencolour = "Green";
//First version
if (Aliencolour ==="Green"){
    console.log("player just earned 5 points for shooting the Alien.")}else{

console.log("player just earned 10 points");
    }

    //second version 
    if(Aliencolour ==="Red"){
        console.log("i am come from if statment.")} else{
            console.log("i am come from Else statment"); }


// Question : 27


//Define variable

let Aliencolour = "Green"; 

//using If and else -If Statement
if (Aliencolour === "Green"){
    console.log("(version 1) you shot down Alien Green you have earned 5 points");}

    else if ( Aliencolour === "Yellow"){
        console.log("you shot down Yellow Alien you have earned 10 points"); }

        else if(Aliencolour === "Red"){
            console.log("you shot down Red alien you have ernes 15 points "); }


            //version 2 
            let Aliencolour2 = "Yellow";
            if(Aliencolour2 === "green"){
                console.log("you shot down Alien Green you have earned 5 points");  }

                else if(Aliencolour2 === "Yellow"){
                    console.log("(version 2)you shot down Yellow Alien you have earned 10 points"); }

                    else if (Aliencolour2 === "Red"){
            console.log("you shot down Red alien you have ernes 15 points "); }


            //version 3


            let Aliencolour3 = "Red";
            if(Aliencolour3 === "Green"){
                console.log("you shot down Green Alien you have earned 5 points"); }        
                
                
                else if (Aliencolour3 ==="Yellow"){
                    console.log("you shot down Yellow Alien you have earned 10 points");}


             else if (Aliencolour3 === "Red"){
                console.log("(version 3)you shot down Red Alien you earned 15 points") }

// Question : 28


//Creating a variable
let Age = 100;


//Creating a program for Determimg the stage of life using If-Else chain
if (Age < 2){
    console.log("you are a baby.");}

 else if(Age >= 2 && Age < 4){
    console.log("you are a Toddler.");}
    
 else if (Age >= 4 && Age < 13){
        console.log("you are a kid.");}

 else if(Age >= 13 && Age < 20){
            console.log("you ae a Teenagers.");}

 else if(Age >= 20 && Age < 65){
                console.log("you are an Adults."); }


 else if (Age >= 65){
                    console.log("you are Elders."); }



// Question : 29

// creating a Array
let Favorite_fruits =["Mango","strawberry","orange"];

// Using 5 Independent If Statement

if(Favorite_fruits.includes("Mango")){
    console.log("I Really like Mangos");}

    if(Favorite_fruits.includes("strawberry")){
        console.log("I Really like strawberry");}

        if(Favorite_fruits.includes("Apple")){
            console.log("I Really like Apple");}

if(Favorite_fruits.includes("orange")){
    console.log("I Really like orange ");}

    if(Favorite_fruits.includes("Banana")){
        console.log("I Really like Banana"); }

// Question : 30

// Using ForEach Loop on Array
UserNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
    console.log(`Hello ${oneuser}, Would you like to see aStatus report ?`); }else {
        console.log(`Hello ${oneuser}, Thank you for loging in again`)}})

// Question : 31


let userNames = ["Jawed","Ali","Zeeshan","Admin","Farha","Ayesha"];

userNames =[]
if (userNames.length === 0){console.log("your Array in Empty we need to find some users!")}else {
    // Using ForEach Loop on Array
userNames.forEach(oneuser =>{
    if(oneuser === "Admin"){
    console.log(`Hello ${oneuser}, Would you like to see aStatus report ?`); }else {
        console.log(`Hello ${oneuser}, Thank you for loging in again`)}})
}
  

//  Question : 32

// Array of current users
let current_users =["Rani","Hurram","Harmain","Ariyan","jawed"]
//Array of New users
let new_users =["Rani","Jawed","Konj","laila","Malaika"]
// Loop through New_users Names Available
new_users.forEach (new_one_user => {
    // Making a condition for username already exist and save in our_condition variable

 let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user .toLowerCase ())

 // print Different messages using If_Else statement
if(our_condition) {
    console.log(`sorry ${new_one_user} is already taken !`);
    
        }  else{
            console.log(`this usernam ${new_one_user} is available`);
            
        }                                                                                                                             
    })


// Question ; 33

// creating a Array 
let numbers = [1,2,3,4,5,6,7,8,9];

// using for_Loop
for(let oneNumber of numbers){
    let ordinalEnding: string ;

    if(oneNumber === 1){
    ordinalEnding = "st"
   }else if(oneNumber === 2){
        ordinalEnding = "nd"
         }else if(oneNumber === 3){
            ordinalEnding = "rd"}else{
            ordinalEnding = "th" }
            console.log(`${oneNumber}${ordinalEnding}`);}


// Question : 34


// creating a Array
let pizza =["chiken tikka","malai cheese","fajita"]

// using For_Loop
for(let onePizza of pizza){
    console.log(`I like ${onePizza} pizza`);
    
}
// print a message outside of the For_Loop
console.log("pizza is love");
console.log("I eat pizza");


// Question : 35

// creating a Array
let petAnimals =["Cat","Dog","Rabbit"]

// using For_Loop
for (let onePet of petAnimals){
    console.log(`A ${onePet} would make a great pet`);

    
}
// print a message outside of For_Loop
console.log("Any of these animals wuold make a great pet!");


// Question : 36

// creating a Array
let petAnimals =["Cat","Dog","Rabbit"]

// using For_Loop
for (let onePet of petAnimals){
    console.log(`A ${onePet} would make a great pet`);

    
}
// print a message outside of For_Loop
console.log("Any of these animals wuold make a great pet!");


// Question : 37


function make_shirt (size: string,printMessage: string){
    console.log(`you selected ${size} size shirt with ${printMessage} prints on shirt`);
    
  }
  make_shirt("Medium","Jawed kI Rani")

  // Question : 38

  // Describe Cities



function describe_city(city: string, country:string ="Defualt Country."){
    console.log(`${city} is in ${country}`);
}
describe_city('karachi','pakistan');
describe_city('Tokyo','Japan');
describe_city('paris');

// Question : 39

// City_country Names
function city_country(city :string, country:string){
    return `${city},${country}`;
    
}
       console.log( city_country('Karachi','Pakistan'));

       console.log( city_country('Tokyo','Japan'));

       console.log( city_country('Paris','France'));



// Question : 40

function make_album(artist_name: string, album_title: string, tracks?:number){
    const album: {artist: string, title: string, tracks?:}={
        artist: artist_name,
        title: album_title,
    };
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;

}
// calling three function and creating 3 variables with different values

const album1 = make_album("Rani","Album title 1");

const album2= make_album("Rani","Album title 2");
 // calling


const album3 = make_album("Rani","Album title 3", 10);

//printing values of our objects created my function
console.log(album1);

console.log(album2);
console.log((album3));

// Question : 41

// Make a Array Magicians Names
let magician : string []=["Harry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];

function show_magicians (magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
     });
}

show_magicians(magician)

// Question : 42



// Make a Array Great Magicians Names
let magician : string [] = ["Harry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore"];

function make_great ( magicianArray: string[] ){
for(let i=0; i<magicianArray.length; i++){
    magician[i] = " the Great " + magicianArray[i]
}

}






function show_magicians (magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
     });
}
make_great(magician);
show_magicians(magician)


// Question : 43





// Make a Array unchanged Magicians 
let magician : string [] = ["Harry Potter","Hermione Granger","Ron Weasley","Albus Dumbledore\n"];

function copyArray(arr: string[]){
    return [...arr]
}


function make_great ( magicianArray: string[] ){
for(let i=0; i<magicianArray.length; i++){
    magicianArray[i] = " the Great " + magicianArray[i]
}

}






function show_magicians (magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
     });
}

const copymagicianArray = copyArray(magician)
make_great(copymagicianArray);


 console.log(("This is original Array:\n"));
 show_magicians(magician)


 
 console.log(("This is my modified copy of the  Array:\n"));
 show_magicians(copymagicianArray);


 // Question :44


 // sendwich 

function makesandwich(item:string[]){
    console.log("\nmaking your sanwich with:");
    item.forEach(element =>console.log("- " + element));
    console.log("Enjoy your sandwich !\n");
    
    
}

makesandwich(['Ham','Cheese','Lettuce'])


makesandwich(['Turkey','Bacon',])



makesandwich(['peanut butter','Jelly',])




// Question : 45



function storeCarInfo(manufacturer : string , modelName: string, ...extraOption:{ [key: string]: any }[]):
object {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo; 
};



let answer = storeCarInfo('honda','civic',{color:'black'},{features:['navigation','power window']});




console.log(answer);







































































































