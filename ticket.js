/ This is a basic ticket reservation script in Node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const availableTickets = 200;
let reservedTickets = 500;

function reserveTicket() {
  rl.question('How many tickets would you like to reserve? ', (answer) => {
    const numTickets = parseInt(answer);

    if (isNaN(numTickets) || numTickets <= 0) {
      console.log('Invalid input. Please enter a valid number.');
      reserveTicket();
    } else if (numTickets > availableTickets - reservedTickets) {
      console.log('Sorry, there are not enough tickets available.');
      reserveTicket();
    } else {
      reservedTickets += numTickets;
      console.log(`${numTickets} tickets reserved successfully!`);
      console.log(`Remaining tickets: ${availableTickets - reservedTickets}`);
      rl.close();
    }
  });
}

console.log(`Welcome to the Ticket Reservation System!`);
console.log(`Available tickets: ${availableTickets}`);

if (availableTickets > reservedTickets) {
  reserveTicket();
} else {
  console.log('Sorry, all tickets have been reserved.');
  rl.close();
}
