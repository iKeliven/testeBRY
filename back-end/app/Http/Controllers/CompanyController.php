<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;
;

class CompanyController extends Controller
{
    public function getCompany(){
        return response()->json(Company::all(), 200);
    }
    //get specic company detail
    public function getCompanyById($id){
        $company = Company::find($id);
        //checando
        if (is_null($company)) {
            return response()->json(['message' => 'Empresa não encontrada', 404]);
        }
        return response()-> json($company::find($id), 200);
    }
    //add company
    public function addCompany(Request $request){
        $company = Company::create($request->all());
        return response($company, 201);
    }
    //update company
    public function updateCompany(Request $request, $id){
        $company = Company::find($id);
        if (is_null($company)) {
            return response()->json(['message' => 'Empresa não encontrada', 404]);
        }
        $company -> update($request->all());
        return response($company, 201);
    }
    //delete company
    public function deleteCompany(Request $request, $id){
        $company = Company::find($id);
        if (is_null($company)) {
            return response()->json(['message' => 'Empresa não encontrada', 404]);
        }
        $company -> delete();
        return response() -> json(null, 204);
    }
}
