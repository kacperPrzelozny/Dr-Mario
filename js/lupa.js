"use strict"
const lupa = {
    frame: 2,
    stage: 2,
    flag: false,
    blue: false,
    yellow: false,
    brown: false,
    zmianaObrazka() {
        let blue = document.getElementById("blue")
        let yellow = document.getElementById("yellow")
        let brown = document.getElementById("brown")
        if (lupa.frame == 1){
            if(lupa.blue == false)
            blue.style.backgroundImage = "url('img/lupa/blue/2.png')"
            if(lupa.yellow==false)
            yellow.style.backgroundImage = "url('img/lupa/yellow/2.png')"
            if(lupa.brown == false)
            brown.style.backgroundImage = "url('img/lupa/brown/2.png')"
            lupa.frame++;
        }
        else if (lupa.frame == 2){
            if(lupa.blue == false)
            blue.style.backgroundImage = "url('img/lupa/blue/1.png')"
            if(lupa.yellow == false)
            yellow.style.backgroundImage = "url('img/lupa/yellow/1.png')"
            if(lupa.brown == false)
            brown.style.backgroundImage = "url('img/lupa/brown/1.png')"
            lupa.frame++
        }
        else if (lupa.frame == 3){
            if(lupa.blue == false)
            blue.style.backgroundImage = "url('img/lupa/blue/2.png')"
            if(lupa.yellow == false)
            yellow.style.backgroundImage = "url('img/lupa/yellow/2.png')"
            if(lupa.brown == false)
            brown.style.backgroundImage = "url('img/lupa/brown/2.png')"
            lupa.frame++
        }
        else if (lupa.frame == 4){
            if(lupa.blue == false)
            blue.style.backgroundImage = "url('img/lupa/blue/3.png')"
            if(lupa.yellow == false)
            yellow.style.backgroundImage = "url('img/lupa/yellow/3.png')"
            if(lupa.brown == false)
            brown.style.backgroundImage = "url('img/lupa/brown/3.png')"
            lupa.frame++
            lupa.frame = 1
            if(lupa.brown==false&&lupa.blue==false&&lupa.yellow==false)
            lupa.przemieszczanie()
        }
    },
    przegrana() {
        let blue = document.getElementById("blue")
        let yellow = document.getElementById("yellow")
        let brown = document.getElementById("brown")
        blue.style.backgroundImage = "url('img/lupa/blue/" + lupa.frame + ".png')"
        yellow.style.backgroundImage = "url('img/lupa/yellow/" + lupa.frame + ".png')"
        brown.style.backgroundImage = "url('img/lupa/brown/" + lupa.frame + ".png')"
        lupa.frame += 2;
        if (lupa.frame == 6) lupa.frame = 2
    },
    padanie(color){
        let virus = document.getElementById(color)
        lupa.flag = true
        let counter = 1
        if(color=="brown"){
            clearInterval(br)
            lupa.brown = true  
            br = setInterval(function(){
                // if(color=="brown") lupa.brown = true
                // if(color=="blue") lupa.blue = true
                // if(color=="yellow") lupa.yellow = true
                if(counter%2==0){
                    virus.style.backgroundImage = "url('img/lupa/brown/padajace/1.png')"
                }
                else if(counter%2==1){
                    virus.style.backgroundImage = "url('img/lupa/brown/padajace/2.png')"
                }
                counter++
                if(counter==9) {
                    clearInterval(br)
                    if(color=="brown") lupa.brown = false
                    if(color=="blue") lupa.blue = false
                    if(color=="yellow") lupa.yellow = false
                    lupa.flag = false
                    if(!checkColor(color)) virus.style.display = "none"
                }
            },250)
        } 
        if(color=="blue"){
            clearInterval(bl)
            lupa.blue = true  
            bl = setInterval(function(){
                // if(color=="brown") lupa.brown = true
                // if(color=="blue") lupa.blue = true
                // if(color=="yellow") lupa.yellow = true
                if(counter%2==0){
                    virus.style.backgroundImage = "url('img/lupa/blue/padajace/1.png')"
                }
                else if(counter%2==1){
                    virus.style.backgroundImage = "url('img/lupa/blue/padajace/2.png')"
                }
                counter++
                if(counter==9) {
                    clearInterval(bl)
                    if(color=="brown") lupa.brown = false
                    if(color=="blue") lupa.blue = false
                    if(color=="yellow") lupa.yellow = false
                    lupa.flag = false
                    if(!checkColor(color)) virus.style.display = "none"
                }
            },250)
        } 
        if(color=="yellow"){
            clearInterval(yl)
            lupa.yellow = true  
            yl = setInterval(function(){
            // if(color=="brown") lupa.brown = true
            // if(color=="blue") lupa.blue = true
            // if(color=="yellow") lupa.yellow = true
                if(counter%2==0){
                    virus.style.backgroundImage = "url('img/lupa/yellow/padajace/1.png')"
                }
                else if(counter%2==1){
                    virus.style.backgroundImage = "url('img/lupa/yellow/padajace/2.png')"
                }
                counter++
                if(counter==9) {
                    clearInterval(yl)
                    if(color=="brown") lupa.brown = false
                    if(color=="blue") lupa.blue = false
                    if(color=="yellow") lupa.yellow = false
                    lupa.flag = false
                    if(!checkColor(color)) virus.style.display = "none"
                }
            },250)
        } 
    },
    przemieszczanie() {
        let blue = document.getElementById("blue")
        let yellow = document.getElementById("yellow")
        let brown = document.getElementById("brown")
        if (lupa.stage == 1) {
            blue.style.top = "128px"
            blue.style.left = "80px"
            yellow.style.top = "48px"
            yellow.style.left = "96px"
            brown.style.top = "80px"
            brown.style.left = "16px"
            lupa.stage++
        } else if (lupa.stage == 2) {
            blue.style.top = "128px"
            blue.style.left = "96px"
            yellow.style.top = "48px"
            yellow.style.left = "80px"
            brown.style.top = "96px"
            brown.style.left = "16px"
            lupa.stage++
        } else if (lupa.stage == 3) {
            blue.style.top = "112px"
            blue.style.left = "112px"
            yellow.style.top = "48px"
            yellow.style.left = "64px"
            brown.style.top = "112px"
            brown.style.left = "32px"
            lupa.stage++
        } else if (lupa.stage == 4) {
            blue.style.top = "96px"
            blue.style.left = "112px"
            yellow.style.top = "48px"
            yellow.style.left = "48px"
            brown.style.top = "128px"
            brown.style.left = "32px"
            lupa.stage++
        } else if (lupa.stage == 5) {
            blue.style.top = "80px"
            blue.style.left = "112px"
            yellow.style.top = "64px"
            yellow.style.left = "32px"
            brown.style.top = "128px"
            brown.style.left = "48px"
            lupa.stage++
        } else if (lupa.stage == 6) {
            blue.style.top = "64px"
            blue.style.left = "112px"
            yellow.style.top = "80px"
            yellow.style.left = "16px"
            brown.style.top = "128px"
            brown.style.left = "64px"
            lupa.stage++
        } else if (lupa.stage == 7) {
            brown.style.top = "128px"
            brown.style.left = "80px"
            yellow.style.top = "80px"
            yellow.style.left = "16px"
            blue.style.top = "48px"
            blue.style.left = "96px"
            lupa.stage++
        } else if (lupa.stage == 8) {
            brown.style.top = "128px"
            brown.style.left = "96px"
            yellow.style.top = "96px"
            yellow.style.left = "16px"
            blue.style.top = "48px"
            blue.style.left = "80px"
            lupa.stage++
        } else if (lupa.stage == 9) {
            brown.style.top = "112px"
            brown.style.left = "112px"
            yellow.style.top = "112px"
            yellow.style.left = "32px"
            blue.style.top = "48px"
            blue.style.left = "64px"
            lupa.stage++
        } else if (lupa.stage == 10) {
            brown.style.top = "96px"
            brown.style.left = "112px"
            yellow.style.top = "128px"
            yellow.style.left = "32px"
            blue.style.top = "48px"
            blue.style.left = "48px"
            lupa.stage++
        } else if (lupa.stage == 11) {
            brown.style.top = "80px"
            brown.style.left = "112px"
            yellow.style.top = "128px"
            yellow.style.left = "48px"
            blue.style.top = "64px"
            blue.style.left = "32px"
            lupa.stage++
        } else if (lupa.stage == 12) {
            brown.style.top = "64px"
            brown.style.left = "112px"
            yellow.style.top = "128px"
            yellow.style.left = "64px"
            blue.style.top = "80px"
            blue.style.left = "16px"
            lupa.stage++
        } else if (lupa.stage == 13) {
            brown.style.top = "48px"
            brown.style.left = "96px"
            yellow.style.top = "128px"
            yellow.style.left = "80px"
            blue.style.top = "80px"
            blue.style.left = "16px"
            lupa.stage++
        } else if (lupa.stage == 14) {
            brown.style.top = "48px"
            brown.style.left = "80px"
            yellow.style.top = "128px"
            yellow.style.left = "96px"
            blue.style.top = "96px"
            blue.style.left = "16px"
            lupa.stage++
        } else if (lupa.stage == 15) {
            brown.style.top = "48px"
            brown.style.left = "64px"
            yellow.style.top = "112px"
            yellow.style.left = "112px"
            blue.style.top = "112px"
            blue.style.left = "32px"
            lupa.stage++
        } else if (lupa.stage == 16) {
            brown.style.top = "48px"
            brown.style.left = "48px"
            yellow.style.top = "96px"
            yellow.style.left = "112px"
            blue.style.top = "128px"
            blue.style.left = "32px"
            lupa.stage++
        } else if (lupa.stage == 17) {
            brown.style.top = "64px"
            brown.style.left = "32px"
            yellow.style.top = "80px"
            yellow.style.left = "112px"
            blue.style.top = "128px"
            blue.style.left = "48px"
            lupa.stage++
        } else if (lupa.stage == 18) {
            brown.style.top = "80px"
            brown.style.left = "16px"
            yellow.style.top = "64px"
            yellow.style.left = "112px"
            blue.style.top = "128px"
            blue.style.left = "64px"
            lupa.stage++
        } else if (lupa.stage == 19) {
            brown.style.top = "80px"
            brown.style.left = "16px"
            yellow.style.top = "48px"
            yellow.style.left = "96px"
            blue.style.top = "128px"
            blue.style.left = "80px"
            lupa.stage = 2
        }
    }
}
let wirusy = setInterval(lupa.zmianaObrazka, 250)
setBackground((level-1)%5)
numLevel()
create();
losuj(virus);
moves.update()
record();
numTop();
newPill();
start();