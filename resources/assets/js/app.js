const vm = new Vue({
	el: '#crud',
	created: function() {
		this.getKeeps();
	},
	data: {
		keeps: [],
		newKeep: '',
		errors: []
	},
	methods: {
		getKeeps: function() {
			const url = 'tasks';
			axios.get(url).then( response => {
				this.keeps = response.data;
			}).catch(error => {
				toastr.error('Error listing the tasks!');
				console.log(error);
			});
		},
		deleteKeep: function(keep) {
			const url = 'tasks/' + keep.id;
			axios.delete(url).then( response => {
				this.getKeeps();
				toastr.success('Deleted correctly!');
			}).catch( error => {
				console.log(error);
				toastr.error('Error deleting the task!');
			})
		},
		createKeep: function(){
			const url = 'tasks';
			axios.post(url, {
				keep: this.newKeep
			}).then(response => {
				this.getKeeps();
				this.newKeep = '';
				this.errors = [];
				$('#create').modal('hide');
				toastr.success('Task created correctly');
			}).catch(error => {
				this.errors = error.response.data
			})
		}
	}
});