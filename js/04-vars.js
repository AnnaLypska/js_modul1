const orderPieces = 8;
const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = pricePerDroid * orderPieces; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = 'Отменено пользователем!'
} else if (orderPieces >=0 && orderPieces <=7) {
  message = 'Вы купили '+ orderPieces +' дроидов, на счету осталось '+ balanceCredit +' кредитов'
} else if (orderPieces >=8){
  message =  'Недостаточно средств на счету!'
}

 console.log(message);
