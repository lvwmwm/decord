// Module ID: 13963
// Function ID: 13964
// Name: PauseGatewaySocket
// Dependencies: [2]
// Exports: getIsPaused, setIsPaused

// Module 13963 (PauseGatewaySocket)
import size from "module_2" /* 2 */;

let c0 = false;
const result = size.fileFinishedImporting("modules/gateway/PauseGatewaySocket.tsx");

export function getIsPaused() {
  return c0;
}
export function setIsPaused(arg0) {
  c0 = arg0;
}
