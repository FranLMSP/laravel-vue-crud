<form method="POST" v-on:submit.prevent="createKeep">
    <div class="modal fade" id="create">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>New task</h4>
                    <button type="button" class="close pull-right" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <label for="keep">Create Task</label>
                    <input type="text" name="keep" class="form-control" v-model="newKeep">
                    <span v-for="error in errors" class="text-danger">@{{ error }}</span>
                </div>
                <div class="modal-footer">
                    <input type="submit" class="btn btn-primary" value="Save" />
                </div>
            </div>
        </div>
    </div>
</form>