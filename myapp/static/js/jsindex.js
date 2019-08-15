const form = document.querySelector('#form-registro-horas');
form.addEventListener('submit', validarForm);
form.addEventListener('keyup', calculaHorasTrabalhadas);

setDataAtual();

function setDataAtual(){
    const hoje = new Date();
    const domData = document.querySelector('#data');

    let ano = hoje.getFullYear();
    let mes = ("0" + (hoje.getMonth() + 1) ).slice(-2);
    let dia = ("0" + hoje.getDate()).slice(-2);
    let strData = `${ano}-${mes}-${dia}`;

    domData.value = strData;
    //console.log(`${ano}-${mes}-${dia}`);
}

function validarForm(e) {
    if (false) {
        e.preventDefault();

        return false
    } else {
        console.log('Form');
        return true
    }
}

function calculaHorasTrabalhadas() {
    domChegada = document.querySelector('#hora-chegada');
    domSaida = document.querySelector('#hora-saida');

    if (domChegada.value !== "" && domSaida.value !== ""){
        horaChegada = new Date(0,0,0,domChegada.value.slice(0,2), domChegada.value.slice(3,5))
        horaSaida = new Date(0,0,0,domSaida.value.slice(0,2), domSaida.value.slice(3,5))

        console.log([horaChegada, horaSaida])
    }
    
    console.log('Key Up');
}