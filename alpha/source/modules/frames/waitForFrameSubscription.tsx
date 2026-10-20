// Module ID: 9189
// Function ID: 9190
// Name: waitForFrameSubscription
// Dependencies: [9190, 2]
// Exports: default

// Module 9189 (waitForFrameSubscription)
import getSocketFrameDefault from "getSocketFrame" /* 9190 */;
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
