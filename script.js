document.addEventListener('DOMContentLoaded', () => {

	document.querySelectorAll('.string')
		.forEach( function(button) {
			button.onclick = function() {
				var strings = document.querySelectorAll('.string');
				var string_id = button.dataset.string;
				var audios = document.querySelectorAll('audio');

				for (let string of strings) {
					if ( string != this ) {
						string.classList.remove('active');
					}
				}

				if ( this.classList.contains('active') ) {
					this.classList.remove('active');
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
	        alert("You pressed 'space'.");
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

})
