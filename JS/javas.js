
 /* var userName="Al-dasouqi";
 alert(userName); */

 //UserName
  var userName1= prompt("whats your name?");
// console.log(userName1);

 function welcomeMessage(name){
    console.log(userName1);
   return document.write('<h3>'+userName1+'</h3>');
 }
welcomeMessage(userName1);
/*
//Favourite Author
var favouriteAuthor= prompt("who's  your favourite Author?");
function writer(name1){

 if(favouriteAuthor=='Dan Brown'){
   return document.write('<img src="https://mediad.publicbroadcasting.net/p/nhpr/files/styles/x_large/public/201711/dan_brown__.jpg">');
}else if(favouriteAuthor=='Ali Al-wardi'){
    return document.write('<img src="https://th.bing.com/th/id/OIP.wEVu73oZ6pdrciVsfgHm9QAAAA?pid=ImgDet&rs=1">');
}else{
    alert('choose betwen Dan Brown or Ali Al-wardi next time');
} 
}
writer(favouriteAuthor);
*/
//Asking about the age
var age=prompt("whats your age?");
function cuAge(age1){
console.log(age);
if(age>=16){
    alert('welcome to our club!'); 
}else{
    alert('Will wait you to join our club!');
}
}
cuAge(age);
confirm("Age confirmed!");

/*
var age = prompt("what is your age?");

console.log(age);
if (age >= 16 && age <= 60) {
    alert('Welcome to our club');
} else if (age < 16 || age > 60) {
    alert('See you after couples of years!');
} else {
    alert('please input a number');
}
*/
 var favouriteWriter = prompt("who's your favourite writer?");
 var getFavWriter = function(){

while (favouriteWriter !== 'Dan' && favouriteWriter !== 'Ali') {
    favouriteWriter = prompt('please only write Dan/Ali');

}

var Pictures = prompt('how many pictures do you want for the writer?');
var pic = '';
var result = '';

if (favouriteWriter == 'Dan') {
    pic = '<img src="https://mediad.publicbroadcasting.net/p/nhpr/files/styles/x_large/public/201711/dan_brown__.jpg"/> </br>';
} 
else if (favouriteWriter == 'Ali') {
    pic = '<img src="https://pbs.twimg.com/media/CifpURAXAAABD3g.jpg"/> </br>';
}

console.log(pic);

for (var i = 0; i < Pictures; i++) {
    result += pic;
}

//console.log(result);
document.write(result);}
//return result; }
getFavWriter();
//favWriter(Pictures);
//document.write(getFavWriter();)
