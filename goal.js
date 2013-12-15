(function(){

	// Returns a goal 
	var Goal = function(title, percentageComplete, shouldAppend) {

		this.goalWrapper = document.createElement('div');
		this.goalWrapper.setAttribute('class', 'goal-wrapper');

		var goalTitle = document.createElement('h1');
		goalTitle.setAttribute('class', 'goal-title');
		goalTitle.innerHTML = title + ' - ' + percentageComplete*100 + '%';

		var goalContainer = document.createElement('div');
		goalContainer.setAttribute('class', 'goal-container');

		var progressContainer = document.createElement('div');
		progressContainer.setAttribute('class', 'goal-progress');
		progressContainer.style.width = 300*percentageComplete + 'px';

		this.goalWrapper.appendChild(goalTitle);
		this.goalWrapper.appendChild(goalContainer);
		goalContainer.appendChild(progressContainer);

		if (shouldAppend) {
			document.body.appendChild(this.goalWrapper);
		}

		else {
			return this.goalWrapper;
		}

	};

	Goal.prototype.subgoals = function(subgoals) {

		if (!Array.isArray(subgoals)) {
			throw('Subgoals must be an array');
		}

		var headings = [];

		for (var i = 0; i < subgoals.length; i++) {
			headings.push(document.createElement('h3'));
			headings[i].setAttribute('class', 'subgoal');
			headings[i].innerHTML = ' &middot; ' + subgoals[i];
			// Insert subgoals after goal title and before goal bar
			this.goalWrapper.insertBefore(headings[i], this.goalWrapper.children[1]);
		}

	};

	var workAtMedium   = new Goal('Work at Legit Place', 0.7, true);
	var gymConsistency = new Goal('Gym Consistency', 0.03, true);

	workAtMedium.subgoals(['xyz', 'blah']);
	gymConsistency.subgoals(['Go to the gym every Monday, Wednesday, and Friday for one year.']);


	window.onload = function(){
		// enableDrag();
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