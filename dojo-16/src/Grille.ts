/// <reference path="Couleur.ts" />

class Grille {
    private grille:Couleur[][] = [];

    constructor() {
        for (var ligne = 0; ligne < Grille.LIGNES; ligne++) {
            this.grille[ligne] = [];
            for (var colonne = 0; colonne < Grille.COLONNES; colonne++) {
                this.grille[ligne][colonne] = Couleur.VIDE;
            }
        }
    }

    donneCouleur(colonne:number, ligne:number):Couleur {
        return this.grille[ligne][colonne];
    }

    metCouleur(colonne:number, ligne:number, couleur:Couleur) {
        this.grille[0][0] = Couleur.JAUNE;
    }

    static get COLONNES():number {
        return 7;
    }

    static get LIGNES():number {
        return 6;
    }
}