// Il programma dovrà chiedere all'utente il numero di chilometri che vuole
    // percorrere e l'età del passeggero.
    // Sulla base di queste informazioni dovrà calcolare il prezzo totale del
    // viaggio, secondo queste regole:
    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
    // va applicato uno sconto del 20% per i minorenni
    // va applicato uno sconto del 40% per gli over 65.
    // L'output del prezzo finale va messo fuori in forma umana 
    // (con massimo due decimali, per indicare centesimi sul prezzo). 

    // Strumenti:
    // prompt
    // const
    // if/else
    // console.log()
    // document.getElementbyId

    // chiedi all'utente il numero di chilometri
    const numberKm = Number(prompt("Digita il numero di km"));
    console.log(numberKm);

    // chiedere all'utente l'età del passeggero
    const userAge = Number(prompt("Digita l' età del passeggero"));
    console.log(userAge);

    // Regole: prezzo del biglietto = (0.21 € al km)
    let ticket = (numberKm * 0.21);
    let discountTicket;
    console.log(ticket);

    // Sconto del 20% per i minorenni
    if (userAge < 18) {
      const discountTeen = ticket * 20 / 100;
      ticket = ticket - discountTeen;
      console.log(discountTeen, discountTicket);
    } else if (userAge > 65) {
      // Sconto 40% per gli over 65
      const discountOld = ticket * 40 / 100;
      ticket = ticket - discountOld;
      console.log(discountOld, discountTicket);
    } else {
    const ticket = (numberKm * 0.21);
      console.log(ticket);
    }

    // Stampo output
    const priceTicket = document.getElementById('price');
    console.log(priceTicket);
    priceTicket.innerHTML = `${ticket.toFixed(2)}€`;
    
    // Controllo se l'utente digita un numero
    if (isNaN(numberKm) || isNaN(userAge)) {
      alert("ERRORE!!! Devi inserire un numero");
      priceTicket.innerHTML = "Ricarica la pagina ed inserisci un numero dove richiesto";
    }

    // Controllo se l' utente digita un numero negativo
    if (ticket < 0 || userAge < 0) {
      alert("ERRORE!!! Hai inserito un numero negativo");
      priceTicket.innerHTML = "Ricarica la pagina ed inserisci un numero non negativo dove richiesto";
    }