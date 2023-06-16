let a=Math.floor((Math.random()*100)+1);
console.log(a);
let c=1;
let check_id=document.getElementById("check_box");
let para_id=document.getElementById("para_id");
function check(){
    if(parseInt(check_id.value)==a)
    {
    para_id.textContent="Congratulations...! You Guessed in "+c+" Tries";
    para_id.style.color="darkgreen";
    }
    else if(parseInt(check_id.value)>a)
    {   c++;
        para_id.textContent="Greater..Try Again";
        para_id.style.color="darkblue";
    }
    else if(parseInt(check_id.value)<a)
    {
        c++;
        para_id.textContent="Smaller..Try Again";
        para_id.style.color="brown";
    }   
}
function reset()
{
    para_id.textContent="";
    check_id.value="";
}