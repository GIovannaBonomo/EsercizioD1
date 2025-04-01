//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* let num1 = 5
   let num2 = 4
   let risultato 
   if (num1 > num2){
   risultato=num1}
   else {
   risultato=num2}
  console.log ("il numero più grande è", risultato)
 */

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* let numero= 1
   if (numero < 5){
    console.log("Tiny")
   }
   if (numero < 10){
    console.log("Small")
   }
   if (numero < 15){
    console.log("Medium")
   }
   if (numero < 20){
    console.log("Large")
   }
   else (numero >= 20)
    console.log("Huge")
    */

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* for (let numero=0; numero <=10; numero++){
  if (numero === 3 || numero === 8)
{
continue
}
console.log (numero)} 
*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* 
for (let numero= 0; numero<=15; numero++)
{
    if ( numero % 2===0)
    console.log ("numero è pari")
else console.log ("numero è dispari")
}
*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*  
      let numero=4
            let numero2= 4
            risultato = numero + numero2
            risultato2 = numero - numero2
            if (risultato===8 || risultato2===0)
            { console.log ("Il risultato corretto è 8")}
            else 
            {console.log ("il risultato è sbagliato perchè è 0")}
*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* 
  let totalShoppingCart= 89
  let spezione= 0
   if (totalShoppingCart>= 50){
   spedizione = 0}
   else (
  spedizione=10)
  let totale= totalShoppingCart + spedizione
  {console.log (totale)}
 */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/*  
  let totalShoppingCart= 89
  let spezione= 0
  let totalSconto = totalShoppingCart * 80 /100
   if (totalShoppingCart>= 50){
   spedizione = 0}
   else (
  spedizione=10)
  let totale= totalSconto + spedizione
  {console.log ("Il totale del carrello è", totale, "euro")} 
*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* 
let gender = male
let isMale = famale


*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/