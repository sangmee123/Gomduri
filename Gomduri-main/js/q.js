const q = {
    1: { "title" : "시험 기간이 다가왔다. 나는 어디서 공부를...?" },
    2: { "title" : "점심 시간이다~~~! 어떤 걸 먹을까?" },
    3: { "title" : "공부하러 카페나 도서관에 온 나는?" },
    4: { "title" : "시험 기간에 나는 잠깐 눈을 붙이기로 한다." },
    5: { "title" : "나는 학과 모임을?" },
    6: { "title" : "나는 어떤 곳을 더 좋아하지?" },
};
const a = {
    1: { "A" : "집이 최고야!", "B" : "*카공을 해야지.", "C" : "곰두리생은 강대 도서관에 가야지!"},
    2: { "A" : "곰두리는 가성비 학식이다.", "B" : "학식도 질려 외부에서 먹을 거야." },
    3: { "A" : "창가 자리에 앉는다.", "B" : "사방이 트인 곳에 앉는다.", "C" : "구석진 곳에 앉는다." },
    4: { "A" : "잠은 무조건 집에서 자야된다.", "B" : "도서관, 카페 어디서든 잘 수 있다." },
    5: { "A" : "종종 참여해 선후배들과 가까워지고 싶다.", "B" : "별로 가고 싶지 않다." },
    6: { "A" : "광장 같이 사람들 지나다니는 곳.", "B" : "조용하고 한적한 연못" },
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
const quertionTitle = document.querySelector('.title');

//선택지를 클릭 시 다음 질문으로 넘어가게 하는 function
function clickButton(e) {
    quertionTitle.innerHTML = q[num]["title"];
    first.innerHTML = a[num]["A"];
    second.innerHTML = a[num]["B"];
    
    //프로 집콕러 선택지
    if(e.target.id === "A" && num <= 2 || num === 5) {
        document.querySelector('#homebody').value++;
    } 

    //선택지 3개일 때
    if(num === 1 || num === 3) { 
        third.classList.remove('a_hide');
        third.innerHTML = a[num]["C"];
    } else {
        third.classList.add('a_hide');
    }
    num++;
}