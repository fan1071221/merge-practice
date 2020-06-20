let topicsArray=[
    "深灰道館",
    "華藍道館",
    "枯葉道館",
    "玉虹道館",
    "淺紅道館",
    "金黃道館"
];

let startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    //時間先忽略，設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDay(5,1);