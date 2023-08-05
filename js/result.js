const gomName = {
    1: { "detail" : "어디야..? 물어보면 십중팔구 내 방", "gomName" : "프로 집콕러 곰두리" },
    2: { "detail" : "조장은 내가 할게 자료조사는 누가 할래?", "gomName" : "지휘자 곰두리" },
    3: { "detail" : "details", "gomName" : "제우스 마냥 벼락치는 곰두리" },
    4: { "detail" : "details", "gotName" : "즉흥발랄 곰두리" }
};
const character = {
    1: { "explain" : "주로 혼자 집에서 에너지를 충전하는 게 좋은 성격의 소유자."},
    2: { "explain" : "곰두리 2에 대한 설명" },
    3: { "explain" : "곰두리 3에 대한 설명"},
    4: { "explain" : "곰두리 4에 대한 설명"},
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