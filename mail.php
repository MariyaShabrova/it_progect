<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mailer/Exception.php';
require 'mailer/PHPMailer.php';
require 'mailer/SMTP.php';



// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['subject']) || empty($_POST['body']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}
$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['body']));

$mail = new PHPMailer(true);

$userName = 'Mariya';
$userMail = '5107724@mail.ru';
$password = '*******';

try {
  $mail->isSMTP();                                            // Set mailer to use SMTP
  $mail->SMTPDebug = 2;
  $mail->Host       = 'ssl://smtp.mail.ru';  // Specify main and backup SMTP servers
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = $userMail;                     // SMTP username
  $mail->Password   = $password ;                               // SMTP password
  $mail->SMTPSecure = 'SSL'; //'tls';                                  // Enable TLS encryption, `ssl` also accepted
  $mail->Port       = '465';//587;                                    // TCP port to connect to
  $mail->CharSet = 'UTF-8';

  $mail->setFrom($userMail, $userName);
  $mail->addAddress($userMail, $userName);     // Add a recipient
  $mail->Subject = $subject;
  $mail->Body    = "Обратная связь.\n\n"."Детали:\nИмя: $name\n\nEmail: $email\n\nСообщение:\n$message";
 $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}