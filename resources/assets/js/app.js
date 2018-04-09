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
				alert('Error listing the tasks!');
				console.log(error);
			});
		},
		deleteKeep: function(keep) {
			const url = 'tasks/' + keep.id;
			axios.delete(url).then( response => {
				alert('Deleted correctly!');
				this.getKeeps();
			}).catch( error => {
				alert('Error deleting the task!');
				console.log(error);
			})
		}
	}
});