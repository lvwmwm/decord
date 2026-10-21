// Module ID: 9216
// Function ID: 9217
// Name: waitForFrameSubscription
// Dependencies: [9217, 2]
// Exports: default

// Module 9216 (waitForFrameSubscription)
import getSocketFrameDefault from "getSocketFrame" /* 9217 */;
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
