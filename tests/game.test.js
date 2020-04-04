const expect = require('chai').expect;
const Player = require('../src/player');
const Game = require('../src/game');
describe('Game Tests Release 1', () => {
    it("should create a game with two player named Horse and Car",() =>{
        var players = [];
        players.push(new Player('Horse'));
        players.push(new Player('Car'));
        var game = new Game(players);
        expect(game).to.be.an.instanceof(Game);
    });
    it('should expect an error because player<2',() =>{
        var players = [];
        players.push(new Player("Horse"));
        var fcn = function(){new Game(players)};
        expect(fcn).to.throw();
    });
    it('should expect an error because player>8',()=>{
        var players = [];
        for(var i=0;i<10;i++){
            players.push(new Player("Horse"));
        }
        var fcn = function(){new Game(players)};
        expect(fcn).to.throw();
    });
    it('should create 100 games with both orders [Horse,Car] and [Car,Horse] occur',()=>{
        var horse = new Player('Horse');
        var car = new Player('Car');
        var players = [horse,car];
        var horseCarOrder = false;
        var carHorseOrder = false;
        for(var i=0;i<100;i++){
            var game = new Game(players);
            if(game.players[0] == horse && game.players[1] == car){
                horseCarOrder = true;
            }
            if(game.players[0] == car && game.players[1] == horse){
                carHorseOrder = true;
            }
        }
        expect(horseCarOrder).to.be.true;
        expect(carHorseOrder).to.be.true;
    });
    it('should create a game and verify that total rounds was 20 and that each player played 20 rounds',()=>{
        var players = [new Player("Horse"),new Player("Car")];
        var game = new Game(players);
        game.play(20);
        expect(game.rounds).to.eql(20);
        players.forEach(function(player){
            expect(player.rounds).to.eql(20);
        });
    });
    it('should create a game and play, verify that in every round the order of the players remained the same',()=>{
        var players = [new Player("Horse"),new Player("Car")];
        var game = new Game(players);
        var gamePlayers=game.players;
        for(var i=0;i<20;i++){
            game.play(1);
            expect(game.players).to.eql(gamePlayers);
        }
    });   
});