function isLetter(str) {
  return str.match(/[a-z]/i);
}

function validate() {
  const param = document.getElementById('input').value;
  const res = param.charAt(0);
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const num = param.toString().length;
  const result = document.getElementById('result');
  
  isLetter(res)
    ? reg.test(input.value) == false
      ? ((result.style.color = 'red'),
        (result.innerHTML = 'Invalid email <=> ' + param))
      : ((result.style.color = 'DarkGreen'),
        (result.innerHTML = 'Valid email <=> ' + param))
    : num >= 11
      ? ((result.style.color = 'DarkGreen'),
        (result.innerHTML = 'Valid Number <=> ' + param))
      : ((result.style.color = 'red'),
        (result.innerHTML = 'Invalid Number <=> ' + param));
}
