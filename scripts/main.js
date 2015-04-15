var sock = null;
var wsURI = "ws://127.0.0.1:1234";

window.onload = function() {

  console.log("onload completed");

  sock = new WebSocket(wsURI);

  sock.onopen = function() {
      console.log("Connected to " + wsURI);
  }

  sock.onclose = function(e) {
      console.log("Connection closed (" + e.code + ")");
  }

  sock.onmessage = function(e) {
      console.log("WS message received: " + e.data);
  }
};

function send() {
    var msg = document.getElementById('message').value;
    sock.send(msg);
};
