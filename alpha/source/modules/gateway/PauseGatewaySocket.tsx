// Module ID: 13939
// Function ID: 13940
// Name: PauseGatewaySocket
// Dependencies: [2]
// Exports: getIsPaused, setIsPaused

// Module 13939 (PauseGatewaySocket)
import size from "module_2" /* 2 */;

let global = false;
const result = size.fileFinishedImporting("modules/gateway/PauseGatewaySocket.tsx");

export function getIsPaused() {
  return global;
}
export function setIsPaused(arg0) {
  global = arg0;
}
