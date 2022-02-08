
function gerarTabuada(){
    var number = document.querySelector('#txt-number')
    var res = document.querySelector('#select')
    if(number.value == 0)
    {
        alert('Por favor digite um número.')
    }
    else
    {
        while(res.firstChild)
        {
            res.removeChild(res.firstChild)
        }

        for(var i = 0; i<=10; i++){
            var option = document.createElement('option')
            option.setAttribute('id', `option-${i}`)
            option.innerHTML = `${number.value} * ${i} = ${number.value * i}`
            res.appendChild(option)
        }
    }
}