# Kata TypeScript

Le but de ce dojo est de programmer une application de Puissance 4 en typescript

**Règle du Puissance 4 :**
* se joue à deux en faisant tomber chacun son tour un jeton de sa couleur dans une grille
* le joueur qui arrive à aligner une ligne de quatre jetons (horizontale, verticale, ou diagonale) gagne la partie

Un Puissance 4 est défini par les classes ci-dessous :

## 1/ Grille

Une **Grille** de Puissance 4
* donne l’état de ses 42 cellules (7 colonnes de 6 rangées)
* accepte jusqu’à 6 jetons dans une colonne
* se vide
* se représente sous forme de texte

## 2/ Arbitre

Un **Arbitre** de Puissance 4
* dit à qui le tour de jouer (jaune ou rouge)
 * Jaune commence la partie
* entre le coup du joueur courant 
* sait si un joueur a gagné
 * ligne de 4 jetons de même couleur
 * horizontale, verticale, diagonale vers le haut, diagonale vers le bas
* sait si la partie est nulle (grille est remplie, aucune ligne gagnante) 

## 3/ Application

Une **Application** Puissance 4
* affiche la grille sur la console à chaque tour
* affiche à qui c’est le tour de jouer
* accepte à la console le numéro de colonne à jouer
* s’arrête lorsque la partie est gagnée ou nulle
* affiche le résultat de la partie

## 4/ Partie

Une **Partie** de Puissance 4
* est initialisée avec un joueur jaune (nom) et son statut est: **EN ATTENTE** (d’un joueur rouge)
* invite un joueur rouge (nom) et son statut devient: **EN COURS**
* donne le nom de ses joueurs
* sait à quel joueur c’est le tour de jouer
* accepte le coup du joueur dont c’est le tour
* refuse le coup du joueur dont ce n’est pas le tour
* après un coup accepté, sait si la partie est **GAGNEE** (et par quel joueur), ou si la partie est **NULLE**
* après un certain délai, déclare la partie abandonnée par le joueur dont c’est le tour si ce joueur n’a toujours pas joué, et donc **GAGNEE** par son adversaire.



 
