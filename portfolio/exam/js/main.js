$(document).ready(function () {

            //MAIN JS

    $(".start").click(function(event){
        let first=$("#first").val();
        let last=$("#last").val();
        if(first>0 && first<250 && last>49 && last<=300 && last-first>=49){
            exam(first,last);
            $(".main").addClass("dis_none");
            $(".exam").removeClass("dis_none");
        }
        else{
            event.preventDefault();
            alert(`            1.sual sayi 50 olmalidir
            2.baslangic deyer 0 boyuk 250 kicik olmali
            3.son deyer 50 boyuk 301 kicik olmalidir`)
        }
    })

    function exam(first,last){
        let answers=`1.	A
    2.	C
    3.	A
    4.	C
    5.	B
    6.	C
    7.	A
    8.	A
    9.	B
    10.	B
    11.	B
    12.	C
    13.	B
    14.	A
    15.	B
    16.	C
    17.	D
    18.	C
    19.	E
    20.	A
    21.	C
    22.	B
    23.	C
    24.	C
    25.	C
    26.	C
    27.	C
    28.	C
    29.	B
    30.	A
    31.	B
    32.	A
    33.	B
    34.	B
    35.	B
    36.	A
    37.	A
    38.	A
    39.	B
    40.	A
    41.	A
    42.	C
    43.	A
    44.	B
    45.	C
    46.	C
    47.	C
    48.	B
    49.	A
    50.	B
    51.	A
    52.	A
    53.	A
    54.	B
    55.	B
    56.	B
    57.	A
    58.	A
    59.	B
    60.	C
    61.	A
    62.	A
    63.	A
    64.	B
    65.	A
    66.	C
    67.	C
    68.	B
    69.	A
    70.	B
    71.	A
    72.	B
    73.	B
    74.	B
    75.	B
    76.	D
    77.	D
    78.	B
    79.	A
    80.	B
    81.	A
    82.	C
    83.	B
    84.	B
    85.	C
    86.	B
    87.	A
    88.	A
    89.	B
    90.	A
    91.	B
    92.	A
    93.	B
    94.	B
    95.	A
    96.	B
    97.	B
    98.	B
    99.	B
    100.	C
    101.	C
    102.	A
    103.	A
    104.	A
    105.	A
    106.	A
    107.	B
    108.	A
    109.	B
    110.	B
    111.	B
    112.	B
    113.	A
    114.	C
    115.	D
    116.	C
    117.	B
    118.	D
    119.	A
    120.	A
    121.	A
    122.	A
    123.	C
    124.	A
    125.	A
    126.	A
    127.	A
    128.	A
    129.	B
    130.	C
    131.	B
    132.	B
    133.	A
    134.	B
    135.	A
    136.	B
    137.	C
    138.	C
    139.	A
    140.	A
    141.	C
    142.	A
    143.	B
    144.	C
    145.	C
    146.	C
    147.	C
    148.	A
    149.	B
    150.	A
    151.	B
    152.	A
    153.	C
    154.	A
    155.	B
    156.	B
    157.	B
    158.	A
    159.	B
    160.	B
    161.	C
    162.	B
    163.	A
    164.	B
    165.	C
    166.	B
    167.	A
    168.	A
    169.	B
    170.	A
    171.	B
    172.	A
    173.	C
    174.	A
    175.	A
    176.	A
    177.	C
    178.	C
    179.	A
    180.	B
    181.	A
    182.	C
    183.	C
    184.	B
    185.	A
    186.	A
    187.	B
    188.	C
    189.	A
    190.	A
    191.	A
    192.	C
    193.	A
    194.	C
    195.	B
    196.	A
    197.	C
    198.	A
    199.	A
    200.	B
    201.	B
    202.	A
    203.	B
    204.	C
    205.	B
    206.	A
    207.	B
    208.	A
    209.	A
    210.	C
    211.	A
    212.	B
    213.	A
    214.	B
    215.	B
    216.	B
    217.	C
    218.	C
    219.	B
    220.	A
    221.	B
    222.	C
    223.	A
    224.	A
    225.	A
    226.	A
    227.	B
    228.	A
    229.	B
    230.	A
    231.	B
    232.	A
    233.	C
    234.	E
    235.	C
    236.	D
    237.	E
    238.	D
    239.	E
    240.	A
    241.	C
    242.	B
    243.	C
    244.	C
    245.	A
    246.	B
    247.	B
    248.	B
    249.	A
    250.	B
    251.	C
    252.	A
    253.	B
    254.	B
    255.	C
    256.	D
    257.	C
    258.	E
    259.	A
    260.	B
    261.	A
    262.	A
    263.	A
    264.	B
    265.	A
    266.	B
    267.	B
    268.	C
    269.	A
    270.	C
    271.	B
    272.	B
    273.	C
    274.	D
    275.	E
    276.	A
    277.	C
    278.	D
    279.	E
    280.	C
    281.	C
    282.	B
    283.	C
    284.	A
    285.	A
    286.	B
    287.	A
    288.	B
    289.	C
    290.	A
    291.	A
    292.	B
    293.	A
    294.	D
    295.	C
    296.	D
    297.	C
    298.	B
    299.	C
    300.	C
    `
    let all=answers.split(".	");
    let correct=[];
    for(let i=1;i<all.length;i++){
        correct.push(all[i][0]);
    }
    let exam=[];
    let quiz_inner="";
    for(let i=0;i<50;i++){
        let quiz_num=parseInt(Math.random()*last)+(+first);
        if(exam.indexOf(quiz_num)==-1){
        quiz_inner+="<div class='ques'>";
        exam.push(quiz_num);
        quiz_inner+="<h3 class='id'>"+quiz_num+"</h3>";
        quiz_inner+="<div class='answer'></div><div id='A' class='ans'>A</div><div id='B' class='ans'>B</div><div id='C' class='ans'>C</div><div id='D' class='ans'>D</div><div id='E' class='ans'>E</div><span class='congrts dis_none'>✅</span></div>"
        quiz_inner+="</div>";
        }
        else{
            i-=1;
        }
    }
    $(".questions").text("").append(quiz_inner);
    $(".questions").append("<button id='finish'>Bitir</button>");
    $(".questions").append("<button id='again'>Yeniden basla</button>");
    
    let my_result={};
    $(".ans").click(function(){
        $(this).addClass("green");
        $(this).siblings().removeClass("green");
        let id=$(this).parent().find("h3").text();
        let my_ans=$(this).text();
            my_result[id]=my_ans;
    })
    let mycorrect=[];
    $("#finish").click(function(){
        let sorus=confirm(`${Object.keys(my_result).length} sual cavablandirmisan.Bitirmeye eminsen?`);
        if(sorus){
            for(let i=0;i<50;i++){
                let task_id=exam[i];
                if(my_result[task_id]==correct[task_id]){
                    mycorrect.push(task_id);
                    $(".ques").eq(i).find(".congrts").removeClass("dis_none")
                }
                else{
                    $(".ques").eq(i).find("#"+correct[task_id]).addClass("red")
                }
            }
        $(".correct").text(mycorrect.length);
        $(".incorrect").text(50-mycorrect.length);
        $(".result").css("display","")
        $(".questions").addClass("pointer_event")
        }
    })

    $("#again").click(function(){
        let sorus=confirm(`Imtahan yeniden baslayacaq eminsen?`);
        if(sorus){
        $(".exam").addClass("dis_none");
        $(".main").removeClass("dis_none");
        }
    })

    }




})







