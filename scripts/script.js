function calculatePrice(event) {
    event.preventDefault(); 
    const days = document.getElementById("days").value;
    const basePrice = 240;
    let totalPrice;

    if (days >= 2) {
        totalPrice = days * basePrice * 0.85; 
    } else {
        totalPrice = days * basePrice; 
    }
    document.getElementById("total-price").innerText = `Cijena: ${totalPrice}€`;
}

window.onload = function() {
    document.getElementById("form").reset();
};

        
    