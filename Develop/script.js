$(document).ready(function () {

  renderLastEntered()

  function renderLastEntered() {
    eventPulled9 = localStorage.getItem("event9")
    text9.setAttribute('value', eventPulled9)
  }

  eventPost9.addEventListener('click', function (event) {
    event.preventDefault()
    let eventCal9 = document.querySelector('#text9').value
    let eventPost9 = document.querySelector('#eventPost')
    localStorage.setItem('event9', eventCal9)
  })

  clear9.addEventListener('click', function (event) {
    event.preventDefault()
    text9.setAttribute('value', '')
  })

  // -------

  $('#currentDay').text(moment().format('dddd, MMMM Do'))   // Time at Top

  let currentMomentHour = moment().hour()

  console.log(currentMomentHour)

  // if (currentMomentHour < 9) {
  //   document.getElementById('hour9').classList.add('past')
  //   document.getElementById('hour10').classList.add('past')
  //   document.getElementById('hour11').classList.add('past')
  //   document.getElementById('hour12').classList.add('past')
  //   document.getElementById('hour13').classList.add('past')
  //   document.getElementById('hour14').classList.add('past')
  //   document.getElementById('hour15').classList.add('past')
  //   document.getElementById('hour16').classList.add('past')
  // } else if (currentMomentHour == 9) {
  //   document.getElementById('hour9').classList.add('present')
  //   document.getElementById('hour10').classList.add('future')
  //   document.getElementById('hour11').classList.add('future')
  //   document.getElementById('hour12').classList.add('future')
  //   document.getElementById('hour13').classList.add('future')
  //   document.getElementById('hour14').classList.add('future')
  //   document.getElementById('hour15').classList.add('future')
  //   document.getElementById('hour16').classList.add('future')
  // } else if (currentMomentHour == 10) {
  //   document.getElementById('hour9').classList.add('past')
  //   document.getElementById('hour10').classList.add('present')
  //   document.getElementById('hour11').classList.add('future')
  //   document.getElementById('hour12').classList.add('future')
  //   document.getElementById('hour13').classList.add('future')
  //   document.getElementById('hour14').classList.add('future')
  //   document.getElementById('hour15').classList.add('future')
  //   document.getElementById('hour16').classList.add('future')
  // } else if (currentMomentHour == 11) {
  //   document.getElementById('hour9').classList.add('past')
  //   document.getElementById('hour10').classList.add('past')
  //   document.getElementById('hour11').classList.add('present')
  //   document.getElementById('hour12').classList.add('future')
  //   document.getElementById('hour13').classList.add('future')
  //   document.getElementById('hour14').classList.add('future')
  //   document.getElementById('hour15').classList.add('future')
  //   document.getElementById('hour16').classList.add('future')
  // } else if (currentMomentHour == 12) {
  //   document.getElementById('hour9').classList.add('past')
  //   document.getElementById('hour10').classList.add('past')
  //   document.getElementById('hour11').classList.add('past')
  //   document.getElementById('hour12').classList.add('present')
  //   document.getElementById('hour13').classList.add('future')
  //   document.getElementById('hour14').classList.add('future')
  //   document.getElementById('hour15').classList.add('future')
  //   document.getElementById('hour16').classList.add('future')
  // } else if (currentMomentHour == 13) {
  //   document.getElementById('hour9').classList.add('past')
  //   document.getElementById('hour10').classList.add('past')
  //   document.getElementById('hour11').classList.add('past')
  //   document.getElementById('hour12').classList.add('past')
  //   document.getElementById('hour13').classList.add('present')
  //   document.getElementById('hour14').classList.add('future')
  //   document.getElementById('hour15').classList.add('future')
  //   document.getElementById('hour16').classList.add('future')
  // } else if (currentMomentHour == 14) {
  //   document.getElementById('hour9').classList.add('past')
  //   document.getElementById('hour10').classList.add('past')
  //   document.getElementById('hour11').classList.add('past')
  //   document.getElementById('hour12').classList.add('past')
  //   document.getElementById('hour13').classList.add('past')
  //   document.getElementById('hour14').classList.add('present')
  //   document.getElementById('hour15').classList.add('future')
  //   document.getElementById('hour16').classList.add('future')
  // } else if (currentMomentHour == 15) {
  //   document.getElementById('hour9').classList.add('past')
  //   document.getElementById('hour10').classList.add('past')
  //   document.getElementById('hour11').classList.add('past')
  //   document.getElementById('hour12').classList.add('past')
  //   document.getElementById('hour13').classList.add('past')
  //   document.getElementById('hour14').classList.add('past')
  //   document.getElementById('hour15').classList.add('present')
  //   document.getElementById('hour16').classList.add('future')
  // } else if (currentMomentHour == 14) {
  //   document.getElementById('hour9').classList.add('past')
  //   document.getElementById('hour10').classList.add('past')
  //   document.getElementById('hour11').classList.add('past')
  //   document.getElementById('hour12').classList.add('past')
  //   document.getElementById('hour13').classList.add('past')
  //   document.getElementById('hour14').classList.add('past')
  //   document.getElementById('hour15').classList.add('past')
  //   document.getElementById('hour16').classList.add('present')
  // } else if (currentMomentHour > 14) {
  //   document.getElementById('hour9').classList.add('future')
  //   document.getElementById('hour10').classList.add('future')
  //   document.getElementById('hour11').classList.add('future')
  //   document.getElementById('hour12').classList.add('future')
  //   document.getElementById('hour13').classList.add('future')
  //   document.getElementById('hour14').classList.add('future')
  //   document.getElementById('hour15').classList.add('future')
  //   document.getElementById('hour16').classList.add('future')
  // }
})

