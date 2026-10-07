// Module ID: 13477
// Function ID: 13478
// Name: PauseGatewaySocket
// Dependencies: [2]
// Exports: getIsPaused, setIsPaused

// Module 13477 (PauseGatewaySocket)
import size from "module_2" /* 2 */;

let c0 = false;
const result = size.fileFinishedImporting("modules/gateway/PauseGatewaySocket.tsx");

export function getIsPaused() {
  return c0;
}
export function setIsPaused(arg0) {
  c0 = arg0;
}
