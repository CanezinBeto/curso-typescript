const firstName = 'Alberto'
const lastName = 'Canezin'

// Digamos que está função é exclusiva para receber string, então podemos tipar o atributo que ela recebe
function greeting(name: string, lasName: string) {
  console.log(`Olá ${name} ${lasName}`)
}

greeting(firstName, lastName)
