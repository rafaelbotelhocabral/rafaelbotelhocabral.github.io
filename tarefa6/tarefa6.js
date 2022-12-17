function procurarButton() {
    let p = document.getElementById("original");
    console.log(p);
    
    let input = document.getElementById('input');
    let text = String(input.value);
    console.log(input);
    
    let inputPalavra = document.getElementById('palavra');
    let palavra = String(inputPalavra.value);
    console.log(inputPalavra.text);

    if(palavra != "") {
        let novop = localiza(text, palavra);
        p.innerHTML = novop;
    }

    

}

function substituirButton() {
    console.log("clickou");
    let input = document.getElementById('novaPalavra');
    let novaPalavra = String(input.value);
    let texto = document.getElementById('input');
    let text = String(texto.value);
    let p = document.getElementById('original');
    let inputPalavra = document.getElementById('palavra');
    let palavra = String(inputPalavra.value);
    


    let novoTexto = troca(text, novaPalavra, palavra);
    p.innerHTML = novoTexto;
}

function rodarButton() {
    console.log("clickou");
    let input = document.getElementById('input');
    let text = String(input.value);
    let div = document.getElementById("exibe");
    let p = document.getElementById("original");


    //Função inverte
    p.innerHTML = text;


    //Função inverte
    div.innerHTML += "</br></br><b>função inverte:</b> "+inverte(text);

    

    //função destaca
    div.innerHTML += "</br><b>função destaca:</b> "+destaca(text);

    //Armazena Text
    armazena(text);


    //maiorOcorrencia 
    maiorOcorrencia(armazena(text));
    

}    

function dataButton() {
    console.log("clickou");

    let input = document.getElementById('data');
    let data = String(input.value);

    
    let p = document.getElementById("dias");
    p.innerHTML = contadorDias(data);


}

function concatButton() {
    console.log("clickou");

    let input = document.getElementById('concat');
    let data = String(input.value);

    
    let p = document.getElementById("concatp");
    p.innerHTML = diaconcat(data);


}
function semanaButton() {
    console.log("clickou");

    let input = document.getElementById('semanas');
    let data = String(input.value);
    let input2 = document.getElementById('semanas2');
    let data2 = String(input2.value);

    
    let p = document.getElementById("semanasp");
    p.innerHTML = semanas(data, data2);


}
function codificaButton() {
    let p = document.getElementById("codificap");
    console.log(p);
    
    let input = document.getElementById('codifica');
    let text = String(input.value);

    if(text != "") {
        p.innerHTML = codifica(text);
    }

    

}


// ---------- Auxiliares ---------------- //
function troca(text, novaPalavra, palavra) {
    let novoTexto;

    novoTexto = text.replaceAll(palavra, novaPalavra)
    return novoTexto;
}

function localiza(text, palavra) {
    let novoTexto;

    novoTexto = text.replace(palavra, "<b>"+palavra+"</b>")
    return novoTexto;
}

