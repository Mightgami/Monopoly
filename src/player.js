class Player {
    constructor(name, position = 0, balance = 2000) {
        this.name = name;
        this.position = position;
        this.balance=balance;
        this.rounds = 0;
    }
    advance(position){
        this.position=(this.position+position)%40;
    }
    advance1(position){
        console.log(this.position);
        this.position=(this.position+position)%40;
        console.log(this.position);
        if(this.position==0){    
            this.balance=(this.balance+200);
        }
    } 
    advance2(position){
        var lastPosition=this.position;
        this.position=(this.position+position)%40;
        if(this.position==0){
            this.balance=(this.balance+200);
        }
        if(lastPosition>this.position){
            this.balance=(this.balance+200);
        }
    }
    advance3(position){
        var lastPosition=this.position;
        this.position=(this.position+position)%40;
        if(this.position==0){
            this.balance=(this.balance+200);
        }
        if(lastPosition>this.position){
            this.balance=(this.balance+200);
        }
        if(this.position == 5){
            if((this.balance/10) < 200){
                this.balance=this.balance-(this.balance/10);
            }else{
                this.balance=this.balance-200;
            }
        }
        if(this.position==30){
            this.position=10;
        }
        if(this.position == 35){
            this.balance=this.balance-75;
        }    
    }    
    playTurn(){
        this.rounds++;
    }
}
module.exports = Player;