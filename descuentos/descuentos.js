const precioOriginal = 120;
const descuento = 15;

function  precioDescuento (descuento, precioOriginal)  {
    return (((100 - parseInt(descuento)) * (precioOriginal))/100)
} 

precioFinal = precioDescuento(descuento, precioOriginal);
console.log({
    precioOriginal,
    descuento,
    precioFinal
    
})

function priceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    let priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    let discountValue = inputDiscount.value;
    const precioFinal = precioDescuento(discountValue, priceValue)
    const result = document.getElementById("result");
    result.innerText = "El precio con descuento es " + precioFinal;
}