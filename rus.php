<?php 
session_start();
$_SESSION['lang'] = 'RUS';
header("Location: index.php");
exit;