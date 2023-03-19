/*
1 chiedi all'utente il suo nome

2 chiedi all'utente il suo cognome

3 chiedi all'utente il suo colore preferito

4 collega tutti i punti

*/

// chiedo il nome
const nome = prompt('Come ti chiami?')

// chiedo il cognome
const cognome = prompt('Qual è il tuo cognome?')

//chiedo il colore
const color =  prompt('Qual è il tuo colore preferito?')



//collego tutti i punti
const outputStr = `
Ciao ${nome + '' + cognome} <br>
Il tuo colore preferito è il ${color}
`


//rendo visibile il javascript in html
document.getElementById("output").innerHTML = outputStr


 