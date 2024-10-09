/**
 * 
 *  Objetivo: Listar tarefas
 *  Data: 08/10/24
 *  Autor: Gabriel
 *  Versão: 1.0
 * 
 **/

let botao = document.getElementById('botao')
let input = document.getElementById('input=tarefa')
let tarefas = document.getElementById('tarefas')

botao.addEventListener('click', function() {

    if (input.value != ''){
        var tarefa = document.createElement('p')
        tarefas.appendChild(tarefa)
        tarefa.innerText = '- ' + input.value
        input.value = ''
        tarefa.addEventListener('click', function() {

            if (marcado == false) {
                tarefa.style.textDecoration = 'line-through'
                marcado = true
            }

            else{
                tarefa.style.textDecoration = ''
                marcado = false
            }
        })

        tarefa.addEventListener('dblclick', function() {
            tarefas;this.removeChild(tarefa)
        })
    }
})