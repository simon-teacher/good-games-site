function firstemptyF(){
    for(var i=0;i<foundations;i++){
        if(document.getElementById("f"+i).alt==="empty"){
            return ("f"+i)
        }
    }
}