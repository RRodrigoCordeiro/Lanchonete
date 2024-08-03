const cartModal = document.getElementById('cartModal')
const cartBtn =  document.getElementById('cart-btn')
const closeModal = document.getElementById('closeModal')
const finalizeOrder = document.getElementById('finalizeOrder')
const menu = document.getElementById('menu')
const cartItemsContainer = document.getElementById('cart-items')
const cartTotal = document.getElementById('cart-total')
const cartCounter = document.getElementById('cart-count')
const addressInput = document.getElementById('address')
const addressWarn = document.getElementById('address-warn')

let cart = [];

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

cartBtn.addEventListener('click', function(){
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





menu.addEventListener('click', function(event){
    // para saber qual icone foi clicado
    let parentButton = event.target.closest(".add-to-cart-btn")
    if(parentButton){
        // pegar atributo
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        // adicionar no carrinho
        addToCart(name,price)
    }
})

// função para adicionar no carrinho
function addToCart(name,price){
    // metodo que percorre a lista, faz uma verificação e se encontrar a condição devolve o item
    const existsInCart = cart.find(item => item.name === name)
    if(existsInCart){
        existsInCart.quantity += 1;
    }
    else{
        cart.push({
            name,
            price,
            quantity:1,
        }) 

    }
    updateCartModal()
   
}

// Atualiza carrinho

function updateCartModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0;
    //  função para percorrer a lista e fazer algo
    cart.forEach(item => {
        const cartItemsElement = document.createElement("div");
        cartItemsElement.classList.add("flex","justify-between")
        cartItemsElement.innerHTML = `
        <div">
            <div>
                <p>${item.name}</p>
                <p>${item.quantity}</p>
                <p>${item.price}</p>
            </div>
            <div>
                <button>
                    remover
                </button>
            </div>
        </div
        `
        cartItemsContainer.appendChild(cartItemsElement)
    })

}




