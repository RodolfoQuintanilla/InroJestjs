import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto ', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect(user).toEqual(testUser);
    })

    /* comentario */

    test('getUsuarioActivo elusuario debe de retornar un objeto', () => {

        const nombre = 'Roberto';
        const userActivo = getUsuarioActivo(nombre);

        expect(userActivo).toStrictEqual({
            uid: 'ABC567',
            username: nombre,
        });
    });


    /* fin */
})
