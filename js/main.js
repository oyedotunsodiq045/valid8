// https://www.textmagic.com/free-tools/phone-validator

function isLetter(str) {
  return str.match(/[a-z]/i);
}

function validate() {
  const param = document.getElementById('input').value;
  const res = param.charAt(0);
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const num = param.toString().length;
  const result = document.getElementById('result');

  // Ternary
  isLetter(res)
    ? reg.test(input.value) == false
      ? ((result.style.color = 'red'),
        (result.innerHTML = 'Invalid email => ' + param))
      : ((result.style.color = 'DarkGreen'),
        (result.innerHTML = 'Valid email => ' + param))
    : num > 10
    ? ((result.style.color = 'DarkGreen'),
      (result.innerHTML = 'Valid Number => ' + param))
    : ((result.style.color = 'red'),
      (result.innerHTML = 'Invalid Number => ' + param));

  // If...Else
  // if (isLetter(res)) {
  //   // Check for Email
  //   if (reg.test(input.value) == false) {
  //     result.style.color = 'red';
  //     result.innerHTML = 'Invalid email => ' + param;
  //   } else {
  //     result.style.color = 'DarkGreen';
  //     result.innerHTML = 'Valid Email => ' + param;
  //   }
  // } else {
  //   // Check for Number
  //   if (num > 10) {
  //     result.style.color = 'DarkGreen';
  //     result.innerHTML = 'Valid Number => ' + param;
  //   } else {
  //     result.style.color = 'red';
  //     result.innerHTML = 'Invalid Number => ' + param;
  //   }
  // }
}
