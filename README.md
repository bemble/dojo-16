# Kata TypeScript

Le but de ce dojo est de programmer une application de Puissance 4 en typescript

**R�gle du Puissance 4 :**
* se joue � deux en faisant tomber chacun son tour un jeton de sa couleur dans une grille
* le joueur qui arrive � aligner une ligne de quatre jetons (horizontale, verticale, ou diagonale) gagne la partie


## 1/ Grille

Une **Grille** de Puissance 4
* donne l��tat de ses 42 cellules (7 colonnes de 6 rang�es)
* accepte jusqu�� 6 jetons dans une colonne
* se vide
* se repr�sente sous forme de texte

## 2/ Arbitre

Un **Arbitre** de Puissance 4
* dit � qui le tour de jouer (jaune ou rouge)
** Jaune commence la partie
* entre le coup du joueur courant 
* sait si un joueur a gagn�
** ligne de 4 jetons de m�me couleur
** horizontale, verticale, diagonale vers le haut, diagonale vers le bas
* sait si la partie est nulle (grille est remplie, aucune ligne gagnante) 

## 3/ Application

Une **Application** Puissance 4
* affiche la grille sur la console � chaque tour
* affiche � qui c�est le tour de jouer
* accepte � la console le num�ro de colonne � jouer
* s�arr�te lorsque la partie est gagn�e ou nulle
* affiche le r�sultat de la partie

## 4/ Partie

Une **Partie** de Puissance 4
* est initialis�e avec un joueur jaune (nom) et son statut est: EN ATTENTE (d�un joueur rouge)
* invite un joueur rouge (nom) et son statut devient: EN COURS
* donne le nom de ses joueurs
* sait � quel joueur c�est le tour de jouer
* accepte le coup du joueur dont c�est le tour
* refuse le coup du joueur dont ce n�est pas le tour
* apr�s un coup accept�, sait si la partie est GAGNEE (et par quel joueur, ou si la partie est NULLE
* apr�s un certain d�lai, d�clare la partie abandonn�e par le joueur dont c�est le tour si ce joueur n�a toujours pas jou�, et donc GAGNEE par son adversaire.



 
