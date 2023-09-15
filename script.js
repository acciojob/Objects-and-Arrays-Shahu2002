const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

 var team = players;

    // Create a shallow copy of the 'players' array
    var team1 = players.slice();

    // Create a shallow copy of the 'person' object
    var cap1 = Object.assign({}, person);

    // You can now use 'team', 'team1', and 'cap1' as needed
    console.log("Team:", team);
    console.log("Team1:", team1);
    console.log("Cap1:", cap1);