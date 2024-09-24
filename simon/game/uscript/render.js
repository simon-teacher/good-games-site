function render(){
    var table=document.getElementById("table");
    table.innerHTML="";//clears table before rerendering
    var xsize=0;
    for(var i=0;i<tableau.length;i++){
        if(tableau[i].length>xsize){
            xsize=tableau[i].length;
        }
    }
    for(var i=0;i<xsize;i++){
        var sublist=[]
        var column=table.insertRow(i);
        for(var j=0;j<tableau.length;j++){
            if(i==0&&tableau[j][0]==undefined){
                sublist[j]="empty"
            }else sublist[j]=tableau[j][i];   
        }
        for(var j=0;j<sublist.length;j++){
            if(sublist[j]===undefined){
                column.insertCell(j).innerHTML="";
            }else column.insertCell(j).innerHTML=('<div class="tablecss"><img src="../img/cards/'+sublist[j]+'.svg" role="img" alt="'+sublist[j]+'" id="'+j+','+i+'" onclick="dmove(this.id)"></div>');//set row data (id is for clickable move)

        }
    }
    document.body.append(table);
}