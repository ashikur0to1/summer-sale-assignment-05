function addToCartAndCalculation(cardTitleId, productEnlistCartAreaId, cardPriceId, cartTotalPriceId, couponApplyButtonId, couponCodeInputFieldId, cartDiscountPriceAreaId, cartTotalId, cartPurchaseButtonId, goHomeButtonId){
    const cardTitle = document.getElementById(cardTitleId).innerText;
    const productEnlistCartArea = document.getElementById(productEnlistCartAreaId);
    const productCount = productEnlistCartArea.childElementCount;
    const p = document.createElement("p");
    p.innerHTML = `${productCount+1}. ${cardTitle}`;
    p.style.fontSize = "24px";
    p.style.fontWeight = 500;
    productEnlistCartArea.appendChild(p);
    const cardPriceString = document.getElementById(cardPriceId).innerText;
    const cardPrice = parseFloat(cardPriceString);
    const cartTotalPriceString = document.getElementById(cartTotalPriceId).innerText;
    let cartTotalPrice = parseFloat(cartTotalPriceString);
    cartTotalPrice = cartTotalPrice + cardPrice;
    document.getElementById(cartTotalPriceId).innerText = cartTotalPrice;
    let couponApplyButton = document.getElementById(couponApplyButtonId);
    if(cartTotalPrice >= 200){
        couponApplyButton.removeAttribute("disabled");
        couponApplyButton.style.backgroundColor = "#E527B2";
    }

    document.getElementById(couponApplyButtonId).addEventListener("click", function(){
        let couponCodeInputFieldArea = document.getElementById(couponCodeInputFieldId);
        let couponCodeValue = couponCodeInputFieldArea.value;
        if(couponCodeValue == "SELL200"){
            const cartDiscountPrice = (cartTotalPrice * 20)/100;
            const cartDiscountPriceArea = document.getElementById(cartDiscountPriceAreaId);
            cartDiscountPriceArea.innerText = cartDiscountPrice;
            const cartTotal = document.getElementById(cartTotalId);
            cartTotal.innerText = cartTotalPrice - cartDiscountPrice;
        }
    })

    let cartPurchaseButton = document.getElementById(cartPurchaseButtonId);
    if(cartTotalPrice > 0){
        cartPurchaseButton.removeAttribute("disabled");
        cartPurchaseButton.style.backgroundColor = "#E527B2";
    }

    document.getElementById(goHomeButtonId).addEventListener("click", function(){
        document.getElementById(cartTotalPriceId).innerText = 0;
        document.getElementById(cartDiscountPriceAreaId).innerText = 0;
        document.getElementById(cartTotalId).innerText = 0;
        document.getElementById(productEnlistCartAreaId).removeChild(p);
        cartPurchaseButton.setAttribute("disabled", "true");
        cartPurchaseButton.style.backgroundColor = "#11111180";
        couponApplyButton.setAttribute("disabled", "true");
        couponApplyButton.style.backgroundColor = "#11111180";
        document.getElementById(couponCodeInputFieldId).value = "";
    })
}