var urlUsers = 'https://jsonplaceholder.typicode.com/users';
const vm = new Vue({
	el: '#main',
	created: function() {
		this.getUsers();
	},
	data: {
		lists: []
	},
	methods: {
		getUsers: function() {
			axios.get(urlUsers).then(response => {
				this.lists = response.data
			});
		}
	}
});

console.log(vm);