// Module ID: 6993
// Function ID: 55902
// Name: startBackgroundTask
// Dependencies: []
// Exports: backgroundify

// Module 6993 (startBackgroundTask)
function startBackgroundTask(arg0) {
  let content;
  let title;
  let obj = arg1(dependencyMap[2]);
  if (obj.isAndroid()) {
    if (null == arg0) {
      const promise = new Promise((arg0) => arg0(closure_5));
      return promise;
    } else {
      ({ title, content } = arg0);
      obj = { title, content, priority: arg1(dependencyMap[4]).ServiceNotificationPriority.MEDIUM, type: arg1(dependencyMap[4]).ServiceNotificationType.FILE_UPLOAD, usesGateway: false };
      return importDefault(dependencyMap[3]).addServiceHandler(obj);
    }
  } else {
    const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
    return DCDBackgroundTaskManager.startBackgroundTask();
  }
}
function endBackgroundTask(closure_3) {
  if (closure_3 !== num) {
    if (obj.isAndroid()) {
      importDefault(dependencyMap[3]).removeServiceHandler(closure_3);
      const obj2 = importDefault(dependencyMap[3]);
    } else {
      const DCDBackgroundTaskManager = NativeModules.DCDBackgroundTaskManager;
      DCDBackgroundTaskManager.endBackgroundTask(closure_3);
    }
    const obj = arg1(dependencyMap[2]);
  }
}
function backgroundify(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  return callback(async () => {
    let callback = closure_5;
    callback = yield closure_6(closure_1);
    return callback().finally(() => {
      callback(closure_0);
    });
  });
}
let closure_3 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
let obj = arg1(dependencyMap[2]);
let num = -1;
if (!obj.isAndroid()) {
  num = NativeModules.DCDBackgroundTaskManager.backgroundTaskIdentifierInvalid;
}
obj = { backgroundTaskIdentifierInvalid: num, backgroundify, startBackgroundTask, endBackgroundTask };
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/messages/BackgroundTaskManager.native.tsx");

export default obj;
export const backgroundTaskIdentifierInvalid = num;
export { startBackgroundTask };
export { endBackgroundTask };
export { backgroundify };