function contadorDias (data) {
    let dataint = data.split("-");
    console.log(data)

    let ano = parseInt(dataint[0]);
    let mes = parseInt(dataint[1]);
    let dia = parseInt(dataint[2]);

    var dataAtual = new Date();
    console.log(dataAtual.getMonth)
    var diaAtual = parseInt(dataAtual.getDate());
    var mesAtual = parseInt(dataAtual.getMonth()) + 1;
    var anoAtual = parseInt(dataAtual.getFullYear());

   let diasAno = anoAtual - ano;
   let diasMes = mesAtual - mes;
   console.log(mesAtual, mes)
   let diasDia = diaAtual - dia;

   console.log(diasAno);
   console.log(diasMes);
   console.log(diasDia);

   let soma = (diasAno*365) + (diasMes*30) + (diasDia);
    return soma;
}
function diaconcat (data) {
    let dataint = data.split("-");
    console.log(data)

    let ano = parseInt(dataint[0]);
    let mes = parseInt(dataint[1]);
    let dia = parseInt(dataint[2]);

    let meses = [
        'janeiro', 'fevereiro',
         'março', 'abril', 
         'maio', 'junho', 'julho', 
         'agosto', 'setembro', 
         'outubro', 'novembro',
         'dezembro'
    ]

   let concat = dia +' de '+ meses[mes-1] +' de ' +ano;
    return concat;

    
}
function semanas (data, data2) {
    let dataint = data.split("-");
    console.log(data)

    let ano = parseInt(dataint[0]);
    let mes = parseInt(dataint[1]);
    let dia = parseInt(dataint[2]);

    let dataint2 = data2.split("-");
    console.log(data2)

    let ano2 = parseInt(dataint2[0]);
    let mes2 = parseInt(dataint2[1]);
    let dia2 = parseInt(dataint2[2]);


   let diasAno = ano2 - ano;
   let diasMes = mes2 - mes;
   let diasDia = dia2 - dia;

   console.log(diasAno, ano, ano2);
   console.log(diasMes);
   console.log(diasDia);

   let soma = ((diasAno*365) + (diasMes*30) + (diasDia))/7;
    return parseInt(soma);
}
function senha (senha) {
    let forca;
    let regex1 = /(?=.*[a-z])(?=.*[A-Z]).*$/;
    let regex2 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
    let regex3 = /\W|_/;
    
    if(regex1.test(senha)) {
        forca = 0;
    }
    if(regex2.test(senha)) {
        forca = 1;
    }

    if(regex3.test(senha)) {
        forca = 2;
        console.log(regex3.test(senha))
    }

    return forca;

}
function codifica (text) {
    let novaPalavra;

    novaPalavra = text.replaceAll('t', 'p').replaceAll('e', 'o').replaceAll('n', 'l').replaceAll('i', 'a').replaceAll('s', 'r');
    return novaPalavra;
}



















// -------- Funcoes da atividade -------- //

// Funcao Inverte
function inverte(text) {
    var novoTexto = "";
    for(let i=0;i<text.length;i++) {
        novoTexto=novoTexto+text[text.length - i-1];
    }
    return novoTexto;    
}

// função destaca

function destaca(text) {
    let novoTexto;

    // console.log("Texto: text");
    // console.log(text.replace('a', "<b>a</b>").replace('o', "<b>o</b>"));
    // console.log(text);

    novoTexto = text.replaceAll('a', "<b>a</b>");
    novoTexto = novoTexto.replaceAll('e', "<b>e</b>");
    novoTexto = novoTexto.replaceAll('i', "<b>i</b>");
    novoTexto = novoTexto.replaceAll('o', "<b>o</b>");
    novoTexto = novoTexto.replaceAll('u', "<b>u</b>");
    novoTexto = novoTexto.replaceAll('E', "<b>e</b>");
    novoTexto = novoTexto.replaceAll('I', "<b>i</b>");
    novoTexto = novoTexto.replaceAll('O', "<b>o</b>");
    novoTexto = novoTexto.replaceAll('U', "<b>u</b>");
    novoTexto = novoTexto.replaceAll('A', "<b>u</b>");
    return novoTexto;
}

// funcao armazena
function armazena(text) {
    
    var data = [];

    const myArray = text.split(" ");
    console.log(myArray);

    myArray.map(function(item){
        let existe = false;

        for(i=0;i<=data.length;i++) {
            if(data[i]?.palavra == item){
                data[i].contador+=1;
                existe = true;
            } 
            
        }
        
        if(!existe) {
            let dt = {
                palavra: item,
                contador: 1
            }
            data.push(dt);
        }
    })
    return data;    
}

// Maior
function maiorOcorrencia(data) {
    var maiorAtual = {
        contador: 0
    };
    data.map(function(item){
        if(item.contador>maiorAtual?.contador) {
            maiorAtual = item;
        }
    })
    console.log(maiorAtual);
}
