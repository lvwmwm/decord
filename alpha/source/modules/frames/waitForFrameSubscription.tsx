// Module ID: 7295
// Function ID: 7296
// Name: waitForFrameSubscription
// Dependencies: [7296, 2]
// Exports: default

// Module 7295 (waitForFrameSubscription)
import getSocketFrameDefault from "getSocketFrame" /* 7296 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/frames/waitForFrameSubscription.tsx");

export default function waitForFrameSubscription(waitForSubscription, arg1, arg2) {
  let closure_0 = arg1;
  return waitForSubscription.waitForSubscription(arg2, (socket) => {
    const tmp = getSocketFrameDefault(socket.socket);
    let id;
    if (tmp != null) {
      id = tmp.id;
    }
    return id === closure_0;
  }, 120000);
};
