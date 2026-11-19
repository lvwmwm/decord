// Module ID: 6782
// Function ID: 6783
// Name: waitForFrameSubscription
// Dependencies: [6783, 2]
// Exports: default

// Module 6782 (waitForFrameSubscription)
import getSocketFrameDefault from "getSocketFrame" /* 6783 */;
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
