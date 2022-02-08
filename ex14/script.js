
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var header = document.getElementById('header')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora > 0 && hora < 12){
        img.src = "images/imgmanha.jpg"
        img.style.maxWidth = '15.3vw'
        img.style.maxHeight = '60vh'
        document.body.style.backgroundColor = '#CCC264'
        header.style.backgroundColor = '#A8A042'
    }
    else if(hora <18){
        img.src = "images/imgtarde.jpg"
        img.style.height = '50vh'
        img.style.width = '20vw'
        document.body.style.backgroundColor = '#D17A3B'
        header.style.backgroundColor = '#A8622D'
    }
    else{
        img.src = "images/imgnoite.jpg"
        img.style.width = '25vw'
        img.style.height = '50vh'
    }
}


