<?php
    
     if(!isset($_POST)) return;
     
     $date = date("d-m-Y");
     $file = fopen($date . ".txt", "w") or die("Unable to open file!");
     
     fwrite($file, $date . "\n");
     foreach($_POST as $d) {
          fwrite($file, $d . "\n");
     }
     //fwrite($file, json_encode($_POST));
     echo json_encode($_POST);