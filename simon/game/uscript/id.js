    const suitelist=[
        "h",
        "d",
        "c",
        "s"
    ];
function ids(card){//identify suite
    return(suitelist.indexOf(card.slice(0,1)));
}
function idv(card){//identify value
    var value=card.slice(1);
    if(isNaN(value)){
        if(value==="a")return 1
        if(value==="j")return 11
        if(value==="q")return 12
        if(value==="k")return 13
    }else return(value)
}