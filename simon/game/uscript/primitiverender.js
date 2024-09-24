/*DEPRECATED*/
function primitiverender(){
    var table=document.getElementById("table");
    table.innerHTML="";//clears table before rerendering
    for(var i=0;i<tableau.length;i++){
        var sublist=tableau[i];//project list in list
        var column=table.insertRow(i);
        if(sublist.length==0){
            column.insertCell(0).innerHTML='<img src="../img/cards/empty.svg" id="'+i+',0" role="img" alt="empty pile" onclick="dmove(this.id)">'
        }
        for(var j=0;j<sublist.length;j++){
            column.insertCell(j).innerHTML=('<img src="../img/cards/'+sublist[j]+'.svg" role="img" alt="'+sublist[j]+'" id="'+i+','+j+'" onclick="dmove(this.id)">');//set row data (id is for clickable move)
        }
    }
    document.body.append(table);
}