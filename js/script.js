// kitchenware First Card JS Code
document.getElementById("kitchenware-first-card").addEventListener("click", function(){
    const kitchenwareFirstCardTitle = document.getElementById("kitchenware-first-card-title").innerText;
    const cartEntryArea = document.getElementById("cart-entry");
    const count = cartEntryArea.childElementCount;
    const p = document.createElement("p");
    p.innerHTML = `${count+1}. ${kitchenwareFirstCardTitle}`;
    p.style.fontSize = "24px";
    p.style.fontWeight = 500;
    cartEntryArea.appendChild(p);
    const kitchenwareFirstCardPriceString = document.getElementById("kitchenware-first-card-price").innerText;
    const kitchenwareFirstCardPrice = parseFloat(kitchenwareFirstCardPriceString);
    const totalPriceString = document.getElementById("total-price").innerText;
    let totalPrice = parseFloat(totalPriceString); 
    totalPrice = totalPrice + kitchenwareFirstCardPrice;
    document.getElementById("total-price").innerText = totalPrice;
    const applyButton = document.getElementById("apply-btn");
    if(totalPrice >= 200){
        applyButton.removeAttribute("disabled");
        applyButton.style.backgroundColor = "#E527B2";
    }

    document.getElementById("apply-btn").addEventListener("click", function(){
        const couponCodeInputField = document.getElementById("coupon-code-input-field");
        const couponCode = couponCodeInputField.value;
        if(couponCode == "SELL200"){
            const discountPrice = (totalPrice * 20)/100;
            const discount = document.getElementById("discount");
            discount.innerText = discountPrice;
            const total = document.getElementById("total");
            total.innerText = totalPrice - discountPrice;
        }
    })

    const purchaseButton = document.getElementById("purchase-btn");
    if(totalPrice > 0){
        purchaseButton.removeAttribute("disabled");
        purchaseButton.style.backgroundColor = "#E527B2";
    }

    document.getElementById("go-home-btn").addEventListener("click", function(){
        document.getElementById("total-price").innerText = 0;
        document.getElementById("discount").innerText = 0;
        document.getElementById("total").innerText = 0;
        document.getElementById("cart-entry").removeChild(p);
    })
})

// kitchenware Second Card JS Code
document.getElementById("kitchenware-second-card").addEventListener("click", function(){
    const kitchenwareSecondCardTitle = document.getElementById("kitchenware-second-card-title").innerText;
    const cartEntryArea = document.getElementById("cart-entry");
    const count = cartEntryArea.childElementCount;
    const p = document.createElement("p");
    p.innerHTML = `${count+1}. ${kitchenwareSecondCardTitle}`;
    p.style.fontSize = "24px";
    p.style.fontWeight = 500;
    cartEntryArea.appendChild(p);
    const kitchenwareSecondCardPriceString = document.getElementById("kitchenware-second-card-price").innerText;
    const kitchenwareSecondCardPrice = parseFloat(kitchenwareSecondCardPriceString);
    const totalPriceString = document.getElementById("total-price").innerText;
    var totalPrice = parseFloat(totalPriceString);
    totalPrice = totalPrice + kitchenwareSecondCardPrice;
    document.getElementById("total-price").innerText = totalPrice;
    const applyButton = document.getElementById("apply-btn");
    if(totalPrice >= 200){
        applyButton.removeAttribute("disabled");
        applyButton.style.backgroundColor = "#E527B2";
    }

    document.getElementById("apply-btn").addEventListener("click", function(){
        const couponCodeInputField = document.getElementById("coupon-code-input-field");
        const couponCode = couponCodeInputField.value;
        if(couponCode == "SELL200"){
            const discountPrice = (totalPrice * 20)/100;
            const discount = document.getElementById("discount");
            discount.innerText = discountPrice;
            const total = document.getElementById("total");
            total.innerText = totalPrice - discountPrice;
        }
    })

    const purchaseButton = document.getElementById("purchase-btn");
    if(totalPrice > 0){
        purchaseButton.removeAttribute("disabled");
        purchaseButton.style.backgroundColor = "#E527B2";
    }

    document.getElementById("go-home-btn").addEventListener("click", function(){
        document.getElementById("total-price").innerText = 0;
        document.getElementById("discount").innerText = 0;
        document.getElementById("total").innerText = 0;
        document.getElementById("cart-entry").removeChild(p);
    })
})

// kitchenware Third Card JS Code
document.getElementById("kitchenware-third-card").addEventListener("click", function(){
    const kitchenwareThirdCardTitle = document.getElementById("kitchenware-third-card-title").innerText;
    const cartEntryArea = document.getElementById("cart-entry");
    const count = cartEntryArea.childElementCount;
    const p = document.createElement("p");
    p.innerHTML = `${count+1}. ${kitchenwareThirdCardTitle}`;
    p.style.fontSize = "24px";
    p.style.fontWeight = 500;
    cartEntryArea.appendChild(p);
    const kitchenwareThirdCardPriceString = document.getElementById("kitchenware-third-card-price").innerText;
    const kitchenwareThirdCardPrice = parseFloat(kitchenwareThirdCardPriceString);
    const totalPriceString = document.getElementById("total-price").innerText;
    let totalPrice = parseFloat(totalPriceString);
    totalPrice = totalPrice + kitchenwareThirdCardPrice;
    document.getElementById("total-price").innerText = totalPrice;
    const applyButton = document.getElementById("apply-btn");
    if(totalPrice >= 200){
        applyButton.removeAttribute("disabled");
        applyButton.style.backgroundColor = "#E527B2";
    }

    document.getElementById("apply-btn").addEventListener("click", function(){
        const couponCodeInputField = document.getElementById("coupon-code-input-field");
        const couponCode = couponCodeInputField.value;
        if(couponCode == "SELL200"){
            const discountPrice = (totalPrice * 20)/100;
            const discount = document.getElementById("discount");
            discount.innerText = discountPrice;
            const total = document.getElementById("total");
            total.innerText = totalPrice - discountPrice;
        }
    })

    const purchaseButton = document.getElementById("purchase-btn");
    if(totalPrice > 0){
        purchaseButton.removeAttribute("disabled");
        purchaseButton.style.backgroundColor = "#E527B2";
    }

    document.getElementById("go-home-btn").addEventListener("click", function(){
        document.getElementById("total-price").innerText = 0;
        document.getElementById("discount").innerText = 0;
        document.getElementById("total").innerText = 0;
        document.getElementById("cart-entry").removeChild(p);
    })
})






