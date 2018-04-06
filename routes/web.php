<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('dashboard');
});

//Name of the route and the name of the controller
//This will create every HTTP method we need
//Excluding the "show" route
Route::resource('tasks', 'TaskController', ['except' => 'show']);