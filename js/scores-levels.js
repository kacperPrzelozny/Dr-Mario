"use strict"
function nextLevel(){
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 8; j++) {
            tab[i][j] = 0
        }
    }
    clearInterval(wirusy)
    clearInterval(yl)
    clearInterval(bl)
    clearInterval(br)
    document.getElementById("GOSC").style.backgroundImage = ""
    document.getElementById("pressKey").style.display = "none"
    document.getElementById("blue").style.backgroundImage = ""
    document.getElementById("brown").style.backgroundImage = ""
    document.getElementById("yellow").style.backgroundImage = ""
    document.getElementById("blue").style.display = "block"
    document.getElementById("brown").style.display = "block"
    document.getElementById("yellow").style.display = "block"
    lupa.frame = 2
    lupa.stage = 2
    lupa.blue = false
    lupa.yellow = false
    lupa.brown = false
    wirusy = setInterval(lupa.zmianaObrazka, 250)
    level++
    virus = level * 4;
    setBackground((level-1)%5)
    numScore()
    numVirus()
    numLevel()
    losuj(virus);
    moves.update()
    record();
    newPill();
    start();
}
function numLevel(){
let l = String(level-1)
if(l.length === 1) l = "0" + l
    for(let i = 0; i < 2; i++){
        document.getElementById("level").children[i].style.backgroundImage = "url(img/cyfry/"+ l[i]+".png)"
    }
}
function numVirus(){
    let v = String(virus)
    if(v.length === 1) v = "0" + v
    for(let i = 0; i < 2; i++){
        document.getElementById("virus").children[i].style.backgroundImage = "url(img/cyfry/"+ v[i]+".png)"
    }
}
function numScore(){
    let s = String(score)
    let brak = 7 - s.length
    for(var i = 1; i <= brak; i++){
        s = "0"+s;
    }
    for(let i = 0; i < 7; i++){
        document.getElementById("score").children[i].style.backgroundImage = "url(img/cyfry/"+ s[i]+".png)"
    }
}
function numTop(){
    let t = String(topScore)
    let brak = 7 - t.length
    for(var i = 1; i <= brak; i++){
        t = "0"+t;
    }
    for(let i = 0; i < 7; i++){
        document.getElementById("top").children[i].style.backgroundImage = "url(img/cyfry/"+ t[i]+".png)"
    }
}
function setBackground(level){
    document.getElementById("gameplay").style.backgroundImage = "url(img/bg"+level+".png)"
}
function gameOver(){
    anim[3][10] = 0
    anim[3][11] = 0
    animation.update()
    let go = document.createElement("div")
    go.style.width = "112px"
    go.style.height = "112px"
    go.style.position = "absolute"
    go.style.top = "48px"
    go.style.left = "480px"
    go.style.backgroundImage = "url('img/go_dr.png')"
    document.getElementById("gameplay").appendChild(go)
}
function checkColor(color){
    for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 8; j++) {
            if (tab[i][j] !== 0) {
                if(tab[i][j].place=="wirus"&&tab[i][j].color==color){
                    return true
                }
            }
        }
    }
    return false
}