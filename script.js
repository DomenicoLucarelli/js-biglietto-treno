/*
-chiedo chilometri da percorrere e memorizzo
-chiedo età e memorizzo
-calcolo prezzo totale senza eventuali sconti (0.21 * numero km da percorrere)
-? SE minorenne scontare del 20 %
-: ALTRIMENTI ? SE età maggiore di 65 scontare del 40 %
-: ALTRIMENTI non applicare sconti e visualizzare direttamente il totale 
*/

let distanza = parseFloat( prompt("Inserisci chilometri da percorrere")).toFixed(2);
// console.log(distanza);

let eta = parseInt(prompt("Inserisci la tua eta"));
// console.log(eta);

let prezzoNonScontato = (0.21 * distanza);
// console.log(prezzoNonScontato);

if(eta<18){

    let prezzoFinale = ( prezzoNonScontato - (prezzoNonScontato * 20 / 100 ) )
    document.writeln("Il costo del biglietto è " + prezzoFinale.toFixed(2) + " €")

}else if(eta>65){

                let prezzoFinale = ( prezzoNonScontato - (prezzoNonScontato * 40 / 100 ) )
                document.writeln("Il costo del biglietto è " + prezzoFinale.toFixed(2) + " €")


                }else{

                document.writeln("Il costo del biglietto è " + prezzoNonScontato.toFixed(2) + " €" )

                }

