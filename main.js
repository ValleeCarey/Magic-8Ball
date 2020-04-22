//user can input his or her name
let userName = 'Hanes'

//ternary expression to log username or just say hello

userName ? console.log(`Hello, ${userName}`): console.log('Hello!');

//variable to ask the magic eightball
const userQuestion = 'Will I become rich?'
//log the question and the person who ask
console.log(`${userName}: ` + userQuestion)
//creating random whole number 0 to 7 
const randomNumber = Math.floor(Math.random() * 7);
//depending on randomnumber eightball will be filled
let eightBall = ''
//switch statement for 8ball phrases 
switch (randomNumber) {

  case 0: //randomNumber 0 this will log
  eightBall ='It is certain';
  break;

  case 1:
  eightBall='It is decidedly so';
  break;

  case 2:
  eightBall='Come again';
  break;

  case 3:
  eightBall='Cannot predict now';
  break;

  case 4:
  eightBall='Do not count on it';
  break;

  case 5:
  eightBall='My sources say no';
  break;

  case 6:
  eightBall='Outlook not so good';
  break;

   case 7:
  eightBall='Signs point to yes';
  break;
}

console.log(`The eight ball answered: ${eightBall}`);
