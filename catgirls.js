//var catgirlCoconut =document.getElementsByClassName (catgirlCoconut);


document.getElementById("headcg").onclick = function() {onClick()};
document.getElementById("headcg").onmouseout = function() {mouseOut()}; 
    function onClick() {
    document.getElementById("headcg").style.color = "red";
  } 
    function mouseOut() {
    document.getElementById("headcg").style.color = "black";
  }//no mouseOut works yet


document.getElementById("btn").onclick = alertFunc;

function alertFunc() {
alert("Hi");
}



function coconut(){
    document.getElementById("imgcga")
    .src="media/images/coconut1.jpg";
    document.getElementById("imgcgb")
    .src="media/images/coconut2.jpg"; 
    document.getElementById("headcg")
    .innerHTML="Coconut";
    document.getElementById("textcg")
    .innerHTML="Coconut is a tall, cool,[very] collected, and glamorous catgirl. Despite her stature, shes actually the third youngest of the Minaduki catgirls. She has a mild complex about having a not-very-feminine appearance. However, her loyalty to her master Shigure is greater than any dogs and she has extraordinary physical capabilities. Although she really loves helping people, it almost always ends up failing due to her poor coordination skills.";
}

function vanilla(){
    document.getElementById("imgcga")
    .src="media/images/vanilla1.jpg";
    document.getElementById("imgcgb")
    .src="media/images/vanilla2.jpg"; 
    document.getElementById("headcg")
    .innerHTML="Vanilla";
    document.getElementById("textcg")
    .innerHTML="Vanilla is a clever and quiet catgirl who loves Chocola. She is Chocolas twin sister and the youngest among the Minaduki catgirls. Vanilla is prone to be misunderstood because she rarely expresses her emotions. In fact, she is quite smart and often makes some remarkable insights. Her sharp wit and Ill-do-things-my-way attitude make her Chocolas complete opposite. However, she remains both kind-hearted and, well, catlike.";
}

function millianna(){
    document.getElementById("imgcga")
    .src="media/images/millianna1.jpg";
    document.getElementById("imgcgb")
    .src="media/images/millianna3.jpg"; 
    document.getElementById("imgcgb")
    //.src="media/images/millianna2.jpg";
    document.getElementById("headcg")
    .innerHTML="Millianna";
    document.getElementById("textcg")
    .innerHTML="Millianna from Fairy Tail is one of Erza Scarlet's childhood friends from their days as slaves at the Tower of Heaven, having additionally worked as one of Jellal's minions for a time. She is currently a Mage of the all-female guild—Mermaid Heel.";
}
function himarinoihara(){
    document.getElementById("imgcga")
    .src="media/images/himarinoihara1.jpg";
    document.getElementById("imgcgb")
    .src="media/images/himarinoihara2.jpg"; 
    document.getElementById("headcg")
    .innerHTML="Himari Noihara";
    document.getElementById("textcg")
    .innerHTML="Himari Noihara is the eponymous female protagonist of Omamori Himari. She is a cat demon (a bakeneko) who swore an oath to protect the male protagonist Yuuto Amakawa from the enemy Ayakashi when he turns sixteen. The oath traces back to her ancestor, whose life was spared by the ancestor of the Amakawa Family.";
}

function neko(){
    document.getElementById("imgcga")
    .src="media/images/neko1.jpg";
    document.getElementById("imgcgb")
    .src="media/images/neko2.jpg"; 
    document.getElementById("headcg")
    .innerHTML="Neko";
    document.getElementById("textcg")
    .innerHTML="Neko from K Project is a female Strain and also a Silver Clansman. She is extremely attached to Yashiro Isana and is responsible for altering his memories, as well as those of the Ashinaka High School student body.[4]She is called Miyabi Ameno (雨乃雅日, Ameno Miyabi) by the Green King Nagare Hisui, however Neko herself does not recognize this name.";
}

function neferpitou(){
    document.getElementById("imgcga")
    .src="media/images/neferpitou1.jpg";
    document.getElementById("imgcgb")
    .src="media/images/neferpitou2.jpg";
    document.getElementById("headcg")
    .innerHTML="Neferpitou";
    document.getElementById("textcg")
    .innerHTML="Neferpitou from Hunter X Hunter, nicknamed Pitou, was a cat-humanoid Chimera Ant and the firstborn of the Chimera Ant King's three Royal Guards.";
}

function dehya(){
    document.getElementById("imgcga")
    .src="media/images/dehya1.jpg";
    document.getElementById("imgcgb")
    .src="media/images/dehya2.jpg"; 
    document.getElementById("headcg")
    .innerHTML="Dehya";
    document.getElementById("textcg")
    .innerHTML="Dehya from Genshin Impact hails from the Great Red Sand. She is a well-known and powerful Eremite who also goes by the name Flame-Mane and also possesses a Pyro Vision. She is acquainted with Rahman. She has been called a lioness by Rahman before.";
}
//array not yet working
var cg = coconut;

var Array = [coconut , vanilla, millianna, himarinoihara, neko, neferpitou, dehya ];

var index = 0;

function changecg () {
    cg.setAttribute ("src", Array[index]);
    index++;
    if (index >=Array.length){
        index =0;
    }
}
setInterval (changecg, 5000);



function myFunction() {
    alert("cats alert");};



document.getElementById("cgfooter").onmouseover = function() {mouseOver()};
document.getElementById("cgfooter").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("cgfooter").style.color = "red";
}

function mouseOut() {
  document.getElementById("cgfooter").style.color = "black";
}
