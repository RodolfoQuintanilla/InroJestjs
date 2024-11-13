import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas en 07-deses-arr', () => {
    test('debe retornar string y numero', () => {
        const [letters, numbers] = retornaArreglo();
        console.log(letters);
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);


        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')


        expect(letters).toEqual(expect.any(String)) //espera equidad
        
    })
})
