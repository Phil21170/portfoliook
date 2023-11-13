<?php
// Traitement du formulaire de contact
// print '<pre>';
// print_r($_POST);
// print '</pre>';

require 'lib/utilities.php';

$nom = '';
$email = '';
$telephone = '';
$sujet = '';
$message = '';
$rgpd = 0;
$systemMsg = '';
$envoi = false;
if (!empty($_POST)) {
    // Récupération des données avec sécurisation
    $nom = securisation($_POST['nom']);
    $email = securisation($_POST['email']);
    $telephone = securisation($_POST['telephone']);
    $sujet = securisation($_POST['sujet']);
    $message = securisation($_POST['message']);
    if (isset($_POST['rgpd'])) {
        $rgpd = 1;
    }
    // Suppression des caractères non autorisés
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    // Conversion de l'adresse email en minuscules
    $email = mb_strtolower($email);
    // Tester si l'email est valide (renvoie false si invalide)
    $valid_email = filter_var($email, FILTER_VALIDATE_EMAIL);
    if ($nom !== '' && $email !== '' && $telephone !== '' && $valid_email && $sujet !== '' && $message !== '' && $rgpd === 1) {
        require 'lib/phpmailer.php';
        if ($envoi) {
            $systemMsg = '<p class="success">Votre message a bien été envoyé. Je vous répondrai dès que possible.</p>';
            // Réinitialiser le formulaire
            $nom = '';
            $email = '';
            $telephone = '';
            $sujet = '';
            $message = '';
            $rgpd = 0;
        }
        else {
            $systemMsg = '<p class="error">Votre message n\'a pas pu être envoyé</p>';
        }
    }
    else {
        $systemMsg = '<p class="error">Veuillez rentrer tous les champs requis</p>';
    }
}
?>
<?php require 'includes/header.php' ?>
<main class="container">
    <h1>Pour me joindre</h1>
    <section id="contact" class="container grid contactgrid"> 
        <aside>
            <h2>Où me trouver ?</h2>
            <p>Besoin d'un <strong>développeur web</strong> junior ? N'hésitez pas à me contacter par téléphone ou via le formulaire de contact.</p>
            <address>
                <div class="name">
                    <i class="fa-solid fa-circle-user"></i> 
                    <p>Philippe VIGNON<br>
                </div>
                <div class="adresse">
                    <i class="fa-solid fa-house"></i> 
                    <p>10B rue des Oies, 21170 ECHENON</p>
                </div>
                <div class="phone">
                    <i class="fa-solid fa-phone"></i>
                    <p><a href="tel:+33624738551"> 06 24 73 85 51</a></p>
                </div>
                <div class="linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                    <p><a href="https://www.linkedin.com/in/philippe-vignon21" target="_blank"> Linkedin</a></p>
                </div>
                <img src="img/philippe-vignon1.jpg" alt="Philippe Vignon développeur web junior">
            </address>
        </aside>
        <form method="post">
            <h2>Formulaire de contact</h2>
            <p>(*) Veuillez remplir tous les champs.</p>
            <?php if ($systemMsg !=='') {echo $systemMsg;} ?>
            <div class="form-row">
                <input id="nom" name="nom" type="text" value="<?= $nom ?>" placeholder="Nom" maxlength="60" required>
            </div>
            <div class="form-row">
                <input id="email" name="email" type="email" value="<?= $email ?>" placeholder="Adresse email" maxlength="100" required>
            </div>
            <div class="form-row">
                <input id="telephone" name="telephone" type="tel" value="<?= $telephone ?>" placeholder="Numéro de téléphone" maxlength="20" required>
            </div>
            <div class="form-row">
                <input id="sujet" name="sujet" type="text" value="<?= $sujet ?>" placeholder="Sujet de votre demande" maxlength="80" required>
            </div>
            <div class="form-row">
                <textarea id="message" name="message" rows="6" cols="40" placeholder="Entrez ici votre message" maxlength="500" required><?= $message ?></textarea>
            </div>
            <div class="form-row">
                <input type="checkbox" name="rgpd" id="rgpd" value="1" required>
                <label for="rgpd">(*) En soumettant ce formulaire, j'accepte <a href="politique-de-confidentialite.php"> la politique de confidentialité</a> du site.</label>
            </div>
            <button class="btn" type="submit"><i class="fa-solid fa-paper-plane"></i> Envoyer</button>
        </form>
    </section>
</main>                
<?php require 'includes/footer.php' ?> 
<script src="js/maincontact.js"></script>  
</body>
</html>