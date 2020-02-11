<?php 
$name = $_POST['Name'];
$email = $_POST['Email'];
$phone = $_POST['Phone'];
$description = $_POST['Description'];
$formcontent="From: $name \n Phone: $phone \n Message: $description";
$recipient = "yaya.lu.01@gmail.com";      //temporary recipient for testing
$subject = "Contact request from ";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>