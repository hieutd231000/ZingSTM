<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;
    protected $table = 'Album';
    protected $fillable = ['artworkPath', 'title'];
    protected $primaryKey = 'albumId';
}
