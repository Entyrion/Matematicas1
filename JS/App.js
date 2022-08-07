// let Para variables globales
// var Para variables locales

const btns=document.getElementById("btns");
btns.addEventListener("click",suma);
function suma(){
    var n1=Number(document.getElementById("num1").value);
    var n2=Number(document.getElementById("num2").value);
    var res=Number(n1+n2)
    const rs=document.getElementById("rs")
    rs.innerText=res;
}
function resta(){
    var n1=Number(document.getElementById("num3").value);
    var n2=Number(document.getElementById("num4").value);
    var res=Number(n1-n2)
    const rr=document.getElementById("rr")
    rr.innerText=res;
}
function mult(){
    var n1=Number(document.getElementById("num5").value);
    var n2=Number(document.getElementById("num6").value);
    var res=Number(n1*n2)
    const rm=document.getElementById("rm")
    rm.innerText=res;
}
function divi(){
    var n1=Number(document.getElementById("num7").value);
    var n2=Number(document.getElementById("num8").value);
    var res=Number(n1/n2)
    const rd=document.getElementById("rd")
    rd.innerText=res;
}
function nasc(){
    var vals=[];
    const rna=document.getElementById("ras")
    const ul=document.getElementById("listado");
    ul.innerText="";
    for (let i=0; i<=100; i++) {
        const li=document.createElement("li");
        li.setAttribute("class","list-group-item mt-1");
        li.innerText=i;
        ul.appendChild(li)
        vals[i]=i+"<br>";
    }
    rna.innerHTML=vals;
}
function verc(){
    const rep=document.getElementById("aud")
    const cal=Number(document.getElementById("cal").value);
    const aor=document.getElementById("al")
    if (cal<8){
        aor.innerText=("Tronaste con "+cal+", vas de baja mijo");
    }else{
        aor.innerText=("Pasaste con "+cal+", felicidades");
        rep.play();
    }
}
