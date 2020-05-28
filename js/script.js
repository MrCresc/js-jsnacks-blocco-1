// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

// Variabili
var bottoneJSnack1 = document.getElementById('bottone1')
var risultatoJSnack1 = document.getElementById('risultato1');

// Aggiungo EventListener al click
bottoneJSnack1.addEventListener('click',
  function () {
    // Aggiungo reset in caso di re-click
    var numero1JSnack1
    var numero2JSnack1
    risultatoJSnack1.innerHTML ="";
    // Filtro 1 input utente
    while ( numero1JSnack1 = 0 || isNaN(numero1JSnack1) ) {
      numero1JSnack1 = parseInt(prompt("Digita un numero"));
      var valore1JSnack1 = numero1JSnack1
    }
    // Filtro 2 input utente
    while (  numero2JSnack1 = 0 || isNaN(numero2JSnack1) ) {
      numero2JSnack1 = parseInt(prompt("Digita un altro numero"));
      var valore2JSnack1 = numero2JSnack1
    }
    // Determino e scrivo il numero maggiore
    if (valore1JSnack1 > valore2JSnack1) {
      risultatoJSnack1.innerHTML = "Il numero maggiore è il primo ovvero " + valore1JSnack1;
    } else if (valore1JSnack1 < valore2JSnack1) {
      risultatoJSnack1.innerHTML = "Il numero maggiore è il secondo ovvero " + valore2JSnack1;
    } else {
      risultatoJSnack1.innerHTML = "I numeri sono uguali";
    }
  }
)
// -----------------------------------------------------------------------------
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

// Variabili
var bottoneJSnack2 = document.getElementById('bottone2');
var risultatoJSnack2 = document.getElementById('risultato2');

// Aggiungo EventListener al click
bottoneJSnack2.addEventListener('click',
  function () {
    // Aggiungo reset in caso di re-click
    risultatoJSnack2.innerHTML = ""
    var primaParolaJSnack2 = prompt("Inserisci una parola")
    var secondaParolaJSnack2 = prompt("Inserisci un'altra parola")
    // Determino e scrivo prima la parola più corta e dopo quella più lunga
    if ( primaParolaJSnack2.length < secondaParolaJSnack2.length ) {
      risultatoJSnack2.innerHTML = "\"" + primaParolaJSnack2 + "\"" + " è una parola più corta di " + "\"" + secondaParolaJSnack2 + "\"";
    } else if ( primaParolaJSnack2.length > secondaParolaJSnack2.length ) {
      risultatoJSnack2.innerHTML = "\"" + secondaParolaJSnack2 + "\"" + " è una parola più corta di " + "\"" + primaParolaJSnack2 + "\"";
    } else {
      risultatoJSnack2.innerHTML = "\"" + primaParolaJSnack2 + "\"" + " è della stessa lunghezza di " + "\"" + secondaParolaJSnack2 + "\""
    }
  }
)
// -----------------------------------------------------------------------------

// JSnack3 WORK IN PROGRESS

// -----------------------------------------------------------------------------
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

// Variabili
var bottoneJSnack4 = document.getElementById('bottone4');
var risultatoJSnack4 = document.getElementById('risultato4');
var arrayJSnack4 = ["Crescenzo","Alessandro","Marco","Gian","Fabio","Michele"]
// Aggiungo EventListener al click
bottoneJSnack4.addEventListener('click',
  function () {
    // Aggiungo reset in caso di re-click
    risultatoJSnack4.innerHTML = "";
    var nominativoUtenteJSnack4 = prompt("Inserire il nominativo")
    var okJSnack4 = false;
    // Verifico la presenza del nominativo
    for (var i = 0; i < arrayJSnack4.length; i++) {
      if ( nominativoUtenteJSnack4 === arrayJSnack4[i] ) {
        okJSnack4 = true;
      }
    }
    // Determino e scrivo l'esito della verifica
    if (okJSnack4) {
      risultatoJSnack4.innerHTML = "Complimenti puoi partecipare alla festa!";
    } else {
      risultatoJSnack4.innerHTML = "Ci dispiace, non puoi partecipare alla festa!";
    }
  }
)

// -----------------------------------------------------------------------------
// Chiedi un numero di 4 cifre all’utente e calcola
// la somma di tutte le cifre che compongono il numero.

// Variabili
var bottoneJSnack5 = document.getElementById('bottone5')
var risultatoJSnack5 = document.getElementById('risultato5');
var numeroJSnack5;
var totaleJSnack5 = 0;

// Aggiungo EventListener al click
bottoneJSnack5.addEventListener('click',
  function () {
    // Aggiungo reset in caso di re-click
    numeroJSnack5 = 0;
    totaleJSnack5 = 0;
    risultatoJSnack5.innerHTML ="";
    // Filtro input utente
    while ( !( numeroJSnack5>=1000 && numeroJSnack5<=9999 ) ) {
      numeroJSnack5 = prompt("Scrivi un numero di 4 cifre");
    }
    // Converto numero in stringa e splitto per creare array
    var numeroLettereJSnack5 = numeroJSnack5.toString()
    numeroSplittatoJSnack5 = numeroLettereJSnack5.split("");
    // Eseguo il ciclo
    for (var i = 0; i < numeroSplittatoJSnack5.length; i++) {
      // Riconverto i valori dell'array in numeri
      var numeroSplitConvJSnack5 = parseInt(numeroSplittatoJSnack5[i]);
      // Addiziono i valori dell'array
      totaleJSnack5 += numeroSplitConvJSnack5;
    }
    // Scrivo il risultato nell'HTML
    risultatoJSnack5.innerHTML ="La somma dei singoli numeri è " + totaleJSnack5;
  }
)