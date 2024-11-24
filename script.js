// Array para armazenar os carros
let stock = []

// Função para adicionar um carro ao estoque
function adicionarCarro() {
    let model = prompt("Insira o modelo do carro:")
    let brand = prompt("Insira a marca do carro:")
    let year = parseInt(prompt("Insira o ano do carro:"))
    let price = parseFloat(prompt("Insira o preço do carro:"))
    
    let car = {
        model: model,
        brand: brand,
        year: year,
        price: price
    }
    stock.push(car)
    alert(`Carro adicionado: Modelo: ${model}, Marca: ${brand}, Ano: ${year}, Preço: R$${price}`)
}

// Função para exibir todos os carros no estoque
function exibirEstoque() {
    if (stock.length === 0) {
        alert("O estoque está vazio.")
        return
    }
    let message = "Estoque atual:\n"
    stock.forEach(car => {
        message += `Modelo: ${car.model}, Marca: ${car.brand}, Ano: ${car.year}, Preço: R$${car.price}\n`
    })
    alert(message)
}

// Função para buscar carros por marca
function buscarPorMarca() {
    let brand = prompt("Insira a marca a ser buscada:")
    let message = `Carros da marca ${brand}:\n`
    let result = stock.filter(car => car.brand === brand)
    if (result.length > 0) {
        result.forEach(car => {
            message += `Modelo: ${car.model}, Marca: ${car.brand}, Ano: ${car.year}, Preço: R$${car.price}\n`
        })
    } else {
        message = `Nenhum carro da marca ${brand} encontrado.`
    }
    alert(message)
}

// Função para buscar carros por ano
function buscarPorAno() {
    let year = parseInt(prompt("Insira o ano a ser buscado:"))
    let message = `Carros do ano ${year}:\n`
    let result = stock.filter(car => car.year === year)
    if (result.length > 0) {
        result.forEach(car => {
            message += `Modelo: ${car.model}, Marca: ${car.brand}, Ano: ${car.year}, Preço: R$${car.price}\n`
        })
    } else {
        message = `Nenhum carro do ano ${year} encontrado.`
    }
    alert(message)
}

// Função para buscar carros por faixa de preço
function buscarPorFaixaDePreco() {
    let minPrice = parseFloat(prompt("Insira o preço mínimo:"))
    let maxPrice = parseFloat(prompt("Insira o preço máximo:"))
    let message = `Carros na faixa de preço de R$${minPrice} a R$${maxPrice}:\n`
    let result = stock.filter(car => car.price >= minPrice && car.price <= maxPrice)
    if (result.length > 0) {
        result.forEach(car => {
            message += `Modelo: ${car.model}, Marca: ${car.brand}, Ano: ${car.year}, Preço: R$${car.price}\n`
        })
    } else {
        message = `Nenhum carro na faixa de preço de R$${minPrice} a R$${maxPrice} encontrado.`
    }
    alert(message)
}

// Função para exibir carros armazenados
function armazenarCarrosJaFalados() {
    if (stock.length === 0) {
        alert("Nenhum carro armazenado no estoque.")
        return
    }
    let message = "Carros armazenados no estoque:\n"
    stock.forEach(car => {
        message += `Modelo: ${car.model}, Marca: ${car.brand}, Ano: ${car.year}, Preço: R$${car.price}\n`
    })
    alert(message)
}

// Exemplo de uso
adicionarCarro()
adicionarCarro()
exibirEstoque()
buscarPorMarca()
buscarPorAno()
buscarPorFaixaDePreco()
armazenarCarrosJaFalados()