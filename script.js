//   first Calss ////
document.getElementById('first-plus').addEventListener('click', function(){
    const firstCalss = document.getElementById('first').innerText;
    let first = parseInt(firstCalss)
    first++;
    document.getElementById('first').innerText = first;
    let subTotal = document.getElementById('sub-total').innerText;
    let subTotalC = parseInt(subTotal);
    const subAllTotal =  600;
    let totalS = subTotalC + subAllTotal;
    document.getElementById('sub-total').innerText = totalS;
    let vatA = document.getElementById('vat').innerText;
    let vatC = parseInt(vatA);
    const vatTotal = 90;
    let totalV = vatC + vatTotal;
    document.getElementById('vat').innerText = totalV;   
    let total = document.getElementById('total').innerText;
    let totalC = parseInt(total)
    let totalAmount = totalC + subAllTotal + vatTotal;
    document.getElementById('total').innerText = totalAmount;
})
document.getElementById('first-minus').addEventListener('click', function(){
    const firstCalss = document.getElementById('first').innerText;
    let first = parseInt(firstCalss)
    if (first>0) {
        first--;
    }
    document.getElementById('first').innerText = first;
    let subTotal = document.getElementById('sub-total').innerText;
    let subTotalC = parseInt(subTotal);
    if (subTotalC>0) {
        const subAllTotal = 600;
        let totalS = subTotalC - subAllTotal
    document.getElementById('sub-total').innerText = totalS;  
    let vatA = document.getElementById('vat').innerText;
    let vatC = parseInt(vatA);
    if (vatC>0) {
    const vatTotal = 90;
    let totalV = vatC - vatTotal;
    document.getElementById('vat').innerText = totalV;    
    let total = document.getElementById('total').innerText;
    let totalC = parseInt(total)
    let totalAmount = totalC - subAllTotal - vatTotal;
    document.getElementById('total').innerText = totalAmount;
    }
    }
})
/////business calss
document.getElementById('business-plus').addEventListener('click', function(){
    const businessCalss = document.getElementById('business').innerText;
    let business = parseInt(businessCalss)
    business++;
    document.getElementById('business').innerText = business;
    let subTotal = document.getElementById('sub-total').innerText;
    let subTotalC = parseInt(subTotal);
    const subAllTotal =  400;
    let totalS = subTotalC + subAllTotal;
    document.getElementById('sub-total').innerText = totalS;
    let vatA = document.getElementById('vat').innerText;
    let vatC = parseInt(vatA);
    const vatTotal = 60;
    let totalV = vatC + vatTotal;
    document.getElementById('vat').innerText = totalV;  
    let total = document.getElementById('total').innerText;
    let totalC = parseInt(total)
    let totalAmount = totalC + subAllTotal + vatTotal;
    document.getElementById('total').innerText = totalAmount;
})
document.getElementById('business-minus').addEventListener('click', function(){
    const businessCalss = document.getElementById('business').innerText;
    let business = parseInt(businessCalss)
    if (business>0) {
        business--;
    }
    document.getElementById('business').innerText = business;
    let subTotal = document.getElementById('sub-total').innerText;
    let subTotalC = parseInt(subTotal);  
    if (subTotalC>0) {
        const subAllTotal = 400;
        let totalS = subTotalC - subAllTotal
    document.getElementById('sub-total').innerText = totalS; 
    let vatA = document.getElementById('vat').innerText;
    let vatC = parseInt(vatA);
    if (vatC>0) {
    const vatTotal = 60;
    let totalV = vatC - vatTotal;
    document.getElementById('vat').innerText = totalV;  
    let total = document.getElementById('total').innerText;
    let totalC = parseInt(total)
    let totalAmount = totalC - subAllTotal - vatTotal;
    document.getElementById('total').innerText = totalAmount;
    }
    }
})
////economy calss
document.getElementById('economy-plus').addEventListener('click', function(){
    const economyCalss = document.getElementById('economy').innerText;
    let economy = parseInt(economyCalss)
    economy++;
    document.getElementById('economy').innerText = economy;
    let subTotal = document.getElementById('sub-total').innerText;
    let subTotalC = parseInt(subTotal);
    const subAllTotal =  300;
    let totalS = subTotalC + subAllTotal;
    document.getElementById('sub-total').innerText = totalS;
    let vatA = document.getElementById('vat').innerText;
    let vatC = parseInt(vatA);
    const vatTotal = 45;
    let totalV = vatC + vatTotal;
    document.getElementById('vat').innerText = totalV;   
    let total = document.getElementById('total').innerText;
    let totalC = parseInt(total)
    let totalAmount = totalC + subAllTotal + vatTotal;
    document.getElementById('total').innerText = totalAmount;
})
document.getElementById('economy-minus').addEventListener('click', function(){
    const economyCalss = document.getElementById('economy').innerText;
    let economy = parseInt(economyCalss)
    if (economy>0) {
        economy--;
    }
    document.getElementById('economy').innerText = economy;
    let subTotal = document.getElementById('sub-total').innerText;
    let subTotalC = parseInt(subTotal);
    if (subTotalC>0) {
        const subAllTotal = 300;
        let totalS = subTotalC - subAllTotal
    document.getElementById('sub-total').innerText = totalS;  
    let vatA = document.getElementById('vat').innerText;
    let vatC = parseInt(vatA);
    if (vatC>0) {
    const vatTotal = 45;
    let totalV = vatC - vatTotal;
    document.getElementById('vat').innerText = totalV;    
    let total = document.getElementById('total').innerText;
    let totalC = parseInt(total)
    let totalAmount = totalC - subAllTotal - vatTotal;
    document.getElementById('total').innerText = totalAmount;
    }
    }
})