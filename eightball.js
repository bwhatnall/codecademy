let userName = 'Jana';
let userQuestion = 'How high are you?'
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello");
console.log(userQuestion);

switch (randomNumber) {
  case 0:
    eightBall = 'Sober as a duck in the rain';
    break;
  case 1:
    eightBall = 'Bekca in Queenstown Fucked';
    break;
   case 2:
    eightBall = 'Lost my Ketamine in Berghain High';
    break;
   case 3:
    eightBall = 'Took the whole pill in Kater-Blau';
    break;
   case 4:
    eightBall = 'Acid + Ketamine and Jana has to carry me to Relish Dance Floor High';
    break;
   case 5:
    eightBall = 'Cap D Agde Spanked in the Dungeon High';
    break;
   case 6:
    eightBall = 'First time MDMA using a double ended dildo high';
    break;
   case 7:
    eightBall = 'High in a cabin in Austria with Basti High';
    break;
}

console.log(`You are ${eightBall}`);