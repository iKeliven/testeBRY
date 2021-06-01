<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    public $fillable = ['name', 'cnpj', 'adress', 'complement', 'number'];
}
