<?php
$lang = isset($_SESSION['lang']) ? $_SESSION['lang'] : 'RUS';
$words = [
'о нас' => 'about',
'услуги' => 'service',
'наша команда' => 'our team',
'портфолио' => 'portfolio',
];

function t($word) {
    if($lang == 'RUS') {
    return $word;
    }
    
    if(isset($words[$word])) {
    return $words[$word];
    }
    
    return 'Перевод фразы не установлен';
    }