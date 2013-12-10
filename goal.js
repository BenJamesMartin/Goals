(function(){

	var Goal = function(title, percentageComplete) {

		// Make div and append to page with proper width based on percentage
		// Make an h1 with goal name
		// Make green become more intense as goal becomes completed

	// <h1 class="goal-title"></h1>
		
	// 	<div class="goal"> 
	// 		<div class="progress" id="progress"></div>
	// 	</div>

		var goalTitle = document.createElement('h1');
		goalTitle.setAttribute('class', 'goal-title');
		goalTitle.innerHTML

		var goalContainer = document.createElement('div');
		title.setAttribute('class', 'goal-container');


	};



	window.onload = function(){

		enableDrag();

	};

	var enableDrag = function(){

		// Change 'progress' to 'goal-progress'

		var pos = 0;
		var width = document.getElementsByClassName('goal-progress')[0].clientWidth;
		var enabled = false;

		document.getElementsByClassName('goal-progress')[0].onmousedown = function(e){

			// Set the current width of the bar and position of the cursor.
			// Use .clientWidth for not including border, offsetWidth for including border.
			width = document.getElementsByClassName('goal-progress')[0].clientWidth;
			pos 	= e.clientX;

			// Attach the mousemove event when the user begins clicking
			document.getElementsByClassName('goal-progress')[0].onmousemove = function(e){

				// Use Math.min to ensure the bar grows no larger than the max width of its container element.
				this.style.width = Math.min(width + (e.clientX - pos), 302) + 'px';
			};
		};

		// Remove the mousemove event when the user is done clicking.
		document.getElementsByClassName('goal-progress')[0].onmouseup = function(e){
			this.onmousemove = null;
		};	

	}
})();