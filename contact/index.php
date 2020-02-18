<?php
if(!empty($_POST["send"])) {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$description = $_POST["description"];
	$toEmail = "yaya.lu.01@gmail.com"; // temporary testing email
    $mailHeaders = "From: " . $name . "<". $email .">\r\n";
    $subject = "Question from: " . $name;
    
	if(mail($toEmail, $subject, $description, $mailHeaders)) {
	    $message = "Your contact information is received successfully.";
	    $type = "success";
	}
}
require_once "index.html";
?>