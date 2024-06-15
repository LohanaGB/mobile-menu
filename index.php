<?php

$route =  explode("/", $_GET['url'] ?? 'login');

if (file_exists("pages/{$route[0]}.php")){
    include "pages/{$route[0]}.php";
}else {
    include "pages/inicio.php";
}

?>