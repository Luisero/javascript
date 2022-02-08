
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txt-ano')
    var res = document.querySelector('#res')
    fano = fano.value
    if(fano == 0 || fano > ano){
        alert('Verifique as informações e tente novamente.')
    }
    else{
        var fsex = document.getElementsByName('rad-sex')
        var idade  = ano - fano
        var genero = 'none'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
               //criança
               img.setAttribute('src','images/foto-bebe-m.png')
            }
            else if(idade <21){
                //jovem
                img.setAttribute('src', 'images/foto-jovem-m.png')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'images/foto-adulto-m.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'images/foto-idoso-m.png')
            }
        }
        else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','images/foto-bebe-f.png')
             }
             else if(idade <21){
                 //jovem
                 img.setAttribute('src','images/foto-jovem-f.png')
             }
             else if(idade < 50){
                 //adulto
                 img.setAttribute('src','images/foto-adulto-f.png')
             }
             else{
                 //idoso
                 img.setAttribute('src','images/foto-idoso-f.png')
             }
        }
        res.innerHTML = `${genero} de ${idade} anos.`
        res.appendChild(img)
        
       
        
    }
}