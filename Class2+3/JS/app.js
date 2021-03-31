'use strict';

let score=0;

// let userName='samer';
 let name=prompt('what\'s your name');

 console.log(name);

 alert(" Greeting "  + name + " ! " + "Welcome to our site, we are glad to having you!");
 //alert("There is 5 questions you need to answer them in order to know how much you know me!");


 let feeling=confirm('are you good?');

 if(feeling===true){
  console.log('thats great to hear');
 }else{
   console.log('hope you feel better soon');
 }

  alert("There is 5 questions you need to answer them in order to know how much you know me!");
//alert('hellooo');


//Q1
function favColor(){
let favouriteColor=prompt('My favourite color is blue?');
    favouriteColor=favouriteColor.toLowerCase();
    console.log(favouriteColor.toLowerCase());
    console.log(favouriteColor);
    let score = 0;

 if (favouriteColor==='yes' || favouriteColor==='y') {
   //console.log('Sure! It\'s the color of the sky!');
   alert('Sure! It\'s the color of the sky!');
   score++;
 }else {
   //console.log('NO!!' );
   alert('NO!! , My favourite is Blue.' );
 }
 //alert('If you answered YES that\'s correct!');
}
favColor();


//Q2
function favApp(){
 let favouriteApp=prompt('My favourite application is Facebook?');
    favouriteApp=favouriteApp.toLowerCase();
    console.log(favouriteApp.toLowerCase());
    console.log(favouriteApp);

 if (favouriteApp=== 'yes' || favouriteApp==='y') {
   //console.log('Absouletley No!');
   alert('Absouletley it is not my favourite APP!');
 }else {
   //console.log('I like INSTAGRAM!' );
   alert('Yes ,I like INSTAGRAM!' );
   score++;
 }
 //alert('If you answered YES that\'s correct!');
}
favApp();


 let favouriteSeries=prompt('My favourite series is Friends?');
    favouriteSeries=favouriteSeries.toLowerCase();
    console.log(favouriteSeries.toLowerCase());
    console.log(favouriteSeries);

 if (favouriteSeries==='yes' || favouriteSeries==='y') {
  // console.log('YEEEEEES ! It\'s the best!');
   alert('YEEEEEES ! It\'s the best!');
   score++;
 }else {
  // console.log('NO!!' );
  alert('NO!! it is my favourite' );
 }
 //alert('If you answered YES that\'s correct!');

 let favouriteHabit=prompt('I like Football matches?');
    favouriteHabit=favouriteHabit.toLowerCase();
    console.log(favouriteHabit.toLowerCase());
    console.log(favouriteHabit);

 if (favouriteHabit==='yes' || favouriteHabit==='y') {
   //console.log('Ofcourse NO!');
   alert('Ofcourse NO! I don\'t like it');
 }else {
   //console.log('NO ! I like reading!' );
   alert('That\'s correct ! I like reading more!' );
   score++;

 }
 //alert('If you answered YES that\'s correct!');

 let favouriteWriter=prompt('My favourite writer is Dan Brown?');
    favouriteWriter=favouriteWriter.toLowerCase();
    console.log(favouriteWriter.toLowerCase());
    console.log(favouriteWriter);

 if (favouriteWriter==='yes' || favouriteWriter==='y') {
   //console.log('Yes! he is the best');
   alert('Yes! he is the best');
   score++;
 }else {
   //console.log('NO!! It\'s Dan brown ' );
   alert('NO!! It\'s Dan brown ' );
 }


 let randomNum= parseInt(prompt("Please pick up a number form 1 to 10, Let\'s see if you will know the num I thinking about!"))
  let answer = 2;
  //let score = 0;
    //console.log(randomNum,answer);
   for ( let i=0 ; i<3 ; i++) {
    // console.log(i+1);
   if(randomNum === 2 )
   
   { 
    //console.log(randomNum);
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + answer + " GUESS ");
               score++;
              break;
   } 
   else if(randomNum > answer  ) /* if guessed number is greater
                   than actual number*/
   {    
      // guess++;
      // window.aler("OOPS SORRY!! TRY A SMALLER NUMBER");
      randomNum=prompt("OOPS SORRY!! TRY A SMALLER NUMBER");
   } 
   else
   {
       //guess++;
       //window.alert("OOPS SORRY!! TRY A GREATER NUMBER")
       randomNum=prompt("OOPS SORRY!! TRY A GREATER NUMBER");
   }
  } 
 alert(' Hi! ' + name + "The correct answer is 2, Play again!" );

 let favWriter= prompt("If you know me , you know that I like two writers, guess one of them!")
  let correct = ["Ali" , "Dan"];
  favWriter=favWriter.toLowerCase();
    //console.log(favWriter.toLowerCase());
    //console.log(favWriter);
    
   for ( let i=0 ; i<5 ; i++) {
    // console.log(i+1);
   if(favWriter === correct[0] || favWriter === correct[1] )
   {    
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + correct + " GUESS ");
               score++
               break;
   } 
   else 
   {    
      // guess++;
      // window.aler("OOPS SORRY!! TRY A SMALLER NUMBER");
      favWriter=prompt("OOPS SORRY!! TRY AGAIN");
   } 
  
  } 
 alert(' Hi! ' + name + "The correct answer is Ali Al-wardi or Dan Brown, Play again!" );
 alert(`thanks for playing ${name} your score is ${score} `);
