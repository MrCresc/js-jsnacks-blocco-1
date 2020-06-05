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
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

// Variabili
var bottoneJSnack3 = document.getElementById('bottone3');
var risultatoJSnack3 = document.getElementById('risultato3');
var numeroUtenteJSnack3;
// Aggiungo EventListener al click
bottoneJSnack3.addEventListener('click',
  function () {
    // Aggiungo reset in caso di re-click
    risultatoJSnack3.innerHTML = ""
    var sommaJSnack3 = 0
    // Determino ciclo per chiedere 5 volte un numero
    for (var i = 0; i < 5; i++) {
      numeroUtenteJSnack3 = parseInt(prompt("Digita un numero"))
      // Filtro input utente
      while (isNaN(numeroUtenteJSnack3)) {
        numeroUtenteJSnack3 = parseInt(prompt("Valore errato, digita un numero valido"))
      }
      sommaJSnack3 += numeroUtenteJSnack3
    }
    // Sommo tutti i numeri e scrivo totale nell'HTML
    risultatoJSnack3.innerHTML = "La somma dei 5 numeri digitati è " + sommaJSnack3;
  }
)

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
      risultatoJSnack4.innerHTML = "Complimenti " + nominativoUtenteJSnack4 + " puoi partecipare alla festa!";
    } else {
      risultatoJSnack4.innerHTML = "Ci dispiace " + nominativoUtenteJSnack4 + ", non puoi partecipare alla festa!";
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
    risultatoJSnack5.innerHTML = "";
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
    risultatoJSnack5.innerHTML ="La somma dei singoli numeri di " + numeroJSnack5 + " è " + totaleJSnack5;
  }
)

// -----------------------------------------------------------------------------
// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di invitati.

// Variabili
var bottoneJSnack6 = document.getElementById('bottone6')
var risultatoJSnack6 = document.getElementById('risultato6')
var nomiJSnack6 = ['Crescenzo','Alessandro','Nikolas','Chiara','Emanuela','Antonella','Fabio','Michele']
var cognomiJSnack6 = ['De Martino','Scolozzi','Sainato','Passaro','Buonocore','Ruggiero','Riitano','Ferrara']

// Aggiungo EventListener al click
bottoneJSnack6.addEventListener('click',
  function () {
    // Aggiungo reset in caso di re-click
    var arrayFinaleJSnack6 = []
    risultatoJSnack6.innerHTML = ""
    var numeroUtenteJSnack6 = parseInt(prompt('Quanti nominativi vuoi generare?'))
    for (var i = 0; i < numeroUtenteJSnack6; i++) {
      var numeroRandomNomiJSnack6 = randomize(nomiJSnack6)
      var numeroRandomCognomiJSnack6 = randomize(cognomiJSnack6)
      var nuovoNominativoJSnack6 = ' ' + nomiJSnack6[numeroRandomNomiJSnack6] + ' ' + cognomiJSnack6[numeroRandomCognomiJSnack6]
      arrayFinaleJSnack6.push(nuovoNominativoJSnack6)
    }
    risultatoJSnack6.innerHTML = arrayFinaleJSnack6
  }
)

function randomize(arg1) {
  numeroRandom = Math.floor(Math.random() * arg1.length);
  return numeroRandom;
}

// -----------------------------------------------------------------------------
// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Variabili
var bottoneJSnack7 = document.getElementById('bottone7')
var risultatoJSnack7 = document.getElementById('risultato7')

// Aggiungo EventListener al click
bottoneJSnack7.addEventListener('click',
  function () {
    var inputUtenteJSnack7
    var array1JSnack7 = [1,2,3,4,5]
    var array2JSnack7 = [1,2,3,4,5,6,7,8,9,10]
    risultatoJSnack7.innerHTML = ''

    while (array1JSnack7.length < array2JSnack7.length) {
      console.log(array1JSnack7)
      inputUtenteJSnack7 = prompt('Premi ok per aggiungere un altro elemento nel primo array')
      numeroRandomJSnack7 = Math.floor(Math.random() * 10) + 1;
      array1JSnack7.push(numeroRandomJSnack7)
      alert('Adesso i 2 array contengono [' + array1JSnack7 + '] ' + ' e ' + '[' + array2JSnack7 + ']')
    }

    alert('COMPLIMENTI!!! Adesso i 2 array contengono entrambi 10 elementi')
    risultatoJSnack7.innerHTML = 'Adesso i 2 array contengono entrambi 10 elementi [' + array1JSnack7 + '] ' + ' e ' + '[' + array2JSnack7 + ']'
  }
)
