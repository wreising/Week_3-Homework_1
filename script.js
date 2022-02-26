$(document).ready(function () {

  // -----------------
  // Date in the Header
  $('#currentDay').text(moment().format('dddd, MMMM Do'))

  // -----------------
  // functions that need to run on page load
  renderLastEntered()
  renderLastEntered10()
  renderLastEntered11()
  renderLastEntered12()
  renderLastEntered13()
  renderLastEntered14()
  renderLastEntered15()
  renderLastEntered16()

  // -----------------
  // get, set, and clear
  function renderLastEntered() {
    eventPulled9 = localStorage.getItem("event9")
    text9.setAttribute('value', eventPulled9)
  }
  eventPost9.addEventListener('click', function (event) {
    event.preventDefault()
    let eventCal9 = document.querySelector('#text9').value
    let eventPost9 = document.querySelector('#eventPost9')
    localStorage.setItem('event9', eventCal9)
  })
  clear9.addEventListener('click', function (event) {
    event.preventDefault()
    text9.setAttribute('value', '')
  })
  // -----------------
  function renderLastEntered10() {
    eventPulled10 = localStorage.getItem("event10")
    text10.setAttribute('value', eventPulled10)
  }
  eventPost10.addEventListener('click', function (event) {
    event.preventDefault()
    let eventCal10 = document.querySelector('#text10').value
    let eventPost10 = document.querySelector('#eventPost10')
    localStorage.setItem('event10', eventCal10)
  })
  clear10.addEventListener('click', function (event) {
    event.preventDefault()
    text10.setAttribute('value', '')
  })
  // -----------------
  function renderLastEntered11() {
    eventPulled11 = localStorage.getItem("event11")
    text11.setAttribute('value', eventPulled11)
  }
  eventPost11.addEventListener('click', function (event) {
    event.preventDefault()
    let eventCal11 = document.querySelector('#text11').value
    let eventPost11 = document.querySelector('#eventPost11')
    localStorage.setItem('event11', eventCal11)
  })
  clear11.addEventListener('click', function (event) {
    event.preventDefault()
    text11.setAttribute('value', '')
  })
  // -----------------
  function renderLastEntered12() {
    eventPulled12 = localStorage.getItem("event12")
    text12.setAttribute('value', eventPulled12)
  }
  eventPost12.addEventListener('click', function (event) {
    event.preventDefault()
    let eventCal12 = document.querySelector('#text12').value
    let eventPost12 = document.querySelector('#eventPost12')
    localStorage.setItem('event12', eventCal12)
  })
  clear12.addEventListener('click', function (event) {
    event.preventDefault()
    text12.setAttribute('value', '')
  })
  // -----------------
  function renderLastEntered13() {
    eventPulled1 = localStorage.getItem("event1")
    text1.setAttribute('value', eventPulled1)
  }
  eventPost1.addEventListener('click', function (event) {
    event.preventDefault()
    let eventCal1 = document.querySelector('#text1').value
    let eventPost1 = document.querySelector('#eventPost1')
    localStorage.setItem('event1', eventCal1)
  })
  clear1.addEventListener('click', function (event) {
    event.preventDefault()
    text1.setAttribute('value', '')
  })
  // -----------------
  function renderLastEntered14() {
    eventPulled2 = localStorage.getItem("event2")
    text2.setAttribute('value', eventPulled2)
  }
  eventPost2.addEventListener('click', function (event) {
    event.preventDefault()
    let eventCal2 = document.querySelector('#text2').value
    let eventPost2 = document.querySelector('#eventPost2')
    localStorage.setItem('event2', eventCal2)
  })
  clear2.addEventListener('click', function (event) {
    event.preventDefault()
    text2.setAttribute('value', '')
  })
  // -----------------
  function renderLastEntered15() {
    eventPulled3 = localStorage.getItem("event3")
    text3.setAttribute('value', eventPulled3)
  }
  eventPost3.addEventListener('click', function (event) {
    event.preventDefault()
    let eventCal3 = document.querySelector('#text3').value
    let eventPost3 = document.querySelector('#eventPost3')
    localStorage.setItem('event3', eventCal3)
  })
  clear3.addEventListener('click', function (event) {
    event.preventDefault()
    text3.setAttribute('value', '')
  })
  // -----------------
  function renderLastEntered16() {
    eventPulled4 = localStorage.getItem("event4")
    text4.setAttribute('value', eventPulled4)
  }
  eventPost4.addEventListener('click', function (event) {
    event.preventDefault()
    let eventCal4 = document.querySelector('#text4').value
    let eventPost4 = document.querySelector('#eventPost4')
    localStorage.setItem('event4', eventCal4)
  })
  clear4.addEventListener('click', function (event) {
    event.preventDefault()
    text4.setAttribute('value', '')
  })
  // -----------------

  // -----------------
  // Color Coding Hours
  let currentMomentHour = moment().hour()

  if (currentMomentHour < 9) {
    document.getElementById('hour9').classList.add('past')
    document.getElementById('hour10').classList.add('past')
    document.getElementById('hour11').classList.add('past')
    document.getElementById('hour12').classList.add('past')
    document.getElementById('hour13').classList.add('past')
    document.getElementById('hour14').classList.add('past')
    document.getElementById('hour15').classList.add('past')
    document.getElementById('hour16').classList.add('past')
  } else if (currentMomentHour == 9) {
    document.getElementById('hour9').classList.add('present')
    document.getElementById('hour10').classList.add('future')
    document.getElementById('hour11').classList.add('future')
    document.getElementById('hour12').classList.add('future')
    document.getElementById('hour13').classList.add('future')
    document.getElementById('hour14').classList.add('future')
    document.getElementById('hour15').classList.add('future')
    document.getElementById('hour16').classList.add('future')
  } else if (currentMomentHour == 10) {
    document.getElementById('hour9').classList.add('past')
    document.getElementById('hour10').classList.add('present')
    document.getElementById('hour11').classList.add('future')
    document.getElementById('hour12').classList.add('future')
    document.getElementById('hour13').classList.add('future')
    document.getElementById('hour14').classList.add('future')
    document.getElementById('hour15').classList.add('future')
    document.getElementById('hour16').classList.add('future')
  } else if (currentMomentHour == 11) {
    document.getElementById('hour9').classList.add('past')
    document.getElementById('hour10').classList.add('past')
    document.getElementById('hour11').classList.add('present')
    document.getElementById('hour12').classList.add('future')
    document.getElementById('hour13').classList.add('future')
    document.getElementById('hour14').classList.add('future')
    document.getElementById('hour15').classList.add('future')
    document.getElementById('hour16').classList.add('future')
  } else if (currentMomentHour == 12) {
    document.getElementById('hour9').classList.add('past')
    document.getElementById('hour10').classList.add('past')
    document.getElementById('hour11').classList.add('past')
    document.getElementById('hour12').classList.add('present')
    document.getElementById('hour13').classList.add('future')
    document.getElementById('hour14').classList.add('future')
    document.getElementById('hour15').classList.add('future')
    document.getElementById('hour16').classList.add('future')
  } else if (currentMomentHour == 13) {
    document.getElementById('hour9').classList.add('past')
    document.getElementById('hour10').classList.add('past')
    document.getElementById('hour11').classList.add('past')
    document.getElementById('hour12').classList.add('past')
    document.getElementById('hour13').classList.add('present')
    document.getElementById('hour14').classList.add('future')
    document.getElementById('hour15').classList.add('future')
    document.getElementById('hour16').classList.add('future')
  } else if (currentMomentHour == 14) {
    document.getElementById('hour9').classList.add('past')
    document.getElementById('hour10').classList.add('past')
    document.getElementById('hour11').classList.add('past')
    document.getElementById('hour12').classList.add('past')
    document.getElementById('hour13').classList.add('past')
    document.getElementById('hour14').classList.add('present')
    document.getElementById('hour15').classList.add('future')
    document.getElementById('hour16').classList.add('future')
  } else if (currentMomentHour == 15) {
    document.getElementById('hour9').classList.add('past')
    document.getElementById('hour10').classList.add('past')
    document.getElementById('hour11').classList.add('past')
    document.getElementById('hour12').classList.add('past')
    document.getElementById('hour13').classList.add('past')
    document.getElementById('hour14').classList.add('past')
    document.getElementById('hour15').classList.add('present')
    document.getElementById('hour16').classList.add('future')
  } else if (currentMomentHour == 14) {
    document.getElementById('hour9').classList.add('past')
    document.getElementById('hour10').classList.add('past')
    document.getElementById('hour11').classList.add('past')
    document.getElementById('hour12').classList.add('past')
    document.getElementById('hour13').classList.add('past')
    document.getElementById('hour14').classList.add('past')
    document.getElementById('hour15').classList.add('past')
    document.getElementById('hour16').classList.add('present')
  } else if (currentMomentHour > 14) {
    document.getElementById('hour9').classList.add('future')
    document.getElementById('hour10').classList.add('future')
    document.getElementById('hour11').classList.add('future')
    document.getElementById('hour12').classList.add('future')
    document.getElementById('hour13').classList.add('future')
    document.getElementById('hour14').classList.add('future')
    document.getElementById('hour15').classList.add('future')
    document.getElementById('hour16').classList.add('future')
  }
})

