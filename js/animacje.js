"use strict"
let animation = {
    update: function (){
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 12; j++) {
                if (anim[i][j] !== 0) {
                    animacja.children[i].children[j].style.backgroundImage = "url('img/"+anim[i][j].color+"_"+anim[i][j].place+".png')"
                } else {
                    animacja.children[i].children[j].style.backgroundImage = ""
                }
            }
        }
    },
    nextStage: function (){
        if(anim[3][10]!==0&&anim[3][11]!==0){
            anim[3][10].place = "d"
            anim[3][11].place = "u"
            anim[2][10] = anim[3][11]
            anim[3][11] = 0
            animation.update()
        }
        else if(anim[3][10]!==0&&anim[2][10]!==0){
            anim[2][9] = anim[2][10]
            anim[2][10] = anim[3][10]
            anim[3][10] = 0
           anim[2][9].place = "l"
           anim[2][10].place = "r"
            animation.update()
        }
        else if(anim[2][9]!==0&&anim[2][10]!==0){
            anim[1][9] = anim[2][10]
            anim[2][10] = 0
            anim[2][9].place = "d"
            anim[1][9].place = "u"
            animation.update()
        }
        else if(anim[2][9]!==0&&anim[1][9]!==0){
            anim[1][8] = anim[1][9]
            anim[1][9] = anim[2][9]
            anim[2][9] = 0
            anim[1][8].place = "l"
            anim[1][9].place = "r"
            anim[5][11] = {
                color: "srodek",
                place: "ru"
            }
            anim[6][11] = {
                color: "srodek",
                place: "rd"
            }
            anim[7][11] = {
                color: "black",
                place: "s"
            }
            anim[4][11] = {
                color: "black",
                place: "s"
            }
            anim[5][10] = {
                color: "srodek",
                place: "lu"
            }
            anim[6][10] = {
                color: "srodek",
                place: "ld"
            }
            anim[7][10] = {
                color: "black",
                place: "s"
            }
            anim[4][10] = {
                color: "black",
                place: "s"
            }            
            animation.update()
        }
        else if(anim[1][8]!==0&&anim[1][9]!==0){
            anim[0][8] = anim[1][9]
            anim[1][9] = 0
            anim[1][8].place = "d"
            anim[0][8].place = "u"
            animation.update()
        }
        else if(anim[1][8]!==0&&anim[0][8]!==0){
            anim[1][7] = anim[0][8]
            anim[0][8] = 0
            anim[1][7].place = "l"
            anim[1][8].place = "r"
            animation.update()
        }
        else if(anim[1][7]!==0&&anim[1][8]!==0){
            anim[0][7] = anim[1][8]
            anim[1][8] = 0
            anim[1][7].place = "d"
            anim[0][7].place = "u"
            anim[4][11] = {
                color: "black",
                place: "s"
            }
            anim[5][11] = {
                color: "black",
                place: "s"
            }
            anim[6][11] = {
                color: "dol",
                place: "d"
            }
            anim[7][11] = {
                color: "dol",
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
        else if(anim[1][7]!==0&&anim[0][7]!==0){
            anim[1][6] = anim[0][7]
            anim[0][7] = 0
            anim[1][6].place = "l"
            anim[1][7].place = "r"
            animation.update()
        }
        else if(anim[1][6]!==0&&anim[1][7]!==0){
            anim[0][6] = anim[1][7]
            anim[1][7] = 0
            anim[1][6].place = "d"
            anim[0][6].place = "u"
            animation.update()
        }
        else if(anim[1][6]!==0&&anim[0][6]!==0){
            anim[1][5] = anim[0][6]
            anim[0][6] = 0
            anim[1][5].place = "l"
            anim[1][6].place = "r"
            animation.update()
        }
        else if(anim[1][5]!==0&&anim[1][6]!==0){
            anim[0][5] = anim[1][6]
            anim[1][6] = 0
            anim[1][5].place = "d"
            anim[0][5].place = "u"
            animation.update()
        }
        else if(anim[1][5]!==0&&anim[0][5]!==0){
            anim[1][4] = anim[0][5]
            anim[0][5] = 0
            anim[1][4].place = "l"
            anim[1][5].place = "r"
            animation.update()
        }
        else if(anim[1][4]!==0&&anim[1][5]!==0){
            anim[0][4] = anim[1][5]
            anim[1][5] = 0
            anim[1][4].place = "d"
            anim[0][4].place = "u"
            animation.update()
        }
        else if(anim[1][4]!==0&&anim[0][4]!==0){
            anim[1][3] = anim[0][4]
            anim[0][4] = 0
            anim[1][3].place = "l"
            anim[1][4].place = "r"
            animation.update()
        }
        else if(anim[1][3]!==0&&anim[1][4]!==0){
            anim[0][3] = anim[1][4]
            anim[1][4] = 0
            anim[1][3].place = "d"
            anim[0][3].place = "u"
            animation.update()
        }
        else if(anim[1][3]!==0&&anim[0][3]!==0){
            anim[1][2] = anim[0][3]
            anim[0][3] = 0
            anim[1][2].place = "l"
            anim[1][3].place = "r"
            animation.update()
            animation.update()
        }
        else if(anim[1][2]!==0&&anim[1][3]!==0){
            anim[0][2] = anim[1][3]
            anim[1][3] = 0
            anim[1][2].place = "d"
            anim[0][2].place = "u"
            animation.update()
        }
        else if(anim[1][2]!==0&&anim[0][2]!==0){
            anim[2][2] = anim[1][2]
            anim[2][1] = anim[0][2]
            anim[1][2] = 0
            anim[0][2] = 0
            anim[2][2].place = "r"
            anim[2][1].place = "l"
            animation.update()
        }
        else if(anim[2][2]!==0&&anim[2][1]!==0){
            anim[1][1] = anim[2][2]
            anim[2][2] = 0
            anim[1][1].place = "u"
            anim[2][1].place = "d"
            animation.update()
        }
        else if(anim[1][1]!==0&&anim[2][1]!==0){
            anim[2][0] = anim[1][1]
            anim[1][1] = 0
            anim[2][0].place = "l"
            anim[2][1].place = "r"
            animation.update()
        }
        else if(anim[2][1]!==0&&anim[2][0]!==0){
            anim[3][1] = anim[2][1]
            anim[3][0] = anim[2][0]
            anim[2][1] = 0
            anim[2][0] = 0
            animation.update()
        }   
        else if(anim[3][1]!==0&&anim[3][0]!==0){
            anim[4][1] = anim[3][1]
            anim[4][0] = anim[3][0]
            anim[3][1] = 0
            anim[3][0] = 0
            animation.update()
        }
        else if(anim[4][1]!==0&&anim[4][0]!==0){
            anim[5][1] = anim[4][1]
            anim[5][0] = anim[4][0]
            anim[4][1] = 0
            anim[4][0] = 0
            animation.update()
        }
        else if(anim[5][0]!==0&&anim[5][1]!==0){
            clearInterval(spadanie)
            tab[0][3] = anim[5][0]
            tab[0][4] = anim[5][1]
            anim[5][0] = 0
            anim[5][1] = 0
            animation.update()
            moves.update()
            document.body.onkeydown=function(event){
                if((event.keyCode===65||event.keyCode===37)&&lastPressed!=65&&lastPressed!=37) moves.wLewo()
                else if((event.keyCode===68||event.keyCode===39)&&lastPressed!=68&&lastPressed!=39) moves.wPrawo()
                else if((event.keyCode===87||event.keyCode===38)&&lastPressed!=87&&lastPressed!=38) moves.obrotLewo()
                else if((event.keyCode===16)&&lastPressed!=16) moves.obrotPrawo()
                else if((event.keyCode===40||event.keyCode===83)&&lastPressed!=40&&lastPressed!=83) 
                moves.spadanie()
                lastPressed = event.keyCode
            }
            document.body.onkeyup = function(){
                lastPressed = 0
            }
            spadanie = setInterval(moves.wDol,500)
            newPill();
        }
    }
}

