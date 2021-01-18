"use strict"
const i = 3;
const j = 7;
const k = 2;
if( j > i && j > k ){
    if(i > k){
        alert( j + " ," + i + " ," + k )
    }
    else{
        alert(j + " ," + k + " ," + i)
    }
}

if( i > j && i > k ){
    if(j > k){
        alert( i + " ," + j + " ," + k )
    }
    else{
        alert(i + " ," + k + " ," + j)
    }
}

if( k > i && k > j ){
    if(i > j){
        alert( k + " ," + i + " ," + j )
    }
    else{
        alert(k + " ," + j + " ," + i)
    }
}