var mediaParcial
var mediaFinal  
function valorInvalido(num)
{
    if (num > 10 || num < 0)
    {
        return true
    }
    else
    {
        return false
    }
}

function calcular()
{
    var numInvalido = false
    var res = document.querySelector('#res')
    
    let notas = [
        document.querySelector('#txtNota1').value,
        document.querySelector('#txtNota2').value,
        document.querySelector('#txtNota3').value,
        document.querySelector('#txtNota4').value
    ]

    for (pos in notas)
    {
        if (notas[pos] == '')
        {
            notas[pos] = 0
        }
    }

    for (pos in notas)
    {
        if (valorInvalido(notas[pos]))
        {
            alert('Valor inváldo.')
            numInvalido = true
        }

    }

    if (!numInvalido)
    {
        var outputRes = document.querySelector('#outputRes')
        var calc = document.querySelector('#calc')
        var N1 = (Number(notas[0]) + Number(notas[1])) / 2
        var N2 = (Number(notas[2]) + Number(notas[3])) / 2
         mediaParcial = ((N1 * 2) + (N2 * 3)) / 5
        var notaAf = 0

        if (mediaParcial >= 6)
        {
            calc.innerHTML = `N1: ${N1}. <br>N2: ${N2}`
            res.innerHTML = `Sua média foi ${mediaParcial}. <br>Passou`
        }
        else if (mediaParcial > 3)
        {

            af()

        }
        else
        {
            var resAf = document.createElement('p')
            resAf.setAttribute('id', 'resAf')
            resAf.innerHTML = `Sua nota foi: ${mediaFinal}. <br>Reprovou`
            outputRes.appendChild(resAf)
        }

    }

}


function af()
{
    res.innerHTML = `Sua nota foi ${mediaParcial} <br>Ficou de AF`
    var af = document.createElement('p')
    var btnConfirmAf = document.createElement('input')
    var inputAf = document.createElement('input')
    btnConfirmAf.setAttribute('type', 'button')
    btnConfirmAf.setAttribute('value', 'Confirmar')
    btnConfirmAf.setAttribute('id', 'btnConfirmAf')
    btnConfirmAf.setAttribute('onclick', 'calcularAf()')
    af.setAttribute('id', 'af')
    inputAf.setAttribute('type', 'number')
    inputAf.setAttribute('id', 'inputAf')
    outputRes.appendChild(af)

    af.innerHTML = 'Digite a nota da Avaliação final: '

    af.appendChild(inputAf)

    outputRes.appendChild(btnConfirmAf)



}

function calcularAf()
{

    var inputAf = document.querySelector('#inputAf')
     if(inputAf.value == '' ){
         inputAf.value = 0
     }

    if (valorInvalido(inputAf.value))
    {
        alert('Valor inválido.')
    }
    else
    {
        
        mediaFinal = (mediaParcial + Number(inputAf.value)) / 2
        var resAf = document.createElement('p')
        resAf.setAttribute('id', 'resAf')
        if (mediaFinal >= 5)
        {
            while (outputRes.firstChild)
            {
                outputRes.removeChild(outputRes.firstChild)
            }
            resAf.innerHTML =`Sua nota foi: ${mediaFinal}. <br>Passou`
            outputRes.appendChild(resAf)

        }
        else
        {
            while (outputRes.firstChild)
            {
                outputRes.removeChild(outputRes.firstChild)
            }
            resAf.innerHTML = `Sua nota foi: ${mediaFinal}. <br>Reprovou`
            outputRes.appendChild(resAf)
        }
    }

}
