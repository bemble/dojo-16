/// <reference path="../references/tsd.d.ts" />
/// <reference path="../src/Couleur.ts" />

describe('Couleur', () => {
    it('definit les couleurs disponibles avec des valeurs differentes', () => {
        expect(Couleur.VIDE).toBeDefined();
        expect(Couleur.JAUNE).toBeDefined();
        expect(Couleur.ROUGE).toBeDefined();

        expect(Couleur.VIDE).not.toEqual(Couleur.JAUNE);
        expect(Couleur.VIDE).not.toEqual(Couleur.ROUGE);
        expect(Couleur.JAUNE).not.toEqual(Couleur.ROUGE);
    });
}) ;