document.addEventListener('DOMContentLoaded', () => {

	document.querySelectorAll('.string')
		.forEach( function(button) {
			button.onclick = function() {
				console.log('clicked');
				var strings = document.querySelectorAll('.string');
				for (let string of strings) {
					if ( string != this ) {
						string.classList.remove('active');
					}
				}
				if ( this.classList.contains('active') ) {
					this.classList.remove('active');
				} else {
					this.classList.add('active');
				}
			}
		}
	)
})
