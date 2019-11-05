(() => {

 	console.log('fired!');

 	let player_lives =5,
 		 player = document.querySelector("#weapon"),
 		 computer,
 	 	trigger = document.querySelector("#play"),
 	 	status = document.querySelector(".winlose"),
     	computer_lives =5;

  	const choices = ["Rock", "Paper", "Scissors"];
  
  	function playGame() {
  		console.log('clicked the button');
 	 	
 	 	computer = choices[Math.floor(Math.random() * choices.length)];
 	 	
 	 	let player_choice = player.value;

 	 	console.log("computer:", computer, "player:", player_choice);

 	 	//This is a comment. Check for a tie
 	 	
 	 	if (computer == player_choice) {
 	 		status.textContent = "Tie! You live to shoot another day!";
 	 	}
 	 }

  	trigger.addEventListener("click", playGame);
})();