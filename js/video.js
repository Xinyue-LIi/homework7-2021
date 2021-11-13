var video = document.querySelector("#player1");
var volume = document.querySelector("volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime);
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	if(video.playbackRate>1){
		video.playbackRate = 1;
	}else{
		video.playbackRate = video.playbackRate - 0.05;
	}
	
	console.log("New video speed is " + video.playbackRate);
	video.pause();
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	if(video.playbackRate1<1){
		video.playbackRate = 1;
	}else{
		video.playbackRate = video.playbackRate + 0.05;
	}
	console.log("New video speed is " + video.playbackRate);
	video.pause();
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Old time is " + video.currentTime);
	
	if(video.currentTime < video.duration-15){
		video.currentTime = video.currentTime + 15;		
	}else{
		video.currentTime =0;
	}
	console.log("New time is " + video.currentTime);
	video.pause();
	
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == true){
		video.muted = false;
		this.innerHTML = "Mute"
	}else{
		video.muted = true;
		this.innerHTML = "Unmute"
	}
	console.log("Muted: " + video.muted)

});

document.querySelector("#slider").addEventListener("change", function(){
	console.log(this.value);
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value/100;

});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original");
	video.classList.remove("oldSchool")
});