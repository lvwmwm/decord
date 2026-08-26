// Module ID: 13181
// Function ID: 13182
// Name: createWebSocket
// Dependencies: [2]
// Exports: default

// Module 13181 (createWebSocket)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(url) {
  obj = { headers: obj };
  obj = { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN };
  const webSocket = new WebSocket(url, arg1, obj);
  return webSocket;
};
