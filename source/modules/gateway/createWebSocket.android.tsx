// Module ID: 12910
// Function ID: 12911
// Name: createWebSocket
// Dependencies: [2]
// Exports: default

// Module 12910 (createWebSocket)
const result = require("set").fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(url) {
  obj = { headers: obj };
  obj = { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN };
  const webSocket = new WebSocket(url, arg1, obj);
  return webSocket;
};
