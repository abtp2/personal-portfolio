/* const utterance = new
SpeechSynthesisUtterance();															const texts = document.querySelector(".spoke-text").innerText;
const nut = document.getElementById("speak");
utterance.rate = 0.8;
utterance.volume = 1;
utterance.pitch = 0.3;
utterance.lang = "hi-IN"; 
utterance.text = texts;

nut.onclick = function(){
window.speechSynthesis.speak(utterance);				
}
 */


document.getElementById("speak").onclick = function(){
var x = document.getElementById("speak");
var a = document.getElementById("audio");

if(x.classList.contains("on")){
x.classList.remove("on");
x.classList.add("off");	

a.pause();
}else {
x.classList.remove("off");
x.classList.add("on");		

a.play();	
}
}
