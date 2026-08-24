// Module ID: 13278
// Function ID: 13279
// Name: getIsPaused
// Dependencies: [2]
// Exports: getIsPaused, setIsPaused

// Module 13278 (getIsPaused)
import set from "set" /* 2 */;

let c0 = false;
const result = set.fileFinishedImporting("modules/gateway/PauseGatewaySocket.tsx");

export function getIsPaused() {
  return c0;
}
export function setIsPaused(arg0) {
  closure_0 = arg0;
}
