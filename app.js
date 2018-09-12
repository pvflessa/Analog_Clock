const hourHand = document.querySelector('#hour')
const minuteHand = document.querySelector('#minute')
const secondHand = document.querySelector('#second')



setInterval(()=>{


  const date = new Date()
  const hour = date.getHours()%12
  const minute =  date.getMinutes()
  const second =  date.getSeconds()

  const hourDeg = (hour * 30) + (0.5 * minute); // every hour, 30 deg. 30 / 60
  const minuteDeg = (minute * 6) + (0.1 * second); // every minute, 6 deg. 6 / 60
  const secondDeg = second * 6; // 360 / 60



  hourHand.style.transform = `rotate(${hourDeg}deg)`
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`
  secondHand.style.transform = `rotate(${secondDeg}deg)`





},1000)
