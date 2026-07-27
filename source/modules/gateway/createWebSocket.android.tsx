// Module ID: 12630
// Function ID: 97688
// Name: createWebSocket
// Dependencies: [2]
// Exports: default

// Module 12630 (createWebSocket)
const result = require("set").fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(url) {
  obj = { headers: obj };
  obj = { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN };
  const webSocket = new WebSocket(url, arg1, obj);
  return webSocket;
};
