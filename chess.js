const DIV= document.querySelector(".chess"),
 blackSquare=`<span id="BlackSquare" class="span"></span>`,
 whiteSquare=`<span id="WhiteSquare" class="span"></span>`,
 br=`<br>`;
for(i=0; i<8; i++){

    for(j=0; j<8; j++){

        if(i%2==0){
            if(j%2==0){
                DIV.insertAdjacentHTML("beforeend",blackSquare);
            }
            if(j%2==1)
            {
                DIV.insertAdjacentHTML("beforeend",whiteSquare);
            }
        }
        if(i%2==1){
            if(j%2==0){
                DIV.insertAdjacentHTML("beforeend",whiteSquare);
            }
            if(j%2==1){
                DIV.insertAdjacentHTML("beforeend",blackSquare);
            }
        }
        
    }
    DIV.insertAdjacentHTML("beforeend",br);
    
}
