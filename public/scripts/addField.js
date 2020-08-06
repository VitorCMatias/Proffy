//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar que campos
    const fields = newFieldContainer.querySelectorAll('input')
    //Limpar todos os campos
    fields.forEach(function(field) {
        field.value = ''
    })

    // Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    
