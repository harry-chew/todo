<?php
    
     if(!isset($_POST)) return;
     
     $date = date("d-m-Y");
     $file = fopen($date . ".txt", "w") or die("Unable to open file!");
     
     $fileName = $date . ".txt";
     fwrite($file, $date . "\n");
     foreach($_POST as $d) {
          fwrite($file, $d . "\n");
     }

     fclose($file);
     
     echo json_encode($_POST);