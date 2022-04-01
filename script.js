// Mon panier de fruits
let bananas = 12;
let apples = 8;
let clementines = 16;
let totalOfFruits = bananas + apples + clementines;

console.log(totalOfFruits + " Total de fruits")

bananas = (bananas - (bananas / 4));
apples = (apples - (apples / 2) + (apples * 0.25));
clementines = (clementines - 2);

let totalOfFruitsLeft = bananas + apples + clementines;


console.log("Fruits Restant")
console.log(bananas + " bananes")
console.log(apples + " pommes")
console.log(clementines + " clementines")

console.log("Total de fruits Restant Après la catastrophe : " + totalOfFruitsLeft)

console.log("Total des fruits Perdue : " + (totalOfFruits - totalOfFruitsLeft))



//  Passage en librairie
let bookPrice = 14.50;
let booksBuy = bookPrice * 4;

let moneyInMyPocket = (booksBuy / 3) - 5.50;

console.log("Somme que j'ai en poche : " + moneyInMyPocket.toFixed(2) + " €")



//  Series addict
let numberOfSeasons = 6;
let numberOfEpisodes = 12;

let episodeTime = 50;
let commercialTime = 4;

let totalShowTime = ((episodeTime + commercialTime) * numberOfEpisodes * numberOfSeasons);
console.log(totalShowTime + " minutes")


function time_convert() {
    const totalHours = Math.floor(totalShowTime / 60);
    const totalMinutes = totalShowTime % 60;
    return totalHours + " heures et " + totalMinutes+" minutes... ";
}
// alert("Vous avez passe " + time_convert() + "quelle endurance !");
console.log("Vous avez passe " + time_convert() + "quelle endurance !");

// function time_convert(num)
//  { 
//   const hours = Math.floor(num / 60);  
//   const minutes = num % 60;
//   return hours + ":" + minutes;           
// }



// J’aime les chemises
const nbChemises = 96;
const payImployee = 8 * 68;
const diver = 99.20 ;
const prixTissueChemises = (3.60 * 3) * nbChemises;

const totalCost = prixTissueChemises + payImployee + diver;
const shirtCost = totalCost / nbChemises;
console.log("Wouuuh ! J'ai " + nbChemises + " chemises a' "+ shirtCost.toFixed(2)+"€" + " l'unite'"+ " Prix totale de la commande : " + totalCost.toFixed(2)+"€")



// Tour de France
const totKm = 196;
const timeEtapeFoix = 5.566667;

const vitesseMoyenne = totKm/timeEtapeFoix;
console.log("vitesse moyenne: " + Math.round(vitesseMoyenne*100)/100 + " km/h");

// 196 km 
// 5h 34m = 334 min

// Quelle a été sa vitesse moyenne (en km/h) ?
// Utilisez Math.round(maVar * 100) / 100 pour ne garder que 2 chiffres après la virgule 
// Math.round(speed * 100) / 100


// Etat civil
// let femmeAge = ()
const nocesDor = 50;
const nonnaAge = 18 + nocesDor;
const nonnoAge = (18/3)*4 + nocesDor;
console.log("La femme a "+ nonnaAge + " ans"+" et l’homme "+nonnoAge+" ans.")


// 7. Lille-Marseille

let distance = 1000;
let departTime = moment('2014-02-04 09:00:00');          
let trainsSpeed = 100;
let moucheSpeed = 150;

let tempTrajetsTrains = distance/trainsSpeed;              

let arriveeTime = departTime.add(tempTrajetsTrains, 'hours');   

let halfTime = tempTrajetsTrains / 2;
let TrajetMouche = halfTime * moucheSpeed;



// console.log(halfTime)

// https://momentjs.com/guides/



console.log(tempTrajetsTrains + "h de trajet")
console.log("Les trains arrive le" + arriveeTime.format(' D MMMM [a] h:mm a'))
console.log("La mouche a parcurue " + TrajetMouche + " Km")



// Lille et Marseille sont séparées par un chemin de fer long de 1000km. 

// A 9h, par une matinée brumeuse du 4 février 2014, un train part de Lille vers Marseille à une vitesse de 100km/h.

// Au même moment, un autre train part de Marseille vers Lille, à la même vitesse.

// Toujours au même moment, une mouche part à 150km/h du premier train et commence un aller-retour ininterrompu entre les deux trains.

// Au moment où les 2 trains vont se croiser, quelle distance la moche aura-t-elle parcourue ?


	
// Affichez dans la console « La mouche a parcouru __km au moment du croisement des trains. »


