function printMessage(msg, htmlId) {
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById(htmlId).appendChild(div);
}

function clearMessages(htmlId) {
  document.getElementById(htmlId).innerHTML = '';
}
