const gomName = {
    1: { "detail" : "음악은 국가가 허락한 유일한 마약이니까", "gomName" : "오디오 비는 거 못 참는 곰두리" },
    2: { "detail" : "네 아 넵 넴 넹 네넵 네네", "gomName" : "직장인대답체 마스터 곰두리" },
    3: { "detail" : "골든 리트리버", "gomName" : "친화력 좋은 곰두리" },
    4: { "detail" : "지도앱만 있다면 어디든 갈 수 있어", "gomName" : "명대사 봇 곰두리" },
    5: { "detail" : "노는 게 제일 좋아", "gomName" : "뽀로로 곰두리" },
    6: { "detail" : "어디야..? 물어보면 십중팔구 내 방", "gomName" : "프로 집콕러 곰두리" },
    7: { "detail" : "적극적인 호기심 대마왕", "gomName" : "눈빛이 초롱초롱한 곰두리" },
    8: { "detail" : "어디서 타는 냄새 안 나요?", "gomName" : "학구열에 불타는 곰두리" },
    9: { "detail" : "details", "gomName" : "알잘딱깔센 곰두리" },
    10: { "detail" : "details", "gomName" : "나노단위 계획러 곰두리" },
    11: { "detail" : "조장은 내가 할게 자료조사는 누가 할래?", "gomName" : "지휘자 곰두리" },
    12: { "detail" : "details", "gomName" : "열정적인 협력가 곰두리" },
    13: { "detail" : "누가 사담 소리를 내었는가?", "gomName" : "철두철미한 곰두리" },
    14: { "detail" : "오늘 할 과제를 내일로 미루지 말자", "gomName" : "실행력 갑 곰두리" },
    15: { "detail" : "details", "gomName" : "제우스 마냥 벼락치는 곰두리" },
    16: { "detail" : "너는 계획이 다 있구나", "gomName" : "걸어다니는 스케줄러 곰두리" },
    17: { "detail" : "오늘 일정? 간지나게 숨쉬기", "gomName" : "즉흥적인 곰두리" },
    18: { "detail" : "잠에서 깨는데 이상하게 몸이 가볍고 개운하다", "gomName" : "지각하는 곰두리" },
    19: { "detail" : "details", "gomName" : "실행력 갑 곰두리" },
};
const character = {
    1: { "explain" : "곰두리 1에 대한 설명"},
    2: { "explain" : "곰두리 2에 대한 설명" },
    3: { "explain" : "곰두리 3에 대한 설명"},
    4: { "explain" : "곰두리 4에 대한 설명"},
    5: { "explain" : "곰두리 5에 대한 설명"},
    6: { "explain" : "곰두리 6에 대한 설명"},
    7: { "explain" : "곰두리 7에 대한 설명"},
    8: { "explain" : "곰두리 8에 대한 설명"},
    9: { "explain" : "곰두리 9에 대한 설명"},
    10: { "explain" : "곰두리 10에 대한 설명"},
    11: { "explain" : "곰두리 11에 대한 설명"},
    12: { "explain" : "곰두리 12에 대한 설명"},
    13: { "explain" : "곰두리 13에 대한 설명"},
    14: { "explain" : "곰두리 14에 대한 설명"},
    15: { "explain" : "곰두리 15에 대한 설명"},
    16: { "explain" : "곰두리 16에 대한 설명"},
    17: { "explain" : "곰두리 17에 대한 설명"},
    18: { "explain" : "곰두리 18에 대한 설명"},
    19: { "explain" : "곰두리 19에 대한 설명"},
}

let num = 1;

const d = document.querySelector('.detail'); 
const g = document.querySelector('.gomName'); 
const c = document.querySelector('.character'); 

d.addEventListener('click', clickButton);
g.addEventListener('click', clickButton);
c.addEventListener('click', clickButton);

function clickButton(e) {
    d.innerHTML = gomName[num]["detail"];
    g.innerHTML = gomName[num]["gomName"];
    c.innerHTML = character[num]["explain"];

    num++;
}

// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('c53ce9ba6c08bea4fd3b94d1c6963088');

// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());

function kakaoShare() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '카카오공유하기 시 타이틀',
            description: '카카오공유하기 시 설명',
            imageUrl: '카카오공유하기 시 썸네일 이미지 경로',
            link: {
                mobileWebUrl: '카카오공유하기 시 클릭 후 이동 경로',
                webUrl: '카카오공유하기 시 클릭 후 이동 경로',
            },
        },
        buttons: [
            {
            title: '웹으로 보기',
            link: {
                mobileWebUrl: '카카오공유하기 시 클릭 후 이동 경로',
                webUrl: '카카오공유하기 시 클릭 후 이동 경로',
            },
            },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
    })
}