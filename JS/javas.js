
 /* var userName="Al-dasouqi";
 alert(userName);

 var userName1= prompt("whats your name?");
 console.log(userName1);

 document.write('<h3>'+userName1+'</h3>');


var favouriteAuthor= prompt("who's  your favourite Author?");



 if(favouriteAuthor=='Dan Brown'){
    document.write('<img src="https://mediad.publicbroadcasting.net/p/nhpr/files/styles/x_large/public/201711/dan_brown__.jpg">');
}else if(favouriteAuthor=='Ali Al-wardi'){
    document.write('<img src="https://th.bing.com/th/id/OIP.wEVu73oZ6pdrciVsfgHm9QAAAA?pid=ImgDet&rs=1">');
}else{
    alert('choose betwen Dan Brown or Ali Al-wardi next time');
} 

var age=prompt("whats your age?");

console.log(age);
if(age>=16){
    alert('welcome to our club!'); 
}else{
    alert('Will wait you to join our club!');
}
confirm("Age confirmed!") */


var age = prompt("what is your age?");

console.log(age);
if (age >= 16 && age <= 60) {
    alert('Welcome to our club');
} else if (age < 16 || age > 60) {
    alert('See you after couples of years!');
} else {
    alert('please input a number');
}


/* var favouriteWriter = prompt("who's your favourite writer?");

while (favouriteWriter !== 'Dan brown' && favouriteWriter !== 'Ali Al-wardi') {
    favouriteArtist = prompt('please only write Dan brown/Ali Al-wardi');

}

var Pictures = prompt('how many pictures do you want for the writer?');

var pic = '';
var result = '';

if (favouriteWriter == 'Dan brown') {
    painting = '<img src="https://mediad.publicbroadcasting.net/p/nhpr/files/styles/x_large/public/201711/dan_brown__.jpg"/> </br>';
} else if (favouriteArtist == 'Ali Al-wardi') {
    painting = '<img src="https://th.bing.com/th/id/OIP.wEVu73oZ6pdrciVsfgHm9QAAAA?pid=ImgDet&rs=1"/> </br>';
}

console.log(pic);

for (var i = 0; i < Pictures; i++) {
    result += pic;
}

console.log(result);

document.write(result); */
