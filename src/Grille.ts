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

    donneCouleur(colonne:number, ligne:number) {
        return Couleur.VIDE;
    }

    static get COLONNES():number {
        return 7;
    }

    static get LIGNES():number {
        return 6;
    }
}