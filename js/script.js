// inicio calculadora
// insercao de caracteres
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function erase(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
        
        setTimeout(function() {
            window.location.href = "hero.html";
        }, 300);
    }
    else{
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

function conferir(){
    var select = document.getElementById("op");
    var opcaoValor = select.options[select.selectedIndex].value;    

    if(opcaoValor=='dc'){
        var hero = document.querySelector("input[name=hero]:checked").value;
        var i = 0;

        while(i<=5){
            if(hero=='aquaman'){
                document.write("Voce escolheu Aquaman");
                document.write("<br><br>");
                document.write("<img src='img/dc-aquaman.jpg'>");
            }
            else if(hero=='batman'){
                document.write("Voce escolheu Batman");
                document.write("<br><br>");
                document.write("<img src='img/dc-batman.jpg'>");
            }
            else if(hero=='ciborgue'){
                document.write("Voce escolheu Ciborgue");
                document.write("<br><br>");
                document.write("<img src='img/dc-ciborgue.jpg'>");
            }
            else if(hero=='flash'){
                document.write("Voce escolheu Flash");
                document.write("<br><br>");
                document.write("<img src='img/dc-flash.jpg'>");
            }
            else if(hero=='superman'){
                document.write("Voce escolheu Superman");
                document.write("<br><br>");
                document.write("<img src='img/dc-superman.jpg'>");
            }
            else{
                alert('error');
            }
        }
    }
    else if(opcaoValor=='marvel'){
        var heroi = document.querySelector("input[name=heroi]:checked").value;
        var i = 0;

        while(i<=5){
            if(heroi=='ciclope'){
                document.write("Voce escolheu Ciclope");
                document.write("<br><br>");
                document.write("<img src='img/marvel-ciclope.jpg'>");
            }
            else if(heroi=='estigma'){
                document.write("Voce escolheu Estigma");
                document.write("<br><br>");
                document.write("<img src='img/marvel-estigma.jpg'>");
            }
            else if(heroi=='hulk'){
                document.write("Voce escolheu Hulk");
                document.write("<br><br>");
                document.write("<img src='img/marvel-hulk.jpg'>");
            }
            else if(heroi=='thor'){
                document.write("Voce escolheu Thor");
                document.write("<br><br>");
                document.write("<img src='img/marvel-thor.jpg'>");
            }
            else if(heroi=='vampira'){
                document.write("Voce escolheu Vampira");
                document.write("<br><br>");
                document.write("<img src='img/marvel-vampira.jpg'>");
            }
            else{
                alert('error');
            }
        }
    }
    else{
        alert('erro');
    }
}

