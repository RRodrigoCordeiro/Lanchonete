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
        cartItemsElement.classList.add("flex","justify-between",)
        cartItemsElement.innerHTML = `
        <div class="cart-style">
            <div>
                <p>${item.name}</p>
                <p>${item.quantity}</p>
                <p>${item.price.toFixed(2)}</p>
            </div>
                <button class="romove-btn" data-name="${item.name}">
                    remover
                </button>
            
        </div
        `

        total += item.price * item.quantity
        cartItemsContainer.appendChild(cartItemsElement)
    })
// formatação para a moeda em real
    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    cartCounter.innerHTML = cart.length;
}

// Função remover o item no carrinho

cartItemsContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("romove-btn")){
        const name = event.target.getAttribute("data-name")
        removeItemCart(name)
    }
})

function removeItemCart(name){
    const index = cart.findIndex(item => item.name === name);

    if(index !== -1){
        const item = cart[index];

        if(item.quantity > 1){
            item.quantity -= 1;
            updateCartModal()
            return;
        }
// splice remove o lista da lista
        cart.splice(index,1);
        updateCartModal()
    }
}











