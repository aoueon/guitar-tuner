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
})
