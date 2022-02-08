var agora = new Date()
var hora = agora.getHours() 


if(hora<12){
    console.log('Bom dia!')
    console.log(`Agora são exatamente ${hora} horas.`)
}
else if(hora <18){
    console.log('Boa tarde.')
    console.log(`Agora são exatamente ${hora} horas.`)
}
else if(hora<=24)
{
    console.log('Boa noite')
    console.log(`Agora são exatamente ${hora} horas.`)
}
else{
    console.log('Horário inválido.')
}