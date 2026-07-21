// Module ID: 12448
// Function ID: 95051
// Name: createWebSocket
// Dependencies: []
// Exports: default

// Module 12448 (createWebSocket)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(url) {
  let obj = { headers: obj };
  obj = { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN };
  const webSocket = new WebSocket(url, arg1, obj);
  return webSocket;
};
