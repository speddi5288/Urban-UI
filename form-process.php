<?php
/**
 * php file part for contact form validate
 *
 * @package Brome - Responsive Portfolio Creative Template
 */
    $name=$_POST['name'];
    $email=$_POST['email'];
    $message=$_POST['message'];		
	$from="From: $name<$email>\r\nReturn-path: $email";
	$subject="Urban UI";
	mail("urbanuiagency@gmail.com", $subject, $message, $from)
?>
   

