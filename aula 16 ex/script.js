let numbers = []

function isNumero(num)
{
    if (num != '' && num > 0 && num <= 100)
    {
        return true
    }
    else
    {
        return false
    }
}

function adicionar()
{
    var res = document.getElementById('res')

    var inputNumber = document.querySelector('#txtNumbers')
    res.innerHTML = ''
    if (!isNumero(inputNumber.value))
    {
        alert('Digite um número entre 1 e 100')
    }
    else
    {
        if (numbers.length == 0)
        {
            numbers.push(inputNumber.value)
            //adiciona os números digitados no selector
            var selectorNumbers = document.querySelector('#selectNumbers')
            var option = document.createElement('option')

            option.setAttribute('id', `option-${inputNumber.value}`)
            option.innerHTML = inputNumber.value
            selectorNumbers.appendChild(option)
        }
        else
        {   //ver se o número já está no vetor  
            if (numbers.indexOf(inputNumber.value) != -1)
            {
                alert('Número já adicionado na lista.')
            }
            else
            {

                //adiciona os números digitados no selector
                var selectorNumbers = document.querySelector('#selectNumbers')
                var option = document.createElement('option')

                numbers.push(inputNumber.value)
                option.setAttribute('id', `option-${inputNumber.value}`)
                option.innerHTML = inputNumber.value
                selectorNumbers.appendChild(option)

                //muda o tamanho do option de acordo com o tamanho do vetor
                selectorNumbers.setAttribute('size', `${numbers.length}`)

            }



        }

    }


}

function finalizar()
{
    var inputNumber = document.querySelector('#txtNumbers')
    if (!isNumero(inputNumber.value))
    {
        alert('Digite um número entre 1 e 100!')
    }
    else
    {
        var soma = 0
        var media = 0
        var maior = Math.max(...numbers) 
        var menor = Math.min(...numbers)
        var selectorNumbers = document.querySelector('#selectNumbers')
        var res = document.getElementById('res')
        res.innerHTML = ''
        //removendo todos os filhos do selector  
        while (selectorNumbers.firstChild)
        {
            selectorNumbers.removeChild(selectorNumbers.firstChild)
        }
        //adicionando filhos com valores no selector
        for (pos in numbers)
        {
            var option = document.createElement('option')
            option.setAttribute('id', `option-${pos}`)
            option.innerHTML = numbers[pos]
            selectorNumbers.appendChild(option)


            //calculando soma para a media
            soma += Number(numbers[pos])


        }

        
    }
    media = soma / numbers.length

    res.innerHTML += `Ao todo temos ${numbers.length} números cadastrados. <br>`
    res.innerHTML += `O maior número informado foi ${maior}. <br>`
    res.innerHTML += `O menor valor informado foi ${menor}. <br>`
    res.innerHTML += `Somando todos o valores temos ${soma}. <br>`
    res.innerHTML += `Média dos números: ${media.toFixed(2)} <br>`
}


