self.onmessage = function(event) {
  handleMessage(event);
}

function handleMessage(event) {
  console.log('[Worker]', 'Worker Thread receives command: ', event.data.cmd, event.data.msg);
  if(event.data.cmd == 'start') {
    for(var i = 0; i <= 10000000000; i++) {
      if(i % 1000000000 == 0) postMessage({cmd : 'resp', msg: i});
    }
  }
  else if(event.data.cmd == 'stop') {
    postMessage({cmd : 'stop', msg: 'Good Bye!'});
    self.close();
  }
}
