<?php
function getGlobals() {
  $lang = isset($_SESSION['lang']) ? $_SESSION['lang'] : 'RUS';
  $words = [
    'о нас' => 'about',
    'услуги' => 'service',
    'наша команда' => 'our team',
    'портфолио' => 'portfolio',
  ];

  return [
    'lang' => $lang,
    'words' => $words,
  ];
}

function t($word) {
  $ar = getGlobals();
  $lang = $ar['lang'];
  $words = $ar['words'];

  if($lang == 'RUS') {
    return $word;
  }
    
  if(isset($words[$word])) {
    return $words[$word];
  }
    
  return 'Перевод фразы не установлен';
}