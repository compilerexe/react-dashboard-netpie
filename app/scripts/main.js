const Global = {}

console.log(Config)
microgear = Microgear.create({
  key: Config.appKey,
  secret: Config.appSecret,
})

microgear.on('connected', function () {
  console.log('netpie connected')
  microgear.setAlias(Config.alias)
  microgear.subscribe('/gearname/#')
  clearInterval(Global.timer1)
  hideNetpieConnectingIcon()
  $('#incoming-messages').html('connected')
})

microgear.on('present', function (event) {
  console.log(event)
})

microgear.on('absent', function (event) {
  console.log(event)
})

microgear.on('message', function (topic, msg) {

  const $p = $('<p class="title">' + msg + '</p>')
  var dateString = moment().format('h:mm:ss a')

  if (topic === '/React/gearname/ch1') {

    $('#incoming-messages-ch1').html($p)
    $('#topic-header-ch1').html('[' + dateString + '] Topic : ' + '<span style="color: red">' + topic + '</span>')

  } else if (topic === '/React/gearname/ch2') {

    $('#incoming-messages-ch2').html($p)
    $('#topic-header-ch2').html('[' + dateString + '] Topic : ' + '<span style="color: red">' + topic + '</span>')

  } else {

    $('#incoming-messages-ch3').html($p)
    $('#topic-header-ch3').html('[' + dateString + '] Topic : ' + '<span style="color: red">' + topic + '</span>')

  }

})

function hideNetpieConnectingIcon () {
  $('.netpie-connecting').hide()
}

function connect_netpie () {
  const startTime = new Date().getTime()
  Global.startedOn = startTime
  Global.timeoutOn = startTime + (10 * 1000)
  Global.timer1 = setInterval(function () {
    const currentTime = new Date().getTime()
    if (currentTime > Global.timeoutOn) {
      alert(Config.appId + ' is an invalid appId.')
      clearInterval(Global.timer1)
      hideNetpieConnectingIcon()
    }
    else {
      console.log('wating... ', Global.timeoutOn - currentTime)
    }
  }, 100)
  microgear.resettoken(function (err) {
    if (err) {
      console.log('reset token err', err)
    } else {
      microgear.connect(Config.appId)
    }
  })
}
