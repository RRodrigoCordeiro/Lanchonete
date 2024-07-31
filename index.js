
const AdicionarMaisOpcoes = () => {
    document.getElementById('saiba-mais').addEventListener('click',function() {
        var opcao = document.getElementById('maisOpcoes')
        if(opcao.classList.contains('hidden')){
            opcao.classList.remove('hidden')
            this.textContent = "Mostrar menos"
        } else {
            opcao.classList.add('hidden')
            this.textContent = "Mostrar mais"
            // window.location.href = 'cardapio.html'; 
        }
    })
}