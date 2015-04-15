/// <reference path="../references/tsd.d.ts" />
/// <reference path="../src/Couleur.ts" />
/// <reference path="../src/Grille.ts" />

describe('Grille', () => {
    var grille:Grille;

    beforeEach(() => {
        grille = new Grille();
    });

    it('definit le nombre de lignes de la grille', () => {
        expect(Grille.LIGNES).toBeDefined();
    });

    it('definit le nombre de colonnes de la grille', () => {
        expect(Grille.COLONNES).toBeDefined();
    });

    it('par defaut la grille est vide', () => {
        for (var colonne = 0; colonne < Grille.COLONNES; colonne++) {
            for (var ligne = 0; ligne < Grille.LIGNES; ligne++) {
                var couleur = grille.donneCouleur(colonne, ligne);
                expect(couleur).toBe(Couleur.VIDE);
            }
        }
    });

    it('donne la couleur JAUNE dans une case quand on y ajoute un jeton JAUNE', () => {
        grille.metCouleur(0, 0, Couleur.JAUNE);
        var couleur = grille.donneCouleur(0, 0);

        expect(couleur).toEqual(Couleur.JAUNE);
    })
});