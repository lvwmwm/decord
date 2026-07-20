// Module ID: 12439
// Function ID: 95006
// Name: createWebSocket
// Dependencies: []
// Exports: default

// Module 12439 (createWebSocket)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(url) {
  let obj = { headers: obj };
  obj = { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN };
  const webSocket = new WebSocket(url, arg1, obj);
  return webSocket;
};
