// Module ID: 16884
// Function ID: 16885
// Name: screenCaptureEvents
// Dependencies: [6698, 1072, 16796, 2]

// Module 16884 (screenCaptureEvents)
import Constants2 from "Constants" /* 1072 */;
import validateConjureAppFrameDefault from "validateConjureAppFrame" /* 16796 */;
import Constants from "Constants" /* 6698 */;
import size from "module_2" /* 2 */;

let RPC_AUTHENTICATED_SCOPE;
let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let items;
({ RPC_AUTHENTICATED_SCOPE, RPC_EMBEDDED_APP_SCOPE, RPC_SCOPE_CONFIG } = Constants);
const obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items },
  handler(socket) {
    const tmp = validateConjureAppFrameDefault(socket.socket);
    return (prevState) => {
      if (null == prevState.prevState) {
        tmp({ state: "unsupported" });
      }
      return "unsupported";
    };
  }
};
items = [RPC_EMBEDDED_APP_SCOPE, RPC_AUTHENTICATED_SCOPE];
const result = size.fileFinishedImporting("modules/rpc/native/events/screenCaptureEvents.tsx");

export const screenCaptureEvents = { [Constants2.RPCEvents.SCREEN_CAPTURE_STATE_UPDATE]: obj };
