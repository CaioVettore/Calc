function fazerRequisicao(){

    var url='https://swapi.co/api/people/';
    
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, false);

    xhttp.send();//a execução do script pára aqui até a requi

    var retorno = JSON.parse(xhttp.responseText);
    console.log(xhttp.responseText);

    //var primeiroNome = retorno.results[1].name;
    //document.getElementById("nome1").textContent = primeiroNome;
    var html = "";
    for(var i = 0; i < retorno.results.length; i++){
        var nome = retorno.results[i].name;
        var urlusuario = retorno.results[i].url;
        // html = html + '<a href="#" onclick="fazerRequisicao"('+url+');"<br>";
        html = html + "<a href='#' onclick=Dados('"+urlusuario+"')>"+ nome +"</a><br>"
            
    }
    document.getElementById("usuarios").innerHTML = html;
    
}

function Dados(url){


    var urlusuario = url;
   
    
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlusuario, false);

    xhttp.send();//a execução do script pára aqui até a requi

    var retorno = JSON.parse(xhttp.responseText);
    console.log(xhttp.responseText);
    var html = "";

    var nome = retorno.name;
    var altura = retorno.height;
    var peso = retorno.mass;
    var cabelo = retorno.hair_color;
    var cor_da_pele = retorno.skin_color;

        
    html = html + nome +" "+ altura +" " + peso +" " + cabelo +" " + cor_da_pele;
    document.getElementById("detalhesusu").innerHTML = html;
      
}

