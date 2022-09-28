let btnNovaTarefa = document.getElementById("criarTarefa")

let date = new Date()
let todayDate = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate() // Data de Hoje
let tomorrowDate = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + (date.getDate() + 1) // Data de Amanhã

const today = document.getElementById("today") 
const tomorrow = document.getElementById("tomorrow") 

document.getElementById("dataTarefa").setAttribute('min',todayDate) // Atualiza a data minima do formulario

/**
 * @description Cria uma nova tarefa após preencher o formulário e clicando no botao - 'Adicionar Tarefa'
 */
function a() {
    let nomeTarefa = document.getElementById("nomeTarefa").value
    let dataTarefa = document.getElementById("dataTarefa").value
    let horaTarefa = document.getElementById("horaTarefa").value
    let prioridadeTarefa = document.getElementById("prioridadeTarefa").value
    let filtrosTarefa = document.getElementById("filtrosTarefa").value
    let corPrioridade
    // Variaveis Utilizadas para inserir uma nova section de data (Ex: 30 de Outubro, Today) 
    let mesInput = dataTarefa[5] + "" + dataTarefa[6]
    let diaInput = dataTarefa[8] + "" + dataTarefa[9]
    let anoInput = dataTarefa[0] + "" + dataTarefa[1] + dataTarefa[2] + dataTarefa[3]

    let continuar = false
    /**
     * @description Valida se o usuário digitou algo para não criar uma tarefa vazia, caso nao digitar cria uma borda vermelha (outline) e termina a function a()
     */
    function validarTarefas() {
        nomeTarefa.length == 0 ? document.getElementById("nomeTarefa").style="outline: 3px rgba(247, 49, 49, 0.7) solid;" : continuar = true;
        if (continuar == true) {
            document.getElementById("nomeTarefa").style="outline: none;"
            continuar = false
            dataTarefa.length == 0 ? document.getElementById("dataTarefa").style="outline: 3px rgba(247, 49, 49, 0.7) solid;" : continuar = true
            if (continuar == true) {
                document.getElementById("dataTarefa").style="outline: none;"
            }
        }
    }
    validarTarefas()
    if (continuar == false) {return}

    // Altera o numero de data para string 'Today' ou 'Tomorrow" ou cria uma section de data nova
    if (todayDate == dataTarefa) {
        dataTarefa = "Today"
    } else if (tomorrowDate == dataTarefa){
        dataTarefa = "Tomorrow"
    } else {
        novoDia(diaInput, mesInput, anoInput, dataTarefa)
    }

    // Adicionar uma cor diferente dependendo da Prioridade
    if (prioridadeTarefa == "alta" || prioridadeTarefa == "high") {
        corPrioridade = "rgba(247, 49, 49, 0.5);"
    } else if (prioridadeTarefa == "média" || prioridadeTarefa == "medium") {
        corPrioridade = "rgba(247, 239, 49, 0.5);"
    } else if (prioridadeTarefa == "baixa" || prioridadeTarefa == "low"){
        corPrioridade = "rgba(49, 140, 247, 0.5);"
    } else {
        corPrioridade = "rgba(49, 140, 247, 0);"
    }

    // Cria o elemento e adiciona as informações preenchidas
    let condition = dataTarefa[0] != "T" ? diaInput + "/" + mesInput : dataTarefa
    let span = document.createElement("span")
    span.innerHTML=
    `<section class="atribuicao">
    <p class="data">` + condition + `</p> <img src="img/Calendario black.svg" alt="Calendario" title="Data de hoje"> <p class="prioridade">`+ prioridadeTarefa + `</p>
    </section>

    <section class="tarefa">
        <div class="checkbox"></div> <h4>`+ nomeTarefa + `</h4> <img src="img/seta.svg" alt="seta"> <p>`+ horaTarefa + `</p>
    </section>`;

    // Realiza a alteração de cor
    span.getElementsByClassName("prioridade")[0].style="background:" + corPrioridade + ";";


    // Adiciona o elemento criado a caixa referente ao seu dia
    if (dataTarefa == "Today") {
        today.appendChild(span)
    } else if (dataTarefa == "Tomorrow") {
        tomorrow.appendChild(span)
    } else {
        document.getElementById(dataTarefa).appendChild(span)
    }

}


/**
 * @description Aparece com o formulário de nova tarefa
 */
function addTarefa() {
    document.getElementById("novaTarefa").style="display: flex;"
}

/**
 * @description Desaparece com o formulário de nova tarefa
 */
function rmTarefa() {
    document.getElementById("novaTarefa").style="display: none;"
}

/**
 * 
 * @param {string} a Adiciona na variavel o valor do 'Dia' inserida pelo usuário
 * @param {string} b Adiciona na variavel o valor do 'Mes' inserida pelo usuário
 * @param {string} c Adiciona na variavel o valor do 'Ano' inserida pelo usuário
 * @param {string} d Adiciona na variavel o valor da 'Data Completa' inserida pelo usuário, que ira se tornar seu valor com ID
 * @example novoDia('28', '09', '2022', '2022-09-28')
 * @description Função usada para criar uma nova section de data (Ex: 30 de Outubro, Today, Tomorrow)
 */
function novoDia(a, b, c, d) {
    let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    if (document.getElementById(c+ "-" + b +"-" + a) == null) {
        let tituloData = document.createElement('h2')
        c == date.getFullYear() ? tituloData.innerText= a + " de " + mes[parseInt(b)-1] : tituloData.innerText= a + " de " + mes[parseInt(b)-1] + " " + c //caso o ano for o atual, não informa-lo no titulo
        
        let hr = document.createElement('hr')
        let section = document.createElement('section')
        section.setAttribute('id', d)
        section.setAttribute('class', 'dia_lista')
        

        let listaTarefas = document.getElementsByClassName('tarefas_list')[0]
        console.log(listaTarefas)
        listaTarefas.appendChild(tituloData)
        listaTarefas.appendChild(hr)
        listaTarefas.appendChild(section)
    }
}


// Edições com base na responsividade

if (window.matchMedia("(max-width: 1310px)").matches) {
    document.getElementById("barras").addEventListener('click', () => {maisOpcoes(0)})
    document.getElementsByTagName('main')[0].addEventListener('click', () => {maisOpcoes(1)})
}

if (window.matchMedia("(max-width: 450px)").matches) {
    document.getElementById("barras").addEventListener('click', () => {maisOpcoes(0); btnsumir(0)})
    document.getElementsByTagName('main')[0].addEventListener('click', () => {maisOpcoes(1); btnsumir(1)})
}

function maisOpcoes(somador) {
 
    if (somador == 0) {
        document.getElementsByTagName('nav')[0].style="display: block;"
        document.getElementById("barras").style="display: none;"
    } else {
        document.getElementsByTagName('nav')[0].style="display: none;"
        document.getElementById("barras").style="display: fixed;"
    }
}

function btnsumir(z) {
    console.log(z)
    if (z == 0) {
        document.getElementById("nova_tarefa").style="display: none;"
    } else {
        document.getElementById("nova_tarefa").style="display: block;"
    }
}
