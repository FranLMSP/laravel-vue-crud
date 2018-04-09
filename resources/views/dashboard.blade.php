@extends('app')

@section('content')

<div id="crud" class="row">
    <div class="col-xs-12">
        <h1 class="page-header">Laravue CRUD</h1>
    </div>

    <div class="col-sm-7">
        <a href="#" class="btn btn-primary pull-right">New Task</a>
        <table class="table table-hover table-sprite">
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
                <tr>
                    <td width="10px">1</td>
                    <td>First task</td>
                    <td width="10px">
                        <a class="btn btn-warning btn-sm">Edit</a>
                    </td>
                    <td width="10px">
                        <a class="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="col-sm-5">
        <pre>
            @{{ $data }}
        </pre>
    </div>

</div>

@endsection