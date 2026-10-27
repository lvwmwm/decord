// Module ID: 19541
// Function ID: 19542
// Name: MarkAsRead
// Dependencies: [1084, 7208, 2]

// Module 19541 (MarkAsRead)
import ReadStateActionCreators from "ReadStateActionCreators" /* 7208 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ AnalyticsObjectTypes: c2, AnalyticsObjects: c3 } = Constants);
const result = size.fileFinishedImporting("modules/headless_tasks/android/MarkAsRead.tsx");

export default (arg0) => {
  let closure_0 = arg0;
  const promise = new Promise((fn) => {
    const obj = ReadStateActionCreators;
    const obj2 = { object: constants2.MARK_CHANNEL_AS_READ_FROM_NOTIFICATION, objectType: constants.ACK_MANUAL };
    obj.ack(closure_0.channelId, obj2, true, true, closure_0.messageId);
    fn(true);
  });
  return promise;
};
