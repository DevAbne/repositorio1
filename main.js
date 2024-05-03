
const form = document.getElementById("formulario");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const campA = Number(document.getElementById("campoA").value);
    const campB = Number(document.getElementById("campoB").value);
    if (campA< campB){
        document.getElementById("mensagem").innerHTML = "<p> Formulario valido! B é maior que A! o codigo se reuniciará em instantes</p>";
        document.getElementById('mensagem').style.color = 'green';
        const tempo = 5000;
        function autoAtualizar(){
            location.reload();
        };
        setInterval(autoAtualizar, tempo);
    } else{
        e.preventDefault();
        document.getElementById("mensagem").innerHTML = "<p> Formulario invalido! B não é maior que A</p>";
        document.getElementById('mensagem').style.color = 'red';
    };
});
form.addEventListener('keyup', function(e){
    console.log(e.target.value);
});