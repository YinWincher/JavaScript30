const video = document.querySelector('video');
const playButton = document.querySelector('.player__button');
const ranges = document.querySelectorAll('.player__slider');
const buttons = document.querySelectorAll('.player__button');
const fill = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
playButton.addEventListener('click', function(){
	if (video.paused) {
		this.textContent = '❚ ❚';
		video.play();
	}else{
		this.textContent = '►';
		video.pause();
	}
});

ranges[0].addEventListener('change', function(){
	video.volume = this.value;
});
ranges[1].addEventListener('change', function(){
	video.playbackRate = this.value;
});

buttons[1].addEventListener('click', function(){
	video.currentTime += Number.parseInt(this.dataset.skip);
});
buttons[2].addEventListener('click', function(){
	video.currentTime = video.currentTime + Number.parseInt(this.dataset.skip);
});
video.addEventListener('timeupdate', function(){
	var percent = this.currentTime / this.duration;
	fill.style.flexBasis = percent*100+'%';
});
progress.addEventListener('click', function(){
	var position = getRelativePosition(event,this);
	var width = getComputedStyle(this).width;
	var percent = position.x / Number.parseFloat(width);
	fill.style.flexBasis = percent*100+'%';
	video.currentTime = percent * video.duration;
});

function getRelativePosition(event,ele){
            
	    var marginLeft = ele.getBoundingClientRect().left;
    	var marginTop = ele.getBoundingClientRect().top;
        var X = event.clientX;
    	var Y = event.clientY;
            
        return {
            "x" : X-marginLeft,
            "y" : Y-marginTop
        };
}