// Module ID: 16624
// Function ID: 129655
// Name: promise
// Dependencies: [653, 5069, 2]

// Module 16624 (promise)
import ME from "ME";

let closure_2;
let closure_3;
({ AnalyticsObjectTypes: closure_2, AnalyticsObjects: closure_3 } = ME);
const result = require("set").fileFinishedImporting("modules/headless_tasks/android/MarkAsRead.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  return new Promise((arg0) => {
    let obj = lib(outer1_1[1]);
    obj = { object: outer1_3.MARK_CHANNEL_AS_READ_FROM_NOTIFICATION, objectType: outer1_2.ACK_MANUAL };
    obj.ack(lib.channelId, obj, true, true, lib.messageId);
    arg0(true);
  });
};
