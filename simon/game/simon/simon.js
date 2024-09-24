const foundations=4
var tableau;
var moves
function deal(){
    var deck=shuffle();
    var outlist=[];
    moves=0;
    pos1=undefined;
    pos2=undefined;
    for(var i=0;i<10;i++){//10 piles
        if(i<7){//logic for varying amount of cards in each pile
            var lp=i+1;
        }else{
            var lp=8;
        }
        var sublist=[];
        for(var j=0;j<lp;j++){//create each pile
            sublist[j]=deck.shift();
        }
        outlist[i]=sublist;//include that pile
    }
    outlist.reverse();
    document.getElementById("f0").src="../img/cards/empty.svg";
    document.getElementById("f1").src="../img/cards/empty.svg";
    document.getElementById("f2").src="../img/cards/empty.svg";
    document.getElementById("f3").src="../img/cards/empty.svg";
    document.getElementById("f0").alt="empty";
    document.getElementById("f1").alt="empty";
    document.getElementById("f2").alt="empty";
    document.getElementById("f3").alt="empty";
    return outlist
}
function isComplete(){
    for(var i=0;i<tableau.length;i++){
        if(tableau[i][0]!=undefined){
            return
        }
    }
    alert("You won in "+moves+" moves");
}