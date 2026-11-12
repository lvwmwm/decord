// Module ID: 16001
// Function ID: 16002
// Name: createWebSocket
// Dependencies: [2]
// Exports: default

// Module 16001 (createWebSocket)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gateway/createWebSocket.android.tsx");

export default function createWebSocket(url, arg1) {
  let obj2;
  const obj = { headers: obj2 };
  obj2 = { Origin: window.GLOBAL_ENV.NATIVE_WEBSOCKET_ORIGIN };
  const webSocket = new WebSocket(url, arg1, obj);
  return webSocket;
};
