// https://www.textmagic.com/free-tools/phone-validator

function isLetter(str) {
  return str.match(/[a-z]/i);
}

function validate() {
  const param = document.getElementById('input').value;
  const res = param.charAt(0);
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const num = param.toString().length;

  if (isLetter(res)) {
    // Check for Email
    if (reg.test(input.value) == false) {
      document.getElementById('result').style.color = 'red';
      document.getElementById('result').innerHTML = 'Invalid email =>' + param;
      return false;
    } else {
      document.getElementById('result').style.color = 'DarkGreen';
      document.getElementById('result').innerHTML = 'Valid Email =>' + param;
    }
  } else {
    // Check for Number
    if (num > 10) {
      document.getElementById('result').style.color = 'DarkGreen';
      document.getElementById('result').innerHTML = 'Valid Number =>' + param;
      return false;
    } else {
      document.getElementById('result').style.color = 'red';
      document.getElementById('result').innerHTML = 'Invalid Number =>' + param;
    }
  }
}
