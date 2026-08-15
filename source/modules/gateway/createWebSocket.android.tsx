// Module ID: 13191
// Function ID: 13192
// Name: createWebSocket
// Dependencies: [2]
// Exports: default

// Module 13191 (createWebSocket)
const result = require("set").fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(url) {
  obj = { headers: obj };
  obj = { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN };
  const webSocket = new WebSocket(url, arg1, obj);
  return webSocket;
};
