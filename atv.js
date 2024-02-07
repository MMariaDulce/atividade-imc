    
    function Soma() {
    const altura = document.getElementById("altura");
    const peso = document.getElementById("peso");
   

    const altura1 = Number(altura.value);
    const peso1 = Number(peso.value);

    soma = peso1 / (altura1 * altura1)
    let classificacao = ''
    if(soma < 16.9){
        classificacao = 'Muito abaixo do peso';
    }
    else if(soma >= 17 || soma <= 18,4){
        classificacao = 'Abaixo do peso';
    }
    else if (soma >= 18,5 || soma <= 24,9){
        classificacao = 'Peso normal';
    }else if ( soma>= 25 || soma <= 29.9){
        classificacao = 'Acima do peso';
    }else if (soma >= 30 || soma <= 34,9){
        classificacao = 'obesidade grau 1';
    }else if (soma >= 35 || soma <= 40){
        classificacao = 'obesidade grau 2';
    }else if(soma > 40){
        classificacao = 'obesedida grau 3';
    } else {
    document.getElementById("resultado").innerText= "Erro"
    resultado.innerHTML = soma }
    }