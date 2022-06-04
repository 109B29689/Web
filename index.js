index=0,stop=document.getElementById("stop"),star=document.getElementById("star"),rand=document.getElementById("rand"),imgs=document.getElementById("thumbs").getElementsByTagName("img"),big=document.getElementById("big"),c=10,i=null;
function ChangeDisabled(e){
　if(e=="1"){
	stop.disabled=false;
	star.disabled=true;
    rand.disabled=true;
    i=setInterval(play,50);
　}else if(e=="2"){
	star.disabled=false;
    rand.disabled=false;
    stop.disabled=true;
    clearInterval(i);
　}else{
	star.disabled=true;
    rand.disabled=true;
    rdm();
  }
}
function play()
{
    index++;
    if(index==imgs.length) index=0;
    big.setAttribute("src",imgs[index].getAttribute("src"));
}
function rdm()
{
    c=Math.floor(Math.random()*c+c);
    clearInterval(i);
    if(c<500)
    {
    	i=setInterval(play,c+=50);
        r=setTimeout(rdm,3000);
    }else ChangeDisabled(2),c=10;
}
