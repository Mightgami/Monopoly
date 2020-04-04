class Game {
	constructor(players){
			if(players.length<2 || players.length>8) throw 'Players must be between 2 and 8';
			this.players=players;
			this.players=shuffle(players);
			this.rounds=0;
			this.location=['GO','Mediterranean Avenue','Community Chest','Baltic Avenue','Income Tax',
			'Reading Railroad','Oriental Avenue','Chance','Vermont Avenue','Connecticut Avenue',
			'Just Visiting','St. Charles Place','Electric Company','States Avenue','Virginia Avenue',
			'Pennsylvania Railroad','St. James Place','Community Chest','Tennessee Avenue','New York Avenue',
			'Free Parking',"Kentucky Avenue","Chance","Indiana Avenue","Illinois Avenue",
			"B&O Railroad","Atlantic Avenue","Ventnor Avenue","Water Works","Marvin Gardens",
			"Go to Jail","Pacific Avenue","North Carolina Avenue","Community Chest","Pennsylvania Avenue",
			"Short Line","Chance","Park Place","LUXURY TAX","Boardwalk"];
	}
	play(turns){
		var i;
		for(i=0;i<turns;i++){
			this.playTurn();	
		}
	}
	playTurn(){
		this.rounds++;
		var k;
		for(k=0;k<this.players.length;k++){
			this.players[k].playTurn();
		}
	}
}
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}
module.exports = Game;