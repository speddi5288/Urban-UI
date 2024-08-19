<?php
/**
 * php file part for contact form validate
 */

// Capture the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create the email headers
$from = "From: $name<$email>\r\nReturn-path: $email";

// Subject of the email
$subject = "Urban UI";

// Send the email
mail("urbanuiagency@gmail.com", $subject, $message, $from);

// Optional: Provide feedback to the user (e.g., a confirmation message)
echo "Thank you for contacting us!";
?>
