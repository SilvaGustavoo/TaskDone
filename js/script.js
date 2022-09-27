let btnNovaTarefa = document.getElementById("criarTarefa")
// btnNovaTarefa.addEventListener("click",criarTarefa())
let date = new Date()
let todayDate = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + date.getDate() // Data de Hoje
let tomorrowDate = date.getFullYear() + "-0" + (date.getMonth() + 1) + "-" + (date.getDate() + 1) // Data de Amanhã
console.log("olá", todayDate, tomorrowDate)



const today = document.getElementById("today")
const tomorrow = document.getElementById("tomorrow")



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
    console.log(nomeTarefa, dataTarefa, horaTarefa, prioridadeTarefa, filtrosTarefa)
    console.log(dataTarefa.length)

    // Validar se os campos estão preenchidos
    let continuar = false
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

    // Altera o numero de data para string 'Today' ou 'Tomorrow"
    if (todayDate == dataTarefa) {
        dataTarefa = "Today"
    } else if (tomorrowDate == dataTarefa){
        dataTarefa = "Tomorrow"
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
    let span = document.createElement("span")
    span.innerHTML=
    `<section class="atribuicao">
    <p class="data">` + dataTarefa + `</p> <img src="img/Calendario black.svg" alt="Calendario" title="Data de hoje"> <p class="prioridade">`+ prioridadeTarefa + `</p>
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
    }
    

}


function addTarefa() {
    document.getElementById("novaTarefa").style="display: flex;"
}
function rmTarefa() {
    console.log("oiii")
    document.getElementById("novaTarefa").style="display: none;"
}


