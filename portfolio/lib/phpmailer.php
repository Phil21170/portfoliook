<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Classe de traitement des exceptions et des erreurs
require 'vendor/phpmailer/src/Exception.php';
// Classe PHPMailer
require 'vendor/phpmailer/src/PHPMailer.php';
// Classe SMTP nécessaire pour établir la connexion avec un serveur SMTP
require 'vendor/phpmailer/src/SMTP.php';
//var_dump($email);
//var_dump($nom);
// Création d'une nouvelle instance de la classe PHPMailer
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';
$mail->isSMTP();
$mail->Host = 'smtp-philstyle.alwaysdata.net';
$mail->Port = '465';
$mail->Username = 'philstyle@alwaysdata.net';
$mail->Password = 'Poupouf21170**';
$mail->SMTPAuth = true;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Accepter SSL
$mail->setFrom($email, $nom);
$mail->isHTML(true);
$mail->addAddress('pvignon9@gmail.com', 'Philippe Vignon');
// $mail->addCC('christiane@consultantweb.eu', 'Christiane Dumont'); # Envoyer une copie
$mail->Subject = $sujet;
$mailBody = '<p>Vous avez reçu un nouveau message via le formulaire de contact du site '.$_SERVER["HTTP_HOST"].'.</p>';
$mailBody .= nl2br($message);
$mailBody .= '<p>E-mail : '.$email.'</p>';
$mailBody .= '<p>Téléphone : '.$telephone.'</p>';
$mailBody .= '<p>Acceptation du RGPD : ' . $rgpd . '</p>';
$mail->Body = $mailBody;
$mail->AltBody = strip_tags($mailBody);
if ($mail->send()){
    $envoi = true;
}
?>