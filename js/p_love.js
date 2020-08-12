var getS=new Array();
    {getS[0]=new Array();
        getS[0][0]="乾卦：獨立自主<br>跟對象可能會有意見不合的情況<br>適當低頭有助於感情發展。";
        getS[0][1]="否卦：雙方不協調<br>陷入無法溝通或是交流的境地<br>感情方面諸事不宜，有可能被拒絕。";
        getS[0][2]="履卦：感情如履薄冰<br>需要審視情況，量力而為<br>最好謹守禮節，可得小亨。";
        getS[0][3]="遯卦：落花有意，流水無情<br>很可能被牽扯進不必要的是非<br>適當的給自己一點空間，逃離當下情況。";
        getS[0][4]="同人卦：跟對象有默契<br>或是在工作環境找到同道合的伴侶<br>可能會在與人合作中增進感情。";
        getS[0][5]="訟卦：和對象有爭執<br>感情中陷入是非<br>放下堅持，退一步則海闊天空。";
        getS[0][6]="無妄卦：會受到無妄之災<br>做白日夢，想法有點不切實際<br>談感情很有可能受到傷害。";
        getS[0][7]="姤卦：感情無法長久，婚姻不宜<br>有對象不貞的情況<br>感情只是一場邂逅。";
        
        getS[1]=new Array();
        getS[1][0]="泰卦：與對象感情融洽<br>有良好的溝通<br>屬於情投意合的狀態，可以好好把握。";
        getS[1][1]="坤卦：不應過於主動或積極進取<br>需要持之以恒，才可以成功<br>有主動付出的傾象，會較為辛苦。";
        getS[1][2]="臨卦：再觀察一段時間<br>得失心不要太重<br>切記過於急躁，慢慢等待有機會成功。";
        getS[1][3]="謙卦：需要謙卑自牧<br>保持修養，能有精神上的獲得<br>追求持之以恒，日久見人心。";
        getS[1][4]="明夷卦：陷入黑暗的狀態<br>受傷很深，看不到未來<br>很有可能被對方拋棄。";
        getS[1][5]="師卦：多重視對方想法<br>他是有魅力的人，會從他身上學到很多<br>不過可能有花心的傾向，需要多注意。";
        getS[1][6]="復卦：同樣的情況反覆出現<br>容易分分合合，吵架的內容都是類似的<br>若要相處需要雙方互相包容。";
        getS[1][7]="升卦：感情緩慢成長<br>切記急躁，需要步步為營<br>若有朋友幫助，感情可以升溫。";

        getS[2]=new Array();
        getS[2][0]="夬卦：最好果斷決定<br>對方可能有不專情的嫌疑<br>要多使用手腕，溫和處理感情問題。";
        getS[2][1]="萃卦：雙方情投意合<br>若是有朋友當助攻有利於感情發展<br>相處時可以多展現自己的知識。";
        getS[2][2]="兌卦：相處是喜悅的<br>懞懂的愛情，兩小無猜的狀態<br>需要多用和悅的心態跟對方溝通";
        getS[2][3]="咸卦：心有靈犀<br>感情大吉，男女心心相映<br>多虛心傾聽對方，同情心待人。";
        getS[2][4]="革卦：感情已逝去<br>重新開始是個比較好的選擇<br>若是想繼續堅持，會非常艱辛。";
        getS[2][5]="困卦：陷入孤立無援<br>已經到了山窮水盡的地步<br>需要審視這段感情是否合適哦";
        getS[2][6]="隨卦：順其自然比較好<br>佛系的心態面對感情<br>一切船到橋頭自然直。";
        getS[2][7]="大過卦：感情無望<br>可能你已經犯了很大的過錯<br>並非良緣，雙方眼光過高或身份不適配。";

        getS[3]=new Array();
        getS[3][0]="大畜卦：需要長期經營<br>可能有些阻礙，但克服後會累積感情<br>但家庭難以兼顧。";
        getS[3][1]="剝卦：小人盛行<br>不利於女追男<br>遇到問題避難為優先。";
        getS[3][2]="損卦：需要盡量戒欲<br>動乎情止乎禮義<br>若要感情成功需要放長線釣大魚，眼光放遠。";
        getS[3][3]="艮卦：困難重重<br>單戀或是一廂情願<br>追求者追不上對方或是非常艱辛。";
        getS[3][4]="賁卦：虛有其表<br>太過在乎外在條件，需要多充實自己<br>感情會遭遇到小障礙。";
        getS[3][5]="蒙卦：蒙昧無知<br>可能輕信於人，或是誤以為對方有意思<br>最好請家人朋友幫忙把關。";
        getS[3][6]="頤卦：說話前先三思<br>感情可能會有阻礙<br>守靜為吉，躁動為凶。";
        getS[3][7]="蠱卦：關係複雜<br>對方可能到處留情<br>被對方洗腦或是精神控制，需要多注意。";

        getS[4]=new Array();
        getS[4][0]="大有卦：理想可能實現<br>努力堅持後收穫成果<br>感情光明有美好的未來。";
        getS[4][1]="晉卦：感情欣欣向榮<br>雨過天晴，守得雲開見月明<br>會越來越好，優點被對方看見。";
        getS[4][2]="睽卦：陷入孤獨乖離<br>與對方感情不睦彼此見外<br>感情事與願違，可能有背叛";
        getS[4][3]="旅卦：遊戲人間<br>感情狀態浮動，不是認真的關係<br>跟對方並不是相互信賴的。";
        getS[4][4]="離卦：聰明美麗<br>以外表使對方心動，或是被對方的外貌吸引<br>有華而不實之感，並且過份急躁。";
        getS[4][5]="未濟卦：感情不和<br>有失序的狀況發生<br>感情不能如願，相處時最好多方觀察。";
        getS[4][6]="噬嗑卦：食之無味棄之可惜<br>感情可能有被橫刀奪愛<br>需要明察秋毫，以免對方腳踏兩條船或是廣泛撒網。";
        getS[4][7]="鼎卦：表面看似平穩<br>但是有第三者插足的跡象<br>需要多留意對方的情況。";

        getS[5]=new Array();
        getS[5][0]="需卦：等待時機<br>追求者有困難阻隔<br>對他有所需求，或是感情之外還有麵包要兼顧。";
        getS[5][1]="比卦：親密無間<br>若有曖昧對象算是兩情相悅哦<br>是個可以互相扶持的關係";
        getS[5][2]="節卦：需要堅貞<br>若是不知節制則為感情是負面影響<br>但節制也不可太過，否則辛苦而無法持久。";
        getS[5][3]="蹇卦：知難而退<br>感情狀態騎虎難下<br>有失散的跡象，處境困難重重。";
        getS[5][4]="既濟卦：和諧中藏有危機<br>開始時和諧美好，後會漸漸發現不適合之處<br>不可仗著條件好就有恃無恐。";
        getS[5][5]="坎卦：陷入愛情的盲目<br>來自內心的不安全感以及外界的壓力<br>處在內外交迫的窘境，感情艱辛。";
        getS[5][6]="屯卦：可能已經失聯<br>或是感情上阻礙很大<br>最好是心裡要有所準備，為下一步累積實力。";
        getS[5][7]="井卦：需要修補<br>感情有損壞之處，需要用誠心好好維護<br>但盡量任其自然發展。";

        getS[6]=new Array();
        getS[6][0]="大壯卦：不太理性<br>感情之中太過強勢容易起衝突。<br>應冷靜避免莽撞造成錯誤。";
        getS[6][1]="豫卦：需要有所準備<br>順水推舟、體會與享受<br>用心傾聽對方需求，但不要沉溺與貪戀。";
        getS[6][2]="歸妹卦：雙方偏孽緣<br>感情短時間有成果，但不利於長久發展<br>不理智的感情，衝動下做決定易後悔。";
        getS[6][3]="小過卦：犯了小錯<br>負面的事情層出不窮，需要一件件解決<br>最好不要太過衝動，先觀望為宜。";
        getS[6][4]="豐卦：乾柴烈火<br>雙方情投意合，追求有望<br>偏向天雷勾動地火的感情，但還需要多認識對方。";
        getS[6][5]="解卦：消除誤會<br>雙方間若有小摩擦，需要積極面對問題<br>若出現了狀況最好盡早解決，拖延會對感情不利。";
        getS[6][6]="震卦：雷聲大雨點小<br>偏向有虛無實的感情，表面熱絡實則敷衍<br>變動來得很突然，令人措手不及。";
        getS[6][7]="恒卦：感情穩定恒久<br>若是追求需要付出耐心<br>老夫老妻的相處模式，雖然平淡但是幸福。";

        getS[7]=new Array();
        getS[7][0]="小畜卦：感情不夠篤實<br>男人吃軟飯之象，對方沒有實際的才華<br>遇人不淑，或是時常與對方有爭執。";
        getS[7][1]="觀卦：處在不穩定的階段<br>若是曖昧期則對方態度不明朗<br>需要用心觀察或是請朋友代為鑑定。<br>";
        getS[7][2]="中孚卦：相處很重氣氛<br>用誠實的態度感動對方<br>屬於長遠型的感情，短期難看到成果。<br>";
        getS[7][3]="漸卦：循序漸進<br>不可以心急，雙方之間已有感情<br>需要多注意對方長輩是否同意這段感情。";
        getS[7][4]="家人卦：成家立業<br>女子有旺夫運，女問為吉<br>男問需反躬自省，管好份內之事。";
        getS[7][5]="渙卦：可能分離<br>雙方關係渙散需要調整<br>情緣雖未散，但復合雙方間問題仍在。";
        getS[7][6]="益卦：良緣天定<br>感情相輔相成<br>可以考慮關係更進一步。";
        getS[7][7]="巽卦：感情飄忽不定<br>對方難以捉摸，把戲十分多<br>需要冷靜並隨機應變，先愛上者失利。";
        }



