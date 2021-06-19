"use strict"
let delete_fall = {
    sprawdz: function(){
        let toDelete = []
        for(var i=15;i>=0;i--){
            for(var j=0;j<8;j++){
                if(tab[i][j]!==0){
                    let color  = tab[i][j].color
                    let x = j
                    let y = i
                    let temp = []
                    while(x<8){
                        if(tab[y][x]!==undefined&&tab[y][x]!==0&&tab[y][x].color===color){
                            temp.push([y,x])
                        }
                        else{break}
                        x++
                    }
                    if(temp.length>=4){
                        let counter = 0;
                        for(var k=0;k<temp.length;k++){
                            if(tab[temp[k][0]][temp[k][1]].place === "wirus") counter++
                        }
                        if(counter!==temp.length){
                            for(var k=0;k<temp.length;k++){
                                toDelete.push(temp[k])

                            }
                        }
                    }
                    temp = []
                    x = j
                    y = i
                    while(y>=0){
                        if(tab[y][x]!==undefined&&tab[y][x]!==0&&tab[y][x].color===color){
                            temp.push([y,x])
                        }
                        else{break}
                        y--
                    }
                    if(temp.length>=4){
                        let counter = 0;
                        for(var l=0;l<temp.length;l++){
                            if(tab[temp[l][0]][temp[l][1]].place === "wirus") counter++
                        }
                        if(counter!==temp.length){
                            for(var l=0;l<temp.length;l++){
                                toDelete.push(temp[l])

                            }
                        }
                    }
                }
            }
        }
        // console.log(toDelete)
        delete_fall.stage1(toDelete);
    },
    stage1: function(toDelete){
        for(var i=0;i<toDelete.length;i++){
            if(tab[toDelete[i][0]][toDelete[i][1]].place==="l"){
                tab[toDelete[i][0]][toDelete[i][1]+1].place="s";
            }
            else if(tab[toDelete[i][0]][toDelete[i][1]].place==="r"){
                tab[toDelete[i][0]][toDelete[i][1]-1].place="s";
            }
            else if(tab[toDelete[i][0]][toDelete[i][1]].place==="u"){
                tab[toDelete[i][0]+1][toDelete[i][1]].place="s"
            }
            else if(tab[toDelete[i][0]][toDelete[i][1]].place==="d"){
                if(toDelete[i][0]>=1)
                tab[toDelete[i][0]-1][toDelete[i][1]].place="s";
                else if(toDelete[i][0]==0){
                    anim[5][toDelete[i][1]-3].place = "s"

                }
            }
            else if(tab[toDelete[i][0]][toDelete[i][1]].place==="wirus"){
                score+=100;
                virus--
                numScore();
                setRecord();
                numVirus();
                lupa.padanie(tab[toDelete[i][0]][toDelete[i][1]].color)
            }
            if(tab[toDelete[i][0]][toDelete[i][1]].place === "wirus")
                tab[toDelete[i][0]][toDelete[i][1]].place = "x"
            else{
                tab[toDelete[i][0]][toDelete[i][1]].place = "o"
            }
        }
        moves.update();
        animation.update();
        setTimeout(delete_fall.stage2(toDelete),500)
    },
    stage2: function (toDelete){
        for(var i=0;i<toDelete.length;i++){
            tab[toDelete[i][0]][toDelete[i][1]] = 0
        }
        if(toDelete.length>0){
            spadanie = setInterval(delete_fall.opadanie,50)
            document.body.onkeydown = ''
            // document.body.onkeyup = ''
        }
        else if(tab[0][3]===0&&tab[0][4]===0){
            if(!czyWygrana())
                start();
            else {
                document.getElementById("GOSC").style.backgroundImage = "url('img/sc.png')"
                document.getElementById("pressKey").style.display = "block"
                setRecord();
                if(czyWygrana()){
                    document.body.onkeypress=function(event){
                        nextLevel()
                        document.body.onkeypress = ""
                    }
                }
            }
        }
        else if(tab[0][3]!==0||tab[0][4]!==0){
            if(!czyWygrana()){
                document.getElementById("GOSC").style.backgroundImage = "url('img/go.png')"
                clearInterval(wirusy)
                lupa.frame = 2
                gameOver()
                wirusy = setInterval(lupa.przegrana, 250)
            }
        }
    },
    opadanie: function(){
        let howMany =  0
        for(var i=14;i>=0;i--){
            for (var j=0;j<8;j++){
                if(tab[i][j]!==0){
                   if(tab[i][j].place==="l"&&tab[i+1][j+1]===0&&tab[i+1][j]===0){
                       tab[i+1][j] = tab[i][j]
                       tab[i+1][j+1] = tab[i][j+1]
                       tab[i][j]=0
                       tab[i][j+1]=0
                       howMany++
                   }
                   else if(tab[i][j].place==="d"&&tab[i+1][j]===0){
                       tab[i+1][j] = tab[i][j]
                       tab[i][j] = tab[i-1][j]
                       tab[i-1][j]=0
                       howMany++
                   }
                   else if(tab[i][j].place==="s"&&tab[i+1][j]===0){
                       tab[i+1][j] = tab[i][j]
                       tab[i][j] = 0
                       howMany++
                   }
                }
            }
        }
        if(anim[5][0]!=0&&tab[0][3]==0){
            tab[0][3] = anim[5][0]
            anim[5][0] = 0
            howMany++
        }
        if(anim[5][1]!=0&&tab[0][4]==0){
            tab[0][4] = anim[5][1]
            anim[5][1] = 0
            howMany++
        }
        moves.update();
        animation.update()
        if(howMany===0){
            clearInterval(spadanie)
            delete_fall.sprawdz()
        }
    }
}
