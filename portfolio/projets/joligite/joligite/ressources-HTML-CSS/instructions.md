# INSTRUCTIONS

* Le développement se fait en mobile first, tout en ayant bien en vue le layout du desktop, afin de pouvoir structurer correctement le code HTML.
* Utilisation de la normalize.css obligatoire

# RESSOURCES EXTERNES
* fontawesome : version 6
* Police Google : Sunflower

# CODE HTML
* La structuration doit être correcte et contenir les balises sémantiques header, nav, main, footer, section, article et aside. L'utilisation de div doit être limitée autant que possible.
* Les liens de la navigation doivent être écrits normalement, le passage en majuscules doit se faire uniquement en utilisant le CSS (pénalité appliquée si pas respecté !)
* Le code doit être valide au validateur W3C. Il ne doit comporter aucune erreur, ni aucun avertissement si la structure est correcte.

# LES ICÔNES FONT AWESOME
* shower
* bath
* toilet
* tv
* person-skiing
* spa
* map-marker-alt
* phone
* envelope

# CODE CSS
* Application de box-sizing = border-box sur tous les éléments
* Couleur primaire : #87C442
* Couleur secondaire : #41823B
* Le code doit être valide au validateur W3C.
## Points de rupture (media queries)
- La mise en page par défaut est réalisée pour le mobile.
- Tablette : largeur minimum de 768px
- Desktop : largeur minimum de 1024px
!!! Le non respect de l'approche mobile-first sera pénalisé.
## Corps de la page :
- Police : Sunflower (Google Font)
- Taille par défaut : 1.2rem
- Interlignage : 1.5em
- Graisse : 300
- Couleur du texte : #222
## Classe container : 
Celle-ci est utilisée pour limiter la largeur des contenus.
- Largeur : 88%
- Largeur maximale : 1200px
- Appliquer une marge équivalente des 2 côtés
## Images
- Les images doivent être adaptées au responsive design et ne jamais déborder de leur parent.
## Figure
- Supprimer les marges par défaut et centrer
## Hyperliens :
- Supprimer le soulignement par défaut
- Couleur : dodgerblue, au survol darkblue
## Ligne horizontale :
- Appliquer une bordure pleine de 1px
## Titres
- Graisse : 500
- Alignement : centré
- Interlignage : normal
- Taille du texte : 3rem (niveau 1), 3.2rem (niveau1 desktop), 2.5rem (niveau 2) et 2rem (niveau 3)
- Couleur principale pour niveaux 2 et 3, sauf sur le "hero".
## Navigation principale
- Par défaut, les éléments s'affichent les uns en-dessous des autres, sauf sur le desktop où la navigation est passée en flex.
- Les hyperliens s'affichent en majuscules via le CSS.
- Alignement : centré
- Le changement de couleur lors du survol est progressif, en utilisant les transitions.
- Couleur par défaut : couleur primaire
- Couleur au survol : couleur secondaire
- Au survol du logo : agrandir d'un facteur de 1.2
## Sections
- Appliquer un padding vertical de 2rem
## Section hero
- Appliquer l'image de fond ; l'image par défaut est joli-gite.jpg, sauf pour le desktop
- Le contenu textuel est sur fond noir, avec une transparence de 0.3, centré, avec un padding de 1%/2%.
- La couleur du texte est blanc
- La taille du paragraphe est de 1.5rem
## Section gite
- Appliquer un dégradé linéaire de la couleur #DEFABB vers #F6FDED
## Section chambres
- Appliquer une bordure avec la couleur primaire et un arrondi de 5%
- Appliquer une marge interne + une marge inférieure de 1rem
- Centrer le contenu
- Appliquer le flex à partir de la tablette, avec une base de 31% pour chaque article
- Le tarif est affiché en italique (via le CSS) et le prix dans la couleur primaire.
## Section environs
- Appliquer un dégradé linéaire de la couleur bath
- Appliquer le flex à partir de la tablette, avec une base de 48% pour chaque article
## Section contact
- Appliquer le flex à partir de la tablette, avec une base de 48% pour chaque partie
- Le plan doit être en largeur 100% et hauteur 400px
## Pied de page
- Couleur de fond : couleur secondaire
- Centrer le texte
## Le formulaire de contact
- Par défaut, le label s'affiche sur toute la largeur disponible, sauf celui qui suit la case RGPD.
- Sur desktop, le label est affiché à côté de la zone de saisie, aligné à droite, en utilisant la technique du grid. Le label occupe 1/3 de la largeur.
- La bordure des zones de saisies est une bordure pleine, de 1px et de couleur #DDD. Appliquer un léger arrondi de 5px.
- Bouton : couleur de fond = couleur primaire, modifier le curseur pour afficher la petite main au survol.