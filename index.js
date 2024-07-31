const cartModal = document.getElementById('cartModal')
const checkoutBtn =  document.getElementById('checkoutBtn')
const closeModal = document.getElementById('closeModal')
const finalizeOrder = document.getElementById('finalizeOrder')

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

checkoutBtn.addEventListener('click', function(){
    cartModal.style.display = "flex"
})

cartModal.addEventListener('click',function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModal.addEventListener('click', function(){
    cartModal.style.display = "none"
})




