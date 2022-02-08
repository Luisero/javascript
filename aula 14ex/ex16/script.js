
function contar(){
    var inicio = Number(document.getElementById('txtInicio').value)
    var fim = Number(document.getElementById('txtFim').value)
    var passo = Number(document.getElementById('txtPasso').value)
    var res = document.getElementById('res')

    
    if(passo == 0){
        if(inicio == 'null'){
            inicio = 0
        }
        if(inicio > fim){
            if(fim == 'null'){
                fim = 0
            }
            res.innerHTML= 'Contando: '
            alert('Passo nulo, considerando passo = 1')
            for (inicio; inicio >= fim; inicio--) {
                res.innerHTML += `\u{1F449} ${inicio} `
             }
             res.innerHTML += '\u{1F3C1}'
        }
        else{
            res.innerHTML= 'Contando: '
            alert('Passo nulo, considerando passo = 1')

            for (inicio; inicio <= fim; inicio++) {
            res.innerHTML += `\u{1F449} ${inicio} `
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }
    else{
        if(inicio > fim){
            if(fim == 'null'){
                fim = 0
            }
            res.innerHTML= 'Contando: '
            for (inicio; inicio >= fim; inicio-= passo) {
                res.innerHTML += `\u{1F449} ${inicio} `
             }
             res.innerHTML += '\u{1F3C1}'
        }
        else{
            res.innerHTML= 'Contando: '
            for (inicio; inicio <= fim; inicio += passo) {
            res.innerHTML += `\u{1F449} ${inicio}`
            }
            res.innerHTML += '\u{1F3C1}'
        }
    }
}

