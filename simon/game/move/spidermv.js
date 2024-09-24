var pos1;
var pos2;
function canMove(x,y){
    var movelist=tableau[x].slice(y);
    var suite=ids(movelist[0]);
    var value=idv(movelist[0]);
    for(var i=0;i<movelist.length;i++){
        if(ids(movelist[i])!=suite){   
            return false
        }
        if(idv(movelist[i])!=value-i){
            return false
        }
    }
    return true
}
function move(x,y){
    //console.log(x,y);
    if(pos1==undefined){
        if(canMove(x,y)){
            pos1=[x,y];
            //console.log("pos1:"+pos1);
            document.getElementById(x+","+y).parentNode.innerHTML=document.getElementById(x+","+y).parentNode.innerHTML+'<img src="../img/cards/light.svg" role="img" alt="light" id="light" onclick="move(pos1[0],pos1[1])">';
            return
        }else{
            //console.log("pos1 invalid");
            return
        }
    }else if(tableau[x].length==y+1&&(idv(tableau[pos1[0]][pos1[1]])==idv(tableau[x][y])-1)){
        pos2=[x,y];
        //console.log("pos2:"+pos2);
    }else if(tableau[x].length==0){
        pos2=[x,y];
        //console.log("pos2:"+pos2[0]);
    }else{
        pos1=undefined
        //console.log("pos2 invalid");
        document.getElementById("light").remove();
        return
    }
    var tobemvd=[];
    var movingcards=tableau[pos1[0]].length-pos1[1];
    for(var i=0;i<movingcards;i++){
        tobemvd.push(tableau[pos1[0]].pop());
    }
    tobemvd.reverse();
    tableau[pos2[0]]=tableau[pos2[0]].concat(tobemvd);
    //check if move to foundations
    if(tableau[pos2[0]].length>12){
        var Csuit=ids(tableau[pos2[0]].findLast((element)=>element!==undefined));
        for(var i=0;i<13;i++){
            if(ids(tableau[pos2[0]][tableau[pos2[0]].length-i-1])==Csuit&&idv(tableau[pos2[0]][tableau[pos2[0]].length-i-1])==i+1){
            }else{
                pos1=undefined;
                pos2=undefined;
                render();
                return 
            }
        }
        //identify first empty foundation
        document.getElementById(firstemptyF()).src="../img/cards/"+suitelist[Csuit]+"a.svg";
        document.getElementById(firstemptyF()).alt=suitelist[Csuit]+"a";
        tableau[pos2[0]].length=tableau[pos2[0]].length-13;
    }
    pos1=undefined;
    pos2=undefined;
    render();
    moves++;
    isComplete();
}