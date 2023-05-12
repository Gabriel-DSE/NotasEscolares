function verificar(){
    
    let score = document.getElementById("nota").value
    
    
    
    if(score >=80 && score <=100) {
        document.getElementById("resultado").innerHTML = "Parabéns! Você foi aprovado.";
     
    }
     
    else if(score <80 && score >0) {
        document.getElementById("resultado").innerHTML = "Poxa, você não atingiu a nota mínima."; 
    }

    else if(score >100) {
        document.getElementById("resultado").innerHTML = "Insira uma nota entre 1 e 100.";
    }

    else if(score <0) {
        document.getElementById("resultado").innerHTML = "Insira uma nota entre 1 e 100.";
    }
     
    else{
        document.getElementById("resultado").innerHTML = "Por favor, insira uma nota.";
    }
     
    

}






