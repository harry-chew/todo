<?php
    
     if(!isset($_POST)) return;
     


     $file = fopen("test.txt", "w") or die("Unable to open file!");
     fwrite($file, json_encode($_POST));
     echo json_encode($_POST);