function fazerRequisicao() {

    const url = 'http://localhost:3000/';

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, true);

    xhttp.onload = function (e) {//a execução do script pára aqui até a requi

        //var primeiroNome = retorno.results[1].name;
        //document.getElementById("nome1").textContent = primeiroNome;

        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                var retorno = JSON.parse(xhttp.responseText);
                var html = "";
                for (var i = 0; i < retorno.results.length; i++) {
                    var nome = retorno.results[i].name;
                    urlusuario = retorno.results[i].url;
                    // html = html + '<a href="#" onclick="fazerRequisicao"('+url+');"<br>";
                    html = html + "<a href='#' onclick=Dados('" + urlusuario + "')>" + nome + "</a><br>";
                }
                document.getElementById("usuarios").innerHTML = html;
            }
            else {
                console.error(xhttp.statusText);
            }
        }
    };
    xhttp.send();
    console.log('Teste');


}

var a = [];

function Dados(url) {


    var urlusuario = url;


    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", urlusuario, false);

    xhttp.send();//a execução do script pára aqui até a requi

    var retorno = JSON.parse(xhttp.responseText);



    var html = "";

    var meusFilmes = [];

    html = html + "<a (" + urlusuario + ")>"
        + "<br>" + "Name: " + retorno.name
        + "<br>" + "Height: " + retorno.height
        + "<br>" + "Mass: " + retorno.mass
        + "<br>" + "Hair color: " + retorno.hair
        + "<br>" + "Skin color: " + retorno.skin_color + "</br>"
        + "<br>" + "Films: " + retorno.films + "</a><br>"

    document.getElementById("detalhesusu").innerHTML = html;




    // for (var i = 0; i < retorno.films.length; i++) {
    //     meusFilmes.push(retorno.films[i]);
    //     console.log(meusFilmes);
    // }

    // alert(meusFilmes[1]);


    // for (var i = 0; i < retorno.filme.length; i++) {

    //     var xhttp = new XMLHttpRequest();
    //     xhttp.open("GET", url, true);


    // }
}
function request(){

    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var result = a + b;
    $.ajax({
        url: "http://localhost:3000/",
        type: "POST",
        data: {
         'a': a,
         'b':b
        },
        success: function( result ) {
          alert(result);
        }
      });
}

function urlNome() {
    var url1 = 'http://localhost:3000';

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url1, false);

    xhttp.send();//a execução do script pára aqui até a requi

    var retorno = JSON.parse(xhttp.responseText);
    console.log(xhttp.responseText)

    var html = "";

    html = html + "<a ('"+ url1 +"')>" + retorno.nome +"</a><br>";


    document.getElementById("nome1").innerHTML = html;


}
