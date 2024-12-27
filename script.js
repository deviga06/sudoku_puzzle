var mis=0;
var numselect=null;
var tilesselect=null;

var board=[
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]
var ans=[
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload=function(){
    startgame();
}
function startgame(){
    for(var i=1;i<=9;i++){
       let number=document.createElement("div");
       number.id=i
       number.innerText=i;
       number.addEventListener("click",givecoluor)
       number.classList.add("tens");
       document.getElementById("numberlist").appendChild(number);
    }
    //board
    for( var r=0;r<9;r++){
        for(var c=0;c<9;c++){
          let tile=document.createElement("div");
          tile.id=r.toString()+"-"+c.toString();
          if(board[r][c]!="-"){
            tile.classList.add("bg");
            tile.innerText=board[r][c];
          }
          if(r==2||r==5){
            tile.classList.add("hl");
          }
          if(c==2||c==5){
            tile.classList.add("rl");
          }
          tile.addEventListener("click",selectselect)
          tile.classList.add("tiles");
          document.getElementById("sudoku-grid").append(tile);
        }
    }
}
function givecoluor(){
    if(numselect!=null){
        numselect.classList.remove("intnum");
    }
    numselect=this;
    numselect.classList.add("intnum");
}
function selectselect(){
    if(numselect){
        if(this.innerText!=""){
            return;
        }
        let coords=this.id.split("-");
        let r=parseInt([coords[0]]);
        let c=parseInt(coords[1]);

        if(ans[r][c]==numselect.id){
            this.innerText=numselect.id;
            check();
        }
        else{
            mis+=1;
            document.getElementById("error").innerText=mis;
        }
    }
}
function check() {
    for (var r = 0; r < 9; r++) {
        for (var c = 0; c < 9; c++) {
            if (board[r][c] === "-" && document.getElementById(`${r}-${c}`).innerText !== ans[r][c]) {
                return; 
            }
        }
    }
    document.getElementById("error").innerText = "YOU WON!";
        const modal = document.getElementById('model');
            modal.style.display = 'flex';

}

