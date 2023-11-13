<?php

// SÉCURISATION DES DONNÉES

function securisation($champ)
{
	$champ = trim($champ);
	$champ = strip_tags($champ);
	$champ = htmlspecialchars($champ);
	return $champ;
}

?>