<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// get all employees
Route::get('employees','EmployeController@getEmployee', );

// get specic employee detail
Route::get('employee/{id}', 'EmployeController@getEmployeeById');

//add employee
Route::post('addEmployee','EmployeController@addEmployee');

//update Employee
Route::put('updateEmployee/{id}', 'EmployeController@updateEmployee');

//delete employee
Route::delete('deleteEmployee/{id}', 'EmployeController@deleteEmployee');  

// get all companies
Route::get('companies','CompanyController@getCompany', );

// get specic company detail
Route::get('employee/{id}', 'EmployeController@getCompanyById');

//add company
Route::post('addCompany','CompanyController@addCompany');

//update company
Route::put('updateCompany/{id}', 'CompanyController@updateCompany');

//delete company
Route::delete('deleteCompany/{id}', 'CompanyController@deleteCompany');  