var app = require("../src/operaciones");

describe("Sumando", function(){
    it("La funcion suma 2 numeros", function(){
        var value = app.Sumar(52,26);
        expect(value).toBe(78);
    });
});

describe("Restando", function(){
    it("La funcion resta 2 numeros", function(){
        var value = app.Restar(52,26);
        expect(value).toBe(26);
    });
});

describe("Multiplicar", function(){
    it("La funcion multiplica 2 numeros", function(){
        var value = app.Multiplicar(52,26);
        expect(value).toBe(1352);
    });
});

describe("Dividir", function(){
    it("La funcion divide 2 numeros", function(){
        var value = app.Dividir(52,26);
        expect(value).toBe(2);
    });
});