function getRandom(){
    var yau1=Math.round(Math.random()*100000)%8;
    var changeNum1;
    var yautop1;
    var yauCtop1;
    switch(yau1){
        case 0:
            document.write("<img src='yinchange.jpg' />"+"<br>");
            yautop1=2;yauCtop1=1;changeNum1=1;break;
        case 7:
            document.write("<img src='yanchange.jpg' />"+"<br>");
            yautop1=1;yauCtop1=2;changeNum1=1;break;
        case 1:
            document.write("<img src='yan.jpg' />"+"<br>");
            yautop1=1;yauCtop1=1;changeNum1=0;break;
        case 3:
            document.write("<img src='yan.jpg' />"+"<br>");
            yautop1=1;yauCtop1=1;changeNum1=0;break;
        case 5:
            document.write("<img src='yan.jpg' />"+"<br>");
            yautop1=1;yauCtop1=1;changeNum1=0;break;
        default:
            document.write("<img src='yin.jpg' />"+"<br>");
            yautop1=2;yauCtop1=2;changeNum1=0;
    }
    document.write("<br />");

    var yau2=Math.round(Math.random()*100000)%8;
    var changeNum2;var yautop2;var yauCtop2;
    switch(yau2){
        case 0:
            document.write("<img src='yinchange.jpg' />"+"<br>");
            yautop2=2;yauCtop2=1;changeNum2=1;break;
        case 7:
            document.write("<img src='yanchange.jpg' />"+"<br>");
            yautop2=1;yauCtop2=2;changeNum2=1;break;
        case 1:
            document.write("<img src='yan.jpg' />"+"<br>");
            yautop2=1;yauCtop2=1;changeNum2=0;break;
        case 3:
            document.write("<img src='yan.jpg' />"+"<br>");
            yautop2=1;yauCtop2=1;changeNum2=0;break;
        case 5:
            document.write("<img src='yan.jpg' />"+"<br>");
            yautop2=1;yauCtop2=1;changeNum2=0;break;
        default:
            document.write("<img src='yin.jpg' />"+"<br>");
            yautop2=2;yauCtop2=2;changeNum2=0;
    }
    document.write("<br />");
    var yau3=Math.round(Math.random()*100000)%8;
    var changeNum3;var yautop3;var yauCtop3;

    switch(yau3){
        case 0:
            document.write("<img src='yinchange.jpg' />"+"<br>");
            yautop3=2;yauCtop3=1;changeNum3=1;
            break;
        case 7:
            document.write("<img src='yanchange.jpg' />"+"<br>");
            yautop3=1;yauCtop3=2;changeNum3=1;
            break;
        case 1:
            document.write("<img src='yan.jpg' />"+"<br>");
            yautop3=1;yauCtop3=1;changeNum3=0;break;
        case 3:
            document.write("<img src='yan.jpg' />"+"<br>");
            yautop3=1;yauCtop3=1;changeNum3=0;break;
        case 5:
            document.write("<img src='yan.jpg' />"+"<br>");
            yautop3=1;yauCtop3=1;changeNum3=0;
            break;
        default:
            document.write("<img src='yin.jpg' />"+"<br>");
            yautop3=2;yauCtop3=2;changeNum3=0;
    }
    
    
    document.write("<br />");
    var yau4=Math.round(Math.random()*100000)%8;
    var changeNum4;var yaudown1;var yauCdown1;
    switch(yau4){
        case 0:
            document.write("<img src='yinchange.jpg' />"+"<br>");
            yaudown1=2;yauCdown1=1;changeNum4=1;
            break;
        case 7:
            document.write("<img src='yanchange.jpg' />"+"<br>");
            yaudown1=1;yauCdown1=2;changeNum4=1;
            break;
        case 1:
            document.write("<img src='yan.jpg' />"+"<br>");
            yaudown1=1;yauCdown1=1;changeNum4=0;
            break;
        case 3:
            document.write("<img src='yan.jpg' />"+"<br>");
            yaudown1=1;yauCdown1=1;changeNum4=0;break;
        case 5:
            document.write("<img src='yan.jpg' />"+"<br>");
            yaudown1=1;yauCdown1=1;changeNum4=0;break;
        default:
            document.write("<img src='yin.jpg' />"+"<br>");
            yaudown1=2;yauCdown1=2;changeNum4=0;
    }
    document.write("<br />");
    var yau5=Math.round(Math.random()*100000)%8;
    var changeNum5;var yaudown2;var yauCdown2;
    switch(yau5){
        case 0:
            document.write("<img src='yinchange.jpg' />"+"<br>");
            yaudown2=2;yauCdown2=1;changeNum5=1;
            break;
        case 7:
            document.write("<img src='yanchange.jpg' />"+"<br>");
            yaudown2=1;yauCdown2=2;changeNum5=1;
            break;
        case 1:
            document.write("<img src='yan.jpg' />"+"<br>");
            yaudown2=1;yauCdown2=1;changeNum5=0;
            break;
        case 3:
            document.write("<img src='yan.jpg' />"+"<br>");
            yaudown2=1;yauCdown2=1;changeNum5=0;break;
        case 5:
            document.write("<img src='yan.jpg' />"+"<br>");
            yaudown2=1;yauCdown2=1;changeNum5=0;break;
        default:
            document.write("<img src='yin.jpg' />"+"<br>");
            yaudown2=2;yauCdown2=2;changeNum5=0;
    }
    document.write("<br />");
    var yau6=Math.round(Math.random()*100000)%8;
    var changeNum6;var yaudown3;var yauCdown3;
    switch(yau6){
        case 0:
            document.write("<img src='yinchange.jpg' />"+"<br>");
            yaudown3=2;yauCdown3=1;changeNum6=1;
            break;
        case 7:
            document.write("<img src='yanchange.jpg' />"+"<br>");
            yaudown3=1;yauCdown3=2;changeNum6=1;
            break;
        case 1:
            document.write("<img src='yan.jpg' />"+"<br>");
            yaudown3=1;yauCdown3=1;changeNum6=0;
            break;
        case 3:
            document.write("<img src='yan.jpg' />"+"<br>");
            yaudown3=1;yauCdown3=1;changeNum6=0;break;
        case 5:
            document.write("<img src='yan.jpg' />"+"<br>");
            yaudown3=1;yauCdown3=1;changeNum6=0;break;
        default:
            document.write("<img src='yin.jpg' />"+"<br>");
            yaudown3=2;yauCdown3=2;changeNum6=0;
    }
    var mainguaTop=yautop1*100+yautop2*10+yautop3;
    var mainguaDown=yaudown1*100+yaudown2*10+yaudown3;
    var chguaUp=yauCtop1*100+yauCtop2*10+yauCtop3;
    var chguaDown=yauCdown1*100+yauCdown2*10+yauCdown3;
    var changeNum=changeNum1+changeNum2+changeNum3+changeNum4+changeNum5+changeNum6;
    var upNum1;var downNum1;var upNum2;var downNum2;
    switch(mainguaTop){
        case 111:upNum1=0;break;case 222:upNum1=1;break;case 211:upNum1=2;break;case 122:upNum1=3;break;
        case 121:upNum1=4;break;case 212:upNum1=5;break;case 221:upNum1=6;break;case 112:upNum1=7;break;
    }
    switch(mainguaDown){
        case 111:downNum1=0;break;case 222:downNum1=1;break;case 211:downNum1=2;break;case 122:downNum1=3;break;
        case 121:downNum1=4;break;case 212:downNum1=5;break;case 221:downNum1=6;break;case 112:downNum1=7;break;
    }
    switch(chguaUp){
        case 111:upNum2=0;break;case 222:upNum2=1;break;case 211:upNum2=2;break;case 122:upNum2=3;break;
        case 121:upNum2=4;break;case 212:upNum2=5;break;case 221:upNum2=6;break;case 112:upNum2=7;break;
    }
    switch(chguaDown){
        case 111:downNum2=0;break;case 222:downNum2=1;break;case 211:downNum2=2;break;case 122:downNum2=3;break;
        case 121:downNum2=4;break;case 212:downNum2=5;break;case 221:downNum2=6;break;case 112:downNum2=7;break;
    }
    var getGua=new Array();
    {getGua[0]=new Array();getGua[0][0]="乾  ";getGua[0][1]="否  ";getGua[0][2]="履  ";getGua[0][3]="遯  ";getGua[0][4]="同人";getGua[0][5]="訟  ";getGua[0][6]="無妄";getGua[0][7]="姤  ";
    getGua[1]=new Array();getGua[1][0]="泰  ";getGua[1][1]="坤  ";getGua[1][2]="臨  ";getGua[1][3]="謙  ";getGua[1][4]="明夷";getGua[1][5]="師  ";getGua[1][6]="復  ";getGua[1][7]="升  ";
    getGua[2]=new Array();getGua[2][0]="夬  ";getGua[2][1]="萃  ";getGua[2][2]="兌  ";getGua[2][3]="咸  ";getGua[2][4]="革  ";getGua[2][5]="困  ";getGua[2][6]="隨  ";getGua[2][7]="大過";
    getGua[3]=new Array();getGua[3][0]="大畜";getGua[3][1]="剝  ";getGua[3][2]="損  ";getGua[3][3]="艮  ";getGua[3][4]="賁  ";getGua[3][5]="蒙  ";getGua[3][6]="頤  ";getGua[3][7]="蠱  ";
    getGua[4]=new Array();getGua[4][0]="大有";getGua[4][1]="晉  ";getGua[4][2]="睽  ";getGua[4][3]="旅  ";getGua[4][4]="離  ";getGua[4][5]="未濟";getGua[4][6]="噬嗑";getGua[4][7]="鼎  ";
    getGua[5]=new Array();getGua[5][0]="需  ";getGua[5][1]="比  ";getGua[5][2]="節  ";getGua[5][3]="蹇  ";getGua[5][4]="既濟";getGua[5][5]="坎  ";getGua[5][6]="屯  ";getGua[5][7]="井  ";
    getGua[6]=new Array();getGua[6][0]="大壯";getGua[6][1]="豫  ";getGua[6][2]="歸妹";getGua[6][3]="小過";getGua[6][4]="豐  ";getGua[6][5]="解  ";getGua[6][6]="震  ";getGua[6][7]="恒  ";
    getGua[7]=new Array();getGua[7][0]="小畜";getGua[7][1]="觀  ";getGua[7][2]="中孚";getGua[7][3]="漸  ";getGua[7][4]="家人";getGua[7][5]="渙  ";getGua[7][6]="益  ";getGua[7][7]="巽  ";
    }
    
    {document.write("<br><font size=5><b>"+getGua[upNum1][downNum1]+"卦　　變　　");
    document.write(getGua[upNum2][downNum2]+"卦</font></b><br>");
    }
    
    if(getGua[upNum1][downNum1]==getGua[upNum2][downNum2]){
        document.write("<br><font size=4>"+getS[upNum1][downNum1]+"</font></b>");
    }
    else{
        document.write("<br />");
        document.write("<br><font size=4>"+getS[upNum1][downNum1]+"</font></b>");
        document.write("<br />");
        document.write("<br><font size=4>"+getS[upNum2][downNum2]+"</font></b>");
    }


}