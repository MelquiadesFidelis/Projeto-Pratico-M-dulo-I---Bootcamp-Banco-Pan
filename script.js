//recebendo elementos com os valores
var valor_devedor = document.getElementById('valor');
var prazo_ano = document.getElementById('prazo');
var juros_ao_ano = document.getElementById('juros');


//recebendo elementos que irão apresentar os valores
var resultado_prazo_mes = document.getElementById('r_prazo');
var resultado_juros_mes = document.getElementById('r_juros_mes');
var resultado_juros_acumulado = document.getElementById('r_juros_acumulado');

//função para calcular o juros ao mês
function juros_ao_mes(ja) {
    return (1+ja)**(1/12)-1;
}

var juros_atual = [];



function simular () {
    //exibir o prazo em meses:
    resultado_prazo_mes.value = prazo_ano.valueAsNumber * 12;

    //exibir resultado juros ao mês:
    resultado_juros_mes.value = parseFloat(juros_ao_mes(juros_ao_ano.valueAsNumber).toFixed(15))  ;

    var amortizacao = valor_devedor.valueAsNumber / (prazo_ano.valueAsNumber * 12);

    var total_array = [], total = 0;

    for (i=0; i< resultado_prazo_mes.value; i++) {
        juros_atual[i] = parseFloat( ((valor_devedor.value - i*amortizacao)*resultado_juros_mes.value).toFixed(2));
        total_array[i] = juros_atual[i];
        total += total_array[i];
    }

    //var total = juros_atual.reduce((total, currentElement) => total + currentElement);
    
    //exibir juros acumulado:
    resultado_juros_acumulado.value = parseFloat(total).toFixed(2);
    
    var novaTabela = document.createElement("table");

    var corpo = document.createElement("tbody");
    novaTabela.appendChild(corpo);

    document.getElementById("class2").appendChild(novaTabela);

    var container = document.getElementById("class2");
    container.innerHTML = [
        '<table>',
        '<thead>',
        '<tr>',
        '<th><b>Prestação</b></th>',
        '<th><b>Amortização</b></th>',
        '<th><b>Juros</b></th>',
        '<th><b>Total</b></th>',
        '</tr>',
        '</thead>',
        '<tbody>',
        '<tr>',
        '<td>1</td>',
        '<td>'+parseFloat(amortizacao).toFixed(2)+'</td>',
        '<td>'+juros_atual[0]+'</td>',
        '<td>'+parseFloat(total_array[0]+amortizacao).toFixed(2)+'</td>',
        '</tr>',

        '<tr>',
        '<td>2</td>',
        '<td>'+parseFloat(amortizacao).toFixed(2)+'</td>',
        '<td>'+juros_atual[1]+'</td>',
        '<td>'+parseFloat(total_array[1]+amortizacao).toFixed(2)+'</td>',
        '</tr>',

        '<tr>',
        '<td>3</td>',
        '<td>'+parseFloat(amortizacao).toFixed(2)+'</td>',
        '<td>'+juros_atual[2]+'</td>',
        '<td>'+parseFloat(total_array[2]+amortizacao).toFixed(2)+'</td>',
        '</tr>',
        
        '<tr>',
        '<td>4</td>',
        '<td>'+parseFloat(amortizacao).toFixed(2)+'</td>',
        '<td>'+juros_atual[3]+'</td>',
        '<td>'+parseFloat(total_array[3]+amortizacao).toFixed(2)+'</td>',
        '</tr>',

        '<tr>',
        '<td>5</td>',
        '<td>'+parseFloat(amortizacao).toFixed(2)+'</td>',
        '<td>'+juros_atual[4]+'</td>',
        '<td>'+parseFloat(total_array[4]+amortizacao).toFixed(2)+'</td>',
        '</tr>',
        '</tbody>',
        '</table>'
].join("\n");
    
}   






//juros_ao_ano.valueAsNumber