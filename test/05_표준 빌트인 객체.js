// 1. 년, 월, 일을 전달하면 해당 날짜의 요일을 
// '월', '화', '수', '목', '금', '토', '일' 문자열로 
// 반환해주는 함수 getWeekDay를 만든다.

console.log(getWeekDay(2022, 6, 21));    // 2022년 6월 21일
console.log(getWeekDay(2022, 12, 12));   // 2022년 12월 12일

function getWeekDay(year, month, day) {
   const daysOfWeek = ['일','월', '화', '수', '목', '금', '토'];
   const date = new Date(year, month - 1, day); // month는 0부터 시작하므로 1을 빼줍니다.
   const dayOfWeekIndex = date.getDay(); // 요일을 나타내는 값 (0: 일요일, 1: 월요일, ..., 6: 토요일)

   return daysOfWeek[dayOfWeekIndex]; //이부분 물어보기
}

// 2. 오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수와 
// 오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수를 만든다.

console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

function getSecondsToday() {
    var today = new Date();
   
    return `${today.getMilliseconds()}초나 흘렀습니다. 시간을 소중히 씁시다^^`;
    
}

function getSecondsToTomorrow() {

    const tomorrow = new Date(now.setDate(now.getDate() +1));

    return 
}


