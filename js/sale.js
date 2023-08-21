function buyProduct(){
    const listConteiner = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = 'K. Accessories'
    li.classList.add('item');
    listConteiner.appendChild(li)

    
    const totalPrice = document.getElementById('accessories-price');
    const totalPriceText = totalPrice.innerText;
    const total =  parseFloat(totalPriceText);

    const productPrice = document.getElementById('product-price');
    const productPriceText = productPrice.innerText;
    const price = parseFloat(productPriceText);
    const totalAmount = total + price;
    

    const amountTotal = document.getElementById('product-price');
    amountTotal.innerText = totalAmount;
    const bill = document.getElementById('pay-bill');
    bill.innerText = totalAmount

    
    const purchaseButton = document.getElementById('purchase-button');

     if(totalAmount>0){
        purchaseButton.removeAttribute('disabled')
     }
     else{
        purchaseButton.setAttribute('disabled',true)
     }


     const applyButton = document.getElementById('apply')


     if(totalAmount>200){
        applyButton.removeAttribute('disabled');

     }
     else{
        applyButton.setAttribute('disabled',true)
     }


     document.getElementById('inputfild').addEventListener('keyup',function(event){
        const text = event.target.value;
        if(totalAmount>200 && text==='SELL200'){
            
            const charr = totalAmount * 0.2
            const bill = document.getElementById('pay-bill')
            bill.innerText = totalAmount - charr
            
            const discount = document.getElementById("discount");
            discount.innerText = charr
        }
        else{
            discount.innerText = discount 
            bill.innerText = totalAmount
        }
     })
 

 

}

function buyProduct2(){
    const listConteiner = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = 'Kitchen Set'
    li.classList.add('item');
    listConteiner.appendChild(li)

    const productPrice2 = document.getElementById('product-price2');
    const productPriceText2 = productPrice2.innerText;
    const price2 = parseFloat(productPriceText2);
    
    const productPrice = document.getElementById('product-price');
    const productPriceText = productPrice.innerText;
    const price = parseFloat(productPriceText);

    const totalAmount = price + price2;
    const amountTotal = document.getElementById('product-price');
    amountTotal.innerText = totalAmount;
    const bill = document.getElementById('pay-bill');
    bill.innerText = totalAmount

    const purchaseButton = document.getElementById('purchase-button');

     if(totalAmount>0){
        purchaseButton.removeAttribute('disabled')
     }
     else{
        purchaseButton.setAttribute('disabled',true)
     }

     const applyButton = document.getElementById('apply')


     if(totalAmount>200){
        applyButton.removeAttribute('disabled');

     }
     else{
        applyButton.setAttribute('disabled',true)
     }

     document.getElementById('inputfild').addEventListener('keyup',function(event){
        const text = event.target.value;
        if(totalAmount>200 && text==='SELL200'){
            
            const charr = totalAmount * 0.2
            const bill = document.getElementById('pay-bill')
            bill.innerText = totalAmount - charr
            
            const discount = document.getElementById("discount");
            discount.innerText = charr
        }
        else{
            discount.innerText = discount 
            bill.innerText = totalAmount
        }
     })

}


function buyProduct3(){
    const listConteiner = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = 'Home Cooker'
    li.classList.add('item');
    listConteiner.appendChild(li)

    const productPrice2 = document.getElementById('product-price2');
    const productPriceText2 = productPrice2.innerText;
    const price2 = parseFloat(productPriceText2);
    
    const productPrice = document.getElementById('product-price');
    const productPriceText = productPrice.innerText;
    const price = parseFloat(productPriceText);

    const totalAmount = price + price2;
    const bill = document.getElementById('pay-bill');
    bill.innerText = totalAmount
    const amountTotal = document.getElementById('product-price');
    amountTotal.innerText = totalAmount;

    const purchaseButton = document.getElementById('purchase-button');

     if(totalAmount>0){
        purchaseButton.removeAttribute('disabled')
     }
     else{
        purchaseButton.setAttribute('disabled',true)
     }


     const applyButton = document.getElementById('apply')


     if(totalAmount>200){
        applyButton.removeAttribute('disabled');

     }
     else{
        applyButton.setAttribute('disabled',true)
     }
     document.getElementById('inputfild').addEventListener('keyup',function(event){
        const text = event.target.value;
        if(totalAmount>200 && text==='SELL200'){
            
            const charr = totalAmount * 0.2
            const bill = document.getElementById('pay-bill')
            bill.innerText = totalAmount - charr
            
            const discount = document.getElementById("discount");
            discount.innerText = charr
        }
        else{
            discount.innerText = discount 
            bill.innerText = totalAmount
        }
     })
}

