<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Contact extends Model
{
    use HasFactory, HasUuids;

    protected $table = 'contacts';
    protected $primaryKey = "id";
    protected $fillable = [
        'name',
        'email',
        'no_wa',
        'message',
    ];
}
