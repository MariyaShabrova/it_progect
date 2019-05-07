<?php 
session_start();
$_SESSION['lang'] = 'ENG';
header("Location: index.php");
exit;