//Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//Calculadora de mediana
function medianaSalarios(lista){
    const mitad =  parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Calcular mediana general
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana Top 10% Col
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

//Integrar lista de empleados con html
for (let i = 0; i < colombia.length; i++){
    var fila = '<tr><td>'+name+'</td><td>'+salary+'</td></tr>';
}


document.getElementById('tableData').innerHTML = mapeaTabla;
