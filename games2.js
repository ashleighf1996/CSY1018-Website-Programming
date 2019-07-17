var interval1,interval2,interval3,interval4,interval5; //Declaring the intervals at the top for each of the "if statement" intervals.
var horses = []; //Declaring an array of horses.
var a=1; //Allows the horses to be reset again after stopping on the line.

//This is the rightwards function which moves the horses to the right-hand side.
function rightWards() {
for(i=0;i<=3;i++){
horses[i] = document.getElementById('horse'+(i+1));
var toppositioni = horses[i].offsetTop;
var leftpositioni = horses[i].offsetLeft;
var rightside=window.innerWidth/100*75;
 }

for(i=0;i<=3;i++){
  var randomnumber=Math.ceil(Math.random()*30);
  var addj=leftpositioni+randomnumber;
  horses[i].style.left= addj+'px';
  horses[i].className='horse runRight';

    }
//This interval makes the horses move.
    if(addj>rightside)
       {
         clearInterval(interval1);
         interval2=setInterval(downWards,300);

            }
          }
//This is the downwards function which moves the horses downwards on the track.
function downWards(){

  for(i=0;i<=3;i++){
    horses[i] = document.getElementById('horse'+(i+1));
    var toppositioni = horses[i].offsetTop;
    var leftpositioni = horses[i].offsetLeft;
    var downside=window.innerHeight/100*70;
   }

  for(i=0;i<=3;i++){
    var randomnumber=Math.ceil(Math.random()*30);
    var addj=toppositioni+randomnumber;
    horses[i].className = 'horse runDown';
    horses[i].style.top = toppositioni + randomnumber + 'px';

}
//console.log(toppositioni);

//The interval is being set to move the horses.
if (addj>downside){
  clearInterval(interval2);
  interval3=setInterval(leftWards,300);


}

}
//This is the leftwards function which is responsible for moving the horses to the left-hand side of the track.
function leftWards(){
  for(i=0;i<=3;i++){
    horses[i] = document.getElementById('horse'+(i+1));
      //var toppositioni = horses[i].offsetTop;
      var leftpositioni = horses[i].offsetLeft;
      var leftside=window.innerWidth/100*10;
   }

  for(i=0;i<=3;i++){
    var randomnumber=Math.ceil(Math.random()*90);
    var addj =leftpositioni-randomnumber;
    horses[i].style.left= addj+'px';
    horses[i].className='horse runLeft';



}
//This interval sets and allows the horses to move.
if (addj<leftside){
  clearInterval(interval3);
  interval4=setInterval(upWards,300);

}
}
//This is the upwards function which is responsible for moving the horses upwards on the track.
function upWards(){
  for(i=0;i<=3;i++){
    horses[i] = document.getElementById('horse'+(i+1));
      var toppositioni = horses[i].offsetTop;
      //var leftpositioni = horses[i].offsetLeft;
      var upside=window.innerHeight/100*10;
   }
  for(i=0;i<=3;i++){
    var randomnumber=Math.ceil(Math.random()*30);
    var addj=toppositioni -randomnumber;
    horses[i].style.top= addj+'px';
    horses[i].className = 'horse runUp';

}
//This interval sets and allows the horses to move and then call the stophorses function.
if (addj<upside){
  clearInterval(interval4);
  interval5=setInterval(stopHorses,300);

 }

}
//The stopHorses function basically makes the horses run until a certain point on the track before they stop.
function stopHorses(){
  for(i=0;i<=3;i++){
  horses[i] = document.getElementById('horse'+(i+1));
  var toppositioni = horses[i].offsetTop;
  var leftpositioni = horses[i].offsetLeft;
  var rightside=window.innerWidth/100*30;
   }

  for(i=0;i<=3;i++){
  var randomnumber=Math.ceil(Math.random()*90);
  var addj=leftpositioni+randomnumber;
  horses[i].style.left= addj+'px';
  horses[i].className='horse runRight';


      }
//This interval is being set so that when the horses stop the "a=0" is basically saying that if a is equal to 1 then move the horses but if a is equal to 0 then stop the horses.
      if(addj>rightside) //Conditional statement inside the brackets "addj>rightside".
         {
           if(a>1)  {


                }
                else{
                  a++;

                clearInterval(interval5);
                startFunction();
                a = 0;
                }

              }

}


//This startFunction is basically the start button function. If the interval is set as 1 then move all the horses around the track else stop the horses and use the "horse standRight" function to stop them.
function startFunction(){

if(a<=1){
 interval1=setInterval(rightWards,300);
}

else{
  for(i=0;i<=3;i++){
  horses[i] = document.getElementById('horse'+(i+1));
  horses[i].className= 'horse standRight';
 }
}

}

//The myLoadEvent function loads all of the content onto the HTML document as well as setting off the start button.
function myLoadEvent(){

 var start= document.getElementById('start');
 start.addEventListener('click', startFunction);
 var startline = document.getElementById('startline');
 var topstart = startline.offsetTop;
 var leftstart = startline.offsetLeft;

}
//The document event listener loads all of the JavaScript code using the myLoadEvent function.
document.addEventListener('DOMContentLoaded', myLoadEvent);
