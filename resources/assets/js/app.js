const vm = new Vue({
	el: '#crud',
	created: function() {
		this.getKeeps();
	},
	data: {
		keeps: []
	},
	methods: {
		getKeeps: function() {
			const url = 'tasks';
			axios.get(url).then( response => {
				this.keeps = response.data;
			}).catch(error => {
				console.log(error);
			});
		}
	}
});