const ticketForm = document.querySelector('form');
const inputKm = document.getElementById('km');
const inputAge = document.getElementById('age');
const submit = document.querySelector('submit')
const printTicket = document.getElementById('print-ticket');


const PRICE_PER_KM = 0.21;

const calculateTicketPrice = (userKm, userAge) => {
    const basePrice = userKm * PRICE_PER_KM;

    if (userAge < 18) {
        return basePrice * 0.8;
    } else if (userAge > 65) {
        return basePrice * 0.6;
    } else {
        return basePrice;
    }
};

const displayPriceInPage = (finalPrice) => {
    printTicket.innerText = `€ ${finalPrice.toFixed(2)}`;
};

ticketForm.addEventListener('submit', (event) => {
    // No ricaricamento della pagina al submit 
    event.preventDefault();

    // valori dell'utente in numeri
    const kilometers = Number(inputKm.value);
    const age = Number(inputAge.value);

    // calcolo del prezzo usando la funzione
    const finalPrice = calculateTicketPrice(kilometers, age);

    console.log(`Prezzo finale calcolato: € ${finalPrice.toFixed(2)}`);

    // risultato nell'UI
    displayPriceInPage(finalPrice);
});