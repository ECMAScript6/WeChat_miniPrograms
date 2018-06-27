const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function regexConfig() {
  var reg = {
    email: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
    phone: /^1(3|4|5|7|8)\d{9}$/
  }
  return reg;
}



//time
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();// 在小于10的数字钱前加一个‘0’
  m = checkTime(m);
  s = checkTime(s);
  var time = h + ":" + m + ":" + s;
  return time
  //t = setTimeout(function () { startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
//time

function regexConfig() {
  var reg = {
    phone: /^1(3|4|5|7|8)\d{9}$/
  }
  return reg;
}

module.exports = {
  formatTime: formatTime,
  regexConfig: regexConfig,
  startTime: startTime,
  regexConfig: regexConfig
}
