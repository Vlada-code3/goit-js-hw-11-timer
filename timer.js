
// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

//_____________________variant
class Timer {
    constructor(selector, targetDate){
    this.selector = document.querySelector(`${selector}`);
    this.targetDate = targetDate;
  }
  createTimer() {
const nowDate = new Date(this.targetDate).getTime()
 function pad(value){
  return String(value).padStart(2, '0');
}
  let intervalId = setInterval(()=>{
  const date = Date.now();
  let deltaTime = nowDate - date
  if (deltaTime < 0){
    deltaTime =0
    clearInterval(intervalId)
  }
  this.selector.querySelector('[data-value="days"]').textContent = pad(Math.floor((deltaTime / (1000 * 60 * 60 * 24))));
  this.selector.querySelector('[data-value="hours"]').textContent = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  this.selector.querySelector('[data-value="mins"]').textContent =  pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
  this.selector.querySelector('[data-value="secs"]').textContent = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
}, 1000)
    }
    }

const timer = new Timer('#timer-1', 'Jul 17, 2019')
timer.createTimer()



//____________-



// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const daysMark = document.querySelector('[data-value="days"]')
const hoursMark = document.querySelector('[data-value="hours"]')
const minsMark = document.querySelector('[data-value="mins"]')
const secsMark = document.querySelector('[data-value="secs"]')



const nowDate = new Date('Jul 17, 2021').getTime();//количество милисикунд от 1970 до Jul 17, 2021

function pad(value){
  return String(value).padStart(2, '0'); // - Добавляет еще один ноль
}

setInterval(()=>{
  const date = Date.now();
  const deltaTime = nowDate - date
  const secs = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
  const mins = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
  const hours = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const days = pad(Math.floor((deltaTime / (1000 * 60 * 60 * 24))));
  daysMark.textContent = days
  hoursMark.textContent = hours
  minsMark.textContent = mins
  secsMark.textContent = secs

}, 1000)
