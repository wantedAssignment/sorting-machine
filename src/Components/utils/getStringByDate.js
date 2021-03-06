export const getStringByDate = (dateConstructor, locale) => {
  const year = dateConstructor.getFullYear();
  const month = dateConstructor.getMonth();
  const date = dateConstructor.getDate();
  const day = dateConstructor.getDay();

  if (locale === 'ko') return `${year}년 ${month}월 ${date}일 ${DAY_KO[day]}`;
  else if (locale === 'en')
    return `${DAY_EN[day]} ${MONTH_EN[month]} ${date}, ${year}`;
  else throw Error(`locale 값은 'ko', 'en'만 가능합니다. 입력값 : ${locale}`);
};

const DAY_KO = [
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
  '일요일',
];
const DAY_EN = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const MONTH_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
];
