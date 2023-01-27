function countHours(year, holidays) {
  let extraHours = 0;
  holidays.forEach( holiday => {
    const fecha = new Date(`${ year }/${ holiday }`);
    const day0fWeek = fecha.getDate();
    if(day0fWeek > 0 && day0fWeek < 6){
      extraHours += 2;
    }    
  })
  return extraHours;
}
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] //formato MM/DD

console.log(countHours (holiday, year)); 
  // {
  //   return holidays.map( holiday => {
  //     let date = new Date(`${ year }/${ holiday }`)
  //     return [1, 2, 3, 4, 5].includes(date.getDay())
  //   }).reduce((count, extraHour) => count + extraHour) * 2
  // }

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.