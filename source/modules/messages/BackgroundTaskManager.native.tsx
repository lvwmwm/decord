// Module ID: 6998
// Function ID: 55947
// Name: startBackgroundTask
// Dependencies: [5, 27, 477, 6999, 7000, 2]
// Exports: backgroundify

// Module 6998 (startBackgroundTask)
import closure_3 from "set";
import { NativeModules } from "get ActivityIndicator";
import set from "set";
import set from "set";

const require = arg1;
function startBackgroundTask(arg0) {
  let content;
  let title;
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    if (null == arg0) {
      const promise = new Promise((arg0) => arg0(outer1_5));
      return promise;
    } else {
      ({ title, content } = arg0);
      obj = { title, content, priority: require(7000) /* ServiceNotificationPriority */.ServiceNotificationPriority.MEDIUM, type: require(7000) /* ServiceNotificationPriority */.ServiceNotificationType.FILE_UPLOAD, usesGateway: false };
      return importDefault(6999).addServiceHandler(obj);
    }
  } else {
    const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
    return DCDBackgroundTaskManager.startBackgroundTask();
  }
}
function endBackgroundTask(closure_3) {
  if (closure_3 !== num) {
    if (obj.isAndroid()) {
      importDefault(6999).removeServiceHandler(closure_3);
      const obj2 = importDefault(6999);
    } else {
      const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
      DCDBackgroundTaskManager.endBackgroundTask(closure_3);
    }
    obj = require(477) /* set */;
  }
}
function backgroundify(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return callback(async () => {
    let closure_0 = outer2_5;
    closure_0 = yield outer2_6(outer1_1);
    return outer1_0().finally(() => {
      outer3_7(closure_0);
    });
  });
}
let num = -1;
if (!set.isAndroid()) {
  num = NativeModules.DCDBackgroundTaskManager.backgroundTaskIdentifierInvalid;
}
set = { backgroundTaskIdentifierInvalid: num, backgroundify, startBackgroundTask, endBackgroundTask };
const result = set.fileFinishedImporting("modules/messages/BackgroundTaskManager.native.tsx");

export default set;
export const backgroundTaskIdentifierInvalid = num;
export { startBackgroundTask };
export { endBackgroundTask };
export { backgroundify };
