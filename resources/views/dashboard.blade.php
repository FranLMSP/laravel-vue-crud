@extends('app')

@section('content')

<div id="crud" class="row">
    <div class="col-xs-12">
        <h1 class="page-header">Laravue CRUD</h1>
    </div>

    <div class="col-sm-7">
        <a href="#" class="btn btn-primary pull-right" data-toggle="modal" data-target="#create">New Task</a>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th colspan="2">
                        &nbsp;
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="keep in keeps">
                    <td width="10px">@{{ keep.id }}</td>
                    <td>@{{ keep.keep }}</td>
                    <td width="10px">
                        <a class="btn btn-warning btn-sm" v-on:click.prevent="editKeep(keep)">Edit</a>
                    </td>
                    <td width="10px">
                        <a class="btn btn-danger btn-sm" v-on:click.prevent="deleteKeep(keep)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <div>
            @include('create')
            @include('edit')
        </div>
    </div>

    <div class="col-sm-5">
        <pre>
            @{{ $data }}
        </pre>
    </div>

</div>

@endsection