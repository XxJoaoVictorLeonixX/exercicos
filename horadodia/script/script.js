function carregar(){
    var mensagem = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    mensagem.innerHTML = `Agora são ${hora} horas`;

    if(hora >=0 && hora < 12){
        img.src = 'imagens/dia.jpg'
        document.body.style.background = '#EA9028';

    }else if(hora <= 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#D6410A';
        
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#06041F';
    }
    
}
