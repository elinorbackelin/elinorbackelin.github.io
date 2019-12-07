Vue.component('slide', {
	props: ['slide'],
	template: '<div class="slide"><h2>{{ slide.title }}</h2><p>{{ slide.text }}</p></div>',
	computed: {
		classActive: function () {
			return {
				active: this.id == slideActive
			}
		}
	}
})

var slider = new Vue({
	el: 'main',
	data: {
		slideActive: 0,
		slides: [
			{ id: 0, title: 'Slide 1', text: 'En text till första slidern', url: './img/dummy-1.jpg' },
			{ id: 1, title: 'Slide 2', text: 'En text till andra slidern', url: './img/dummy-2.jpg' },
			{ id: 2, title: 'Slide 3', text: 'En text till tredje slidern', url: './img/dummy-3.jpg' },
			{ id: 3, title: 'Slide 4', text: 'En text till fjärde slidern', url: './img/dummy-4.jpg' }
		]
	},
	methods: {
		slideLeft: function (event) {
			
		},
		slideRight: function (event) {
			
		}
	}
})