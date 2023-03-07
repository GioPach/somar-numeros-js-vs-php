<?php

if(isset($_POST["n1"]) && isset($_POST["n2"])) {

    $n1 = $_POST["n1"];
    $n2 = $_POST["n2"];

    if(filter_var($n1, FILTER_VALIDATE_FLOAT) && filter_var($n2, FILTER_VALIDATE_FLOAT)) {
        $soma = round($n1 + $n2, 2);
        echo $soma;
    } else {
        echo "Revise os valores!";
    }

}

?>