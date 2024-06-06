/** @format */

// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', (event) => {
	// Initialize particles.js with the specified configuration
	particlesJS('particles-js', {
		particles: {
			number: {
				value: 100, // Number of particles
				density: {
					enable: true, // Enable density
					value_area: 800, // Density area
				},
			},
			color: {
				value: '#0DE809', // Color of particles
			},
			shape: {
				type: 'circle', // Shape of particles
				stroke: {
					width: 0, // No border stroke
					color: '#000000', // Stroke color
				},
				polygon: {
					nb_sides: 5, // Number of sides for polygon particles
				},
			},
			opacity: {
				value: 0.5, // Opacity of particles
				random: false, // Disable random opacity
				anim: {
					enable: false, // Disable opacity animation
					speed: 1, // Animation speed
					opacity_min: 0.1, // Minimum opacity
					sync: false, // Disable synchronization
				},
			},
			size: {
				value: 3, // Size of particles
				random: true, // Enable random size
				anim: {
					enable: false, // Disable size animation
					speed: 40, // Animation speed
					size_min: 0.1, // Minimum size
					sync: false, // Disable synchronization
				},
			},
			line_linked: {
				enable: true, // Enable linking particles with lines
				distance: 150, // Distance between linked particles
				color: '#0DE809', // Line color
				opacity: 0.4, // Line opacity
				width: 1, // Line width
			},
			move: {
				enable: true, // Enable particle movement
				speed: 6, // Speed of particle movement
				direction: 'none', // Movement direction
				random: false, // Disable random movement
				straight: false, // Disable straight movement
				out_mode: 'out', // Particles will be moved out of canvas
				bounce: false, // Disable bouncing particles
				attract: {
					enable: false, // Disable particle attraction
					rotateX: 600, // Attraction rotation on X-axis
					rotateY: 1200, // Attraction rotation on Y-axis
				},
			},
		},
		interactivity: {
			detect_on: 'canvas', // Detect interactions on canvas
			events: {
				onhover: {
					enable: true, // Enable hover events
					mode: 'repulse', // Repulse particles on hover
				},
				onclick: {
					enable: true, // Enable click events
					mode: 'push', // Push particles on click
				},
				resize: true, // Enable particle resizing
			},
			modes: {
				grab: {
					distance: 400, // Distance for grab mode
					line_linked: {
						opacity: 1, // Line opacity for grab mode
					},
				},
				bubble: {
					distance: 400, // Distance for bubble mode
					size: 40, // Size of bubble
					duration: 2, // Duration of bubble
					opacity: 8, // Opacity of bubble
					speed: 3, // Speed of bubble
				},
				repulse: {
					distance: 200, // Distance for repulse mode
					duration: 0.4, // Duration of repulse
				},
				push: {
					particles_nb: 4, // Number of particles pushed
				},
				remove: {
					particles_nb: 2, // Number of particles removed
				},
			},
		},
		retina_detect: true, // Enable retina detection
	});

	// Placeholder for future backend API integration
	// Function to fetch movie data from an API
	async function fetchMovies() {
		// Fetch movie data from the backend API
		const response = await fetch('API_ENDPOINT/movies');
		const movies = await response.json();
		// Process and display movie data
	}

	// Function to fetch book data from an API
	async function fetchBooks() {
		// Fetch book data from the backend API
		const response = await fetch('API_ENDPOINT/books');
		const books = await response.json();
		// Process and display book data
	}

	// Function to handle user login
	function handleLogin() {
		// Implement login functionality
	}

	// Event listeners for future functionality
	// document.getElementById('loginButton').addEventListener('click', handleLogin);
	// document.getElementById('fetchMoviesButton').addEventListener('click', fetchMovies);
	// document.getElementById('fetchBooksButton').addEventListener('click', fetchBooks);
});
