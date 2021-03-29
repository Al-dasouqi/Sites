'use strict';


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

let favouriteColor=prompt('My favourite color is blue?');
    favouriteColor=favouriteColor.toLowerCase();
    console.log(favouriteColor.toLowerCase());
    console.log(favouriteColor);

 if (favouriteColor==='yes' || 'y') {
   //console.log('Sure! It\'s the color of the sky!');
   alert('Sure! It\'s the color of the sky!');
 }else {
   //console.log('NO!!' );
   alert('NO!!' );
 }
 //alert('If you answered YES that\'s correct!');

 let favouriteApp=prompt('My favourite application is Facebook?');
    favouriteApp=favouriteApp.toLowerCase();
    console.log(favouriteApp.toLowerCase());
    console.log(favouriteApp);

 if (favouriteApp=== 'yes' || 'y') {
   //console.log('Absouletley No!');
   alert('Absouletley No!');
 }else {
   //console.log('I like INSTAGRAM!' );
   alert('I like INSTAGRAM!' );
 }
 //alert('If you answered YES that\'s correct!');

 let favouriteSeries=prompt('My favourite series is Friends?');
    favouriteSeries=favouriteSeries.toLowerCase();
    console.log(favouriteSeries.toLowerCase());
    console.log(favouriteSeries);

 if (favouriteSeries==='yes' || 'y') {
  // console.log('YEEEEEES ! It\'s the best!');
   alert('YEEEEEES ! It\'s the best!');
 }else {
  // console.log('NO!!' );
  alert('NO!!' );
 }
 //alert('If you answered YES that\'s correct!');

 let favouriteHabit=prompt('I like Football matches?');
    favouriteHabit=favouriteHabit.toLowerCase();
    console.log(favouriteHabit.toLowerCase());
    console.log(favouriteHabit);

 if (favouriteHabit==='yes' || 'y') {
   //console.log('Ofcourse NO!');
   alert('Ofcourse NO!');
 }else {
   //console.log('NO ! I like reading!' );
   alert('NO ! I like reading!' );

 }
 //alert('If you answered YES that\'s correct!');

 let favouriteWriter=prompt('My favourite writer is Dan Brown?');
    favouriteWriter=favouriteWriter.toLowerCase();
    console.log(favouriteWriter.toLowerCase());
    console.log(favouriteWriter);

 if (favouriteWriter==='yes' || 'y') {
   //console.log('Yes! he is the best');
   alert('Yes! he is the best');
 }else {
   //console.log('NO!! It\'s Dan brown ' );
   alert('NO!! It\'s Dan brown ' );
 }

 alert(' Hi! ' + "My favourite color is Blue, I like spending time on Instagram,  My favourite series is FRIENDS!, I like reading and my favourite writer is Dan Brown!" );

