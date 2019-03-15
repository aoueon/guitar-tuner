document.addEventListener('DOMContentLoaded', () => {

	const strings = document.querySelectorAll('.string'),
		audios = document.querySelectorAll('audio');

	document.querySelectorAll('.string')
		.forEach( function(button) {
			button.onclick = function() {
				var string_id = button.dataset.string;

				for (let string of strings) {
					if ( string != this ) {
						string.classList.remove('active');
					}
				}

				if ( this.classList.contains('active') ) {
					// this.classList.remove('active');
					document.getElementById(string_id).currentTime = 0;
				} else {
					this.classList.add('active');
					for (let audio of audios) {
						audio.pause();
						audio.currentTime = 0;
					}
					document.getElementById(string_id).play();
				}
			}
		}
	)

	window.addEventListener("keydown", checkKeyPressed, false);

	function checkKeyPressed(event) {
		// number 1
	    if (event.keyCode == "49") {
			eventFire(document.querySelector('.string:nth-of-type(1)'), 'click');
	    }
		// number 2
	    if (event.keyCode == "50") {
	        eventFire(document.querySelector('.string:nth-of-type(2)'), 'click');
	    }
		// number 3
	    if (event.keyCode == "51") {
	        eventFire(document.querySelector('.string:nth-of-type(3)'), 'click');
	    }
		// number 4
	    if (event.keyCode == "52") {
	        eventFire(document.querySelector('.string:nth-of-type(4)'), 'click');
	    }
		// number 5
	    if (event.keyCode == "53") {
	        eventFire(document.querySelector('.string:nth-of-type(5)'), 'click');
	    }
		// number 6
	    if (event.keyCode == "54") {
	        eventFire(document.querySelector('.string:nth-of-type(6)'), 'click');
	    }
		// space
	    if (event.keyCode == "32") {
	        stopAll();
	    }
	}

	function eventFire(el, etype){
	  if (el.fireEvent) {
	    el.fireEvent('on' + etype);
	  } else {
	    var evObj = document.createEvent('Events');
	    evObj.initEvent(etype, true, false);
	    el.dispatchEvent(evObj);
	  }
	}

	function stopAll() {
		for (let string of strings) {
			string.classList.remove('active');
		}
		for (let audio of audios) {
			audio.pause();
			audio.currentTime = 0;
		}
	}

	document.addEventListener("click", (evt) => {
	    const flyoutElement = document.querySelector('.strings');
	    let targetElement = evt.target; // clicked element

	    do {
	        if (targetElement == flyoutElement) {
	            // This is a click inside. Do nothing, just return.
	            // console.log("Clicked inside!");
	            return;
	        }
	        // Go up the DOM
	        targetElement = targetElement.parentNode;
	    } while (targetElement);

	    // This is a click outside.
	    // console.log("Clicked outside!");

		stopAll();
	});

})
