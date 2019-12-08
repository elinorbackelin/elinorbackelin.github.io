Vue.component('slide', {
	props: ['slide'],
	template: '<div class="slide"><div class="col-a"><img v-bind:src="slide.image_url" alt="" /></div><div class="col-b"><div class="content"><h2>{{ slide.title }}</h2><p>{{ slide.text }}</p><a>{{ slide.link_text }}</a></div></div></div>',
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
		slideDirection: 0,
		slides: [
			{ id: 0, title: 'Kreta', text: 'Välkommen till Greklands största ö! Det finns många anledningar till att boka en resa till Kreta, däribland öns fina stränder, historiska sevärdheter, bildsköna natur och bra hotell för alla smaker.', image_url: './img/dummy-1.jpg', link_text: 'Läs mer om Kreta', link_url: 'https://www.ving.se/grekland/kreta' },
			{ id: 1, title: 'Kos', text: 'På en resa till Kos är möjligheterna många. Oavsett vad som lockar dig mest finns det gott om fina stränder, historiska sevärdheter, shopping, restauranger och barer att välja bland på ön.', image_url: './img/dummy-2.jpg', link_text: 'Läs mer om Kos', link_url: 'https://www.ving.se/grekland/kos' },
			{ id: 2, title: 'Rhodos', text: 'På en resa till Rhodos finns mycket att upptäcka, bland annat en medeltida stadskärna och ett livligt nattliv i öns huvudstad, riktigt bra hotell, lokala små byar och många restauranger.', image_url: './img/dummy-3.jpg', link_text: 'Läs mer om Rhodos', link_url: 'https://www.ving.se/grekland/rhodos' },
			{ id: 3, title: 'Korfu', text: 'På Korfu väntar dig vacker natur, sevärdheter, lokala små byar och högklassigt strandliv. Nu kan du även kombinera din resa till Korfu med grannlandet Albanien, en av sommarens nyheter.', image_url: './img/dummy-4.jpg', link_text: 'Läs mer om Korfu', link_url: 'https://www.ving.se/grekland/korfu' }
		]
	},
	methods: {
		slideLeft: function (event) {
			if (this.slideActive > 0) {
				this.slideDirection = -1; // Left
				this.slideActive--;
			}
		},
		slideRight: function (event) {
			if (this.slideActive < this.slides.length - 1) {
				this.slideDirection = 1; // Right
				this.slideActive++;
			}
		}
	}
})