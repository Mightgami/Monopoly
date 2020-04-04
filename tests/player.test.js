const expect = require('chai').expect;
const Player = require('../src/player');
describe('Player Tests Release 1', () => {
    it("should change player location from 0 to 7",() =>{
        var player = new Player("Horse",0);
        player.advance(7);
        expect(player.position).to.eql(7);
    });
    it("should change player location from 39 to 5",() =>{
        var player = new Player("Horse",39);
        player.advance(6);
        expect(player.position).to.eql(5);
    });
});
describe('Player Tests Release 2', () => {
    it("should pay player $200 because lands on GO",() =>{
        var player = new Player("Horse",0);
        player.advance1(40);
        expect(player.balance).to.eql(2200);
        
    });
    it("should pay player $0 because doesn't land on GO",() =>{
        var player = new Player("Horse",39);
        player.advance1(6);
        expect(player.balance).to.eql(2000);
    });
    it("should pay player $200 because pass over GO",() =>{
        var player = new Player("Horse",35);
        player.advance2(7);
        expect(player.balance).to.eql(2200);
        
    });
    it("should pay player $0 because doesn't pass over GO",() =>{
        var player = new Player("Horse",0);
        player.advance2(6);
        expect(player.balance).to.eql(2000);
    });
    it("should pay player $400 because pass over GO twice",() =>{
        var player = new Player("Horse",0);
        player.advance2(40);
        player.advance2(40);
        expect(player.balance).to.eql(2400);
    });
    it("should pay player lands on Go to Jail and ends up on Just Visiting and this balance is unchanged",() =>{
        var player = new Player("Horse",20);
        player.advance3(10);
        expect(player.balance).to.eql(2000);
        expect(player.position).to.eql(10);
    });
    it("should pay player doesn't land on or pass over Go to Jail and ends up where he rolls and this balance is unchanged",() =>{
        var player = new Player("Horse",20);
        player.advance3(9);
        expect(player.balance).to.eql(2000);
        expect(player.position).to.eql(29);
    });
    it("should tax player land on Income tax(1800-180)",() =>{
        var player = new Player("Horse",0,1800);
        player.advance3(5);
        expect(player.balance).to.eql(1620);
    });
    it("should tax player land on Income tax(2200-200)",() =>{
        var player = new Player("Horse",0,2200);
        player.advance3(5);
        expect(player.balance).to.eql(2000);
    });
    it("should tax player land on Income tax(0-0)",() =>{
        var player = new Player("Horse",0,0);
        player.advance3(5);
        expect(player.balance).to.eql(0);
    });
    it("should tax player land on Income tax(2000-200)",() =>{
        var player = new Player("Horse",0,2000);
        player.advance3(5);
        expect(player.balance).to.eql(1800);
    });
    it("shouldn't tax player pass over Income tax",() =>{
        var player = new Player("Horse",0,2000);
        player.advance3(6);
        expect(player.balance).to.eql(2000);
    });
    it("should tax player land on Luxury tax",() =>{
        var player = new Player("Horse",30,2000);
        player.advance3(5);
        expect(player.balance).to.eql(1925);
    });
    it("shouldn't tax player pass over Luxury tax",() =>{
        var player = new Player("Horse",30,2000);
        player.advance3(6);
        expect(player.balance).to.eql(2000);
    });


});