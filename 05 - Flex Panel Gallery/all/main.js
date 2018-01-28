window.onload = function(){

	const panels = document.querySelectorAll('.panel');

	panels.forEach( function(element, index) {
		element.addEventListener('click', function(){
			this.classList.toggle('open');
	})});
	panels.forEach(element=>{
		element.addEventListener('transitionend', opening);
	});
	function opening(e){
		console.log(e.propertyName);
		if (e.propertyName.includes('flex-grow')) {
			this.classList.toggle('opening');
		}
	}
}