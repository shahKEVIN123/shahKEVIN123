let carts = document.querySelectorAll('.button');

let products = [
    {
        Name:'Glory Sarees',
        tag:'Glory Sarees',
        Price:2230,
        incart:0
    },
    {
        Name:'MANOHARI Banarasi',
        tag:'MANOHARI Banarasi',
        Price:2700,
        incart:0
    },
    {
        Name:'SATIKA VASTRAM',
        tag:'Silk3',
        Price:2999,
        incart:0
    },
    {
        Name:'Monjolika Fashion',
        tag:'Silk4',
        Price:1715,
        incart:0
    }
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartnumber(products[i])
        totalCost(products[i])
    })
}

function onLoacartnumber () {
    let productnumber = localStorage.getItem('cartnumber');

    if(productnumber) {
        document.querySelector('.cart span').textContent = productnumber;
    }
}

function cartnumber(product) {
   
    let productnumber = localStorage.getItem('cartnumber');
  
    productnumber = parseInt(productnumber);

    if(productnumber) {
        localStorage.setItem('cartnumber',productnumber + 1);
        document.querySelector('.cart span').textContent = productnumber + 1;
    }
    else{
        localStorage.setItem('cartnumber',1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].incart  += 1;
    }
    else 
    {
        product.incart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product) {
    //console.log("The product is",product.Price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartcost is", cartCost);
    console.log(typeof cartCost );

   if(cartCost != null)  {
    cartCost = parseInt(cartCost);
       localStorage.setItem("totalCost", cartCost + product.Price);
   }else {
    localStorage.setItem("totalCost",product.Price);
   }

}

function displayCart() {
    let cartItems =  localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productcontainer =  document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');


    console.log(cartItems);
    if ( cartItems && productcontainer) {
        productcontainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productcontainer.innerHTML += `
                <div class="remove">
                    <ion-icon name="close-circle-outline"></ion-icon>
                </div>
                <div class="p">
                    <img src="${item.tag}.jpg" width="30%"></img>
                    <span>${item.Name}</span>
                </div>
                <div class="price">
                    <span>${item.Price},00</span>
                </div>
                <div class="Quantity">
                    <ion-icon name="caret-back-outline"></ion-icon>
                    <span>${item.incart}</span>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </div>
                <div class="total">
                     ${item.incart * item.Price},00
                </div>
            `
        });

    }
}

onLoacartnumber();
displayCart();