s=false,pic=0,c=10,i=null,
btn_c=document.getElementById("btn_img_change"),
btn_r=document.getElementById("btn_img_random"),
btn_a=document.getElementById("btn_ago"),
btn_n=document.getElementById("btn_next"),
it=document.getElementById("img_text"),
ts=document.getElementById("text_show"),
imgs=document.getElementById("img_hidden").getElementsByTagName("img");;
    var text_array=["<a href='https://ani.gamer.com.tw/animeVideo.php?sn=29506' target='_blank'>巴哈動畫連結</a><br><br>《女性向遊戲世界對路人角色很不友好》故事描述，原本是現代日本的社會人，轉生到劍與魔法的「女性向遊戲」世界而成為名叫里昂的人物，對於那個女尊男卑的世界感到絕望。在這個世界之中，男性如同負責提供女性生活所需的家畜。s能夠算得上例外的，大概就只有身為遊戲攻略對象的王太子，以及他身邊的型男軍團。對於這種蠻橫不講理的處境，里昂擁有一個武器─&#62前世受到囂張的妹妹要脅，不得不攻略這款遊戲時所累積下來的相關知識。在因緣際會之下，里昂只好運用這些知識，挺身對抗諸多任性妄為的女性與型男。","<a href='https://ani.gamer.com.tw/animeVideo.php?sn=28804' target='_blank'>巴哈動畫連結</a><br><br>《這個僧侶有夠煩》故事是以腹黑毒舌的暗黑精靈「卡菈」與難以煽動的鎧甲男「埃爾文」為主軸，描述兩人間充滿各式吐槽的冒險喜劇。","<a href='https://ani.gamer.com.tw/animeVideo.php?sn=28873' target='_blank'>巴哈動畫連結</a><br><br>《盾之勇者成名錄 第二季》作為盾之勇者被召喚至異世界的岩谷尚文。誰知展開冒險才到第三天就被戰友背叛，一口氣失去了身為勇者的名聲及所有盤纏。…為什麼只有我碰上這種倒楣事啊！？不信任、疑念、猜忌，世界上的所有人事物都是仇敵！尚文陷入再也無法相信他人的狀態，此時卻見一名少女出現在他面前…！？在苦惱的盡頭，他所得到的究竟是什麼東西呢！？","<a href='https://ani.gamer.com.tw/animeVideo.php?sn=28795' target='_blank'>巴哈動畫連結</a><br><br>《骸骨騎士大人異世界冒險中》敘述主角「亞克」在玩線上RPG的過程中玩到睡著，一醒來發現自己以遊戲角色的樣貌出現在未知的異世界。而他的樣貌，竟是外面穿著盔甲、裡頭全是骨頭的骸骨騎士。覺得要是自己的真面目曝光，可能會被當成怪物消滅掉。因此他決定要盡量低調，然而卻無法對眼前的惡行置之不理，骸骨騎士亞克無意識中「改變世界」的異世界奇幻故事，就此展開！","<a href='https://www.bilibili.com/bangumi/play/ep475898?from_spmid=666.19.0.0' target='_blank'>B站動畫連結</a><br><br>《派對咖孔明》描述三國時代知名軍師．諸葛孔明在五度北伐失敗的打擊及病情加劇最終星落五丈原，享年54歲…但卻不知為何重生穿越來到現代日本。三國時代為人民、為天下太平奮鬥的諸葛孔明，意外得到的第二人生，遇上了與創作歌手月見英子，為了實現她的夢想，孔明這次將以軍師身分在音樂界活躍。","<a href='https://ani.gamer.com.tw/animeVideo.php?sn=28879' target='_blank'>巴哈動畫連結</a><br><br>《輝夜姬想讓人告白ー超級浪漫ー》講述在備受期待的菁英就讀的秀知院學園，在學生會裡相遇的副會長·四宮輝夜與會長白銀御行對彼此都有好感，但兩人的自尊心都不允許自己就這樣向對方告白，就在這樣的情況下僵持了半年——完全不夠坦率的兩人，認為自己只要先告白就輸了，每天想的都是「設法讓對方先告白」。就這樣直到今天，輝夜與白銀使盡渾身解數的戀愛頭腦戰仍在持續著。","<a href='https://ani.gamer.com.tw/animeVideo.php?sn=28798' target='_blank'>巴哈動畫連結</a><br><br>《SPY×FAMILY 間諜家家酒》每一個人都擁有不想讓任何人看見得自己的一面――位在世界各國於檯面下進行激烈情報戰的時代。東國與西國已經維持了數十年的冷戰態。所屬西國情報局對東課&#60;WISE&#62;厲害的間諜〈黃昏〉，為了前往找尋被譽為是會威脅到東西國和平的危險人物，東國的國家統一黨總裁唐納文・戴斯蒙德所正在籌備的戰爭計畫，被賦予了一項極秘任務。其名稱為Operation〈梟〉。內容講述「在一週內組建家庭，並潛入戴斯蒙德兒子所就讀的學校吧」。但是，他所遇到的女兒是會讀心的超能力者、妻子則是暗殺者！為了互相的利益而成為家庭，決定在隱藏真實身分的情況下共同生活的3人。世界的和平就託付即將發生一系列事件的暫定的家庭…？"];
function star(e)
{
  it.style.opacity=0.3;
  ts.hidden=true;
  if(e=="1")
  {
    if(!s)
    {
      btn_r.disabled=btn_a.disabled=btn_n.disabled=s=true;
      i = setInterval(play, 10);
      btn_c.innerHTML = "暫停";
    }else
    {
      btn_r.disabled=btn_a.disabled=btn_n.disabled=s=false;
      clearInterval(i);
      btn_c.innerHTML = "繼續";
    }
  }else
  {
    if(!s)
    {
      s=btn_c.disabled=btn_r.disabled=btn_n.disabled=btn_a.disabled=true;
      rand();
    }else s=btn_r.disabled=btn_c.disabled=btn_n.disabled=btn_a.disabled=false;
  }
}
function play()
{
  pic++;
  if(pic==imgs.length) pic=0;
  document.getElementById("img_show").setAttribute("src",imgs[pic].getAttribute("src"));
}
function rand()
{
  c=Math.floor(Math.random()*c+c);
  clearInterval(i);
  if(c<500)
  {
    i=setInterval(play,c+=Math.floor(Math.random()*50));
    r=setTimeout(rand,3000);
  }else star(2),c=10;
}
function showtext()
{
  if(!s)
  {
  	ts.innerHTML=text_array[pic];
  	ts.hidden=false;
    it.style.opacity=1;
  }
}
function nextimg(n) {
  if(!s)
  {
    it.style.opacity=0.3;
    ts.hidden=true;
    pic+=n;
    if(pic==imgs.length) pic=0;
    if(pic<0) pic=imgs.length-1;
    document.getElementById("img_show").setAttribute("src",imgs[pic].getAttribute("src"));
  }
}
