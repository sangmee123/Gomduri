const q = {
    1: { "title": "시험 기간이 다가왔다. 나는 어디서 공부를...?" },
    2: { "title": "점심 시간이다~~~! 어떤 걸 먹을까?" },
    3: { "title": "공부하러 카페나 도서관에 온 나는?" },
    4: { "title": "시험 기간에 나는 잠깐 눈을 붙이기로 한다." },
    5: { "title": "나는 학과 모임을?" },
    6: { "title": "나는 어떤 곳을 더 좋아하지?" },
    7: { "title": "드디어 시험이 끝났다..! 이후에 나의 계획은?" },
    8: { "title": "내가 팀플에서 가장 중요하게 생각하는 것은?" },
    9: { "title": "조별 과제를 하는 내 모습에 가장 가까운 것은?" },
    10: { "title": "강원대 학식을 먹으러 가는 곰두리의 모습은?" },
    11: { "title": "아직 과제가 남았는데 서버 접속이 안 된다...!", },
    12: { "title": "방학을 맞아 계획을 세웠다! 나의 모습은?", },
    13: { "title": "드론 또는 무드등 만들기 프로그램 신청을 봤다.", },
    14: { "title": "친구가 우울해서 미용실을 갔다고 한다.", },
    15: { "title": "1교시인 나의 모습은?", }
};
const a = {
    1: { "A": "집이 최고야!", //프로 집콕러 곰두리
         "B": "*카공을 해야지.", 
         "C": "곰두리생은 강대 도서관에 가야지!" 
        },
    2: { "A": "곰두리는 가성비 학식이다.", 
         "B": "학식도 질려 외부에서 먹을 거야." 
        },
    3: { "A": "창가 자리에 앉는다.", 
         "B": "사방이 트인 곳에 앉는다.", 
         "C": "구석진 곳에 앉는다." 
        },
    4: { "A": "잠은 무조건 집에서 자야된다.", //프로 집콕러 곰두리
         "B": "도서관, 카페 어디서든 잘 수 있다." 
        },
    5: { "A": "별로 가고 싶지 않다.",
         "B": "종종 참여해 선후배들과 가까워지고 싶다." //인간 골든 리트리버 곰두리 
        },
    6: { "A": "조용하고 한적한 연못", 
         "B": "광장 같이 사람들 지나다니는 곳." //인간 골든 리트리버 곰두리
        },
    7: { "A": "밀린 잠을 자러 간다", //프로 집콕러 곰두리 
         "B": "강대 후문에서 술자리 약속" //인간 골든 리트리버 곰두리
        },
    8: { "A": "꼼꼼한 계획 수립 및 이행", //지휘자 곰두리
         "B": "임기응변과 적응하는 능력" 
        },
    9: { "A": "카톡 알림 설정을 해두고 적극적이다.", //지휘자 곰두리   
         "B": "저희 끝나고 저녁 같이 드실래요? 뒷풀이 해요! 이미 친해져있다.", //인간 골든 리트리버 곰두리
         "C": "효율을 추구하며 딴길로 새는 사담은 참을 수 없다." 
        },
    10: { "A": "*에타에서 식단 정보를 살펴본 후 가장 맛있는 곳으로 간다.", //지휘자 곰두리
          "B": "가까운 곳에 일단 도착해서 그날 끌리는 메뉴를 선택한다."   
        },
    11: { "A": "이미 미리 해두고 꿀잠자고 있음.", 
          "B": "될 때까지 밤새 새로고침 해본다."
        },
    12: { "A": "방학 기간별 목표를 설정해두고 진행상황을 체크한다.", //지휘자 곰두리
          "B": "해보고 싶었던 목록을 작성해두고 목록의 존재를 잊는다." 
        },
    13: { "A": "그게 뭐야? 혼자 집에서 취미생활하는 게 더 재밌다.", //프로 집콕러 곰두리
          "B": "뭔진 모르겠지만 같이하자며 단톡방에 올린다." //인간 골든 리트리버 곰두리
        },
    14: { "A": "무슨 일이야.. 왜 우울해?ㅠㅠ",
          "B": "오 머리 함? 색깔 잘 나옴? 사진 보여줘"
        },
    15: { "A": "기상도 한번에 하지 않음. 5분 간격으로 알람을 끈다.",
          "B": "알람 울리자마자 화장실로 직행해서 세수하며 정신을 차린다."
        }
}

//선택지 class
const first = document.querySelector('.first'); 
const second = document.querySelector('.second'); 
const third = document.querySelector('.third');

third.classList.add('a_hide');

//선택지 클릭 시 event 발생.
first.addEventListener('click', clickButton);
second.addEventListener('click', clickButton);
third.addEventListener('click', clickButton);

let num = 1;
let shift = 12;
const quertionTitle = document.querySelector('.title');
const progressBar = document.querySelector('.progress-bar');
const progressGom = document.querySelector('.progressGom');

//선택지를 클릭 시 다음 질문으로 넘어가게 하는 function
function clickButton(e) {
    quertionTitle.innerHTML = q[num]["title"];
    first.innerHTML = a[num]["A"];
    second.innerHTML = a[num]["B"];
    
    if(e.target.id === "A" && (num <= 2 || num === 5 || num === 14)) {
        //프로 집콕러 선택지
        document.querySelector('#homebody').value++;
    } else if(e.target.id === "B" && ((num >= 6 && num <= 8) || num === 10 || num === 14)) {
        //인간 골든 리트리버 선택지
        document.querySelector('#golden').value++;
    } else if(e.target.id === "A" && ((num >= 9 && num <= 11) || num === 13)) {
        //지휘자 곰두리 선택지
        document.querySelector('#conductor').value++;
    }

    //선택지 3개일 때
    if(num === 1 || num === 3) { 
        third.classList.remove('a_hide');
        third.innerHTML = a[num]["C"];
    } else {
        third.classList.add('a_hide');
    }
    
    //진행바
    progressGom.style.marginLeft = shift + "px";
    progressBar.setAttribute('style', 'width: calc(100/15*' + num + '%)');
    num++;

    //진행바: 곰두리 이동
    switch(num) {
        case 2: 
            shift = 48;
            break;
        case 3: 
            shift = 83;
            break;
        case 4: 
            shift = 120;
            break;    
        case 5:
            shift = 155;
            break;
        case 6: 
            shift = 192;
            break;
        case 7: 
            shift = 229;
            break;
        case 8: 
            shift = 263;    
            break;
        case 9:
            shift = 300;
            break;
        case 10:
            shift = 337;
            break;
        case 11:
            shift = 372;
            break;
        case 12:
            shift = 410;
            break;
        case 13:
            shift = 445;
            break;
        case 14: 
            shift = 480;
            break;
        case 15:
            shift = 515;
            break;
    }     
}