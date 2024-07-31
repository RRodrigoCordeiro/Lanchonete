const AdicionarMaisOpcoes = () => {
    document.getElementById('saiba-mais').addEventListener('click', function () {
        var opcao = document.getElementById('maisOpcoes')
        if(opcao.classList.contains('hidden')){
            opcao.classList.remove('hidden')
            this.textContent = 'saiba menos'
        } else {
            opcao.classList.add('hidden')
            this.textContent ='saiba mais'
            window.location.href = 'cardapio.html';   
        }
    })
}