function buyProduct4(){
    const listConteiner = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = 'Sports Back Cap'
    li.classList.add('item');
    listConteiner.appendChild(li)

    const productPrice2 = document.getElementById('product-price4');
    const productPriceText2 = productPrice2.innerText;
    const price2 = parseFloat(productPriceText2);
    
    const productPrice = document.getElementById('product-price');
    const productPriceText = productPrice.innerText;
    const price = parseFloat(productPriceText);

    const totalAmount = price + price2;
    const bill = document.getElementById('pay-bill');
    bill.innerText = totalAmount
    const amountTotal = document.getElementById('product-price');
    amountTotal.innerText = totalAmount;

    const purchaseButton = document.getElementById('purchase-button');

    if(totalAmount>0){
       purchaseButton.removeAttribute('disabled')
    }
    else{
       purchaseButton.setAttribute('disabled',true)
    }
    const applyButton = document.getElementById('apply')


    if(totalAmount>200){
       applyButton.removeAttribute('disabled');

    }
    else{
       applyButton.setAttribute('disabled',true)
    }
    document.getElementById('inputfild').addEventListener('keyup',function(event){
        const text = event.target.value;
        if(totalAmount>200 && text==='SELL200'){
            
            const charr = totalAmount * 0.2
            const bill = document.getElementById('pay-bill')
            bill.innerText = totalAmount - charr
            
            const discount = document.getElementById("discount");
            discount.innerText = charr
        }
        else{
            discount.innerText = discount 
            bill.innerText = totalAmount
        }
     })
}

function buyProduct5(){
    const listConteiner = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = 'Full Jersey Set'
    li.classList.add('item');
    listConteiner.appendChild(li)

    const productPrice2 = document.getElementById('product-price5');
    const productPriceText2 = productPrice2.innerText;
    const price2 = parseFloat(productPriceText2);
    
    const productPrice = document.getElementById('product-price');
    const productPriceText = productPrice.innerText;
    const price = parseFloat(productPriceText);

    const totalAmount = price + price2;
    const bill = document.getElementById('pay-bill');
    bill.innerText = totalAmount
    const amountTotal = document.getElementById('product-price');
    amountTotal.innerText = totalAmount;

    const purchaseButton = document.getElementById('purchase-button');

    if(totalAmount>0){
       purchaseButton.removeAttribute('disabled')
    }
    else{
       purchaseButton.setAttribute('disabled',true)
    }
    const applyButton = document.getElementById('apply')


    if(totalAmount>200){
       applyButton.removeAttribute('disabled');

    }
    else{
       applyButton.setAttribute('disabled',true)
    }
    document.getElementById('inputfild').addEventListener('keyup',function(event){
        const text = event.target.value;
        if(totalAmount>200 && text==='SELL200'){
            
            const charr = totalAmount * 0.2
            const bill = document.getElementById('pay-bill')
            bill.innerText = totalAmount - charr
            
            const discount = document.getElementById("discount");
            discount.innerText = charr
        }
        else{
            discount.innerText = discount 
            bill.innerText = totalAmount
        }
     })
}

function buyProduct6(){
    const listConteiner = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = 'Sports cates'
    li.classList.add('item');
    listConteiner.appendChild(li)

    const productPrice2 = document.getElementById('product-price6');
    const productPriceText2 = productPrice2.innerText;
    const price2 = parseFloat(productPriceText2);
    
    const productPrice = document.getElementById('product-price');
    const productPriceText = productPrice.innerText;
    const price = parseFloat(productPriceText);

    const totalAmount = price + price2;
    const bill = document.getElementById('pay-bill');
    bill.innerText = totalAmount
    const amountTotal = document.getElementById('product-price');
    amountTotal.innerText = totalAmount;

    const purchaseButton = document.getElementById('purchase-button');

     if(totalAmount>0){
        purchaseButton.removeAttribute('disabled')
     }
     else{
        purchaseButton.setAttribute('disabled',true)
     }
     const applyButton = document.getElementById('apply')


     if(totalAmount>200){
        applyButton.removeAttribute('disabled');

     }
     else{
        applyButton.setAttribute('disabled',true)
     }
     document.getElementById('inputfild').addEventListener('keyup',function(event){
        const text = event.target.value;
        if(totalAmount>200 && text==='SELL200'){
            
            const charr = totalAmount * 0.2
            const bill = document.getElementById('pay-bill')
            bill.innerText = totalAmount - charr
            
            const discount = document.getElementById("discount");
            discount.innerText = charr
        }
        else{
            discount.innerText = discount 
            bill.innerText = totalAmount
        }
     })
}



function homeButton(){
    window.location.href='index.html';
}
    
    