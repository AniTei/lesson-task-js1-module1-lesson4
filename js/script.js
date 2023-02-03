const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",
    },
    {
        name: "Age of Empires II",
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];

//ADDING A LINE TO CREATE A FORK




/* Q1 OK, fasitOK 

Create a function called `printSeason` that accepts one argument (has one parameter) called `season`.

Inside the function log the value of the argument (I think they mean parameter?).

Call the function and pass in the value "summer` as the argument. */

function printSeason(season) {
    console.log(season);
}

printSeason("summer");

/* 
### Question 2 OK, fasitOK

Create a function called `printNumbers` that has two parameters, `firstNumber` and `secondNumber`.

Inside the function log each value that is passed in.

Call the function and pass in two numbers as the arguments.

 */

function printNumbers(firstNumber, secondNumber) {
    console.log(firstNumber, secondNumber);
}

printNumbers(7, 9);



/* 
### Question 3 NOT OK , OK with help from fasit
Needed to do: add const in front of result, repeat the parmeters on the result statement, w + between.

Create a function called `addNumbers` that has three parameters. OK

Inside the function add all the paramters and return the result. OK

Assign the result to a variable and assign the variable to the innerHTML property of the DOM element with the class of `total`. */

function addNumbers(one, two, three) {
    const result = one + two + three;
    //just sketching, no idea what the question i asking
    return result;
}

//const addNumbers (5, 10, 15);
//this needs to declare a new variable that can state values to go into the function, and also be referred to by the

const total = addNumbers(5, 10, 15);

const question3 = document.querySelector(".total");
//the line above was right

//question3.innerHTML = result;
// this line was partly right, but the equal needs to go to the variable stating the values going into the function

question3.innerHTML = total;



/* 
### Question 4

Create a function called `createGreeting` that has one parameter.

Inside the function add the value passed in to the string "Hello, my name is " and return the new string.

Assign the returned value to the innerHTML property of the DOM element with the id of `name`.
 */


//Dette var så mye jeg fikk til på egenhånd, nå limer jeg inn fasiten under

function createGreeting(greeting) {
    newString = "Hello my name is " + greeting;
    return newString;
}

const hello = createGreeting("Anine");

const question4 = document.querySelector("#name");

question4.innerHTML = hello;






/* // Question 4 I CANGED ALL THE VARIABLES TO MATCH TEH ONES I USED, TO SEE THE DIFFERENCES EASIER
function createGreeting(greeting1) {
    const newString = "Hello, my name is " + greeting1 + ".";
    return newString;
}

// we can declare a variable called greeting here because the other variable called greeting is scoped to the function, YEAH BUT MAYBE DONT, SUPER UPEDAGOGISK
const hello = createGreeting("Serral");

const question4 = document.querySelector("#name");
question4.innerHTML = hello;
 */

// JEG TROR JEG KLARTE DET NESTEN? DEN ENESTE FORSKJELLEN ER JO AT JEG IKKE FIKK MED NAVNET, og det kan gjøres ved å: nevne parameteren i statement, slik når argument bestemmes lenger ned vet den hvor den skal gå, argument gåt dit parameter er plassert.




/* 

### Question 5

Create a function called `printListItems` that has one parameter.

Inside the function loop through the value passed in and log each item.

Call the function and pass the `sports` array in `script.js` in as the argument.
 */

// I dont understand, loop through what value

function printListItems(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

printListItems(sports);

//I tried, cant come up with any mor tries, the array isnt logging, pasting the fasit below
//Problem, I forgot {} after the loop LOL and bais
// still doesnt show up, but if i rewrite it, it seems to be fine, what, just deleted the very first one, found teh mistake on the {} in the loop, happy w that



// det funker når jeg skriver av fasiten, men så vidt jeg kan se er det det samme som jeg gjorde på egnehån??? bais

/*
### Question 6

Create a function called `createGames` that has one parameter.

Inside the function loop through the value passed in, OK
create HTML for each property in each object and return the HTML.

Provide a default value for the `released` property if it is missing.

Assign the return value of the function to the innerHTML property of the DOM element with the class of `game-container`.
 */





/* function createGames(gameParam) { OK



    for (let i = 0; i < gameParam.length; i++) { OK

        gameParam[i].name.innerHTML = `<p> Name of the game: ${gameParam[i].name}</p>`
        gameParam[i].released.innerHTML = `<p> Anno: ${gameParam[i].released}</p>`
        
//if this works, how do i return it, i need to wrap it up in one thing I can refer to YOU SHOULD HAVE DECLARED A VARIEBLE WITH AN OPEN STRING BEFORE THE LOOP

        return returnValue
    }
}

createGames(games);

const question6 = document.querySelector(".game-container");

question6.innerHTML = returnValue */

// dette var det jeg prøvde på egenhånd, nå er det fasit:
// jeg bare hoppa over default haha




/* 

// Question 6
function createGames(gamesList) {

    let html = "";

    for (let i = 0; i < gamesList.length; i++) {

        let releaseYear = "Unknown year";

        if (gamesList[i].released) {
            releaseYear = gamesList[i].released;
        }

        html += `<div class="game">
                    <h5>${gamesList[i].name}</h5>
                    <p>Released: ${releaseYear}</p>
                </div>`;
    }

    return html;
}

const newHTML = createGames(games);

const gameContainer = document.querySelector(".game-container");

gameContainer.innerHTML = newHTML; */


///////////////////
// my problem , like poineted out above, when creating the new html, it neds to be contained in one variable

function createGames(gameParam) {

    let insert = "";

    for (let i = 0; i < gameParam.length; i++) {

        releasedAnno = "oups no year:(";

        if (gameParam[i].released) {
            releasedAnno = gameParam[i].released;
        }
          
        insert += `<div class= "game"><p> Name of the game: ${gameParam[i].name}</p>
        <p> Anno: ${releasedAnno}</p></div>`
    }
    return insert
}

const returnValue = createGames(games);

const question6 = document.querySelector(".game-container");

question6.innerHTML = returnValue;


//jeg er så glad jeg ble ferdig, jeg skjønner det, men kan det ikke , men på riktig vei!

// På fredag, i morgen , sove så lenge du vil <3, antiproc day, se på fasit på Q 5 og 6, og jobbe med leksjon 2.1 :D