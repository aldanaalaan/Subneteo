// Decimal a binario de 8 Bits
// * Los comentarios tienen un distintivo porque se usó la extension "Better Comments" en VS Code
function DecimalaBinario(Decimal) {
    // ! Verifica que el Decimal sea de 8 Bits
    if (Decimal > 255 || Decimal < 1) {
        return "No mijo, tiene que ser menor a 256 y mayor a 0";
    }
    let Num = Decimal;
    let Binario = "";

    for (let i = 0; i < 8; i++) {
        let Potencias = [
            2 ** 7,
            2 ** 6,
            2 ** 5,
            2 ** 4,
            2 ** 3,
            2 ** 2,
            2 ** 1,
            2 ** 0,
        ];
        if (Math.floor(Num / Potencias[i]) === 1) {
            Binario += "1";
            Num %= Potencias[i];
        } else {
            Binario += "0";
        }
    }
    return Binario;
}

// * Binario de 8 bits a decimal
function BinarioaDecimal(Binario) {
    if (Binario.length != 8) {
        return "Binario diferente a 8 bits";
    }
    for (let i = 0; i < Binario.length; i++) {
        if (Binario[i] != 0 && Binario[i] != 1) {
            return "Digito no valido";
        }
    }
    let Potencias = [
        2 ** 7,
        2 ** 6,
        2 ** 5,
        2 ** 4,
        2 ** 3,
        2 ** 2,
        2 ** 1,
        2 ** 0,
    ];
    let Decimal = 0;
    for (let i = 0; i < Potencias.length; i++) {
        if (Binario[i] == 1) {
            Decimal += Potencias[i];
        }
    }
    return Decimal;
}
// * IP a Binario
function IPaBinario(IPDecimal) {
    // * Convertir IP a una lista de Decimales
    let IPListaDecimal = IPDecimal.split(".");
    for (let i = 0; i < IPListaDecimal.length; i++) {
        IPListaDecimal[i] = Number(IPListaDecimal[i]);
    }
    let IPBinaria = "";

    for (let i = 0; i < IPListaDecimal.length; i++) {
        IPBinaria += DecimalaBinario(IPListaDecimal[i]);
        if (i < 3) {
            IPBinaria += ".";
        }
    }

    return IPBinaria;
}

// * IP a Decimal
function IPaDecimal(IPBinario) {
    // * Convertir IP a una lista de Decimales
    ////let Potencias = [128, 62, 32, 16, 8, 4, 2, 1];
    let IPListaBinaria = IPBinario.split(".");
    let IPDecimal = "";
    /*
    for (let i = 0; i < IPListaBinaria.length; i++) {
        IPListaBinaria[i] = Number(IPListaBinaria[i]);
    }*/

    // * Convertir IP a decimal
    for (let i = 0; i < IPListaBinaria.length; i++) {
        IPDecimal += BinarioaDecimal(IPListaBinaria[i]);
        if (i < 3) {
            IPDecimal += ".";
        }
    }
    return IPDecimal;
}

console.log(IPaDecimal("11111111.11111111.11111111.00011111"))
console.log(BinarioaDecimal("01111111"))