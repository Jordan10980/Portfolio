<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    
    <?php
    if(isset($_POST['message'])){
        $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: ' . $_POST['Adr_mail'] . "\r\n";

        $message = '<h2>Message envoyé depuis la page Contact de mon site jordandohou.fr</h2>
        <p><b>Nom : </b>' . $_POST['nom'] . '<br>
		<b>Prénom : </b>' . $_POST['prenom'] . '<br>
        <b>Email : </b>' . $_POST['Adr_mail'] . '<br><br>
        <b>Message : </b>' . $_POST['message'] . '</p>';

        $retour = mail('contact@jordandohou.fr', 'Envoi jordandohou.fr', $message, $entete);
        if($retour) {
            echo '<p>Votre message a bien été envoyé.</p>';
        }
    }
    ?>
</body>
</html>