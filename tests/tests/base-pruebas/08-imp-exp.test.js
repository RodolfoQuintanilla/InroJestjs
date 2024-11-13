import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('pruebas en 08-imp-exp.js', () => {
    test('getHeroeById debe de retornar un heroe ID', () => {
        const id = 2;

        const heroe = getHeroeById(id);
        expect(heroe).toEqual({
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        })
    })

    test('getHeroeById debe de retornar un undefiend si no existe', () => {
        const id = 100;

        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy()

    })
    //TAREA

    test('getHeroesByOwner debe de retornar un array de heroes DC', () => {
        const owner = 'DC';
        const owner2 = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        const heroes2 = getHeroesByOwner(owner2);


    


        expect(heroes2.length).toBe(2);

        console.log(heroes);


    })

})