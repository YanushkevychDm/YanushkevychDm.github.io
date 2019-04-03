<?php
if(isset($_POST['submit'])) {

$myemail = "onswarm@gmail.com"; 
$subject = $_POST['subject'];
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$headers = "From:Contact Form <$myemail>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";

echo "Thank you!";
echo "<a href=\"http://webswarm.pp.ua/\"></a>";

mail($myemail, $subject, $message, $headers);

} else {

echo "An error occurred during the submission of your message";

}
?>
<a href="http://webswarm.pp.ua/"></a>