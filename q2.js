//Write a JavaScript conditional statement to find the sign of 
//product of three numbers. Display an alert box with the specified sign.

const i = 3;
const j = 7;
const k = 2;

if( i > 0 && j > 0 && k > 0){
    alert("the sign is +");
}
else if ( i < 0 && j < 0 && k < 0){
    alert("the sign is -")
}

else if ( i > 0 && j < 0 && k > 0){
    alert("the sign is -")
}

else if ( i < 0 && j > 0 && k > 0){
    alert("the sign is -")
}

else if ( i > 0 && j > 0 && k < 0){
    alert("the sign is -")
}
