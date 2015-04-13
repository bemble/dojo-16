/// <reference path="../references/tsd.d.ts" />
/// <reference path="../src/Couleur.ts" />
/// <reference path="../src/Grille.ts" />

describe('Grille', () => {
    var grille:Grille;

    beforeEach(() => {
        grille = new Grille();
    });

    it('par defaut la grille est vide', () => {
        for (var colonne = 0; colonne < Grille.COLONNES; colonne++) {
            for (var ligne = 0; ligne < Grille.LIGNES; ligne++) {
                var couleur = grille.donneCouleur(colonne, ligne);
                expect(couleur).toBe(Couleur.VIDE);
            }
        }
    });
});