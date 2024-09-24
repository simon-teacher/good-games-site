const basedeck=[
    "ha","h2","h3","h4","h5","h6","h7","h8","h9","h10","hj","hq","hk",
    "da","d2","d3","d4","d5","d6","d7","d8","d9","d10","dj","dq","dk",
    "ca","c2","c3","c4","c5","c6","c7","c8","c9","c10","cj","cq","ck",
    "sa","s2","s3","s4","s5","s6","s7","s8","s9","s10","sj","sq","sk"
];
function shuffle(n=1){
    var unshuffled=[];
    for(var i=0;i<n;i++){
        unshuffled=unshuffled.concat(basedeck);//amount of n decks will be shuffled
    }
    var shuffled=[];
    while(unshuffled.length>0){//moves a random card into the shuffled deck
        var rng=Math.floor(Math.random()*unshuffled.length);
        shuffled.push(unshuffled[rng]);
        unshuffled.splice(rng,1);
    }
    return shuffled
}