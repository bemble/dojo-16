# Kata TypeScript

Le but de ce dojo est de programmer une application de Puissance 4 en Typescript.
__Objectifs du dojo :__

* travailler TDD
* découvrir Typescript
* faire un dojo en JS sans utiliser console.log

## Prérequis

Il vous faut avoir installé et fonctionnel :

* node
* les paquets node suivant en global : typescript grunt-cli karma-cli 

        npm install -g typescript grunt-cli karma-cli

 
## Exécution

__Compiler et lancer les tests à chaque modif :__

Une tâche grunt a été faite pour lancer la compilation et exécuter les tests à chaque modification.
Il suffit donc de lancer :

    grunt watch
    
__Sinon :__

Vous pouvez compiler via le plugin de votre IDE ou à la main et lancer les tests comme ceci :

    karma start
    
Les tests seront ainsi exécutés après chaque génération de fichier Javascript.

## Règle du Puissance 4

* se joue à deux en faisant tomber chacun son tour un jeton de sa couleur dans une grille (rouge ou jaune)
* le joueur qui arrive à aligner une ligne de quatre jetons (horizontale, verticale, ou diagonale) gagne la partie

Un Puissance 4 est défini par les classes ci-dessous :

### 1/ Grille

* donne l’état de ses 42 cellules (7 colonnes de 6 rangées)
* accepte jusqu’à 6 jetons dans une colonne
* se vide **_- facultatif_**
* se représente sous forme de texte **_- facultatif_**

### 2/ Arbitre

* dit à qui le tour de jouer (jaune ou rouge), jaune commence la partie
* entre le coup du joueur courant 
* sait si un joueur a gagné
 * ligne de 4 jetons de même couleur
 * horizontale, verticale, diagonale vers le haut, diagonale vers le bas **_- facultatif_**
* sait si la partie est nulle (grille est remplie, aucune ligne gagnante)

### 3/ Application

* affiche la grille sur la console à chaque tour **_- facultatif_**
* affiche à qui est-ce le tour de jouer
* accepte à la console le numéro de colonne à jouer
* s’arrête lorsque la partie est gagnée ou nulle **_- facultatif_**
* affiche le résultat de la partie **_- facultatif_**

### 4/ Partie  _- facultatif_

* est initialisée avec un joueur jaune (nom) et son statut est: **EN ATTENTE** (d’un joueur rouge)
* invite un joueur rouge (nom) et son statut devient: **EN COURS**
* donne le nom de ses joueurs
* sait à quel joueur c’est le tour de jouer
* accepte le coup du joueur dont c’est le tour
* refuse le coup du joueur dont ce n’est pas le tour
* après un coup accepté, sait si la partie est **GAGNEE** (et par quel joueur), ou si la partie est **NULLE**
* après un certain délai, déclare la partie abandonnée par le joueur dont c’est le tour si ce joueur n’a toujours pas joué, et donc **GAGNEE** par son adversaire.
