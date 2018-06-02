




var startup = {greenReturn:30, blueReturn:1, redReturn:0, greenProb: 10, blueProb: 20, redReturn:70, coolDown: 0};
var terreno = {greenReturn:1.2, blueReturn:1, redReturn:0, greenProb: 40, blueProb: 40, redReturn:20, coolDown: 0};
var pizza = {greenReturn:1.5, blueReturn:1, redReturn:0, greenProb: 50, blueProb: 20, redReturn:30, coolDown: 0};
var papeleria = {greenReturn:1.5, blueReturn:1, redReturn:0, greenProb: 30, blueProb: 10, redReturn:60, coolDown: 0};
var cetes = {greenReturn:1.1, blueReturn:1, redReturn:0, greenProb: 70, blueProb: 20, redReturn:10, coolDown: 0};



$(document).ready(function() {

    $('.rollTurn').on("click", function(){

        console.log('\n'+'\n'+'\n')
        
        startupCoolDown();
        terrenoCoolDown();
        pizzaCoolDown();
        cetesCoolDown();
        
    });

})

/////////////////
//Startup
/////////////////
function startupCoolDown() {
    if (startup.coolDown < 3) {
        $('.startup-turn').html("Turn: "+startup.coolDown+"/3");
        startup.coolDown = startup.coolDown + 1;
        $('.startup-marble').attr("src","assets/black-marble.png");
        $('.startup-mult').html("");
    }

    else {
        console.log('\n')
        console.log("startup")
        startupTurn();
        $('.startup-turn').html("Turn: "+startup.coolDown+"/3");
        startup.coolDown = 1;
    }
}

function startupTurn() {
    var bag = Math.random() * 100;

    if (bag<startup.greenProb) {
        console.log("green");
        $('.startup-marble').attr("src","assets/green-marble.png");
        $('.startup-mult').html("0x");
    }

    else if (bag<startup.blueProb+startup.greenProb) {
        console.log("blue");
        $('.startup-marble').attr("src","assets/blue-marble.png");
        $('.startup-mult').html("1x");
    }

    else {
        console.log("red");
        $('.startup-marble').attr("src","assets/red-marble.png");
        $('.startup-mult').html("3x");
    }
}





/////////////////
//Terreno
/////////////////
function terrenoCoolDown() {
    if (terreno.coolDown < 3) {
        $('.terreno-turn').html("Turn: "+terreno.coolDown+"/3");
        terreno.coolDown = terreno.coolDown + 1;
        $('.terreno-marble').attr("src","assets/black-marble.png");
        $('.terreno-mult').html("");
    }

    else {
        console.log('\n')
        console.log("terreno")
        terrenoTurn();
        $('.terreno-turn').html("Turn: "+terreno.coolDown+"/3");
        terreno.coolDown = 1;
    }
}

function terrenoTurn() {
    var bag = Math.random() * 100;

    if (bag<terreno.redProb) {
        console.log("red");
        $('.terreno-marble').attr("src","assets/red-marble.png");
        $('.terreno-mult').html("0x");
    }
    else if (bag<terreno.blueProb+terreno.redReturn) {
        console.log("blue");
        $('.terreno-marble').attr("src","assets/blue-marble.png");
        $('.terreno-mult').html("1x");
    }
    else {
        console.log("green");
        $('.terreno-marble').attr("src","assets/green-marble.png");
        $('.terreno-mult').html("1.4x");
    }
}





/////////////////
//Pizza
/////////////////
function pizzaCoolDown() {
    
    console.log('\n')
    console.log("pizza")
    pizzaTurn();
    $('.pizza-turn').html("Turn: 1/1");
    
    
}

function pizzaTurn() {
    var bag = Math.random() * 100;

    if (bag<pizza.blueProb) {
        console.log("blue");
        $('.pizza-marble').attr("src","assets/blue-marble.png");
        $('.pizza-mult').html("1x")
    }

    else if (bag<pizza.greenProb+pizza.blueProb) {
        console.log("green");
        $('.pizza-marble').attr("src","assets/green-marble.png");
        $('.pizza-mult').html("1.5x")
    }

    else {
        console.log("red");
        $('.pizza-marble').attr("src","assets/red-marble.png");
        $('.pizza-mult').html("0x")
    }
}





var cetes = {greenReturn:1.1, blueReturn:1, redReturn:0, greenProb: 70, blueProb: 20, redReturn:10, coolDown: 1};
/////////////////
//Cetes
/////////////////
function cetesCoolDown() {
    
    
    console.log('\n')
    console.log("cetes")
    cetesTurn();
    $('.cetes-turn').html("Turn: 1/1");
    
}

function cetesTurn() {
    var bag = Math.random() * 100;

    if (bag<cetes.redReturn) {
        console.log("red");
        $('.cetes-marble').attr("src","assets/red-marble.png");
        $('.cetes-mult').html("0x");
    }

    else if (bag<cetes.blueProb+cetes.redReturn) {
        console.log("blue");
        $('.cetes-marble').attr("src","assets/blue-marble.png");
        $('.cetes-mult').html("1x");
    }

    else {
        console.log("green");
        $('.cetes-marble').attr("src","assets/green-marble.png");
        $('.cetes-mult').html("1.2x");
    }
}

