window.onload = function(){

	(function(){
		const hour = document.querySelector('.box .hour');
		const min = document.querySelector('.box .min');
		const sec = document.querySelector('.box .sec');

		setInterval(getCurrentTime, 1000);		
		function getCurrentTime(){
			const date = new Date();
			min.style.transform = `rotate(${date.getMinutes()*360/60+date.getMinutes()+90}deg)`;
	 		sec.style.transform = `rotate(${date.getSeconds()*360/60+90}deg)`;
			hour.style.transform = `rotate(${date.getHours()%12*360/12+90}deg)`;
		}

	})();

};