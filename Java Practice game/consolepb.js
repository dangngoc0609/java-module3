
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney =10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amydroid", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames)
 {window.alert("Welcome to Robot Gladiators!")}


 
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle");
        if (promptFight === "fight" || promptFight === "FIGHT") 
       // remove enemy's health by subtracting the amount set in the playerAttack variable
{ //enemy'health
    enemyHealth = enemyHealth-playerAttack;
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " +  enemyHealth + "health remaining.");
//check enemy's health 
   if (enemyHealth <=0){ window.alert(enemyNames + " has died ");}
      else{window.alert(enemyNames + " still has " + enemyHealth + " health heft.");}
   //player health
   playerHealth = playerHealth - enemyAttack;
   console.log( enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
   // check player's health
   if (playerHealth <= 0){ window.alert(playerName + " has died ");}
   else {window.alert(playerName + " still has " + playerHealth + " health left.");}
}
   // if players choses to skip
else if (promptFight === "skip" || promptFight === " SKIP " )
{
  var confirmSkip = window.confirm(" Are you sure you would like to quit?");
  if (confirmSkip) { window.alert(playerName + " has decided to skip this fight. Goodbye!");  
  playerName = playerMoney - 2;}
  else {
 // fight();
  }
}
for(var i = 0; i < enemyNames.length; i++) {
fight(enemyNames[i]);
}