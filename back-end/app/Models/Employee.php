<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    public $timestamps = false;
    public $fillable = ['name', 'cpf', 'email', 'adress', 'complement', 'number','password'];
}
