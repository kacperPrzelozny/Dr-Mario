"use strict"
let moves = {
    update: function () {
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 8; j++) {
                if (tab[i][j] !== 0) {
                    plansza.children[i].children[j].style.backgroundImage = "url('img/"+tab[i][j].color+"_"+tab[i][j].place+".png')"
                } else {
                    plansza.children[i].children[j].style.backgroundImage = ""
                }
            }
        }
    },
    wDol: function () {
        let k1, k2, x1, x2, y1, y2;
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 8; j++) {
                if (tab[i][j] !== 0 && tab[i][j].stan === 1) {
                    if (k1 === undefined && k2 === undefined) {
                        k1 = tab[i][j];
                        x1 = j;
                        y1 = i
                    } else if (k2 === undefined) {
                        k2 = tab[i][j];
                        x2 = j;
                        y2 = i
                    }
                }
            }
        }
        if (y2==undefined) {
            if(k1.place=="d"&&y1==0&&tab[y1+1][x1]==0){
                tab[y1+1][x1] = tab[y1][x1]
                tab[y1][x1] = anim[5][x1-3]
                anim[5][x1-3] = 0
                animation.update()
                moves.update()
            }
            else{
                clearInterval(spadanie)
                document.body.onkeydown = ''
                tab[y1][x1].stan = 0
                //tab[y2][x2].stan = 0
                delete_fall.sprawdz()
            }
        }
        else if(y2<15){
            if ((k1.direction === true && tab[y1 + 1][x1] === 0 && tab[y2 + 1][x2] === 0) || (k1.direction === false && tab[y2 + 1][x2] === 0)) {
                tab[y2 + 1][x2] = k2
                tab[y1 + 1][x1] = k1
                tab[y1][x1] = 0
                if (k1.direction === true) {
                    tab[y2][x2] = 0
                }
                moves.update()
            } 
            else if ((k1.direction === true && (tab[y1 + 1][x1].stan === 0 || tab[y2 + 1][x2].stan === 0)) || (k1.direction === false && (tab[y2 + 1][x2].stan === 0 || tab[y2 + 1][x2] === undefined))) {
                clearInterval(spadanie)
                document.body.onkeydown = ''
                tab[y1][x1].stan = 0
                tab[y2][x2].stan = 0
                delete_fall.sprawdz()
            }
        } 
        else {
            clearInterval(spadanie)
            document.body.onkeydown = ''
            tab[y1][x1].stan = 0
            tab[y2][x2].stan = 0
            delete_fall.sprawdz()
        }

    },

    wLewo: function () {
        let k1, k2, x1, x2, y1, y2;
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 8; j++) {
                if (tab[i][j] !== 0 && tab[i][j].stan === 1) {
                    if (k1 === undefined && k2 === undefined) {
                        k1 = tab[i][j];
                        x1 = j;
                        y1 = i
                    } else if (k2 === undefined) {
                        k2 = tab[i][j];
                        x2 = j;
                        y2 = i
                    }
                }
            }
        }
        if(k1.place=="d"&&y1==0&&x1==4){
            anim[5][0] = anim[5][1]
            anim[5][1] = 0
            tab[y1][x1-1] = tab[y1][x1]
            tab[y1][x1] = 0
            animation.update()
            moves.update()
        }
        else if ((k1.direction === true && (x1 >= 1 && tab[y1][x1 - 1] === 0)) || k1.direction === false && (tab[y1][x1 - 1] === 0 && tab[y2][x2 - 1] === 0 && x1 >= 1)) {
            tab[y1][x1 - 1] = k1
            tab[y2][x2 - 1] = k2
            tab[y2][x2] = 0
            if (k1.direction === false)
                tab[y1][x1] = 0
             moves.update()
        }
    },
    wPrawo: function () {
        let k1, k2, x1, x2, y1, y2;
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 8; j++) {
                if (tab[i][j] !== 0 && tab[i][j].stan === 1) {
                    if (k1 === undefined && k2 === undefined) {
                        k1 = tab[i][j];
                        x1 = j;
                        y1 = i
                    } else if (k2 === undefined) {
                        k2 = tab[i][j];
                        x2 = j;
                        y2 = i
                    }
                }
            }
        }
        if(k1.place=="d"&&y1==0&&x1==3){
            anim[5][1] = anim[5][0]
            anim[5][0] = 0
            tab[y1][x1+1] = tab[y1][x1]
            tab[y1][x1] = 0
            animation.update()
            moves.update()
        }
        else if ((k1.direction === true && (x2 < 7 && tab[y2][x2 + 1] === 0)) || k1.direction === false && (x2 < 7 && tab[y2][x2 + 1] === 0 && tab[y1][x1 + 1] === 0)) {
            tab[y2][x2 + 1] = k2
            tab[y1][x1 + 1] = k1
            tab[y1][x1] = 0
            if (k1.direction === false)
                tab[y2][x2] = 0
            moves.update()
        }
    },
    obrotLewo: function () {
        let k1, k2, x1, x2, y1, y2;
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 8; j++) {
                if (tab[i][j] !== 0 && tab[i][j].stan === 1) {
                    if (k1 === undefined && k2 === undefined) {
                        k1 = tab[i][j];
                        x1 = j;
                        y1 = i
                    } else if (k2 === undefined) {
                        k2 = tab[i][j];
                        x2 = j;
                        y2 = i
                    }
                }
            }
        }
        if(k1.direction==true&&y1==0&&(x1==3||x1==4)){
            anim[5][x1-3] = tab[y2][x2]
            tab[y2][x2] = 0
            tab[y1][x1].place = "d"
            anim[5][x1-3].place = "u"
            tab[y1][x1].direction= false
            anim[5][x1-3].direction = false
            animation.update()
        }
        else if(k1.place=="d"&&y1==0){
            tab[y1][x1+1] = tab[y1][x1]
            tab[y1][x1] = anim[5][x1-3]
            anim[5][x1-3] = 0
            tab[y1][x1+1].direction = true
            tab[y1][x1].direction = true
            tab[y1][x1+1].place = "r"
            tab[y1][x1].place = "l"
            animation.update()
        }
        else if (k1.direction === false && x2<=6 && tab[y2][x2 + 1] === 0) {
            tab[y1][x1].direction = !k1.direction
            tab[y2][x2].direction = !k2.direction
            tab[y2][x2+1] = tab[y2][x2]
            tab[y2][x2] = tab[y1][x1]
            tab[y1][x1] = 0
            tab[y2][x2+1].place = "r"
            tab[y2][x2].place = "l"
        } else if (k1.direction === true && y2 > 0 && tab[y1 - 1][x1] === 0) {
            tab[y1][x1].direction = !k1.direction
            tab[y2][x2].direction = !k2.direction
            tab[y1-1][x1] = tab[y2][x2]
            tab[y2][x2] = 0
            tab[y1-1][x1].place = "u"
            tab[y1][x1].place = "d"
        }
        else if(k1.direction === false && x2 === 7 && tab[y2][x2-1] === 0){
            tab[y1][x1].direction = !k1.direction
            tab[y2][x2].direction = !k2.direction
            tab[y2][x2-1] = tab[y1][x1]
            tab[y1][x1] = 0
            tab[y2][x2-1].place = "l"
            tab[y2][x2].place = "r"
        }
        moves.update()
    },
    obrotPrawo: function () {
        let k1, k2, x1, x2, y1, y2;
        for (var i = 0; i < 16; i++) {
            for (var j = 0; j < 8; j++) {
                if (tab[i][j] !== 0 && tab[i][j].stan === 1) {
                    if (k1 === undefined && k2 === undefined) {
                        k1 = tab[i][j];
                        x1 = j;
                        y1 = i
                    } else if (k2 === undefined) {
                        k2 = tab[i][j];
                        x2 = j;
                        y2 = i
                    }
                }
            }
        }
        if(k1.direction==true&&y1==0&&(x1==3||x1==4)){
            anim[5][x1-3] = tab[y1][x1]
            tab[y1][x1] = tab[y2][x2]
            tab[y2][x2] = 0
            anim[5][x1-3].place = "u"
            tab[y1][x1].place = "d"
            tab[y1][x1].direction = false
            anim[5][x1-3].direction = false
            animation.update()
        }
        else if(k1.place=="d"&&y1==0){
            tab[y1][x1+1] = anim[5][x1-3]
            anim[5][x1-3] = 0
            tab[y1][x1].place = "l"
            tab[y1][x1+1].place = "r"
            tab[y1][x1].direction = true
            tab[y1][x1+1].direction = true
            animation.update()
        }
        else if(k1.direction === false && x2<=6&&tab[y2][x2+1]===0){
            tab[y1][x1].direction = !k1.direction
            tab[y2][x2].direction = !k2.direction
            tab[y2][x2+1] = tab[y1][x1]
            tab[y1][x1] = 0
            tab[y2][x2+1].place = "r"
            tab[y2][x2].place = "l"
        } else if(k1.direction===true && y2>=1 && tab[y1-1][x1]===0){
            tab[y1][x1].direction = !k1.direction
            tab[y2][x2].direction = !k2.direction
            tab[y1-1][x1] = tab[y1][x1]
            tab[y1][x1] = tab[y2][x2]
            tab[y2][x2] = 0
            tab[y1-1][x1].place = "u"
            tab[y1][x1].place = "d"
        }
        else if(k1.direction === false && x2 === 7 && tab[y2][x2-1] === 0){
            tab[y1][x1].direction = !k1.direction
            tab[y2][x2].direction = !k2.direction
            tab[y2][x2-1] = tab[y2][x2]
            tab[y2][x2] = tab[y1][x1]
            tab[y1][x1] = 0
            tab[y2][x2-1].place = "l"
            tab[y2][x2].place = "r"
        }
        moves.update()
    },
    spadanie: function(){
        document.body.onkeydown = ''
        clearInterval(spadanie)
        spadanie = setInterval(moves.wDol,20)
    }
}