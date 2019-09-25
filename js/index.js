function fazerRequisicao() {

    var url = 'https://swapi.co/api/people/';

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, false);

    xhttp.send();//a execução do script pára aqui até a requi

    var retorno = JSON.parse(xhttp.responseText);
 ;

    //var primeiroNome = retorno.results[1].name;
    //document.getElementById("nome1").textContent = primeiroNome;
    var html = "";
    for (var i = 0; i < retorno.results.length; i++) {
        var nome = retorno.results[i].name;
        urlusuario = retorno.results[i].url;
        // html = html + '<a href="#" onclick="fazerRequisicao"('+url+');"<br>";
        html = html + "<a href='#' onclick=Dados('" + urlusuario + "')>" + nome + "</a><br>"

    }
    document.getElementById("usuarios").innerHTML = html;

}

function Dados(url) {


    var urlusuario = url;


    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlusuario, false);

    xhttp.send();//a execução do script pára aqui até a requi

    var retorno = JSON.parse(xhttp.responseText);
    
    var html = "";

    var filmes = [];

 

    

    

    html = html + "<a ("+urlusuario+")>" 
    +"<br>"+ "Name: "+ retorno.name
    +"<br>"+ "Height: "+ retorno.height
    +"<br>"+ "Mass: "+ retorno.mass
    +"<br>"+ "Hair color: "+ retorno.hair
    +"<br>"+ "Skin color: "+ retorno.skin_color +"</a><br>"
        
    document.getElementById("detalhesusu").innerHTML = html;

}
function Requisicao() {
    var urlFilms = 'https://swapi.co/api/films/';

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlFilms, false);

    xhttp.send();

    var retorno = JSON.parse(xhttp.responseText);
   

    var html = "";
    html = html + "<a ("+urlusuario+")>" 
    +"<br>"+ "Title: "+ retorno.title
    +"<br>"+ "Number : "+ retorno.episode_id
    +"<br>"+ "Mass: "+ retorno.mass
    +"<br>"+ "Hair color: "+ retorno.hair
    +"<br>"+ "Skin color: "+ retorno.skin_color +"</a><br>"

    for (var i = 0; i < retorno.results.length; i++) {
        var count = retorno.results[i].title;
        var urlFilms = retorno.results[i].url;
        // html = html + '<a href="#" onclick="fazerRequisicao"('+url+');"<br>";
        html = html + "<a href='#' onclick=Dados('" + urlFilms + "')>" + count + "</a><br>"

    }
    document.getElementById("films").innerHTML = html;


}
