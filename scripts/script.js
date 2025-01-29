function calculatePrice(event) {
    event.preventDefault(); // Sprečava ponovno učitavanje stranice
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
    // Reset the form fields when the page loads
    document.getElementById("form").reset();
};

        
    