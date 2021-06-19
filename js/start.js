"use strict"
let score = 0;
let topScore = 0;
let tab = []
let plansza;
let spadanie;
let colors = ['yellow','blue','brown']
let anim = []
let animacja = document.getElementById('animacja');
let level = 1;
let virus = level * 4;
let lastPressed = 0;
let br,bl,yl;
function create(){
    plansza = document.createElement('div')
    plansza.id = 'plansza'
    for(var i=0;i<16;i++){
        tab.push([])
        let row = document.createElement('div')
        row.classList.add('row')
        for(var j=0;j<8;j++){
            let pole =  document.createElement('div')
            pole.classList.add('field')
            row.appendChild(pole)
            tab[i].push(0)
        }
        plansza.appendChild(row)
    }
    document.getElementById('gameplay').appendChild(plansza)
    for(var i=0;i<8;i++){
        anim.push([])
        let row = document.createElement('div')
        row.classList.add('row2')
        for(var j=0;j<12;j++){
            let pole =  document.createElement('div')
            pole.classList.add('field2')
            row.appendChild(pole)
            anim[i].push(0)
        }
        animacja.appendChild(row)
    }
}
function losuj(p){
    let i = 0
    let whichColor = 0
    while(i<p){
        let x,y;
        x = Math.floor(Math.random()*8)
        y = Math.floor(Math.random()*11) + 5
        if(tab[y][x]===0){
            tab[y][x] = {
                color: colors[whichColor%3],
                stan: 0,
                direction: undefined,
                place: "wirus"
            }
            i++;
            whichColor++
        }
    }
}
function record(){
    if(localStorage.length===0){
        localStorage.setItem('top','0');
    }
    else{
        topScore = parseInt(localStorage.getItem('top'))
    }

}
function setRecord(){
    if(score>topScore){
        localStorage.setItem('top',score)
        topScore = score
    }
    numTop();
}
function czyWygrana(){
    let ileWirusow = 0
    for(var i=0;i<16;i++){
        for(var j=0;j<8;j++){
            if(tab[i][j]!==0){
                if(tab[i][j].place==="wirus"){
                    ileWirusow++
                }
            }
        }
    }
    return ileWirusow === 0;
}
function newPill(){
    //document.body.onkeydown = ''
    anim[3][10] = {
        color: colors[Math.floor(Math.random()*3)],
        stan: 1,
        direction: true,
        place: "l"
    }
    anim[3][11] = {
        color: colors[Math.floor(Math.random()*3)],
        stan: 1,
        direction: true,
        place: "r"
    }
    anim[4][11] = {
        color: "gora",
        place: "u"
    }
    anim[5][11] = {
        color: "gora",
        place: "s"
    }
    anim[6][11] = {
        color: "gora",
        place: "d"
    }
    anim[7][11] = {
        color: "black",
        place: "s"
    }
    anim[4][10] = {
        color: "black",
        place: "s"
    }
    anim[5][10] = {
        color: "black",
        place: "s"
    }
    anim[6][10] = {
        color: "black",
        place: "s"
    }
    anim[7][10] = {
        color: "black",
        place: "s"
    }
    animation.update()
}
function start(){
    spadanie = setInterval(animation.nextStage,20)
}