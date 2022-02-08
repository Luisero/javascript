let valores = [8, 1, 7, 4, 2, 9]

// for (let i = 0; i < valores.length; i++) 
// {
//     console.log(`A posição ${i} tem o o valor ${valores[i]}.`)
// }

for (let num in valores)
{
    console.log(`A posição ${num} tem o valor ${valores[num]}.`)
}
console.log(valores.indexOf(8))
