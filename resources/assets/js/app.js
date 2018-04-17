const vm = new Vue({
	el: '#crud',
	created: function() {
		this.getKeeps();
	},
	data: {
		offset: 5,
		keeps: [],
		newKeep: '',
		pagination: {
			total        :0,
			current_page :0,
			per_page     :0,
			last_page    :0,
			from         :0,
			to           :0
		},
		fillKeep: {id: '', keep: ''},
		errors: []
	},
	computed: {
		isActived: function() {
			return this.pagination.current_page;
		},
		pagesNumber: function() {
			if (!this.pagination.to){
				return [];
			}

			let from = this.pagination.current_page - this.offset;
			if(from < 1){
				from = 1;
			}

			let to = from + (this.offset * 2);
			if(to >= this.pagination.last_page){
				to = this.pagination.last_page;
			}

			let pagesArray = [];
			while(from <= to){
				pagesArray.push(from);
				from++;
			}

			return pagesArray;
		}
	},
	methods: {
		getKeeps: function(page) {
			const url = 'tasks?page='+page;
			axios.get(url).then( response => {
				this.keeps = response.data.tasks.data;
				this.pagination = response.data.pagination;
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
		},
		editKeep: function(keep) {
			this.fillKeep.id   = keep.id;
			this.fillKeep.keep = keep.keep;

			$('#edit').modal('show');
		},
		updateKeep: function(id) {
			const url = 'tasks/' + id;

			axios.put(url, this.fillKeep).then( response => {
				this.getKeeps();
				this.fillKeep = {
					id: '',
					keep: ''
				};
				this.errors = [];

				$('#edit').modal('hide');
				toastr.success('Editet correctly');
			}).catch( error => {
				this.errors = error.response.data;
			});
		},
		changePage: function(page){
			this.pagination.current_page = page;
			this.getKeeps(page);
		}
	}
});