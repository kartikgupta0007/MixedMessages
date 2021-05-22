//object declaration
const words = {
    month: ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],//months
    adjective: ['beautiful','pretty','charming','handsome'],//adjectives
    taunt: ['deformed','ugly','dumbass','clapping'],//taunts
    getRandomMonth(){
        return (this.month[Math.floor(Math.random()*12)]);
    },
    getRandomAdjective(){
        return (this.adjective[Math.floor(Math.random()*4)]);
    },
    getRandomTaunt(){
        return (this.taunt[Math.floor(Math.random()*4)]);
    }
};


//calling this message generates random message
function generateMessage(){

    //logging the result in format
    console.log(`You were born in ${words.getRandomMonth()}, but you look ${words.getRandomAdjective()}. Maybe its your ${words.getRandomTaunt()} face!`);

}

//function call to log
generateMessage();